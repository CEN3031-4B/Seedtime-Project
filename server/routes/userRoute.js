const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
const validateRegisterInput = require("../controllers/register");
const validateLoginInput = require("../controllers/login");
const User = require("../models/User");

router.post("/register", (req, res) => {
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
				}
		});
});

router.post("/login", (req, res) => {
		if (!isValid) {
				return res.status(400).json(errors);
		}
		
		const email = req.body.email;
		const password = req.body.password;// Find user by email
		User.findOne({ email }).then(user => {
				if (!user) {
						return res.status(404).json({ emailnotfound: "Email not found" });
				}
				
				bcrypt.compare(password, user.password).then(isMatch => {
						if (isMatch) {
								const payload = {
										id: user.id,
										name: user.name
								};
								
								jwt.sign(
										payload,
										keys.secretOrKey,
										
										{
												expiresIn: 2147483648
										},
										(err, token) => {
												res.json({
														success: true,
														token: "Bearer " + token
												});
										}
								);
						} else {
								return res
										.status(400)
										.json({ passwordincorrect: "Password incorrect" });
						}
				});
		});
});

module.exports = router;
