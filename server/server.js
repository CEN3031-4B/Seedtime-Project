const express = require('express')
const bodyParser = require("body-parser");
const mongoose = require("mongoose")
const passport = require("passport");
const db = require("./config/config.js")
const usersRoute = require("./routes/userRoute.js");

// Use env port or default
const port = process.env.PORT || 5000;

const app = express()

app.use(
  bodyParser.urlencoded({
		  extended: false
  })
);

app.use(bodyParser.json());

mongoose.connect(process.env.DB_URI || require('./config/config').db.uri, {
		useNewUrlParser: true
});
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

app.use(passport.initialize());
require("./config/passport")(passport);

app.use("/api/auth", usersRoute);

app.listen(port, () => console.log(`Server now running on port ${port}!`));
