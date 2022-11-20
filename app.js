const express = require('express');
const connectToDb = require('./config/db');
const app = express();
const userRouter = require('./routes/userRoutes');

app.use(express.json());
app.use(express.urlencoded({extended:true}));

connectToDb();

app.use('/api', userRouter)

module.exports = app;