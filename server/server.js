const express = require('express')
const bodyParser = require("body-parser");
const mongoose = require("mongoose")
const passport = require("./models/passport");

const usersRoute = require("./routes/userRoute");

// Use env port or default
const port = process.env.PORT || 5000;

const app = express.init()

app.use(
  bodyParser.urlencoded({
		  extended: false
  })
);

app.use(bodyParser.json());

app.use(passport.initialize());

require("./config/passport")(passport);

app.use("/api/users", usersRoute);

app.listen(port, () => console.log(`Server now running on port ${port}!`));
