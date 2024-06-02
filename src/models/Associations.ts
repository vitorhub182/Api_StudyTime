import {User} from "./User";
import {Login} from "./Login";
import {Task} from "./Task";
import {SubTask} from "./SubTask";
import {Card} from "./Card";


Login.hasOne(User, {foreignKey: 'loginId', as: 'login'});
User.belongsTo(Login, { foreignKey: 'loginId', as: 'user'});

User.hasMany(Task, {foreignKey: 'userId', as: 'user'});
Task.belongsTo(User, { foreignKey: 'userId', as: 'task'});

Task.hasMany(SubTask, {foreignKey: 'taskId', as: 'task'});
SubTask.belongsTo(Task, { foreignKey: 'taskId', as: 'subTask'});

SubTask.hasMany(Card, {foreignKey: 'subTaskId', as: 'subTask'});
Card.belongsTo(SubTask, { foreignKey: 'subTaskId', as: 'card'});

module.exports = { User, Login, Task, SubTask, Card };