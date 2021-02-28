var express = require('express');
var router = express.Router();
/* GET users listing. */
router.get('/', function(req, res) {
  req.session.destroy();
  res.redirect('/login');
});
module.exports = router;