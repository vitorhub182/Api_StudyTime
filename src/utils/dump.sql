CREATE DATABASE IF NOT EXISTS management;

CREATE TABLE courses (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  description VARCHAR(500) NOT NULL
);

INSERT INTO courses (name, description)
VALUES 
  ('Curso de Matemática', 'Um curso introdutório sobre matemática.'),
  ('Curso de História', 'Um curso abrangente sobre história mundial.'),
  ('Curso de Programação', 'Um curso prático de programação com JavaScript.');