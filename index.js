const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors= require('cors');
require('dotenv').config();
const {MONGOURI} = require('./config/keys')

const app = express();

const route = require("./route/route");

mongoose.connect(MONGOURI);

mongoose.connection.on('connected', ()=>{
    console.log('MongoDb Connected at port 27017');
});

mongoose.connection.on('error', (err)=>{
    console.log(err);
});

const PORT = 4000;

app.use(cors());

app.use(bodyParser.json());

app.use('/api', route);

app.get('/',(req, res)=>{
    res.send('some changes');
})

if(process.env.NODE_ENV=='production'){
    const path = require('path')
    app.get('/',(req,res)=>{
        app.use(express.static(path.resolve(__dirname,"client","build")))
        res.sendFile(path.resolve(__dirname,"client","build","index.html"))
    })
}

app.listen(process.env.PORT || PORT, ()=>{
    console.log('Server has been started at port: '+PORT);
})


