var mongoose = require("mongoose");

var foodSchema = new mongoose.Schema({
   Name: String,
   Calories: Number,
   Fat: Number,
   Carbohydrates: Number,
   Protein: Number
});

module.exports = mongoose.model("food", foodSchema);
