const express = require("express");
const router = express.Router();
const Message = require("../models/messageModel");

router.get("/", async (request, response) => {
  try {
    const message = await Message.find();
    response.json(message);
  } catch (error) {
    console.log(error);
  }
});

// route pour creer un utilisateur
router.post("/newMessage", async (request, response) => {
  console.log(request.body);
  const message = new Message({
    messageBody: request.body.messageBody,
    dateEnvoi: request.body.dateEnvoi,
    expediteur: request.body.expediteur,
  });
  try {
    const newMessage = await message.save();
    response.status("200").json(newMessage);
  } catch (error) {
    console.log(error);
  }
});

router.get("/:id", async (request, response) => {
  try {
    const message = await Message.findById(request.params.id).exec();
    response.json(message);
  } catch (error) {
    console.log(error);
  }
});

router.patch("/:id", async (request, response) => {
  try {
    const message = await Message.findById(request.params.id);
    user.messageBody = request.body.messageBody;
    user.dateEnvoi = request.body.dateEnvoi;
    user.expediteur = request.body.expediteur;
    try {
      const updatenewMessage = await message.save();
      response.status("200").json(updatenewMessage);
    } catch (error) {
      console.log(error);
    }
  } catch (error) {
    console.log(error);
  }
});

router.delete("/:id", async (request, response) => {
  try {
    const message = await Message.findById(request.params.id);
    console.log(message);
    user.remove();
    response.json({ message: "Message supprime" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
