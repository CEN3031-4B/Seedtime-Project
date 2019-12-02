const path = require('path'),
    express = require('express'),
    mongoose = require('mongoose'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    VeggieRouter = require('../routes/veggie-router'),
    CartRouter = require('../routes/cart-router'),
	passport = require("passport"),
	cors = require("cors"),
	usersRoute = require("../routes/user_route");

module.exports.init = () => {
    /* 
        connect to database
        - reference README for db uri
    */
    mongoose.connect(process.env.DB_URI || require('./keys').db.uri, {
        useNewUrlParser: true
    });
    mongoose.set('useCreateIndex', true);
    mongoose.set('useFindAndModify', false);

    // initialize app
    const app = express();

    // enable request logging for development debugging
    app.use(morgan('dev'));

    // body parsing middleware
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(cors())
    app.use(bodyParser.json())

    //add a router
	app.use("/api/auth", usersRoute);

    app.use('/api', VeggieRouter);
    app.use('/api', CartRouter);

	/**
	app.use(passport.initialize());
	require("./passport")(passport);
	**/

	/**
	app.use('/api/register', registerRouter);

	app.post('/login', 
			passport.authenticate('local', { successRedirect: '/', failureRedirect: '/login' , failureFlase: true }));
	**/

    if (process.env.NODE_ENV === 'production') {
        // Serve any static files
        app.use(express.static(path.join(__dirname, '../../client/build')));

        // Handle React routing, return all requests to React app
        app.get('*', function(req, res) {
            res.sendFile(path.join(__dirname, '../../client/build', 'index.html'));
        });
    }

    return app
}

