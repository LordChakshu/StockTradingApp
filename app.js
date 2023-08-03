const express=require('express');
const mongoose=require('mongoose');
const db = require("./db/db").mongoURI;
const UserProfile=require('./models/user.js');

const authRoutes=require('./routes/authRoutes');

const app=express();

//Express JSON parser middleware
app.use(express.json());

// Connecting to MongoDB
mongoose.connect(db, {useNewUrlParser: true}
    ).then(() => {
        app.listen((3000));
        console.log("MongoDB successfully connected!");}
        ).catch(err => console.log(err));


//Auth midleware
app.use(authRoutes);



