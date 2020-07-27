var express = require('express');
var router = express.Router();
let count = 0;
/* GET home page. */
router.get('/getCount', function (req, res, next) {
  // 操作上下麦
  res.send({
    code: 0,
    data: {
      count
    }
  })
});
router.get('/addCount', function (req, res, next) {
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