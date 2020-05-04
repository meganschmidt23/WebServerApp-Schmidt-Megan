const express = require('express');

const water = require('../models/Water'); //about is a pointer to the { crap }

const router = express.Router();

router
    .get('/', (req, res) => { //on about page, doing GET request here
        res.send({
            Water: water.waterTotal 

    })
    .post('/add1', (req,res)=> res.send(
        water.add1()
        ))
    .post('/add5', (req,res)=> res.send(
        water.add5()
        ))
    .post('/add10', (req,res)=> res.send(
        water.add10()
        ))
    .post('/add20', (req,res)=> res.send(
        water.add20()
        ))
});

module.exports = router;