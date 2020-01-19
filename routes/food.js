var express = require("express");
router = express.Router();
var mongoose = require("mongoose");
var Food = require("../models/food");
let {PythonShell} = require('python-shell')


router.get('/foods', (req, res) => {
    Food.find({}, function(err, allFood) {
        if(err) {
            console.log(err);
        }
        else{
            // https://stackoverflow.com/questions/23450534/how-to-call-a-python-function-from-node-js credit to NeverForgetY2K
            // const spawn = require("child_process").spawn;
            // const pythonProcess = spawn('python3',["/Users/yuliangdong/workspace/FitDavis/popArc.py"]);
            var busyIndex = 0;
            // pythonProcess.stdout.on('data', (data) => {
            //     busyIndex = data;
            //     console.log(busyIndex);
            // });
            PythonShell.run('popArc.py', null, function (err, result) {
                if (err) throw err;
                busyIndex = parseInt(result, 10); 
            });

            var color = 'green';
            if(busyIndex > 33 && busyIndex <= 66) {
                color = 'yello';
            }
            else if(busyIndex > 66) {
                color = 'red';
            }

            res.render("food", {food : allFood, color : color});
        }
    });
})

module.exports = router;