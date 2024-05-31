const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        required: true,
		ref: "user",
    },
    restaurantId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"Restaurant"
    },
    status: {
        type: String,
        enum: ['pending', 'accepted', 'completed', 'canceled'],
        default: 'pending'
    },
    Item:[{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"Item"
    }],
    totalPrice:{
        type:Number,
        required:truem
    }
     
},{timestamps:true})

module.exports = mongoose.model("Order",OrderSchema);