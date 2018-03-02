var express = require('express');
var router = express.Router();
var mongoose=require('mongoose')
mongoose.connect('mongodb://NoorHassan:hotmail@ds011442.mlab.com:11442/codelab').then(function () {
    console.log("DataBase Connected")
}).catch(function (error) {
    console.log(error.message)
})
/* GET home page. */
router.get('/dodge', function(req, res, next) {
  res.render('index');
});

module.exports = router;
