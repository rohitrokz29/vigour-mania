const express=require('express');
const {userAuth}=require('../middlewares/userAuth');

const {AddChart,GetCharts,UpdateCharts}=require('../controllers/chartsControl')
const chartsRouter=express.Router();
 

/* adding charts with first data */
chartsRouter.put('/add-chart',userAuth,AddChart);

/* get charts */
chartsRouter.get('/get-charts',userAuth,GetCharts);
/* updating charts data */
chartsRouter.put('/update-chart-data',userAuth,UpdateCharts);

// remain to add chart delete route


module.exports = chartsRouter
