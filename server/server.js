require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const massive = require("massive");
const session = require("express-session");
const axios = require("axios");

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
req.session.user = {user_id: 32, user_name: 'Chucky', gender: 'Male', min_age:32, max_age:45, max_distance:35};
}
next()
}

massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
});
app.use(bodyParser.json());

app.use(express.static(`${__dirname}/../build`));
app.get("/api/settings", uo.getUserSettings );
app.get("/api/user/:phone", uo.getUserData);
app.get("/api/profile/:id", uo.getUserProfile);
app.get("/api/matches/:id", uo.getMatches);
app.get("/api/newmatches/:id", uo.getNewMatches)
app.get("/api/possiblematches",devitron, uo.getPossibleMatches);
app.get("/api/messages", mo.getMessages);

app.put("/api/minage", uo.updateMinAge);
app.put("/api/maxage", uo.updateMaxAge);
app.put("/api/maxdist", uo.updateDistance);
app.put("api/profile", uo.updateProfile);

app.post("/api/likes", uo.addLike);
app.post("/api/message", mo.addMessage);

app.delete("/api/user/:id", uo.deleteUser);

app.listen(SERVER_PORT, () => {
  console.log(`Server evesdropping on port ${SERVER_PORT}.`);
});
