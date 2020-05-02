const express = require('express');

const food = require('../models/Food')

const router = express.Router();

router
    .get('/', (req, res) => { 
        res.send({
            Food: food.foodList 

    })
});

module.exports = router;