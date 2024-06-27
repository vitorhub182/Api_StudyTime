import {SubTask} from '../models/SubTask';
import { Request, Response } from 'express';
import { Task } from '../models/Task';

interface  Retorno {
    status: string;
    description: any;
  }

class SubTaskService {

    async getSubTaskList(req: Request) {
        try {
            const subtasks = await SubTask.findAll({ where: {TaskId: req.body.TaskId},});
            const resposta: Retorno = {
                status: 'SUCESS',
                description: subtasks
              };
            return resposta;
        } catch (error) {
            console.log(error);
            const resposta: Retorno = {
            status: 'Error',
            description: error
            };
            return resposta;
        }
    }

    async getSubTask(req: Request) {
        const subTaskId = req.params.subTask_id;
        try {
            const subtask = await SubTask.findByPk(subTaskId);
            if (subtask) {
                const resposta: Retorno = {
                    status: 'SUCESS',
                    description: subtask
                  };        
                return resposta;
        } else {
            const resposta: Retorno = {
                status: 'Error',
                description: 'NOT FOUND'
              };
              return resposta;
        }
        } catch (error) {
            const resposta: Retorno = {
                status: 'Error',
                description: error
              };
              return resposta;
        }
    }

    async postRegisterSubTask(req: Request) {
        const { title, TaskId, describe, time, lastDateStudy } = req.body;
        try {
            const task = await Task.findByPk(TaskId);

            if (task) {
                const newSubTask = await SubTask.create({ title, TaskId, describe, time, lastDateStudy});
                const resposta: Retorno = {
                    status: 'SUCESS',
                    description: newSubTask
                };
            return resposta;

            } else {
                const resposta: Retorno = {
                    status: 'Error',
                    description: 'NOT FOUND'
                  };
                  return resposta;
            }

        } catch (error) {
            const resposta: Retorno = {
                status: 'Error',
                description: error
              };
              return resposta;
        }
    }

    async deleteSubTask(req: Request) {
        const subtaskId = req.params.subTask_id;
        try {
            const subtask = await SubTask.findByPk(subtaskId);
            if (subtask) {
                await subtask.destroy();
                const resposta: Retorno = {
                    status: 'SUCESS',
                    description: subtask
                  };        
                return resposta;
            } else {
                const resposta: Retorno = {
                    status: 'Error',
                    description: 'NOT FOUND'
                  };
                  return resposta;
            }
        } catch (error) {
            const resposta: Retorno = {
                status: 'Error',
                description: error
              };
              return resposta;
        }
    }

    async putSubTask(req: Request) {
        const subtaskId = req.params.subTask_id;
        const { title, TaskId, describe, time, lastDateStudy } = req.body;
        try {
            const subtask = await SubTask.findByPk(subtaskId);
        if (subtask) {
            await subtask.update({ title, TaskId, describe, time, lastDateStudy });
            
            const resposta: Retorno = {
                status: 'SUCESS',
                description: 'UPDATED'
            };

            return resposta;
        } else {
            const resposta: Retorno = {
                status: 'Error',
                description: 'NOT FOUND'
              };
              return resposta;
        }
        } catch (error) {
            const resposta: Retorno = {
                status: 'Error',
                description: error
              };
              return resposta;
        }
    }
  }

  export default SubTaskService;