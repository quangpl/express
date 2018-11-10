var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// router.get('/test_node',function(req,res,next){
// 	res.render('test',{quang:'Learning NodeJS and Express .Frist step !'});
// });
router.get('/home',function (req,res,next) {
    res.render('home');
})
router.get('/form',function (req,res,next) {
    res.render('form');
    setTimeout(()=>{
       console.log('Set timeout!');
    },1000);

})
router.post('/process',function (req,res) {
    var first=req.body.firstname;
    if(first)
    {
        res.redirect(301,'/');
    }

})
router.get('*',function (req,res) {
    res.send("404 NOT FOUND !");
})
module.exports = router;
