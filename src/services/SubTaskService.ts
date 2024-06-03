import {SubTask} from '../models/SubTask';
import { Request, Response } from 'express';

interface  Retorno {
    tipo: string;
    description: any;
  }

class SubTaskService {

    async getSubTaskList() {
        try {
            const subtasks = await SubTask.findAll();
            const resposta: Retorno = {
                tipo: 'Sucess',
                description: subtasks
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

    async getSubTask(req: Request) {
        const subtaskId = req.params.subtask_id;
        try {
            const subtask = await SubTask.findByPk(subtaskId);
            if (subtask) {
                const resposta: Retorno = {
                    tipo: 'Sucess',
                    description: subtask
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

    async postRegisterSubTask(req: Request) {
        const { title, taskId, describe, time, lastDateStudy } = req.body;
        try {
            const newSubTask = await SubTask.create({ title, taskId, describe, time, lastDateStudy });
            const resposta: Retorno = {
                tipo: 'Sucess',
                description: newSubTask
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

    async deleteSubTask(req: Request) {
        const subtaskId = req.params.subtask_id;
        try {
            const subtask = await SubTask.findByPk(subtaskId);
            if (subtask) {
                await subtask.destroy();
                const resposta: Retorno = {
                    tipo: 'Sucess',
                    description: subtask
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

    async putSubTask(req: Request) {
        const subtaskId = req.params.subtask_id;
        const { title, taskId, describe, time, lastDateStudy } = req.body;
        try {
            const subtask = await SubTask.findByPk(subtaskId);
        if (subtask) {
            await subtask.update({ title, taskId, describe, time, lastDateStudy });
            
            const resposta: Retorno = {
                tipo: 'Sucess',
                description: subtask
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

  export default SubTaskService;