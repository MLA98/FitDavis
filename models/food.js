var mongoose = require("mongoose");

var foodSchema = new mongoose.Schema({
   name: String,
   calories: Number,
   protein: Number,
   description: String,
   fat: Number,
   type: String
});

module.exports = mongoose.model("food", foodSchema);
