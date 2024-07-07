import UserService from '../services/UserService';
const userService = new UserService();
import { Request, Response } from 'express';

class UserController {
  async getUser(req: Request, res: Response) {
    const resposta = await userService.getUser(req);
    if (resposta.status == 'SUCESS') {
      res.status(200).json(resposta.description);
    } else if (resposta.description == 'NOT FOUND') {
      res.status(404).json({ status: 'Usuario não encontrado' });
    } else {
      console.error('Erro ao obter usuario:', resposta.description);
      res.status(500).json({ error: 'Erro ao obter usuario' });
    }
  }

  async getLogin(req: Request, res: Response) {
    console.log(req.body)
    const { email, password } = req.body;
    console.log(email, password)
    if (email && password) {
      const resposta = await userService.getLogin(req);
      if (resposta.status == 'SUCESS') {
        res.status(200).json(resposta.description);
      } else if (resposta.description == 'NOT FOUND') {
        res.status(404).json({ status: 'Usuario não encontrado' });
      } else {
        console.error('Erro ao obter usuario:', resposta.description);
        res.status(500).json({ error: 'Erro ao obter usuario' });
      }
    } else {
      res.status(400).json({ error: 'Parâmetros invalidos' });
    }
  }

  async postRegisterUser(req: Request, res: Response) {
    const { name, password, email } = req.body;
    if (
      email != null &&
      password != null &&
      name != null
    ) {
      const resposta = await userService.postRegisterUser(req);

      if (resposta.status == 'SUCESS') {
        res.status(201).json({
          id: resposta.description.id,
        });
      } else if (resposta.description == 'NOT FOUND') {
        res.status(404).json({ status: 'Usuario não encontrado' });
      } else {
        console.error('Erro ao inserir usuario:', resposta.description);
        res.status(500).json({ error: 'Erro ao inserir usuario' });
      }
    } else {
      res.status(400).json({ error: 'Parâmetros invalidos' });
    }
  }

  async deleteUser(req: Request, res: Response) {
    const resposta = await userService.deleteUser(req);
    if (resposta.status == 'SUCESS') {
      res.status(200).json({ status: 'Deletado' });
    } else if (resposta.description == 'NOT FOUND') {
      res.status(404).json({ status: 'Usuario não encontrado' });
    } else {
      console.error('Erro ao deletar usuario:', resposta.description);
      res.status(500).json({ error: 'Erro ao deletar usuario' });
    }
  }

  async putUser(req: Request, res: Response) {
    const { LoginId, fullName, nickName, birthDate } = req.body;
    if (
      LoginId != null &&
      fullName != null &&
      nickName != null &&
      birthDate != null
    ) {
      const resposta = await userService.putUser(req);
      if (resposta.status == 'SUCESS') {
        res.status(200).json({ status: 'Atualizado' });
      } else if (resposta.description == 'NOT FOUND') {
        res.status(404).json({ status: 'Usuario não encontrado' });
      } else {
        console.error('Erro ao atualizar usuario:', resposta.description);
        res.status(500).json({ error: 'Erro ao atualizar usuario' });
      }
    } else {
      res.status(400).json({ error: 'Parâmetros invalidos' });
    }
  }
}
export default UserController;
