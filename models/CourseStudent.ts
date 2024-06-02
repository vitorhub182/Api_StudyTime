
import {Student} from './Student';
import {Course} from './Course';

Course.belongsToMany(Student, { through: 'course_student' });
Student.belongsToMany(Course, { through: 'course_student' });