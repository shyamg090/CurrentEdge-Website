const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
const { News } = require('./savedNewsModel');

dotenv.config();

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log('Database Connected!!');
});

const userSchema = mongoose.Schema({
    name : {type : String, required : true},
    email : {type : String, required : true},
    password : {type : String, required : true},
    saved : [
        { type : mongoose.Schema.Types.ObjectId, ref : News }
    ]
});

userSchema.pre('save', function (next){ 
    //note arrow function and req, res must not be used
    if(!this.isModified) return next();

    try{
        const salt =  bcrypt.genSaltSync(10);
        this.password =  bcrypt.hashSync(this.password , salt);
        next(); 
    }catch(err){
        next(err);
    }
});

const User = mongoose.model('User', userSchema);

module.exports = { User };