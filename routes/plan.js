var express = require("express");
router = express.Router();
var PythonShell = require('python-shell')


router.get('/plan', (req, res) => {
    var busyIndex = 0;
    PythonShell.PythonShell.run('popArc.py', null, function (err, result) {
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

    res.render('buildWorkout', {color : color});
});

module.exports = router;