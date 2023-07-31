const express=require('express');
const mongoose=require('mongoose');
const db = require("./db/db").mongoURI;
const userProfileSchema =require('./models/user.js');

const app=express();

// Connecting to MongoDB

mongoose.connect(db, {useNewUrlParser: true}
    ).then(() => console.log("MongoDB successfully connected!"))
    .catch(err => console.log(err));


const port=3000;
app.listen(port,()=>{
    console.log("let's trade");
});

