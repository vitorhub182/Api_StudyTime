import { connection } from "../utils/pacotes";

const { DataTypes, Model } = require('sequelize');


export class Card extends Model {}

Card.init(
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
    subTaskId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    question: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    answer: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    lastDateStudy:{ 
      type: DataTypes.DATE,
      allowNull: true,
    },
    nextDateStudy:{ 
      type: DataTypes.DATE,
      allowNull: true,
    },
    cardActivated:{
      type: DataTypes.BOOLEAN,
      allowNull: false,
    }
  },
  {
    sequelize: connection, 
    modelName: 'Card', 
    tableName: 'cards',
    timestamps: true,
  },
);


connection.sync({force:true})
    .then(() => {
        console.log('Tabela Card sincronizada');
    })
    .catch(error => {
        console.error('Erro ao sincronizar a tabela Card:', error);
    });

/*
(async () => {
  await connection.sync({alter:true})
  .then(() => {
    console.log('Tabela Card sincronizada');
  })
  .catch(error => {
    console.error('Erro ao sincronizar a tabela Card:', error);
  });
})();

*/
