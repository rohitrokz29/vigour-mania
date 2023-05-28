const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use('/api/user',require('./routes/userRoutes'))



mongoose.connect(process.env.MONGODB_URI, {
    dbName: 'vigour-mania',
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connected to DB")

    app.listen(process.env.PORT, (success, error) => {
        error ? console.log(error) : console.log("Running on Port ", process.env.PORT)
    })

}).catch(err => console.log(err))
