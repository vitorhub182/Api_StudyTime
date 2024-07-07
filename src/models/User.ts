import { connection } from '../utils/pacotes';
import { Topic } from './Topic';
const { DataTypes, Model } = require('sequelize');

export class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      unique: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: connection,
    modelName: 'User',
    tableName: 'users',
    timestamps: true,
  }
);

User.hasMany(Topic, { onDelete: 'CASCADE' });
Topic.belongsTo(User);



// (async () => {
//   await connection.sync({alter:true, force: true})
//   .then(() => {
//     console.log('Tabela User sincronizada');
//   })
//   .catch(error => {
//     console.error('Erro ao sincronizar a tabela User:', error);
//   });
// })();

