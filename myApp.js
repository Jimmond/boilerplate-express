let express = require('express');
let app = express();
require('dotenv').config();

let jsonResponse = {"message":"Hello World"};

app.get('/', function(req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

const mySecret = process.env['MESSAGE_STYLE']

app.use("/public", express.static(__dirname + "/public"));


app.get("/json", (req, res) => {
  
  if (mySecret === "uppercase") {
  jsonResponse.message = jsonResponse.message.toUpperCase()
} res.json(jsonResponse);
});





























 module.exports = app;
