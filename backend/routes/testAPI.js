var express = require("express");
var router = express.Router();

const options = [];

router.post('/', (req, res) => {

    const option = (req.body.option);
    options.push(option);
});

router.get('/', (req, res) => {
    res.json(options);
});

module.exports = router;