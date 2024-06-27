import TaskService from "../services/TaskService";
const taskService = new TaskService();
import { Request, Response } from 'express';

class TaskController{

  async  getTaskList(req: Request, res: Response) {
    const resposta = await taskService.getTaskList(req);
    if (resposta.status == "SUCESS"){
      res.status(200).json(resposta);
    }else{
      console.error('Erro ao obter lista de task:', resposta);
      res.status(500).json({ error: 'Erro ao obter lista de task' });
    }
  }

  async getTask(req: Request, res: Response) {
    const resposta =  await taskService.getTask(req);
    if (resposta.status == "SUCESS"){
      res.status(200).json(resposta);
    }else if (resposta.description == "NOT FOUND"){
      res.status(404).json({ status: 'Task não encontrado'})
    
    }else{
      console.error('Erro ao obter task:', resposta.description);
      res.status(500).json({ error: 'Erro ao obter task' });
    }
  }
  
  async  postRegisterTask(req: Request, res: Response) {
    const {title, UserId} = req.body;
    if((title != null) && (UserId!= null)){
    const resposta = await taskService.postRegisterTask(req);
    if (resposta.status == "SUCESS"){
      res.status(201).json({
        status: 'Registrado',
        id: resposta.description.id});
  
    }else if (resposta.description == "NOT FOUND"){
      res.status(404).json({ status: 'Task não encontrado'})
    
    }else{
      console.error('Erro ao inserir task:', resposta.description);
      res.status(500).json({ error: 'Erro ao inserir task' });
    }
  }else{
    res.status(400).json({error: "Parâmetros invalidos"});
  }
  }
  
  async deleteTask(req: Request, res: Response) {
    const resposta = await taskService.deleteTask(req);
    if (resposta.status == "SUCESS"){
      res.status(200).json({status: "Deletado"});
  
    }else if (resposta.description == "NOT FOUND"){
      res.status(404).json({ status: 'Task não encontrado'})
    
    }else{
      console.error('Erro ao deletar task:', resposta.description);
      res.status(500).json({ error: 'Erro ao deletar task' });
    }
  }
  
  async putTask(req: Request, res: Response) {
    const {title, UserId} = req.body;
    if((title != null) && (UserId != null)){
    const resposta = await taskService.putTask(req);
    if (resposta.status == "SUCESS"){
      res.status(200).json({status: "Atualizado"});
  
    }else if (resposta.description == "NOT FOUND"){
      res.status(404).json({ status: 'Task não encontrado'})
    
    }else{
      console.error('Erro ao atualizar task:', resposta.description);
      res.status(500).json({ error: 'Erro ao atualizar task' });
    }
    
  }else{
    res.status(400).json({error: "Parâmetros invalidos"});
  }
  }
}
export default TaskController;