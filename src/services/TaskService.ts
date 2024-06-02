import {Task} from '../models/Task';

interface  Retorno {
    tipo: string;
    description: any;
  }

class TaskService {

    async getTaskList() {
        try {
            const tasks = await Task.findAll();
            const resposta: Retorno = {
                tipo: 'Sucess',
                description: tasks
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

    async getTask(req) {
        const taskId = req.params.task_id;
        try {
            const task = await Task.findByPk(taskId);
            if (task) {
                const resposta: Retorno = {
                    tipo: 'Sucess',
                    description: task
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

    async postRegisterTask(req) {
        const { name, last_name } = req.body;
        try {
            const newTask = await Task.create({ name, last_name });
            const resposta: Retorno = {
                tipo: 'Sucess',
                description: newTask
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

    async deleteTask(req) {
        const taskId = req.params.task_id;
        try {
            const task = await Task.findByPk(taskId);
            if (task) {
                await task.destroy();
                const resposta: Retorno = {
                    tipo: 'Sucess',
                    description: task
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

    async putTask(req) {
        const taskId = req.params.task_id;
        const { name, last_name } = req.body;
        try {
            const task = await Task.findByPk(taskId);
        if (task) {
            await task.update({ name, last_name });
            
            const resposta: Retorno = {
                tipo: 'Sucess',
                description: task
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

export default TaskService;