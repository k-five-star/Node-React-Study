const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';

const userSchema = mongoose.Schema({
    name : {
        type : String,
        maxlength : 50,
    },
    email : {
        type : String,
        trim : true,
        unique : 1,
    },
    password : {
        type : String,
        minlength : 5,
    },
    lastname : {
        type : String,
        maxlength : 50,
    },
    role : {
        type : Number,
        default : 0,
    },
    image : String,
    token : {
        type : String,
    },
    tokenExp : {
        type : Number,
    }
})

userSchema.pre('save', function(next) {
    var user = this
    
    if(user.isModified('password')) {
        
        bcrypt.genSalt(saltRounds, function(err, salt) {
            bcrypt.hash(user.password, salt, function(err, hash) {
                // Store hash in your password DB.
                if(err) return next(err)
                else {
                    user.password = hash
                    next()
                }
            })
        })
    }
    else    next()
})

const User = mongoose.model('user', userSchema)

module.exports = {User}