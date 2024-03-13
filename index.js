require('dotenv').config({path: './.env'});
const express = require('express');
const app = express();
require('./models/config').dbconnection();



console.log('hello');
app.listen(process.env.PORT, ()=>{
    console.log(`server is running on port ${process.env.PORT}`);
});
