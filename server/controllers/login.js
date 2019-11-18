const Validator = require("validator");
const isEmpty = require("is-empty");

<<<<<<< HEAD
module.exports = function validate_login(input) {
		var errors = {};

		input.username = !isEmpty(input.username) ? input.username : "";
		input.password = !isEmpty(input.password) ? input.password : "";
=======
module.exports = function validateLoginInput(input) {
		let errors = {};// Convert empty fields to an empty string so we can use validator functions
		input.email = !isEmpty(input.email) ? input.email : "";
		input.password = !isEmpty(input.password) ? input.password : "";// Email checks
>>>>>>> linking_branch
		
		if (Validator.isEmpty(input.password)) {
				errors.password = "Password is required";
		}
		return {
				errors,
<<<<<<< HEAD
				is_valid: isEmpty(errors)
=======
				isValid: isEmpty(errors)
>>>>>>> linking_branch
		};
};
