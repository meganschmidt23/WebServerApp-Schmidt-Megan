const express = require('express');
const router = express.Router();

const Exercises = require('../models/Exercises');

router
    .get ("/", (req,res)=> res.send({
        Exercises: Exercises.exerciseList
    }))
    .post('/addExercise', (req,res)=> res.send(
        Exercises.addExercise(req.body.newExercise)
        ))
    .post('/removeExercise', (req,res)=> res.send(
        Exercises.removeExercise(req.body.i)
        ))

module.exports = router;
