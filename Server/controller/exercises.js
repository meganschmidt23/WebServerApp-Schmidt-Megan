const express = require('express');
const router = express.Router();

const Exercises = require('../models/Exercises')

router
    .get ("/", (req,res)=> res.send({
        Exercises: Exercises.exerciseList
    }))

module.exports = router;