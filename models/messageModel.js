const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  messageBody: {
    type: String,
    require: true,
    max: 250,
  },
  dateEnvoi: {
    type: Date,
    require: true,
  },
  expediteur: {
    type: String,
    require: true,
  },
});
module.exports = mongoose.model("Messages", messageSchema);
