import { ForeignKey } from "../node_modules/sequelize-typescript/dist/index";
import { connection } from "../utils/pacotes";
import { SubTask } from "./SubTask";

const { DataTypes, Model } = require('sequelize');


export class Task extends Model {}

Task.init(
  {
    id:{
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
    },
    title:{
      type: DataTypes.STRING,
      allowNull: false, 
    },
    describe: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    time: {
      type: DataTypes.TIME,
      allowNull: true,
    },
    lastDateStudy:{ 
      type: DataTypes.DATE,
      allowNull: true,
    }
  },
  {
    sequelize: connection, 
    modelName: 'Task', 
    tableName: 'tasks',
    timestamps: true,
  },
);

Task.hasMany(SubTask, {  onDelete: 'CASCADE'});
SubTask.belongsTo(Task);

/*
(async () => {
  await connection.sync({alter:true})
  .then(() => {
    console.log('Tabela Task sincronizada');
  })
  .catch(error => {
    console.error('Erro ao sincronizar a tabela Task:', error);
  });
})();
*/