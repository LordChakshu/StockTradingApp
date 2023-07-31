const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const stockSchema=new Schema({

    symbol:{
        type:String,
        required:true,
        unique:true
    },
    stockName:{
        type:String,
        required:true
    },
    currentPrice:{
        type:Number,
        required:true
    },
    marketCap:{
        type:Number,
        required:true
    },
    sector: String,
    industry: String,
    listedAt:{
        type:Date,
        default:Date.now,
    }
});

const Stock=mongoose.model('Stock',stockSchema);

module.exports=Stock;