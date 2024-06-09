import SubTaskService from "../services/SubTaskService";
const subTaskService = new SubTaskService();
import { Request, Response } from 'express';

class SubTaskController{

  async  getSubTaskList(req: Request, res: Response) {
    const resposta = await subTaskService.getSubTaskList(req);
    if (resposta.status == "SUCESS"){
      res.status(200).json(resposta);
    }else{
      console.error('Erro ao obter lista de SubTasks:', resposta);
      res.status(500).json({ error: 'Erro ao obter lista de SubTasks' });
    }
  }

  async  getSubTask(req: Request, res: Response) {
    const resposta =  await subTaskService.getSubTask(req);
    if (resposta.status == "SUCESS"){
      res.status(200).json(resposta);
    }else if (resposta.description == "NOT FOUND"){
      res.status(404).json({ status: 'SubTask não encontrado'})
    
    }else{
      console.error('Erro ao obter SubTask:', resposta.description);
      res.status(500).json({ error: 'Erro ao obter SubTask' });
    }
  }

  async postRegisterSubTask(req: Request, res: Response) {
    const {title, TaskId} = req.body;
    if((title != null) && (TaskId != null)){
      const resposta = await subTaskService.postRegisterSubTask(req);    
      if (resposta.status == "SUCESS"){
        res.status(201).json({
          status: 'Registrado',
          id: resposta.description.id});

      }else if (resposta.description == "NOT FOUND"){
        res.status(404).json({ status: 'SubTask não encontrado'})
      
      }else{
        console.error('Erro ao inserir SubTask:', resposta.description);
        res.status(500).json({ error: 'Erro ao inserir SubTask' });
      }
    }else{
    res.status(400).json({error: "Parâmetros invalidos"});
    }
  }

  async deleteSubTask(req: Request, res: Response) {
    const resposta = await subTaskService.deleteSubTask(req);
    if (resposta.status == "SUCESS"){
      res.status(200).json({status: "Deletado"});

    }else if (resposta.description == "NOT FOUND"){
      res.status(404).json({ status: 'Subtask não encontrada'})
    
    }else{
      console.error('Erro ao deletar Subtask:', resposta.description);
      res.status(500).json({ error: 'Erro ao deletar SubTask' });
    }
  }
  async putSubTask(req: Request, res: Response) {
    const {title, TaskId} = req.body;
    if((title != null) && (TaskId != null)){
      const resposta = await subTaskService.putSubTask(req);
      if (resposta.status == "SUCESS"){
        res.status(200).json({status: "Atualizado"});

      }else if (resposta.description == "NOT FOUND"){
        res.status(404).json({ status: 'SubTask não encontrado'})
      
      }else{
        console.error('Erro ao atualizar SubTask:', resposta.description);
        res.status(500).json({ error: 'Erro ao atualizar SubTask' });
      }

    }else{
      res.status(400).json({error: "Parâmetros invalidos"});
    }
  }
}
export default SubTaskController;