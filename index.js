const express = require('express');
require('dotenv').config({path: './.env'});
const app = express();
console.log('hello')
app.listen(process.env.PORT, ()=>{
    console.log(`server is running on port ${process.env.PORT}`);
});
