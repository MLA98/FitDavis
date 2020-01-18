var express = require("express");
var app = express();
var indexRoute = require("./routes/index");

app.use(indexRoute);

app.listen(80, process.env.IP, function(){
    console.log("FitDavis is running.");
});