DROP DATABASE IF EXISTS todolist;
CREATE DATABASE todolist;

\c todolist;

CREATE TABLE todos (
  id SERIAL PRIMARY KEY,
  todo VARCHAR(140) NOT NULL,
  isComplete BOOLEAN DEFAULT false,
  rank SERIAL
);

INSERT INTO todos (todo, isComplete)
  VALUES ('Create app', false);
