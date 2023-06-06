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
    data: [{ week: { type: Number }, value: { type: Number } }]
})

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    user: {
        username: { type: String, unique: true, required: true, immutable: true },
        email: { type: String, immutable: true },
        facebook: { type: String, default: "" },
        instagram: { type: String, default: "" },
        bio: { type: String, default: "" },
        twitter: { type: String, default: "" }
    },
    charts: [chartSchema]

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
        const user = new this({ email, password: hashPassword, user: { username, email } });
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
        return this.findOne({ "user.username": username }).select("user").lean()

    } catch (error) {
        throw new Error("User Not Found", { StatusCode: 404 });
    }
}
/* findUser function for updating user from DB */
userSchema.statics.updateUser = async function updateUser({ body, _id }) {
    try {
        const { username, facebook, instagram, twitter, bio } = body;
        return this.updateOne({ _id }, {
            $set: {
                'user.facebook': facebook,
                'user.instagram': instagram,
                'user.twitter': twitter,
                'user.bio': bio
            }
        }, { upsert: true }).lean()
    } catch (error) {
        throw new Error(error.message, { statusCode: 500 });
    }
}

userSchema.statics.addChart = async function addChart({ body, _id }) {
    /*
    body={
        chartType:nvnh,
        data:[
            {week:1,value:6687}
        ]
    }
     */
    try {
    //ADDING NEW CHART TO the charts section
    } catch (error) {
        throw new Error(error.message, { statusCode: 500 });

    }
}

userSchema.statics.updateChart = async function updateChart({ body, _id, chartType }) {
    try {
        /**
         * body:{
         *  week:8,
         *  value:55
         * }
         */

        return User.updateOne({ _id, "charts.chartType": chartType }, {
            $push: {
                "charts.$.data": body
            }
        })
    } catch (error) {
        throw new Error(error.message, { statusCode: 500 });
    }
}
//exporting user schema
module.exports = mongoose.model('user', userSchema);