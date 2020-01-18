var express = require("express");
router = express.Router();
var Items = require('../models/food')

router.get('/items', (req, res) => {
    res.render('index');
})

module.exports = router;