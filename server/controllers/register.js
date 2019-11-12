const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegistration(input) {
		let errors = {};

		// Verify that none of the fields are empty
		data.name = !isEmpty(data.name) ? input.name : "";
		data.email = !isEmpty(data.email) ? input.email : "";
		data.password = !isEmpty(data.password) ? input.password : "";
		data.password2 = !isEmpty(data.password2) ? input.password2 : "";

		if (Validator.isEmpty(input.name)) {
				errors.name = "Name field is required";
		}

		if (Validator.isEmpty(input.password)) {
				errors.password = "Password field is required";
		} 

		if (Validator.isEmtpy(input.confirm_pass)) {
				errors.confirm_pass = "Password must be confirmed";
		} else if (!Validator.equals(input.password, input.confirm_pass)) {
				errors.confirm_pass = "Passwords are not identical";
		}
		
		if (Validator.isEmtpy(input.email)) {
				errors.email = "Email field is required";
		} else if (!Validator.isEmail(input.email)) {
				errors.email = "Not a valid email";
		}
}
