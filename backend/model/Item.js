const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
    restaurantId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"Restaurant"
    },
    ItemName:{
        type:String,
        required:true
    },
    itemPrice:{
        type:Number,
        required:true,
    },
    itemCategory:{
        type:String,
        enum:["Veg","Non Veg"],
        trim:true
    },
    itemPhoto:{
        type:String,
        required:true
    }
})