const express=require('express');
const {userAuth}=require('../middlewares/userAuth');

const {AddChart,GetCharts,UpdateCharts, DeleteChart,GetOneChart}=require('../controllers/chartsControl')
const chartsRouter=express.Router();
 

/* adding charts with first data */
chartsRouter.put('/add-chart',userAuth,AddChart);

/* get charts */
chartsRouter.get('/get-charts',userAuth,GetCharts);

/* get one chart*/
chartsRouter.get('/1/:chartId',userAuth,GetOneChart);
/* updating charts data */
chartsRouter.put('/update-chart-data',userAuth,UpdateCharts);

// remain to add chart delete route
chartsRouter.delete('/:chartId',userAuth,DeleteChart)

module.exports = chartsRouter
