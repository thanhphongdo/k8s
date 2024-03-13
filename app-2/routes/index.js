var express = require('express');

const os = require('os');

const hostname = os.hostname();

var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express APP 2 === Run At ' + hostname });
});

module.exports = router;
