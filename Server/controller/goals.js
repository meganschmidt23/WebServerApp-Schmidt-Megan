const express = require('express');

const about = require('../models/Goals')

const router = express.Router();

router
    .get('/goals', (req, res) => { 
        res.send({
            Goals
    })
});

module.exports = router;