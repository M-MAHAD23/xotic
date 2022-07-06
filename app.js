const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');
const app = express();
const port = process.env.PORT || 3000;

//IMPORT ROUTES
const xoticRoutes = require('./routes/xotic');

//MIDDLEWARE
app.use(express.json())
app.use('/xotic',xoticRoutes);

//ROUTES
app.get('/',(req,res)=>{
    res.send('WE ARE AT HOME OF XOTIC ;) (:')
})

//CONNECTING TO THE DB HERE
mongoose.connect(
    process.env.DB_CONNECTION,
    ()=>console.log(`CONNECTED TO THE DATABASE USING PORT ${port}`)
)
//LISTENIGN TO OUR SERVER
app.listen(port);