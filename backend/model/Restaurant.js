const mongoose = require("mongoose");

const restaurantSchema =  new mongoose.Schema({
    restaurantName:{
        tpe:String,
        required:true,
        trim:true
    },
    restaurantOwner:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"user"
    },
    restaurantPhoto:{
        type:String,
        
    },
    restaurantAddress:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"Address"
    },
    Item:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Item"
    }],
    GSTINnumber:{
        type:String,
        required:true,
    },
    GSTINPhoto:{
        type:String,
        required:true,
    }





})