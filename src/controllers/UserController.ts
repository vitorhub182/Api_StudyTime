import UserService from "../services/UserService";
const userService = new UserService();
import { Request, Response } from 'express';

class UserController{

  async  getUserList(req: Request, res: Response) {
    const resposta = await userService.getUserList(req);
    if (resposta.tipo == "Sucess"){
      res.status(200).json(resposta);
    }else{
      console.error('Erro ao obter lista de usuarios:', resposta);
      res.status(500).json({ error: 'Erro ao obter lista de usuarios' });
    }
  }

  async  getUser(req: Request, res: Response) {
    const resposta =  await userService.getUser(req);
    if (resposta.tipo == "Sucess"){
      res.status(200).json(resposta);
    }else if (resposta.description == "NOT FOUND"){
      res.status(404).json({ status: 'Usuario não encontrado'})
    
    }else{
      console.error('Erro ao obter usuario:', resposta.description);
      res.status(500).json({ error: 'Erro ao obter usuario' });
    }
  }

  async  postRegisterUser(req: Request, res: Response) {
    const {loginId, fullName, nickName, birthDate} = req.body;
    if((loginId != null) && (fullName != null) && (nickName != null) && (birthDate != null)){
    const resposta = await userService.postRegisterUser(req);
    
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

  async deleteUser(req: Request, res: Response) {
    const resposta = await userService.deleteUser(req);
    if (resposta.tipo == "Sucess"){
      res.status(200).json(resposta);

    }else if (resposta.description == "NOT FOUND"){
      res.status(404).json({ status: 'Usuario não encontrado'})
    
    }else{
      console.error('Erro ao obter usuario:', resposta.description);
      res.status(500).json({ error: 'Erro ao obter usuario' });
    }
  }

  async putUser(req: Request, res: Response) {
    const {loginId, fullName, nickName, birthDate} = req.body;
    if((loginId != null) && (fullName != null) && (nickName != null) && (birthDate != null)){
      const resposta = await userService.putUser(req);
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
export default UserController;