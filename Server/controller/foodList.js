const express = require('express');

const about = require('../models/Food')

const router = express.Router();

router
    .get('/', (req, res) => { 
        res.send({
            Food: foodList 

    })
});

module.exports = router;