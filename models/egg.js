const mongoose = require("mongoose")
const eggSchema = mongoose.Schema({
egg_name: String,
egg_size: String,
egg_cost: Number
})
module.exports = mongoose.model("egg",eggSchema)