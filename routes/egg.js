var express = require('express');
const egg_controllers= require('../controllers/egg');
var router = express.Router();
/* GET egg */
router.get('/', egg_controllers.egg_view_all_Page );
module.exports = router;

/* GET detail egg page */
router.get('/detail', egg_controllers.egg_view_one_Page);

/* GET create costume page */
router.get('/create', egg_controllers.egg_create_Page);

/* GET create update page */
router.get('/update', egg_controllers.egg_update_Page);

/* GET delete costume page */
router.get('/delete', egg_controllers.egg_delete_Page);