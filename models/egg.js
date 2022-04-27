const mongoose = require("mongoose")
const eggSchema = mongoose.Schema({
egg_name: {
    type:String,
    minLength:3,
    maxLength:10},
egg_size: {
    type:String,
    minLength:3,
    maxLength:10},
egg_cost: {
    type:Number,
    min:10,
    max:100}

})
module.exports = mongoose.model("egg",eggSchema)