const express = require('express');

const weight = require('../models/Weight'); //about is a pointer to the { crap }

const router = express.Router();

router
    .get('/', (req, res) => { //on about page, doing GET request here
        res.send({
            Weight: weight.Weights
    })
});

module.exports = router;