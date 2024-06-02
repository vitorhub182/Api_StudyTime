import express from 'express';
import { Sequelize } from "sequelize";


const sequelize = new Sequelize('management', 'root', 'cefetmg', {
  dialect: 'postgres',
  host: 'localhost',
});

export {
    sequelize,
    express
};