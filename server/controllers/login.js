const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateLoginInput(input) {
		let errors = {};// Convert empty fields to an empty string so we can use validator functions
		input.email = !isEmpty(input.email) ? input.email : "";
		input.password = !isEmpty(input.password) ? input.password : "";// Email checks
		
		if (Validator.isEmpty(input.password)) {
				errors.password = "Password is required";
		}
		return {
				errors,
				isValid: isEmpty(errors)
		};
};
