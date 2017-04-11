var pgp = require('pg-promise')()
var connectionString = 'postgres://localhost:5432/todolist'
var db = pgp(connectionString)


const addTodo = () => db.one('INSERT INTO todos (todo) VALUES ($1) RETURNING *')

const allTodos = () => db.any('SELECT * FROM todos ORDER BY id')

const oneTodo = () => db.one('SELECT * FROM todos WHERE id=$1')

const isComplete = () => db.none('UPDATE todos SET isComplete = true WHERE id=$1')
const notComplete = () => db.none('UPDATE todos SET isComplete = false WHERE id=$1')

const editTodo = () => db.one('UPDATE todos SET todo=$2 WHERE id=$1')

const deleteTodo = () => db.one('DELETE from todos WHERE id=$1')

module.exports = {addTodo, allTodos, oneTodo, isComplete, notComplete, editTodo, deleteTodo}
