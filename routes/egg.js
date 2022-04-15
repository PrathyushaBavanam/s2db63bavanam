var express = require('express');
const egg_controlers= require('../controllers/egg');
var router = express.Router();
/* GET egg */
router.get('/', egg_controlers.egg_view_all_Page );
module.exports = router;