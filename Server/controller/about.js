const express = require('express');

const about = require('../models/About'); //about is a pointer to the { crap }

const router = express.Router();

router
    .get('/', (req, res) => { //on about page, doing GET request here
        res.send({
            Picture: about.Photos 

    })
});

module.exports = router;