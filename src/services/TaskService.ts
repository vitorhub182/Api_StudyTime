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
            const tasks = await Task.findAll({ where: {UserId: req.body.UserId},});
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
        const TaskId = req.params.task_id;
        try {
            const task = await Task.findByPk(TaskId);
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
        const {title, UserId, describe, time, lastDateStudy} = req.body;
        try {
            const user = await User.findByPk(UserId);

            if (user) {
                const newTask = await Task.create({ title, UserId, describe, time, lastDateStudy});
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
        const TaskId = req.params.task_id;
        try {
            const task = await Task.findByPk(TaskId);
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
        const TaskId = req.params.task_id;
        const { title, UserId, describe, time, lastDateStudy } = req.body;
        try {
            const task = await Task.findByPk(TaskId);
        if (task) {
            await task.update({ title, UserId, describe, time, lastDateStudy });
            
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