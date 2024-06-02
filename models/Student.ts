
const { Sequelize, DataTypes, Model } = require('sequelize');
import {sequelize} from '../utils/pacotes';

export class Student extends Model {}

Student.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize, 
    modelName: 'Student', 
    tableName: 'students',
    timestamps: false,
  },
);
sequelize.sync({alter:true})
.then(() => {
  console.log('Tabela Student sincronizada');
})
.catch(error => {
  console.error('Erro ao sincronizar a tabela Student:', error);
});