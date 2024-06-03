import LoginService from "../services/LoginService";
const loginService = new LoginService();
import { Request, Response } from 'express';

class LoginController{

  async getLoginList(req: Request, res: Response) {
    const resposta = await loginService.getLoginList();
    if (resposta.tipo == "Sucess"){
      res.status(200).json(resposta);
    }else{
      console.error('Erro ao obter lista de login:', resposta);
      res.status(500).json({ error: 'Erro ao obter lista de login' });
    }
  }

  async getLogin(req: Request, res: Response) {
    const resposta =  await loginService.getLogin(req);
    if (resposta.tipo == "Sucess"){
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
    
    if (resposta.tipo == "Sucess"){
      res.status(201).json(resposta);
  
    }else if (resposta.description == "NOT FOUND"){
      res.status(404).json({ status: 'Login não encontrado'})
    
    }else{
      console.error('Erro ao obter login:', resposta.description);
      res.status(500).json({ error: 'Erro ao obter login' });
    }
  }else{
    res.status(400).json({Error: "Parâmetros invalidos"});
  }
  }
  
  async deleteLogin(req: Request, res: Response) {
    const resposta = await loginService.deleteLogin(req);
    if (resposta.tipo == "Sucess"){
      res.status(200).json(resposta);
  
    }else if (resposta.description == "NOT FOUND"){
      res.status(404).json({ status: 'Login não encontrado'})
    
    }else{
      console.error('Erro ao obter login:', resposta.description);
      res.status(500).json({ error: 'Erro ao obter login' });
    }
  }
  
  async putLogin(req: Request, res: Response) {
    const {username, password, email} = req.body;
    if((username != null) && (password != null) && (email != null)){
    const resposta = await loginService.putLogin(req);
    if (resposta.tipo == "Sucess"){
      res.status(200).json(resposta);
  
    }else if (resposta.description == "NOT FOUND"){
      res.status(404).json({ status: 'Login não encontrado'})
    
    }else{
      console.error('Erro ao obter login:', resposta.description);
      res.status(500).json({ error: 'Erro ao obter login' });
    }
    
  }else{
    res.status(400).json({Error: "Parâmetros invalidos"});
  }
  }
}
export default LoginController;