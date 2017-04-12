var pgp = require('pg-promise')()
var connectionString = 'postgres://localhost:5432/todolist'
var db = pgp(connectionString)



// const getAllTodos = () => db.any('SELECT * FROM todos ORDER BY id')
//
// const createTodo = () => db.none('INSERT INTO todos (todo) VALUES ($1) RETURNING *')
//
// const oneTodo = () => db.one('SELECT * FROM todos WHERE id=$1')
//
// const isComplete = () => db.none('UPDATE todos SET isComplete = true WHERE id=$1')
// const notComplete = () => db.none('UPDATE todos SET isComplete = false WHERE id=$1')
//
// const updateTodo = () => db.one('UPDATE todos SET todo=$2 WHERE id=$1')
//
// const deleteTodo = () => db.one('DELETE from todos WHERE id=$1')
//
// module.exports = {createTodo, getAllTodos, oneTodo, isComplete, notComplete, updateTodo, deleteTodo}



const getAllTodos = 'SELECT * FROM todos ORDER BY id'

const createTodo = 'INSERT INTO todos (todo) VALUES ($1) RETURNING *'

const isComplete = 'UPDATE todos SET iscomplete = NOT iscomplete WHERE id=$1'

const updateTodo = 'UPDATE todos SET todo=$2 WHERE id=$1'

const deleteTodo = 'DELETE from todos WHERE id=$1'

const Todo = {
  getAllTodos: () => { return db.any( getAllTodos ) },
  createTodo: (todo) => { return db.one( createTodo, [ todo ]) },
  isComplete: (id) => { return db.none( isComplete, [ id ]) },
  updateTodo: (id, todo) => { return db.any( updateTodo, [ id, todo ]) },
  deleteTodo: (id) => { return db.any( deleteTodo, [ id ]) }
}

module.exports = { Todo }
