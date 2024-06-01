const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
    ShopNo:{
        type:String,

    },
    StreetNo:{
        type:String,
    },
    Area:{
        type:String,

    },
    City:{
        type:String
    },
    State:{
        type:String,
        required:true
    },
    Country:{
        type:String,
        required:true
    }
})