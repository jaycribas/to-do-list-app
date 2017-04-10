DROP DATABASE IF EXISTS todolist;
CREATE DATABASE todolist;

\c todolist;

CREATE TABLE todos (
  id SERIAL PRIMARY KEY,
  todo TEXT,
  isComplete BOOLEAN
);

INSERT INTO todos (todo, isComplete)
  VALUES ('Create app', false);
