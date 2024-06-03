import { connection } from "../utils/pacotes";

const { DataTypes, Model } = require('sequelize');


export class Task extends Model {}

Task.init(
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
    userId: {
      type: DataTypes.UUID,
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



connection.sync({alter:true})
.then(() => {
  console.log('Tabela Task sincronizada');
})
.catch(error => {
  console.error('Erro ao sincronizar a tabela Task:', error);
});


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