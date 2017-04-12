var express = require('express');
var router = express.Router();
var { Todo } = require('../mainDB')

/* GET home page. */
router.get('/', function(req, res, next) {
  Todo.getAllTodos()
  .then(todos => {
    res.render('index', { title: 'Express', todos: todos });
  })
});

router.post('/create', function(req, res) {
  const todo = req.body.todo
  Todo.createTodo(todo)
  .then(() =>
    res.redirect('/'))
  })

router.put('/iscomplete/:id', function(req, res) {
  const id = req.params.id
  Todo.isComplete(id)
  .then(() =>
    res.redirect('/'))
})

router.put('/update/:id', function(req, res) {
  const { id } = req.params
  const { todo } = req.body
  Todo.updateTodo(id, todo)
  .then(() =>
    res.redirect('/'))
})

router.delete('/delete/:id', function(req, res) {
  const { id } = req.params
  Todo.deleteTodo(id)
  .then(() =>
    res.redirect('/'))
})

module.exports = router;
