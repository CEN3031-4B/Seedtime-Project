const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
<<<<<<< HEAD
const validate_register = require("../controllers/register");
const validate_login = require("../controllers/login");
const User = require("../models/User");

router.post("/register", (req, res) => {
		const { errors, is_valid } = validate_register(req.body);
		if (!is_valid) {
				return res.status(400).json(errors);
		}
		
		User.findOne({ username: req.body.username }).then(user => {
				if (user) {
						return res.status(400).json({ username: "Name already taken" });
				} else {
						const thisUser = new User({
								username: req.body.username,
								//email: req.body.email,
=======
const validateRegisterInput = require("../controllers/register");
const validateLoginInput = require("../controllers/login");
const User = require("../models/User");

router.post("/register", (req, res) => {
		const { errors, isValid } = validateRegisterInput(req.body);
		console.log(errors);
		if (!isValid) {
				return res.status(400).json(errors);
		}
		
		User.findOne({ email: req.body.email }).then(user => {
				if (user) {
						return res.status(400).json({ email: "Email already exists" });
				} else {
						const thisUser = new User({
								name: req.body.name,
								email: req.body.email,
>>>>>>> linking_branch
								password: req.body.password
						});
						
						bcrypt.genSalt(10, (err, salt) => {
								bcrypt.hash(thisUser.password, salt, (err, hash) => {
										if (err) throw err;
										thisUser.password = hash;
										thisUser
												.save()
												.then(user => res.json(user))         
												.catch(err => console.log(err));
								});
						});
<<<<<<< HEAD
						return res.status(200);
=======
>>>>>>> linking_branch
				}
		});
});

router.post("/login", (req, res) => {
<<<<<<< HEAD
		const { errors, is_valid } = validate_login(req.body);
		if (!is_valid) {
				return res.status(400).json(errors);
		}
		
		const username = req.body.username;
		const password = req.body.password;// Find user by email
		User.findOne({ username }).then(user => {
				if (!user) {
						return res.status(404).json({ email: "Email not found" });
=======
		const { errors, isValid } = validateLoginInput(req.body);
		if (!isValid) {
				return res.status(400).json(errors);
		}
		
		const name = req.body.email;
		const password = req.body.password;// Find user by email
		User.findOne({ name }).then(user => {
				if (!user) {
						return res.status(404).json({ emailnotfound: "Email not found" });
>>>>>>> linking_branch
				}
				
				bcrypt.compare(password, user.password).then(isMatch => {
						if (isMatch) {
								const payload = {
										id: user.id,
<<<<<<< HEAD
										username: user.username
=======
										name: user.name
>>>>>>> linking_branch
								};
								
								jwt.sign(
										payload,
<<<<<<< HEAD
										keys.secret,
=======
										keys.secretOrKey,
>>>>>>> linking_branch
										
										{
												expiresIn: 2147483648
										},
										(err, token) => {
												res
													.status(200)
													.json({
														success: true,
														token: "Bearer " + token
												});
<<<<<<< HEAD
												return res
=======
												res.end();
>>>>>>> linking_branch
										}
								);
						} else {
								return res
										.status(400)
<<<<<<< HEAD
										.json({ password: "Password incorrect" });
=======
										.json({ passwordincorrect: "Password incorrect" });
>>>>>>> linking_branch
						}
				});
		});
});

module.exports = router;
