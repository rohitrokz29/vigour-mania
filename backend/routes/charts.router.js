const chartsRouter = require('express').Router()
const { userAuth } = require('../middlewares/user.auth');

const {
    AddChart,
    GetCharts,
    UpdateCharts,
    DeleteChart,
    GetOneChart
} = require('../controllers/charts.control')


/* adding charts with first data */
chartsRouter.put('/add', userAuth, AddChart);

/* get charts */
chartsRouter.get('/get', userAuth, GetCharts);

/* get one chart*/
chartsRouter.get('/1/:chartId', userAuth, GetOneChart);
/* updating charts data */
chartsRouter.put('/update', userAuth, UpdateCharts);

// remain to add chart delete route
chartsRouter.delete('/:chartId', userAuth, DeleteChart)

module.exports = chartsRouter
