var express = require("express");
router = express.Router();

router.get('/workout', (req, res) => {
    res.sendfile('./public/workout.html');
})

module.exports = router;