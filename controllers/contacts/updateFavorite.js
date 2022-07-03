const { Contact } = require("../../models/contact");

const { createError } = require("../../helpers");

const updateFavorite = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await Contact.findByIdAndUpdate(contactId, req.body, {
      new: true,
    });

    if (!result) {
      throw createError(404);
    }

    if (!req.body) {
      throw createError(400, "missing field favorite");
    }

    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = updateFavorite;
