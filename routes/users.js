var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log("var:", process.env.teste)
  res.send('respond with a resource 5');
});

module.exports = router;
