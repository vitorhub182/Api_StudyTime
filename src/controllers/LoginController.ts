import LoginService from "../services/LoginService";
const loginService = new LoginService();
import { Request, Response } from 'express';

class LoginController{

  async getLoginList(req: Request, res: Response) {
    const resposta = await loginService.getLoginList();
    if (resposta.status == "SUCESS"){
      res.status(200).json(resposta);
    }else{
      console.error('Erro ao obter lista de login:', resposta);
      res.status(500).json({ error: 'Erro ao obter lista de login' });
    }
  }

  async getLogin(req: Request, res: Response) {
    const resposta =  await loginService.getLogin(req);
    if (resposta.status == "SUCESS"){
      res.status(200).json(resposta);
    }else if (resposta.description == "NOT FOUND"){
      res.status(404).json({ status: 'Login não encontrado'})
    
    }else{
      console.error('Erro ao obter login:', resposta.description);
      res.status(500).json({ error: 'Erro ao obter login' });
    }
  }

  async  postRegisterLogin(req: Request, res: Response) {
    const {username, password, email} = req.body;
    if((username != null) && (password != null) && (email != null)){
    const resposta = await loginService.postRegisterLogin(req);
    
    if (resposta.status == "SUCESS"){
      res.status(201).json({
        status: 'Registrado',
        id: resposta.description.id
      });
  
    }else if (resposta.description == "NOT FOUND"){
      res.status(404).json({ status: 'Login não encontrado'})
    
    }else{
      console.error('Erro ao inserir o login:', resposta.description);
      res.status(500).json({ error: 'Erro ao inserir o login' });
    }
  }else{
    res.status(400).json({error: "Parâmetros invalidos"});
  }
  }
  
  async deleteLogin(req: Request, res: Response) {
    const resposta = await loginService.deleteLogin(req);
    if (resposta.status == "SUCESS"){
      res.status(200).json({status: "Deletado"});
  
    }else if (resposta.description == "NOT FOUND"){
      res.status(404).json({ status: 'Login não encontrado'})
    
    }else{
      console.error('Erro ao deletar login:', resposta.description);
      res.status(500).json({ error: 'Erro ao deletar login' });
    }
  }
  
  async putLogin(req: Request, res: Response) {
    const {username, password, email} = req.body;
    if((username != null) && (password != null) && (email != null)){
    const resposta = await loginService.putLogin(req);
    if (resposta.status == "SUCESS"){
      res.status(200).json({status: "Atualizado"});
  
    }else if (resposta.description == "NOT FOUND"){
      res.status(404).json({ status: 'Login não encontrado'})
    
    }else{
      console.error('Erro ao atualizar login:', resposta.description);
      res.status(500).json({ error: 'Erro ao atualizar login' });
    }
    
  }else{
    res.status(400).json({error: "Parâmetros invalidos"});
  }
  }
}
export default LoginController;