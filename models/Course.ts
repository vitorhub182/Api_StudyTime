const { Sequelize, DataTypes, Model } = require('sequelize');
import {sequelize} from '../utils/pacotes';

export class Course extends Model {}

Course.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'Course',
    tableName: 'courses',
    timestamps: false,
  },
);

sequelize.sync({alter:true})
  .then(() => {
    console.log('Tabela Course sincronizada');
  })
  .catch(error => {
    console.error('Erro ao sincronizar a tabela Course:', error);
  });