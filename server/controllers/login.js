const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateLoginInput(input) {
		var errors = {};

		input.name = !isEmpty(input.name) ? input.name : "";
		input.password = !isEmpty(input.password) ? input.password : "";
		
		if (Validator.isEmpty(input.password)) {
				errors.password = "Password is required";
		}
		return {
				errors,
				isValid: isEmpty(errors)
		};
};
