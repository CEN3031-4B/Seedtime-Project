const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validate_login(input) {
		var errors = {};

		input.username = !isEmpty(input.username) ? input.username : "";
		input.password = !isEmpty(input.password) ? input.password : "";
		
		if (Validator.isEmpty(input.password)) {
				errors.password = "Password is required";
		}
		return {
				errors,
				is_valid: isEmpty(errors)
		};
};
