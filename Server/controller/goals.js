const express = require('express');

const Goals = require('../models/Goals')

const router = express.Router();

router
    .get('/', (req, res) => { 
        res.send({
            Goals
    })
    .post('/addGoal', (req,res)=> res.send(
        Goals.addGoal(req.body.goal)
        ))
    .post('/removeGoal', (req,res)=> res.send(
        Goals.removeGoal(req.body.i)
        ))
});

module.exports = router;