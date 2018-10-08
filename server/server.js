require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const massive = require("massive");
const session = require("express-session");
const axios = require("axios");

var socket = require('socket.io');

const uo = require("./user_controller");
const mo = require("./message_controller");

const app = express();
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET, DEVING } = process.env;
app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false },
    
  })
);



function devitron(req, res, next) {
  if (DEVING) {
   req.session.user ={user_id: 22, user_name:'Fred',user_gender:'Male'};
}
next()
}

massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
});
app.use(bodyParser.json());

app.use(express.static(`${__dirname}/../build`));

app.get("/api/user/:id", uo.getUserData);
app.get("/api/profile/:id", uo.getUserProfile);
app.get("/api/matches/:id", uo.getMatches);
app.get("/api/possiblematches",devitron, uo.getPossibleMatches);
app.get("/api/messages", mo.getMessages);

app.put("/api/minage", uo.updateMinAge);
app.put("/api/maxage", uo.updateMaxAge);
app.put("/api/maxdist", uo.updateDistance);
app.put("api/profile", uo.updateProfile);

app.post("/api/likes", uo.addLike);
app.post("/api/message", mo.addMessage);

app.delete("/api/user/:id", uo.deleteUser);

//added "server=app.listen"
server = app.listen(SERVER_PORT, () => {
  console.log(`Server evesdropping on port ${SERVER_PORT}.`);
});

//SOCKET
io = socket(server);

io.on('connection', (socket) => {
    console.log(socket.id);

    socket.on('SEND_MESSAGE', function(data){
        io.emit('RECEIVE_MESSAGE', data);
    })
});
//Joinning and leaving
io.on('connection', function(socket){
    socket.join('some room');
});
io.to('some room').emit('some event');



