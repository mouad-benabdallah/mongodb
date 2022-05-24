const express = require("express");
const router = express.Router();
const User = require("../models/userModel");

// on determine les differentes route:
// route pour lister les utilisateurs
router.get("/", async (request, response) => {
  try {
    const user = await User.find();
    response.json(user);
  } catch (error) {
    console.log(error);
  }
});

// route pour creer un utilisateur
router.post("/newUser", async (request, response) => {
  console.log(request.body);
  const user = new User({
    nom: request.body.nom,
    prenom: request.body.prenom,
    email: request.body.email,
  });
  try {
    const newUser = await user.save();
    response.status("200").json(newUser);
  } catch (error) {
    console.log(error);
  }
});

router.get("/:id", async (request, response) => {
  try {
    const user = await User.findById(request.params.id).exec();
    response.json(user);
  } catch (error) {
    console.log(error);
  }
});

router.patch("/:id", async (request, response) => {
  try {
    const user = await User.findById(request.params.id);
    user.nom = request.body.nom;
    user.prenom = request.body.prenom;
    user.email = request.body.email;
    try {
      const updatenewUser = await user.save();
      response.status("200").json(updatenewUser);
    } catch (error) {
      console.log(error);
    }
  } catch (error) {
    console.log(error);
  }
});

router.delete("/:id", async (request, response) => {
  try {
    const user = await User.findById(request.params.id);
    console.log(user);
    user.remove();
    response.json({ message: "Utilisateur supprime" });
  } catch (error) {
    console.log(error);
  }
});
// router.delete("/:id", async (request, response) => {
//   try {
//     const user = await User.findById(request.params.id);
//     console.log(user);
//     user.remove();
//     response.json({ message: "Utilisateur supprime" });
//   } catch (error) {
//     console.log(error);
//   }
// });
module.exports = router;
