require('dotenv').config({path: './.env'});
const express = require('express');
const app = express();
require('./models/config').dbconnection();
const userRouter = require('./routes/userRoute');

//logger
app.use(require('morgan')('dev'));

//body parser
app.use(express.json());
app.use(express.urlencoded({extended: true}));


//route
app.use('/',userRouter);



console.log('hello');
app.listen(process.env.PORT, ()=>{
    console.log(`server is running on port ${process.env.PORT}`);
});
