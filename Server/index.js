const express = require('express');
const path = require('path');

const aboutController = require('./controller/about');
const exercisesController = require('./controller/exercises');
const foodListController = require('./controller/foodList');
const goalsController = require('./controller/goals');
const loginController = require('./controller/login');


const app = express();
const port = 3000;

app
    .use('/about', aboutController)
    .use('/exercises', exercisesController)
    .use('/goals', goalsController)
    .use('/login', loginController)




app.listen(port, () => console.log(`Listening at http://localhost:${port}`));