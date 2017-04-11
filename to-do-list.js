const addTodo = 'INSERT INTO todos (todo) VALUES ($1) RETURNING *'

const allTodos = 'SELECT * FROM todos ORDER BY id'

const oneTodo = 'SELECT * FROM todos WHERE id=$1'

const isComplete = 'UPDATE todos SET isComplete = true WHERE id=$1'
const notComplete = 'UPDATE todos SET isComplete = false WHERE id=$1'

const editTodo = 'UPDATE todos SET todo=$2 WHERE id=$1'

const deleteTodo = 'DELETE from todos WHERE id=$1'
