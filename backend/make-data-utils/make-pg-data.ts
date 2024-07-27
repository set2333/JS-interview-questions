import { Client } from 'pg';
import { questions, questionTypes } from '../src/questions/data';

const client = new Client({
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DB,
  host: process.env.PG_HOST,
  port: +process.env.PG_PORT,
});

client.connect()
  .then(() => client.query(`drop table if exists questions`))
  .then(() => client.query(`drop table if exists questionTypes`))
  .then(() => client.query(`create table questionTypes (
    Id serial primary key,
    Label character varying(30),
    Value character varying(30)
  )`))
  .then(() => client.query(`create table questions (
    Id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    Question character varying(300),
    Answer character varying(2500),
    Type int,
    FOREIGN KEY (Type) REFERENCES questionTypes(Id)
  )`))
  .then(() => Promise.all(
    questionTypes.map(({ id, label }) => client.query('insert into questionTypes (Label, Value) values ($1::text, $2::text)', [label, id]))
  ))
  .then(() => client.query(`select * from questionTypes`))
  .then(({ rows }) => Promise.all(questions.map(({ question, answer, type }) => client.query(
    'insert into questions (Question, Answer, Type) values ($1, $2, $3)',
    [question, answer, rows.find(({ label }) => questionTypes.find(type => type.label === label).id === type)?.id]
  ))))
  .then(() => client.end());
