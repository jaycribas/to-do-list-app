var express = require('express');
var router = express.Router();
var Todo = require('../mainDB')

/* GET home page. */
// router.get('/', function(req, res, next) {
//   db.allTodos()
//   .then(todos => {
//     res.render('index', { title: 'Express', todos: todos });
//   })
// });
//
// router.post('/', function(req, res) {
//   console.log('body?', req.body)
//   const todo = req.body.todo
//   db.addTodo(todo)
//   .then(() => {
//     res.json({todo: 'todo'})
//   })
// })




router.get('/', function(req, res, next) {
  Todo.Todo.allTodos()
  .then(todos => {
    res.render('index', { title: 'Express', todos: todos });
  })
});

router.post('/', function(req, res) {
  console.log('body?', req.body)
  const todo = req.body.todo
  Todo.Todo.addTodo(todo)
  .then(() =>
    res.redirect('/'))
  })

router.put('/:id', function(req, res) {
  const id = req.params.id
  Todo.Todo.isComplete(id)
  .then(() =>
    res.redirect('/'))
})

router.put('/update/:id', function(req, res) {
  console.log(req.params)
  const { id } = req.params
  console.log(req.body)
  const { todo } = req.body
  Todo.Todo.editTodo(id, todo)
  .then(() =>
    res.redirect('/'))
    .catch(error => {
      res.render('error', {
        error: error,
    })
  })
})


module.exports = router;
