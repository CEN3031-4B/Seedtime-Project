const VeggieController = require('../controllers/veggie-controller'),
    express = require('express'), 
    router = express.Router()

router.post('/veggie', VeggieController.createVeggie)
router.delete('/veggie/:id', VeggieController.deleteVeggie)
router.get('/veggies', VeggieController.getVeggies)
router.get('/veggieSearch/:search', VeggieController.searchVeggies)

module.exports = router;