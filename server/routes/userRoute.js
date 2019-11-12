const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");// Load input validation
const validateRegisterInput = require("../controllers/register");
const validateLoginInput = require("../controllers/login");// Load User model
const User = require("../models/User");
