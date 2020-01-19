var express = require("express");
var app = express();
var indexRoute = require("./routes/index");
var foodRoute = require("./routes/food");
var Food = require("./models/food")
var mongoose = require("mongoose");
var workoutRoute = require("./routes/workout");
const fs = require('fs');
app.set('view engine', 'ejs');

mongoose.connect("mongodb+srv://yuldong:12qwaszx@cluster0-nfl2q.mongodb.net/test?retryWrites=true&w=majority");

function seedDB() {
    fs.readFile('/Users/yuliangdong/workspace/FitDavis/food.csv',function (err,data) {

        if (err) {
          return console.log(err);
        }
      
        //Convert and store csv information into a buffer. 
        bufferString = data.toString(); 
        arr = bufferString.split('\n')
      
        var jsonObj = [];
        var headers = arr[0].split(',');
        for(var i = 1; i < arr.length; i++) {
        var data = arr[i].split(',');
        var obj = {};
        for(var j = 0; j < data.length; j++) {
            obj[headers[j].trim()] = data[j].trim();
        }
            jsonObj.push(obj);
            Food.create(obj, function(err, food) {
                console.log("32===32");
                if(err) {
                    return console.log("wrong?");
                }
                else {
                    console.log("38===38");
                    food.save(function(err){
                        if(err){
                             console.log(err);
                             return;
                        }
                        console.log("44===44");
                    });
                    console.log("Created new food");
                }
            });
        }
    });
}

app.use(express.static(__dirname + '/public'));
// seedDB();

app.use(indexRoute);
app.use(foodRoute);
app.use(workoutRoute);




app.listen(80, process.env.IP, function(){
    console.log("FitDavis is running.");
});