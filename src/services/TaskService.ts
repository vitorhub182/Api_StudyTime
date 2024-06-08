import {Task} from '../models/Task';
import { Request, Response } from 'express';
import { User } from '../models/User';

interface  Retorno {
    tipo: string;
    description: any;
  }

class TaskService {

    async getTaskList(req: Request) {
        try {
            const tasks = await Task.findAll({ where: {userId: req.body.userId},});
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

    async getTask(req: Request) {
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

    async postRegisterTask(req: Request) {
        const {title, userId, describe, time, lastDateStudy} = req.body;
        try {
            const user = await User.findByPk(userId);

            if (user) {
                const newTask = await Task.create({ title, userId, describe, time, lastDateStudy});
                const resposta: Retorno = {
                    tipo: 'Sucess',
                    description: newTask
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

    async deleteTask(req: Request) {
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

    async putTask(req: Request) {
        const taskId = req.params.task_id;
        const { title, userId, describe, time, lastDateStudy } = req.body;
        try {
            const task = await Task.findByPk(taskId);
        if (task) {
            await task.update({ title, userId, describe, time, lastDateStudy });
            
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