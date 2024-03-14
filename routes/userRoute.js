const express = require('express')
const router = express.Router();

router.get('/', function (req, res, next) {
    res.status(200).json({ success: true, message: 'test'});
});

router.post('/create', function (req, res, next) {
    res.status(201).json(req.body);
});

module.exports = router;