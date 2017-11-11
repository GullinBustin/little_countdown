var express = require('express');
var router = express.Router();

var countDownDate = new Date().getTime() + 1000*60*30;
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/getTime', function(req, res, next) {
    var data = {};
    data["time"] = countDownDate;
    res.json(data);
});

router.post('/reset', function(req, res, next) {
    countDownDate = new Date().getTime() + 1000*60*30;
    res.sendStatus(200);
});


module.exports = router;
