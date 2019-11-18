const Validator = require("validator");
const isEmpty = require("is-empty");

<<<<<<< HEAD
module.exports = function validate_register(input) {
		var errors = {};

		// Verify that none of the fields are empty
		input.username = !isEmpty(input.username) ? input.username : "";
		//input.email = !isEmpty(input.email) ? input.email : "";
		input.password = !isEmpty(input.password) ? input.password : "";
		input.confirm_pass = !isEmpty(input.confirm_pass) ? input.confirm_pass : "";

		if (Validator.isEmpty(input.username)) {
				errors.name = "Username field is required";
=======
module.exports = function validateRegistration(input) {
		let errors = {};

		// Verify that none of the fields are empty
		input.name = !isEmpty(input.name) ? input.name : "";
		input.email = !isEmpty(input.email) ? input.email : "";
		input.password = !isEmpty(input.password) ? input.password : "";
		input.confirm_pass = !isEmpty(input.confirm_pass) ? input.confirm_pass : "";

		if (Validator.isEmpty(input.name)) {
				errors.name = "Name field is required";
>>>>>>> linking_branch
		}

		if (Validator.isEmpty(input.password)) {
				errors.password = "Password field is required";
		} 

		if (Validator.isEmpty(input.confirm_pass)) {
				errors.confirm_pass = "Password must be confirmed";
		} else if (!Validator.equals(input.password, input.confirm_pass)) {
				errors.confirm_pass = "Passwords are not identical";
		}
		
<<<<<<< HEAD
		/** if (Validator.isEmpty(input.email)) {
				errors.email = "Email field is required";
		} else if (!Validator.isEmail(input.email)) {
				errors.email = "Not a valid email";
		} **/

		return { errors, is_valid: isEmpty(errors) };
=======
		if (Validator.isEmpty(input.email)) {
				errors.email = "Email field is required";
		} else if (!Validator.isEmail(input.email)) {
				errors.email = "Not a valid email";
		}

		return { errors, isValid: isEmpty(errors) };
>>>>>>> linking_branch
}
