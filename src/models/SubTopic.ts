import { connection } from '../utils/pacotes';
import { Card } from './Card';

const { DataTypes, Model } = require('sequelize');

export class SubTopic extends Model {}

SubTopic.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    time: {
      type: DataTypes.TIME,
      allowNull: true,
    },
    lastDateStudy: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    sequelize: connection,
    modelName: 'SubTopic',
    tableName: 'subtopics',
    timestamps: true,
  }
);

SubTopic.hasMany(Card, { onDelete: 'CASCADE' });
Card.belongsTo(SubTopic);


// (async () => {
//   await connection.sync({alter:true, force: true})
//   .then(() => {
//     console.log('Tabela SubTopic sincronizada');
//   })
//   .catch(error => {
//     console.error('Erro ao sincronizar a tabela SubTopic:', error);
//   });
// })();

