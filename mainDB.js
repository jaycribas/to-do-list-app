var pgp = require('pg-promise')()
var connectionString = 'postgres://localhost:5432/todolist'
var db = pgp(connectionString)

// consider renaming isComplete to toggleComplete
const rankUp = 'UPDATE todos SET rank = rank - 1 WHERE id=$1'

// const rankDown = 'UPDATE todos SET rank = rank + 1 WHERE id=$1'

const Todo = {

  getAllTodos: () => {
    return db.any(`
      SELECT
        *
      FROM
        todos
      ORDER BY
        rank
    `)
  },

  createTodo: (todo) => {
    return db.one(`
      INSERT INTO
        todos (todo)
      VALUES
        ($1)
      RETURNING
        *
    `,
      [ todo ])
  },

  isComplete: (id) => {
    return db.none(`
      UPDATE
        todos
      SET
        iscomplete = NOT iscomplete
      WHERE
        id=$1
    `,
      [ id ])
  },

  updateTodo: (id, todo) => {
    // if (todo.rank)
    return db.any(`
      UPDATE
        todos
      SET
        todo=$2
      WHERE
        id=$1
    `,
      [ id, todo ])
  },

  deleteTodo: (id) => {
    return db.any(`
      DELETE FROM
        todos
      WHERE
        id=$1
    `,
      [ id ])
  },

  setRankUp: (id, rank) => {
    return db.any(`
      UPDATE
        todos
      SET
        rank = rank + 1
      WHERE
        rank >= $1
      `,
      [rank]
    )
    .then(() => {
      return db.any(`
        UPDATE
          todos
        SET
          rank = $1
        WHERE
          id = $2
        RETURNING
          *
      `, [rank, id])
      })
    },

    setRankDown: (id, rank) => {
      return db.any(`
        UPDATE
          todos
        SET
          rank = rank - 1
        WHERE
          rank <= $1
        `,
        [rank]
      )
      .then(() => {
        return db.any(`
          UPDATE
            todos
          SET
            rank = $1
          WHERE
            id = $2
          RETURNING
            *
        `, [rank, id])
        })
     } 

  }


module.exports = { Todo }
