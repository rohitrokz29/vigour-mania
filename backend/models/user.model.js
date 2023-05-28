const validator= require("validator");
const bcryptjs = require('bcryptjs');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
        // unique: true
    },
    password:{
        type:String,
        required:true
    },
    user: {
        username: {
            type: String,
            required: true,
            unique: true
        },
        email: {
            type: String,
        }
    }
})

userSchema.statics.signup = async function signup({ email, password, username }) {
    if(!validator.isEmail(email)){
        throw Error("Invalid Email");
    }
    if(!validator.isStrongPassword(password)){
        throw Error("Password Not Strong");
    }
    if(!validator.isLength(username,{min:5,max:20}) && !validator.matches(username,/^[a-zA-Z0-9]_-/)){
        throw Error("Username should be alhanumeric and contain some signs and longer than 5 characters");
    }
    
    let check=await this.find({ email });
    if(!check ){
        throw Error("User with this Email Already Exist");
    }


    // remaing to add jwt tokens

    
    const salt = bcryptjs.genSaltSync(12);
    const hashPassword =  bcryptjs.hashSync(password, salt);
    try{
        const user=new this({email,password:hashPassword,user:{username,email}})
        return user.save();
    }
    catch(err){
        throw Error(err.message);
    }
}

module.exports = mongoose.model('user', userSchema);