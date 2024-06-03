import SubTaskService from "../services/SubTaskService";
const subTaskService = new SubTaskService();
import { Request, Response } from 'express';

class SubTaskController{

  async  getSubTaskList(req: Request, res: Response) {
    const resposta = await subTaskService.getSubTaskList();
    if (resposta.tipo == "Sucess"){
      res.status(200).json(resposta);
    }else{
      console.error('Erro ao obter lista de usuarios:', resposta);
      res.status(500).json({ error: 'Erro ao obter lista de usuarios' });
    }
  }

  async  getSubTask(req: Request, res: Response) {
    const resposta =  await subTaskService.getSubTask(req);
    if (resposta.tipo == "Sucess"){
      res.status(200).json(resposta);
    }else if (resposta.description == "NOT FOUND"){
      res.status(404).json({ status: 'Usuario não encontrado'})
    
    }else{
      console.error('Erro ao obter usuario:', resposta.description);
      res.status(500).json({ error: 'Erro ao obter usuario' });
    }
  }

  async postRegisterSubTask(req: Request, res: Response) {
    const {title, taskId} = req.body;
    if((title != null) && (taskId != null)){
      const resposta = await subTaskService.postRegisterSubTask(req);    
      if (resposta.tipo == "Sucess"){
        res.status(201).json(resposta);

      }else if (resposta.description == "NOT FOUND"){
        res.status(404).json({ status: 'Usuario não encontrado'})
      
      }else{
        console.error('Erro ao obter usuario:', resposta.description);
        res.status(500).json({ error: 'Erro ao obter usuario' });
      }
    }else{
    res.status(400).json({Error: "Parâmetros invalidos"});
    }
  }

  async deleteSubTask(req: Request, res: Response) {
    const resposta = await subTaskService.deleteSubTask(req);
    if (resposta.tipo == "Sucess"){
      res.status(200).json(resposta);

    }else if (resposta.description == "NOT FOUND"){
      res.status(404).json({ status: 'Usuario não encontrado'})
    
    }else{
      console.error('Erro ao obter usuario:', resposta.description);
      res.status(500).json({ error: 'Erro ao obter usuario' });
    }
  }
  async putSubTask(req: Request, res: Response) {
    const {title, taskId} = req.body;
    if((title != null) && (taskId != null)){
      const resposta = await subTaskService.putSubTask(req);
      if (resposta.tipo == "Sucess"){
        res.status(200).json(resposta);

      }else if (resposta.description == "NOT FOUND"){
        res.status(404).json({ status: 'Usuario não encontrado'})
      
      }else{
        console.error('Erro ao obter usuario:', resposta.description);
        res.status(500).json({ error: 'Erro ao obter usuario' });
      }

    }else{
      res.status(400).json({Error: "Parâmetros invalidos"});
    }
  }
}
export default SubTaskController;