import { connection } from "../utils/pacotes";
import { User } from "./User";
const { DataTypes, Model } = require('sequelize');
const { v4: uuidv4 } = require('uuid');

export class Login extends Model {}

Login.init(
  {
    id:{
      type: DataTypes.UUID,
      defaultValue: uuidv4,
      allowNull: false,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    }
  },
  {
    sequelize: connection,
    modelName: 'Login',
    tableName: 'logins',
    timestamps: true,
  },
);

Login.beforeCreate(login => login.id = uuidv4());


Login.hasOne(User, { onDelete: 'CASCADE'});
User.belongsTo(Login);


connection.sync({alter:true})
.then(() => {
  console.log('Tabelas sincronizadas');
})
.catch(error => {
  console.error('Erro na sincronização das tabelas:', error);
});


/*
(async () => {
  await connection.sync({alter:true})
  .then(() => {
    console.log('Tabela Login sincronizada');
  })
  .catch(error => {
    console.error('Erro ao sincronizar a tabela Login:', error);
  });
})();
*/