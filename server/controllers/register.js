const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegistration(input) {
		let errors = {};

		// Verify that none of the fields are empty
		data.name = !isEmpty(data.name) ? data.name : "";
		data.email = !isEmpty(data.email) ? data.email : "";
		data.password = !isEmpty(data.password) ? data.password : "";
		data.password2 = !isEmpty(data.password2) ? data.password2 : "";

		if (Validator.isEmpty(data.name)) {
				errors.name = "Name field is required";
		}

		if (Validator.isEmpty(data.password)) {
				errors.password = "Password field is required";
		} 

		if (Validator.isEmtpy(data.confirm_pass)) {
				errors.confirm_pass = "Password must be confirmed";
		} else if (!Validator.equals(data.password, data.confirm_pass)) {
				errors.confirm_pass = "Passwords are not identical";
		}
		
		if (Validator.isEmtpy(data.email)) {
				errors.email = "Email field is required";
		} else if (!Validator.isEmail(data.email)) {
				errors.email = "Not a valid email";
		}
}

modules.export 
