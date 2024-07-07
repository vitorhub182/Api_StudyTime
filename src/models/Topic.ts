import { connection } from '../utils/pacotes';
import { SubTopic } from './SubTopic';

const { DataTypes, Model } = require('sequelize');

export class Topic extends Model {}

Topic.init(
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
    modelName: 'Topic',
    tableName: 'topics',
    timestamps: true,
  }
);

Topic.hasMany(SubTopic, { onDelete: 'CASCADE' });
SubTopic.belongsTo(Topic);


// (async () => {
//   await connection.sync({alter:true, force: true})
//   .then(() => {
//     console.log('Tabela Topic sincronizada');
//   })
//   .catch(error => {
//     console.error('Erro ao sincronizar a tabela Topic:', error);
//   });
// })();
