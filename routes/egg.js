var express = require('express');
const egg_controllers= require('../controllers/egg');
var router = express.Router();
// A little function to check if we have an authorized user and continue on 
//or 
// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 

/* GET egg */
router.get('/', egg_controllers.egg_view_all_Page );


/* GET detail egg page */
router.get('/detail', egg_controllers.egg_view_one_Page);

/* GET create costume page */
router.get('/create', egg_controllers.egg_create_Page);

/* GET create update page */
router.get('/update',secured, egg_controllers.egg_update_Page);

/* GET delete costume page */
router.get('/delete', egg_controllers.egg_delete_Page);

module.exports = router;