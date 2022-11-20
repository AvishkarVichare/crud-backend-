const mongoose = require('mongoose');
const uri = process.env.MONGO_URI;

const connectToDb = ()=>{
    mongoose.connect(uri)
    .then((conn)=>{
        console.log(`conneted to DB with db name ${conn.connection.name}`)

    })
    .catch(err=>{
        console.log(err.message)
    })
}

module.exports = connectToDb;