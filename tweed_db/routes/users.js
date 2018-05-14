var express = require('express');
var router = express.Router();
var Tweed = require('../models/index').tweeds;

/* GET users listing. */

//index
router.get('/', function (req, res, next) {
    Tweed.findAll().then(function(tweeds) {
        res.send(tweeds);
    });
});

//Create
router.post('/', function(req,res) {
    Tweed.create(req.body).then(function(tweed){
      res.send(tweed);
    });
});

// DELETE
router.delete('/:id', fucntion(req, rest){
  const id = req.params.id;
  Tweed.findById(id).then(fucntion(tweed){
    tweed.destroy();
    res.send(`Tweed ${id} destroyed`);
  });
});


router.get('/', function(req, res, next) {
  res.send('get some tweeds');
});

module.exports = router;
