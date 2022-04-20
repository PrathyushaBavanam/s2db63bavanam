var egg = require('../models/egg');

// List of all egg
exports.egg_list = async function(req, res) {
    try{
    theegg = await egg.find();
    res.send(theegg);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };

//exports.egg_list = function(req, res) {
 //res.send('NOT IMPLEMENTED: egg list');
//};
// for a specific egg.
exports.egg_detail = async function(req, res) {
 //res.send('NOT IMPLEMENTED: egg detail: ' + req.params.id);
 console.log("detail" + req.params.id)
 try {
 result = await egg.findById( req.params.id)
 res.send(result)
 } catch (error) {
 res.status(500)
 res.send(`{"error": document for id ${req.params.id} not found`);
 }
};
// Handle egg create on POST.
exports.egg_create_post = async function(req, res) {
    console.log(req.body)
    let document = new egg();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.egg_name = req.body.egg_name;
    document.egg_size = req.body.egg_size;
    document.egg_cost= req.body.egg_cost;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
// Handle egg delete form on DELETE.
exports.egg_delete = async function(req, res) {
 //res.send('NOT IMPLEMENTED: egg delete DELETE ' + req.params.id);
    console.log("delete " + req.params.id)
    try {
    result = await egg.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
   };
// Handle egg update form on PUT.
exports.egg_update_put = async function(req, res) {
    //res.send('NOT IMPLEMENTED: egg update PUT' + req.params.id);
 console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
 try {
 let toUpdate = await egg.findById( req.params.id)
 // Do updates of properties
 if(req.body.egg_name)
 toUpdate.egg_name = req.body.egg_name;
 if(req.body.egg_size) toUpdate.egg_size = req.body.egg_size;
 if(req.body.egg_cost) toUpdate.egg_cost= req.body.egg_cost;
 let result = await toUpdate.save();
 console.log("Success " + result)
 res.send(result)
 } catch (err) {
 res.status(500)
 res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
 }
};


// VIEWS
// Handle a show all view
exports.egg_view_all_Page = async function(req, res) {
    try{
    theegg = await egg.find();
    res.render('egg', { title: 'egg Search Results', results: theegg });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };

   // Handle a show one view with id specified by query
exports.egg_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await egg.findById( req.query.id)
    res.render('eggdetail',
   { title: 'egg Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

   // Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.egg_create_Page = function(req, res) {
   console.log("create view")
   try{
   res.render('eggcreate', { title: 'egg Create'});
   }
   catch(err){
   res.status(500)
   res.send(`{'error': '${err}'}`);
   }
  };

  // Handle building the view for updating a costume.
// query provides the id
exports.egg_update_Page = async function(req, res) {
   console.log("update view for item "+req.query.id)
   try{
   let result = await egg.findById(req.query.id)
   res.render('eggupdate', { title: 'egg Update', toShow: result });
   }
   catch(err){
   res.status(500)
   res.send(`{'error': '${err}'}`);
   }
  };

  // Handle a delete one view with id from query
exports.egg_delete_Page = async function(req, res) {
   console.log("Delete view for id " + req.query.id)
   try{
   result = await egg.findById(req.query.id)
   res.render('eggdelete', { title: 'egg Delete', toShow:
  result });
   }
   catch(err){
   res.status(500)
   res.send(`{'error': '${err}'}`);
   }
  };