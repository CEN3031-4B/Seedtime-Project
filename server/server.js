const express = require('./config/express.js')
const bodyParser = require("body-parser");
const mongoose = require("mongoose")
const passport = require("passport");

const users = require("./routes/api/users");

// Use env port or default
const port = process.env.PORT || 5000;

const app = express.init()

app.use(
  bodyParser.urlencoded({
		  extended: false
  })
);
app.use(bodyParser.json());

app.listen(port, () => console.log(`Server now running on port ${port}!`));
