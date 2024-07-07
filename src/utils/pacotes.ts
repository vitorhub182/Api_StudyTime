import express from 'express';
import { Sequelize } from 'sequelize';

/*
const connection = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
  }  
);
*/

const connection = new Sequelize('study_time', 'root', 'cefetmg', {
  host: 'postgres_study_time',
  dialect: 'postgres',
});

export { connection, express };
