import { connection } from '../utils/pacotes';

const { DataTypes, Model } = require('sequelize');

export class Card extends Model {}

Card.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
    },
    question: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    answer: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize: connection,
    modelName: 'Card',
    tableName: 'cards',
    timestamps: true,
  }
);


// (async () => {
//   await connection.sync({alter:true, force: true})
//   .then(() => {
//     console.log('Tabela Card sincronizada');
//   })
//   .catch(error => {
//     console.error('Erro ao sincronizar a tabela Card:', error);
//   });
// })();

