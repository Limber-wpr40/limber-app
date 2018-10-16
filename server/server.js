require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const massive = require("massive");
const session = require("express-session");
const sharedSession = require('express-socket.io-session');


var socket = require("socket.io");

const uo = require("./user_controller");
const mo = require("./message_controller");


const app = express();
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET, DEVING } = process.env;
app.use(express.static(__dirname + '/../build'));
  
var sess = session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }
  })

  app.use(sess);


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
app.get("/api/possiblematches", uo.getPossibleMatches)
app.get("/api/messages", mo.getMessages);
app.get("/api/feed", mo.getFeed);



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
io.use(sharedSession(sess));

//Connection for a client
io.on("connection", socket => {
  const db = app.get("db");
  // console.log('socket..', socket.handshake.session);
  db.update_socket_id(socket.id, socket.handshake.session.user.user_id)
    .then(() => console.log("added socket id"))
    .catch(console.error);
  console.log(socket.id);

  socket.on("SEND_MESSAGE", function(data) {
    console.log('SendMessage', data);
    io.to(data.roomName).emit("ROOM_MESSAGE", data);
  });

  socket.on('JOINROOM', function(data) {
    socket.join(data);
    console.log(data);
    // io.to('roomName').emit('some event');
  })
  
});

//default room
io.on("connection", function(socket) {
  socket.on("say to someone", function(id, msg) {
    socket.broadcast.to(id).emit("my message", msg);
  });
});
