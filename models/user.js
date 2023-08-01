const mongoose=require('mongoose');

const Schema = mongoose.Schema;

const userProfileSchema=new Schema({

    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
    },
    password:{
        type:String,
        required:true,
    },
    balance:{
        type:Number,
        required:true
    },
   /*portfolio:[userPortfolioSchema],
    transaction:[transactionSchema]*/


},{timestamps:true});


const userPortfolioSchema=new Schema({

    stockSymbol:{
        type:String,
        required:true
    },
    stockName:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    unitPrice:{
        type:Number,
        required:true
    },
    opnePrice:{
        type:Number,
        required:true
    }
},{timestamps:true});

const transactionSchema=new Schema({

    transaction_type:{
        type:String,
        required:true
    },
    stockSymbol: {
        type: String,
        required: true
    },
    stockPrice: { 
        type: Number,
        required: true
    },
    stock_quantity: {
        type: Number,
        required: true
    }
},{timestamps:true});


const UserProfile=mongoose.model('UserProfile',userProfileSchema);

module.exports=UserProfile;



