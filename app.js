const express=require('express');
const mongoose=require('mongoose');
const db = require("./db/db").mongoURI;
const UserProfile=require('./models/user.js');

const authRoutes=require('./routes/authRoutes');

const app=express();

// Connecting to MongoDB

mongoose.connect(db, {useNewUrlParser: true}
    ).then(() => {
        app.listen((3000));
        console.log("MongoDB successfully connected!");}
        ).catch(err => console.log(err));


app.get('/',(req,res)=>
{
   const user=new UserProfile({
    firstName:"chakshu2",
    lastName:"chatur",
    email:"lord1@gmail.com",
    password:"lord1234",
    balance:10000
   });
   user.save().then((result)=>{
    res.send(result);
   }).catch((err)=>{
    console.log(err);
   });
});

app.use(authRoutes);



