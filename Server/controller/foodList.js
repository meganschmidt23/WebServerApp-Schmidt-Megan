const express = require('express');

const about = require('../models/Food')

const router = express.Router();

router
    .get('/foodtracking', (req, res) => { 
        res.send({
            Food: foodList 

    })
});

module.exports = router;