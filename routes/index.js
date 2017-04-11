var express = require('express');
var router = express.Router();
var db = require('../mainDB')

/* GET home page. */
router.get('/', function(req, res, next) {
  db.allTodos()
  .then(todos => {
    console.log(todos)
    res.render('index', { title: 'Express', todos: todos });
  })
});



module.exports = router;
