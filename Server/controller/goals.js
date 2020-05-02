const express = require('express');

const Goals = require('../models/Goals')

const router = express.Router();

router
    .get('/', (req, res) => { 
        res.send({
            Goals
    })
});

module.exports = router;