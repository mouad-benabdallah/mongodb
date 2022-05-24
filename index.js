const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/userRoute");
const messageRouter = require("./routes/messageRoute");

const app = express();

// connecter l'application a la base de donnees mongoDb
mongoose.connect("mongodb://localhost:27017/MonAppli");
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Connexion etablie"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", userRouter);

app.use("/messages", messageRouter);

// lancer le serveur sur le port 3000
app.listen(3000, () => console.log("Le server ecoute sur le port : 3000"));
