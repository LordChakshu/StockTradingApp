const mongoose=require('mogoose');
const { SchemaType } = require('mongoose');

const Schema=mongoose.Schmea;

const userTransactionSchema=new Schema({

    user_id:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:'User'// ref to user Model
    },
    stock_id:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:'Stock' // Ref to stock model
    },
    transactionType:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true,
    },
    price:{
        type:Number,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
},{timestamps:true});

const UserTransaction=mongoose.model('UserTransaction',userTransactionSchema);

module.exports=UserTransaction;