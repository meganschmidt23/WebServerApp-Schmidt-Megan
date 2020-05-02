const express = require('express');
const path = require('path');

const aboutController = require('./controller/about');
const exercisesController = require('./controller/exercises');
const foodListController = require('./controller/foodList');
const goalsController = require('./controller/goals');
const loginController = require('./controller/login');
const waterController = require('./controller/water');
const weightsController = require('./controller/weight');
const usersController = require('./controller/users');


const app = express();
const port = 4000;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

app.use(function(req, res, next) {
    const arr = (req.headers.authorization || "").split(" ");
    if(arr.length > 1 && arr[1] != null){
        req.userId = +arr[1];
    }
    next();
});
//
app
    .use(express.json())
    .use(express.urlencoded({ extended: true }))
    //.use(express.static( __dirname + '/../client/dist'))
    .use('/about', aboutController)
    .use('/exercises', exercisesController)
    .use('/goals', goalsController)
    .use('/login', loginController)
    .use('/water', waterController)
    .use('/food', foodListController)
    .use('/weight', weightsController)
    .use('/users', usersController)
    .use( (err, req, res, next ) => {
        console.error(err);
        const errorCode = err.code || 500;
        res.status(errorCode).send({ message: err.message });
    } )

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));