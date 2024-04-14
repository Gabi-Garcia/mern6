const express = require('express');
require ("dotenv").config();
const { connectDB } = require('./src/config/db');
const { setError } = require('./src/config/error');
const indexRouter = require('./src/api/routes/indexRouter');


const app = express();

connectDB()

app.use(express.json());

app.use('/api/v1', indexRouter);

app.use('*',(req, res, next)=>{
    return next(setError(404, "Not Found"))
})  

app.use((error, req, res, next)=>{
    return res.status(error.status || 500).json( error.message || 'Internal Server Error🤕')
})

app.listen(3000,()=>{
 console.log('Server en:http://localhost:3000')
})