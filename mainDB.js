var pgp = require('pg-promise')()
var connectionString = 'postgres://localhost:5432/todolist'
var db = pgp(connectionString)



// const allTodos = () => db.any('SELECT * FROM todos ORDER BY id')
//
// const addTodo = () => db.none('INSERT INTO todos (todo) VALUES ($1) RETURNING *')
//
// const oneTodo = () => db.one('SELECT * FROM todos WHERE id=$1')
//
// const isComplete = () => db.none('UPDATE todos SET isComplete = true WHERE id=$1')
// const notComplete = () => db.none('UPDATE todos SET isComplete = false WHERE id=$1')
//
// const editTodo = () => db.one('UPDATE todos SET todo=$2 WHERE id=$1')
//
// const deleteTodo = () => db.one('DELETE from todos WHERE id=$1')
//
// module.exports = {addTodo, allTodos, oneTodo, isComplete, notComplete, editTodo, deleteTodo}



const allTodos = 'SELECT * FROM todos ORDER BY id'

const addTodo = 'INSERT INTO todos (todo) VALUES ($1) RETURNING *'
//
const oneTodo = 'SELECT * FROM todos WHERE id=$1'

const isComplete = 'UPDATE todos SET iscomplete = NOT iscomplete WHERE id=$1'

// const editTodo = 'UPDATE todos SET todo=$2 WHERE id=$1'
//
// const deleteTodo = 'DELETE from todos WHERE id=$1'
//
const Todo = {
  allTodos: () => { return db.any( allTodos ) },
  addTodo: (todo) => { return db.one( addTodo, [ todo ]) },
  oneTodo: (todo) => { return db.one ( oneTodo, [ todo])},
  isComplete: (id) => { return db.none( isComplete, [ id ]) }
  // notComplete: (id) => { return db.none( notComplete, [ id ]) }
}

module.exports = { Todo }
