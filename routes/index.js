var express = require('express');
const { Classify } = require('../controllers/index.js');
const { upload } = require('../config/upload.js');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/classify", upload.single("image"),Classify)
module.exports = router;
