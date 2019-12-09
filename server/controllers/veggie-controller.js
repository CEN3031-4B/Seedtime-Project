// This file contains Mongoose queries that control the inventory related functionality.
const Veggie = require('../models/veggie-model')

// This creates an item and adds it to inventory and returns a status denoting if the function executed properly.
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

// This deletes an item from inventory and returns a status denoting if the function executed properly.
deleteVeggie = async (req, res) => {
    await Veggie.findOneAndDelete({ _id: req.params.id }, (err) => {
        if (err) {
            return res.status(400).json({ success: false, error: 'Veggie not found'})
        }

        return res.status(200).json({ success: true})
    }).catch(err => console.log(err))
}

// This returns a list of all items in inventory and returns a status denoting if the function executed properly.
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

// This searchs the inventory and returns a list of items that match the searched attributes and returns status denoting 
//if the function executed properly.
searchVeggies = async (req, res) => {
    await Veggie.find({
        $or: [
            {name: {$regex: req.params.search}},
            {farm: {$regex: req.params.search}}
        ]
    }, (err, veggies) => {
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
    searchVeggies
}