import {User} from "./User";
import {Login} from "./Login";
import {Task} from "./Task";
import {SubTask} from "./SubTask";
import {Card} from "./Card";
import { connection } from "../utils/pacotes";

Login.hasOne(User, {foreignKey: 'loginId', as: 'login', onDelete: 'CASCADE'});
User.belongsTo(Login, { foreignKey: 'loginId', as: 'user'});

User.hasMany(Task, {foreignKey: 'userId', as: 'user', onDelete: 'CASCADE'});
Task.belongsTo(User, { foreignKey: 'userId', as: 'task'});

Task.hasMany(SubTask, {foreignKey: 'taskId', as: 'task', onDelete: 'CASCADE'});
SubTask.belongsTo(Task, { foreignKey: 'taskId', as: 'subTask'});

SubTask.hasMany(Card, {foreignKey: 'subTaskId', as: 'subTask', onDelete: 'CASCADE'});
Card.belongsTo(SubTask, { foreignKey: 'subTaskId', as: 'card'});




    
module.exports = { User, Login, Task, SubTask, Card };

