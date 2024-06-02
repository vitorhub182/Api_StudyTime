
const { Sequelize, DataTypes, Model } = require('sequelize');
import {sequelize} from '../utils/pacotes';
import {Course} from './Course';

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

// PADRAO ENSINADO
/*
import {
  Table,
  Column,
  Model,
  DataType,
  BelongsToMany,
} from "sequelize-typescript";

import Course from './Course';
import CourseStudent from './CourseStudent';

@Table({
  timestamps: false,
  tableName: "students",
  modelName: "Student",
})
class Student extends Model {
  @Column({
    primaryKey: true,
    type: DataType.BIGINT,
  })
  declare id: number;
  @Column({
    type: DataType.STRING,
  })
  declare name: string
  @Column({
    type: DataType.STRING,
  })
  declare last_name: string
  @BelongsToMany(() => Course, () => CourseStudent)
  courses: Course[];
  
}
export default Student;
*/