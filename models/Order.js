const { model, models, Schema } = require("mongoose");

const OrderSchema = new Schema({
    line_items:Object,
    name:String,
    email:String,
    city:String,
    postCode:String,
    streetAddress:String,
    country:String,
    paid:Boolean,
},{
    timestamps:true,
})

export const Order = models?.Order || model('Order', OrderSchema)