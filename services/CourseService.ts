import {Course} from '../models/Course';
import {Student} from '../models/Student';

interface  Retorno {
    tipo: string;
    description: any;
  }

class CourseService {

    async getCourseList() {
        try {
            const courses = await Course.findAll();
            const resposta: Retorno = {
                tipo: 'Sucess',
                description: courses
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

    async getCourse(req) {
        const courseId = req.params.course_id;
        try {
            const course = await Course.findByPk(courseId);
            if (course) {
                const resposta: Retorno = {
                    tipo: 'Sucess',
                    description: course
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

    async postRegisterCourse(req) {
        const { name, description } = req.body;
        try {
            const newCourse = await Course.create({ name, description });
            const resposta: Retorno = {
                tipo: 'Sucess',
                description: newCourse
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

    async deleteCourse(req) {
        const courseId = req.params.course_id;
        try {
            const course = await Course.findByPk(courseId);
            if (course) {
                await course.destroy();
                const resposta: Retorno = {
                    tipo: 'Sucess',
                    description: course
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

    async putCourse(req) {
        const courseId = req.params.course_id;
        const { name, description } = req.body;
        try {
            const course = await Course.findByPk(courseId);
        if (course) {
            await course.update({ name, description });
            
            const resposta: Retorno = {
                tipo: 'Sucess',
                description: course
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

    async patchCourse(req, res) {
        const courseId = req.params.course_id;
        const { name, description } = req.body;
        try {
            const course = await Course.findByPk(courseId);
            if (course) {
                await course.update({ name, description });
                const resposta: Retorno = {
                    tipo: 'Sucess',
                    description: course
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

    async postRegister(req) {
        const { id_aluno, id_curso } = req.body;
        try {
            const student = await Student.findByPk(id_aluno);
            const course = await Course.findByPk(id_curso);
            if (student && course) {
                const registration = await course.addStudent(student,{ through: { selfGranted: false } });
            const resposta: Retorno = {
                tipo: 'Sucess',
                description: registration
            };
            return resposta;
            }else {
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

    async getCourseRegister(req) {
        const courseId = req.params.course_id;
        try {
            const listStudent = await Course.findOne({
                where: { id: courseId },
                include: Student,
              });
            if (listStudent) {
                const resposta: Retorno = {
                    tipo: 'Sucess',
                    description: listStudent 
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

module.exports = new CourseService();