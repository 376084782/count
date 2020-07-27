var express = require('express');
var router = express.Router();
let count = 0;


/* GET home page. */
router.get('/getCount', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  // 操作上下麦
  res.send({
    code: 0,
    data: {
      count
    }
  })
});
router.get('/addCount', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  // 操作上下麦
  count++;
  res.send({
    code: 0,
    data: {
      count
    }
  })
});

module.exports = router;