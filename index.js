const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors= require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

MONGODB_URI ='mongodb+srv://joy_furtado:joy1234@cluster0.qvhwr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const route = require("./route/route");

mongoose.connect(process.env.CONFIGLY_API_KEY || process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/ceaTimeLine', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

mongoose.connection.on('connected', ()=>{
    console.log('MongoDb Connected at port 27017');
});

mongoose.connection.on('error', (err)=>{
    console.log(err);
});


app.use(cors());

app.use(bodyParser.json());


app.get('/',(req, res)=>{
    res.send('some changes');
})

// Data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

if(process.env.NODE_ENV=='production'){
    app.use(express.static('client/build'));
}

app.use('/api', route);

app.listen(PORT, console.log(`Server is starting at ${PORT}`));



