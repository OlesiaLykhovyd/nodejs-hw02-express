const sgMail = require("@sendgrid/mail");

require("dotenv").config();

const { SENDGRID_API_KEY } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const sendMail = async (data) => {
  const mail = { ...data, from: "realestateolesia@gmail.com" };
  await sgMail.send(mail);
  return true;
};

module.exports = sendMail;

// const mail = {
//   to: "someone@gmail.com",
//   from: "realestateolesia@gmail.com",
//   subject: "New letter",
//   html: "<p>NEw letter for you</p>",
// };

// sgMail
//   .send(mail)
//   .then(() => console.log("Email was send"))
//   .catch((error) => console.log(error.message));
