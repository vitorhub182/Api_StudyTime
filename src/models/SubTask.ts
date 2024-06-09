import { connection } from "../utils/pacotes";
import { Card } from "./Card";

const { DataTypes, Model } = require('sequelize');


export class SubTask extends Model {}

SubTask.init(
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
    modelName: 'SubTask', 
    tableName: 'subtasks',
    timestamps: true,
  },
);

SubTask.hasMany(Card, { onDelete: 'CASCADE'});
Card.belongsTo(SubTask);


/*
(async () => {
  await connection.sync({alter:true})
  .then(() => {
    console.log('Tabela SubTask sincronizada');
  })
  .catch(error => {
    console.error('Erro ao sincronizar a tabela SubTask:', error);
  });
})();
*/