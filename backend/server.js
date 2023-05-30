const express = require('express');
const mongoose = require('mongoose');

/*
Configure dotenv to access the anvironment variables (Secret Variables) like MongoDB URI and JWT Secrets
*/

require('dotenv').config();
const cors = require('cors');


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }))

/*
    using router for user methods like signup, signin,etc
 */
app.use('/api/user',require('./routes/userRoutes'))

/**
 * Router to control all request related to Journal and its comments
 */
app.use('/api/journal',require('./routes/journalRoutes'));


/*
connecting server to mongodb database and starting the server after connection made succesfully
*/
mongoose.connect(process.env.MONGODB_URI, {
    dbName: 'vigour-mania',
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connected to DB")
    
    /*Starting the server below  */

    app.listen(process.env.PORT, (success, error) => {
        error ? console.log(error) : console.log("Running on Port ", process.env.PORT)
    })

}).catch(err => console.log(err))
