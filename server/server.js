require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const massive = require("massive");
const session = require("express-session");
const axios = require("axios");

var socket = require("socket.io");

const uo = require("./user_controller");
const mo = require("./message_controller");

const app = express();
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET, DEVING } = process.env;
app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }
  })
);

function devitron(req, res, next) {
  if (DEVING) {
    req.session.user = {
      user_id: 22,
      user_name: "Lillian",
      gender: "Female",
      min_age: 26,
      max_age: 36,
      max_distance: 50
    };
  }
  next();
}

massive(CONNECTION_STRING).then(db => {
  console.log("db connected");
  app.set("db", db);
});
app.use(bodyParser.json());

app.use(express.static(`${__dirname}/../build`));
app.get("/api/settings", uo.getUserSettings);
app.get("/api/user/:phone", uo.getUserData);
app.get("/api/profile/:id", uo.getUserProfile);
app.get("/api/matches/:id", uo.getMatches);
app.get("/api/newmatches/:id", uo.getNewMatches);
app.get("/api/possiblematches", devitron, uo.getPossibleMatches);
app.get("/api/possiblematches", uo.getPossibleMatches);
app.get("/api/messages", mo.getMessages);

app.put("/api/settings", uo.updateSettings);
app.put("api/profile", uo.updateProfile);

app.post("/api/likes", uo.addLike);
app.post("/api/message", mo.addMessage);

app.delete("/api/user/:id", uo.deleteUser);

//added "server=app.listen"
server = app.listen(SERVER_PORT, () => {
  console.log(`Server evesdropping on port ${SERVER_PORT}.`);
});

//SOCKET SETUP
var io = socket(server);

//Connection for a client
io.on("connection", socket => {
  const db = app.get("db");
  db.update_socket_id(socket.id, 61)
    .then(() => console.log("added socket id"))
    .catch(console.error);
  console.log(socket.id);

  // db.get_socket_id(socket.id, 61)
  //   .then(() => console.log("got socket id"))
  //   .catch(console.error);
  //   console.log(socket.id);

  socket.on("SEND_MESSAGE", function(data) {
    io.emit("RECEIVE_MESSAGE", data);
  });
});

//default room
io.on("connection", function(socket) {
  socket.on("say to someone", function(id, msg) {
    socket.broadcast.to(id).emit("my message", msg);
  });
});

