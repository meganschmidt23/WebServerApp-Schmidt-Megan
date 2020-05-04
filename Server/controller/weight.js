const express = require('express');

const weight = require('../models/Weight'); //about is a pointer to the { crap }

const router = express.Router();

router
    .get('/', (req, res) => { //on about page, doing GET request here
        res.send({
            Weight: weight.Weights
    })
    .post('/addWeight', (req,res)=> res.send(
        weight.addWeight(req.body.date, req.body.weight)
        ))
    .post('/removeWeight', (req,res)=> res.send(
        weight.removeWeight(req.body.i)
        ))
});

module.exports = router;