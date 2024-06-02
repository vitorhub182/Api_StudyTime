import { connection } from "../utils/pacotes";

const { DataTypes, Model } = require('sequelize');


export class User extends Model {}

User.init(
  {
    loginId: {
      type: DataTypes.UUID,
      allowNull: false,
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



(async () => {
  await connection.sync({alter:true})
  .then(() => {
    console.log('Tabela User sincronizada');
  })
  .catch(error => {
    console.error('Erro ao sincronizar a tabela User:', error);
  });
})();
