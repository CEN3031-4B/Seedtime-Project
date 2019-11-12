const RegisterController = require('../controllers/register-controller.js'),
    express = require('express'), 
    router = express.Router()

router.post('/api/register', RegisterController.register)

module.exports = router;
