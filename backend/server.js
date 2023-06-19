const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cookieEncrypter = require('cookie-encrypter');

/*
Configure dotenv to access the anvironment variables (Secret Variables) like MongoDB URI and JWT Secrets
*/

require('dotenv').config();
const cors = require('cors');
const { userAuth } = require('./middlewares/userAuth');
const { checkUser } = require('./middlewares/checkUser');


const app = express();
app.use(cors({
    // origin:"*",
    origin: 'http://127.0.0.1:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}
));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser())
app.use(cookieParser(process.env.COOKIE_ENCRYPT_SECRET.toString()));
// app.use(cookieEncrypter(process.env.COOKIE_ENCRYPT_SECRET.toString()));


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://127.0.0.1:5173");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});
/*
    using router for user methods like signup, signin,etc
 */

app.use('/api/user', require('./routes/userRoutes'));

app.use('/api/charts', require('./routes/chartsRouter'));
/**
 * Router to control all request related to Journal and its comments
 */
app.use('/api/journal', require('./routes/journalRoutes'));

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

}).catch(err => console.error(err))
