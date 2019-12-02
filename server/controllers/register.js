const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validate_register(input) {
		var errors = {};

		input.fullname = !isEmpty(input.fullname) ? input.fullname : "";

		input.username = !isEmpty(input.username) ? input.username : "";
		//input.email = !isEmpty(input.email) ? input.email : "";
		input.password = !isEmpty(input.password) ? input.password : "";
		input.confirm_pass = !isEmpty(input.confirm_pass) ? input.confirm_pass : "";

		input.address = !isEmpty(input.address) ? input.address : "";
		input.address2 = !isEmpty(input.address2) ? input.address2 : "";
		input.city = !isEmpty(input.city) ? input.city : "";
		input.states = !isEmpty(input.states) ? input.states : "";
		input.zip = !isEmpty(input.zip) ? input.zip : "";
		input.day = !isEmpty(input.day) ? input.day : "";



		if (Validator.isEmpty(input.fullname)) {
			errors.fullname = "Full Name field is required";
		} 

		if (Validator.isEmpty(input.username)) {
				errors.name = "Username field is required";
		}

		if (Validator.isEmpty(input.password)) {
				errors.password = "Password field is required";
		} 

		if (Validator.isEmpty(input.confirm_pass)) {
				errors.confirm_pass = "Password must be confirmed";
		} else if (!Validator.equals(input.password, input.confirm_pass)) {
				errors.confirm_pass = "Passwords are not identical";
		}

		if (Validator.isEmpty(input.address)) {
			errors.address = "Address field is required";
		} 
		
		if (Validator.isEmpty(input.city)) {
			errors.city = "City field is required";
		} 

		if (Validator.isEmpty(input.states)) {
			errors.states = "State field is required";
		} 

		if (Validator.isEmpty(input.zip)) {
			errors.zip = "Zip field is required";
		} 

		
		/** if (Validator.isEmpty(input.email)) {
				errors.email = "Email field is required";
		} else if (!Validator.isEmail(input.email)) {
				errors.email = "Not a valid email";
		} **/

		return { errors, is_valid: isEmpty(errors) };
}
