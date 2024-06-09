import { connection } from "../utils/pacotes";
import { Task } from "./Task";

const { DataTypes, Model } = require('sequelize');

export class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      unique: true,
      primaryKey: true,
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nickName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true,
    },
    birthDate:{ 
      type: DataTypes.DATE,
      allowNull: false,
    }
  },
  {
    sequelize: connection, 
    modelName: 'User', 
    tableName: 'users',
    timestamps: true,
  },
);

User.hasMany(Task, { onDelete: 'CASCADE'});
Task.belongsTo(User);


/*

(async () => {
  await connection.sync({alter:true})
  .then(() => {
    console.log('Tabela User sincronizada');
  })
  .catch(error => {
    console.error('Erro ao sincronizar a tabela User:', error);
  });
})();
*/