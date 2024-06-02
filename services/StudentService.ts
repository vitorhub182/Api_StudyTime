import {Course} from '../models/Course';
import {Student} from '../models/Student';

interface  Retorno {
    tipo: string;
    description: any;
  }

class StudentService {

    async getStudentList() {
        try {
            const students = await Student.findAll();
            const resposta: Retorno = {
                tipo: 'Sucess',
                description: students
              };
            return resposta;
        } catch (error) {
            console.log(error);
            const resposta: Retorno = {
            tipo: 'Error',
            description: error
            };
            return resposta;
        }
    }

    async getStudent(req) {
        const studentId = req.params.student_id;
        try {
            const student = await Student.findByPk(studentId);
            if (student) {
                const resposta: Retorno = {
                    tipo: 'Sucess',
                    description: student
                  };        
                return resposta;
        } else {
            const resposta: Retorno = {
                tipo: 'Error',
                description: 'NOT FOUND'
              };
              return resposta;
        }
        } catch (error) {
            const resposta: Retorno = {
                tipo: 'Error',
                description: error
              };
              return resposta;
        }
    }

    async postRegisterStudent(req) {
        const { name, last_name } = req.body;
        try {
            const newStudent = await Student.create({ name, last_name });
            const resposta: Retorno = {
                tipo: 'Sucess',
                description: newStudent
            };
            return resposta;

        } catch (error) {
            const resposta: Retorno = {
                tipo: 'Error',
                description: error
              };
              return resposta;
        }
    }

    async deleteStudent(req) {
        const studentId = req.params.student_id;
        try {
            const student = await Student.findByPk(studentId);
            if (student) {
                await student.destroy();
                const resposta: Retorno = {
                    tipo: 'Sucess',
                    description: student
                  };        
                return resposta;
            } else {
                const resposta: Retorno = {
                    tipo: 'Error',
                    description: 'NOT FOUND'
                  };
                  return resposta;
            }
        } catch (error) {
            const resposta: Retorno = {
                tipo: 'Error',
                description: error
              };
              return resposta;
        }
    }

    async putStudent(req) {
        const studentId = req.params.student_id;
        const { name, last_name } = req.body;
        try {
            const student = await Student.findByPk(studentId);
        if (student) {
            await student.update({ name, last_name });
            
            const resposta: Retorno = {
                tipo: 'Sucess',
                description: student
            };

            return resposta;
        } else {
            const resposta: Retorno = {
                tipo: 'Error',
                description: 'NOT FOUND'
              };
              return resposta;
        }
        } catch (error) {
            const resposta: Retorno = {
                tipo: 'Error',
                description: error
              };
              return resposta;
        }
    }

    async patchStudent(req, res) {
        const studentId = req.params.student_id;
        const { name, last_name } = req.body;
        try {
            const student = await Student.findByPk(studentId);
            if (student) {
                await student.update({ name, last_name });
                const resposta: Retorno = {
                    tipo: 'Sucess',
                    description: student
                  };
                  return resposta;
            } else {
                const resposta: Retorno = {
                    tipo: 'Error',
                    description: 'NOT FOUND'
                  };
                  return resposta;
            }
        } catch (error) {
            const resposta: Retorno = {
                tipo: 'Error',
                description: error
              };
              return resposta;
        }
    }


    async getStudentRegister(req) {
        const studentId = req.params.student_id;
        try {
            const listCourse = await Student.findOne({
                where: { id: studentId },
                include: Course,
              });
            if (listCourse) {
                const resposta: Retorno = {
                    tipo: 'Sucess',
                    description: listCourse
                  };        
                return resposta;
        } else {
            const resposta: Retorno = {
                tipo: 'Error',
                description: 'NOT FOUND'
              };
              return resposta;
        }
        } catch (error) {
            const resposta: Retorno = {
                tipo: 'Error',
                description: error
              };
              return resposta;
        }
    }
  }

module.exports = new StudentService();