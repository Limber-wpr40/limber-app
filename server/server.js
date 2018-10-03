require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const massive = require("massive");
const session = require("express-session");
const axios = require("axios");

const uo = require("./user_controller");

const app = express();

const { SERVER_PORT, CONNECTION_STRING } = process.env;

massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
});
app.use(bodyParser.json());

app.use(express.static(`${__dirname}/../build`));

app.get("/api/user", uo.getUserData);
app.get("/api/profile", uo.getUserProfile);
app.get("/api/matches", uo.getMatches);
app.get("/api/possiblematch", uo.getPossibleMatches);

app.post("/api/likes", uo.addLike);

app.put("/api/user/:id", uo.updateSettings);
app.put("/api/profile/:id", uo.updateProfile);

app.delete("/api/user/:id", uo.deleteUser);

app.listen(SERVER_PORT, () => {
  console.log(`Server evesdropping on port ${SERVER_PORT}.`);
});
