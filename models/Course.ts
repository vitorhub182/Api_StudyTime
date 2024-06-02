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

 // PADRAO ENSINADO
/*
import {
  Table,
  Column,
  Model,
  DataType,
  BelongsToMany,
} from "sequelize-typescript";

import Student from './Student';
import CourseStudent from './CourseStudent';
import { InferAttributes, InferCreationAttributes } from "sequelize";

@Table({
  timestamps: false,
  tableName: "courses",
  modelName: "Course",
})
class Course extends Model<InferAttributes<Course>, InferCreationAttributes<Course>> {
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
  declare description: string
  @BelongsToMany(() => Student, () => CourseStudent)
  students: Student[];
}
export default Course;
*/