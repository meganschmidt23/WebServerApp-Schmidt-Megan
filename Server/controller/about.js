const express = require('express');

const about = require('../models/About')

const router = express.Router();

router
    .get('/about', (req, res) => { 
        res.send({
            Picture: about.Photos 

    })
});

module.exports = router;