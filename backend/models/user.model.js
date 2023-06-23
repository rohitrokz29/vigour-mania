/**
 * User Model Exists here
 */

const mongoose = require('mongoose');

//validator to check user details are valid or not
const validator = require("validator");

//bcryptjs for password hashing
const bcryptjs = require('bcryptjs');

const chartSchema = new mongoose.Schema({

    chartType: { type: String },
    createdAt: { type: Date },
    minValue: { type: Number },
    maxValue: { type: Number },
    unit: { type: String },
    data: {
        type: [{ week: { type: Number, unique: true }, value: { type: Number, required: true } }],
        default: []

    }
})


const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true, immutable: true },
    username: { type: String, unique: true, required: true, immutable: true },
    password: { type: String, required: true },
    user: {
        name: { type: String,default:"" },
        username: { type: String, unique: true, required: true, immutable: true },
        email: { type: String, immutable: true },
        facebook: { type: String, default: "" },
        instagram: { type: String, default: "" },
        bio: { type: String, default: "" },
        twitter: { type: String, default: "" },
        gender: { type: String, default: "" },
        visiblity: { type: String, default: "public" },
    },
    charts: {
        type: [chartSchema],
        defaut: [],

    }

})

// Signup Method for controller
userSchema.statics.signup = async function signup({ email, password, username }) {
    //validating email,password and username


    try {
        if (!validator.isEmail(email)) {
            throw new Error("Invalid Email", { statusCode: 406 });
        }

        if (!validator.isLength(username, { min: 5, max: 13 }) && !validator.matches(username, /^[a-zA-Z0-9]_-/)) {
            throw new Error("Username too short or too long", { statusCode: 411 });
        }

        //checking if email and username already exist
        var check = await this.findOne({ email: email });
        if (check) {
            throw new Error("Email Already Exist", { statusCode: 302 })
        }
        check = await this.findOne({ "user.username": username });
        if (check) {
            throw new Error("Username Already Exist", { statusCode: 302 })
        }

        if (!validator.isStrongPassword(password)) {
            throw Error("Password Not Strong", { statusCode: 406 });
        }


        // all entered details are valid so hashing password to save in database for security
        const salt = bcryptjs.genSaltSync(12);
        const hashPassword = bcryptjs.hashSync(password, salt);

        //creating user and saving in DB
        const user = new this({ email, username, password: hashPassword, user: { username, email } });
        user.save();
        return { username: user.user.username, _id: user._id };
    }
    catch (err) {
        /*throwing error if occured */
        throw Error(err.message, { statusCode: 500 });
    }
}
/**
 * Signin Function for user Signin Controller function
 */
userSchema.statics.signin = async function signin({ email, password }) {
    //Email Validation
    if (!validator.isEmail(email)) {
        throw new Error("Invalid Email", { statusCode: 406 });
    }
    try {
        //finging user
        const user = await this.findOne({ email: email }).select('_id password user.username');
        if (!user) {
            //user doesnot exist 
            throw new Error("User doesn't Exist", { statusCode: 404 });
        }
        if (!bcryptjs.compareSync(password, user.password)) {
            //passwords doesnot matched
            throw new Error("Incorrect Password", { statusCode: 406 });
        }
        return { username: user.user.username, _id: user._id };
    } catch (error) {
        throw new Error(error.message, { statusCode: 500 });
    }

}

/* findUser function for finding user from DB */
userSchema.statics.findUser = async function findUser({ username }) {
    try {
        return this
            .findOne({ username }, { _id: 0, password: 0, email: 0, username: 0, __v: 0, 'user._id': 0, 'charts._id': 0, 'charts.data._id': 0, 'charts.createdAt': 0 })
            .exec()

    } catch (error) {
        throw new Error("User Not Found", { StatusCode: 404 });
    }
}
/* findUser function for updating user from DB */
userSchema.statics.updateUser = async function updateUser({ body, _id }) {
    try {
        const {  facebook, instagram, twitter, bio,name,visiblity,gender } = body;
        return this
            .updateOne({ _id }, {
                $set: {
                    'user.facebook': facebook,
                    'user.instagram': instagram,
                    'user.twitter': twitter,
                    'user.bio': bio,
                    'user.name':name,
                    'user.gender':gender,
                    'user.visiblity':visiblity
                }
            }, { upsert: true })
            .lean()
    } catch (error) {
        throw new Error(error.message, { statusCode: 500 });
    }
}

/* Adding a new chart to charts field (tracker for user daata of type chart type) */
userSchema.statics.addChart = async function addChart({ body, _id }) {
    /*
    body={
        chartType:nvnh,
            week:1
            value:6687
            min:22
            ,max:22

    }
     */
    try {
        const chart = {
            chartType: body.chartType,
            createdAt: new Date(),
            minValue: body.minValue,
            unit: body.unit,
            maxValue: body.maxValue,
            data: [{ week: body.week, value: body.value }]
        }
        //ADDING NEW CHART TO the charts section
        const result = await this.findByIdAndUpdate(_id, {
            $push: {
                charts: { $each: [chart], $position: 0 }
            }
        }, { new: true }).select('charts')

        return result.charts[0]

    } catch (error) {
        throw new Error(error.message, { statusCode: 500 });

    }
}

/* Retrieving user charts */
userSchema.statics.getCharts = async function getCharts({ _id }) {
    try {
        console.log(_id)
        return await this
            .findOne({ _id, 'charts.0': { $exists: true } })
            .select('-_id charts.chartType charts.createdAt charts.data.week  charts.data.value charts._id  charts.minValue charts.maxValue')
            .sort({ "charts.createdAt": 1 })
            .lean()
            .exec()
    } catch (error) {
        throw new Error(error.message, { statusCode: 500 });
    }
}

/* updating user charts data */
userSchema.statics.updateChart = async function updateChart({ body, _id }) {
    try {
        /**
         * body:{
         *  week:8,
         *  value:55
         * chaertId
         * }
         */
        const newData = {
            week: body.week,
            value: body.value
        }
        const res = await this
            .updateOne({ _id: _id, 'charts._id': body.chartId }, {
                $push: {
                    'charts.$.data': newData
                }
            })
            .lean()
            .exec()
        return newData;

    } catch (error) {
        throw new Error(error.message, { statusCode: 500 });
    }
}

userSchema.statics.deleteChart = async function deleteChart({ _id, chartId }) {
    return this.updateOne(
        { _id },
        { $pull: { charts: { _id: chartId } } }
    ).lean()
}
userSchema.statics.getOneChart = async function getOneChart({ _id, chartId }) {
    try {
        const res = await this.findOne({ _id }, {
            charts: {
                $elemMatch: {
                    _id: chartId
                }
            }
        })



        return res.charts[0];
    } catch (error) {

    }
}
//exporting user schema
module.exports = mongoose.model('user', userSchema);