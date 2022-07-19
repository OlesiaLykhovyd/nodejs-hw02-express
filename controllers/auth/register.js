const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");
const idGenerate = require("bson-objectid");

const { User } = require("../../models/user");
const { createError, sendMail } = require("../../helpers");

const register = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      throw createError(409, "Email in use");
    }
    const avatarURL = gravatar.url(email);
    const hashPassword = await bcrypt.hash(password, 10);
    const verificationToken = idGenerate();

    const result = await User.create({
      ...req.body,
      password: hashPassword,
      avatarURL,
      verificationToken,
    });

    res.status(201).json({
      user: {
        email: result.email,
        subscription: result.subscription,
      },
    });

    const mail = {
      to: email,
      subject: "Registration confirmation",
      html: `<a target="_blank" href="http://localhost:3000/api/auth/verify/${verificationToken}">Click to confirm your email</a>`,
    };

    await sendMail(mail);
  } catch (error) {
    next(error);
  }
};

module.exports = register;
