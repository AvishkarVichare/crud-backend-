const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        require:[true,"name is required"],
        
    },
    email:{
        type:String,
        unique:[true, 'need to be unique']
    }
})

module.exports = mongoose.model('user', UserSchema);