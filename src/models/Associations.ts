
/*
import {User} from "./User";
import {Login} from "./Login";
import {Task} from "./Task";
import {SubTask} from "./SubTask";
import {Card} from "./Card";
import { connection } from "../utils/pacotes";

//Login.hasOne(User, {foreignKey: 'loginId', as: 'login', onDelete: 'CASCADE'});
Login.hasOne(User, {onDelete: 'CASCADE'});
User.belongsTo(Login, { foreignKey: 'loginId'});

User.hasMany(Task, {onDelete: 'CASCADE'});
Task.belongsTo(User, { foreignKey: 'userId'});

Task.hasMany(SubTask, { onDelete: 'CASCADE'});
SubTask.belongsTo(Task, { foreignKey: 'taskId'});

SubTask.hasMany(Card, {onDelete: 'CASCADE'});
Card.belongsTo(SubTask, { foreignKey: 'subTaskId'});

connection.sync({force:true})
  .then(() => {
    console.log('Tabela User sincronizada');
  })
  .catch(error => {
    console.error('Erro ao sincronizar a tabela User:', error);
  });

  connection.sync({force:true})
  .then(() => {
    console.log('Tabela Task sincronizada');
  })
  .catch(error => {
    console.error('Erro ao sincronizar a tabela Task:', error);
  });
  
  connection.sync({force:true})
  .then(() => {
    console.log('Tabela SubTask sincronizada');
  })
  .catch(error => {
    console.error('Erro ao sincronizar a tabela SubTask:', error);
  });

connection.sync({force:true})
    .then(() => {
        console.log('Tabela Card sincronizada');
    })
    .catch(error => {
        console.error('Erro ao sincronizar a tabela Card:', error);
    });
*/

    
module.exports = { User, Login, Task, SubTask, Card };

