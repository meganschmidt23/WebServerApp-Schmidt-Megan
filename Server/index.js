const express = require('express');
const path = require('path');

const aboutController = require('./controller/about');
const exercisesController = require('./controller/exercises');
const foodListController = require('./controller/foodList');
const goalsController = require('./controller/goals');
const loginController = require('./controller/login');
const waterController = require('./controller/water');


const app = express();
const port = 3000;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

app
    .use('/about', aboutController)
    .use('/exercises', exercisesController)
    .use('/goals', goalsController)
    .use('/login', loginController)
    .use('/water', waterController)




app.listen(port, () => console.log(`Listening at http://localhost:${port}`));