const mongoose = require('mongoose');

const connectToDb = ()=>{
    mongoose.connect(uri)
    .then((conn)=>{
        console.log(conn)
    })
    .catch(err=>{

    })
}

module.exports = connectToDb;