import { connection } from "../utils/pacotes";

const { DataTypes, Model } = require('sequelize');


export class SubTask extends Model {}

SubTask.init(
  {
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      unique: true,
    },
    title:{
      type: DataTypes.STRING,
      allowNull: false, 
    },
    taskId: {
      type: DataTypes.INTEGER,
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



(async () => {
  await connection.sync({alter:true})
  .then(() => {
    console.log('Tabela SubTask sincronizada');
  })
  .catch(error => {
    console.error('Erro ao sincronizar a tabela SubTask:', error);
  });
})();
