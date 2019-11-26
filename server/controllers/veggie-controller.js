const Veggie = require('../models/veggie-model')

createVeggie = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a veggie',
        })
    }

    const veggie = new Veggie(body)

    if (!veggie) {
        return res.status(400).json({ success: false, error: err })
    }

    veggie
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: veggie._id,
                message: 'Veggie created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Veggie not created!',
            })
        })
}

deleteVeggie = async (req, res) => {
    await Veggie.findOneAndDelete({ _id: req.params.id }, (err) => {
        if (err) {
            return res.status(400).json({ success: false, error: 'Veggie not found'})
        }

        return res.status(200).json({ success: true})
    }).catch(err => console.log(err))
}

getVeggies = async (req, res) => {
    await Veggie.find({}, (err, veggies) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!veggies) {
            return res
                .status(404)
                .json({ success: false, error: `Veggie not found` })
        }
        return res.status(200).json({ success: true, data: veggies })
    }).catch(err => console.log(err))
}

module.exports = {
    createVeggie,
    deleteVeggie,
    getVeggies,
}