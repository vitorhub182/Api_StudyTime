/*
import { connection } from "../utils/pacotes";
import { User } from "./User";
const { DataTypes, Model } = require('sequelize');

export class Login extends Model {}

Login.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: connection,
    modelName: 'Login',
    tableName: 'logins',
    timestamps: true,
  }
);

Login.hasOne(User, { onDelete: 'CASCADE' });

connection.sync({alter:true})
.then(() => {
  console.log('Tabelas sincronizadas');
})
.catch(error => {
  console.error('Erro na sincronização das tabelas:', error);
});
*/
