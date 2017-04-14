var express = require('express');
var router = express.Router();
var { Todo } = require('../mainDB')

/* GET home page. */
router.get('/', function(req, res, next) {
  Todo.getAllTodos()
  .then(todos => {
    res.render('index', { title: 'Todo todo', todos: todos });
  })
});

router.post('/create', function(req, res) {
  const todo = req.body.todo
  console.log('body?', req.body.todo)
  Todo.createTodo(todo)
  .then(() =>
    res.redirect('/'))
  })

router.get('/iscomplete/:id', function(req, res) {
  const { id } = req.params
  Todo.isComplete(id)
  .then(() =>
    res.redirect('/'))
})

router.post('/update/:id', function(req, res) {
  const { id } = req.params
  const { todo } = req.body
  console.log('do I get a body?', req.body)
  Todo.updateTodo(id, todo)
  .then(() =>
    res.redirect('/'))
})

router.get('/delete/:id', function(req, res) {
  const { id } = req.params
  Todo.deleteTodo(id)
  .then(() =>
    res.redirect('/'))
})

router.put('/setRankUp/:id', function(req, res) {
  const { id } = req.params
  const { rank } = req.body
  Todo.setRankUp(id, rank)
  .then(() => {
    res.redirect('/')
  })
})

router.put('/setRankDown/:id', function(req, res) {
  const { id } = req.params
  const { rank } = req.body
  Todo.setRankDown(id, rank)
  .then(() => {
    res.redirect('/')
  })
})



module.exports = router;
