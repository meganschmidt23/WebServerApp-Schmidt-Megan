const express = require('express');

const water = require('../models/Water'); //about is a pointer to the { crap }

const router = express.Router();

router
    .get('/', (req, res) => { //on about page, doing GET request here
        res.send({
            Water: water.waterTotal 

    })
});

module.exports = router;