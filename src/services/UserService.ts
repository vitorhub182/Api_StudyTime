//import { Login } from '../models/Login';
import { User } from '../models/User';
import { Request, Response } from 'express';
import { connection } from '../utils/pacotes';
const { QueryTypes } = require('sequelize');

interface Retorno {
  status: string;
  description: any;
}

class UserService {

  async getLogin(req: Request) {
    console.log(req.body);
    const { email, password } = req.body;
    try {
      const user = await connection.query(
        'SELECT * FROM public.users u WHERE u.email = ? and u.password = ?',
        {
          replacements: [email, password],
          type: QueryTypes.SELECT,
        }
      );
      console.log(user);
      if (user.length) {
        const resposta: Retorno = {
          status: 'SUCESS',
          description: user[0],
        };
        return resposta;
      } else {
        const resposta: Retorno = {
          status: 'Error',
          description: 'NOT FOUND',
        };
        return resposta;
      }
    } catch (error) {
      const resposta: Retorno = {
        status: 'Error',
        description: error,
      };
      return resposta;
    }
  }

  async getUser(req: Request) {
    const UserId = req.params.user_id;
    try {
      const user = await User.findByPk(UserId);
      if (user) {
        const resposta: Retorno = {
          status: 'SUCESS',
          description: user[0],
        };
        return resposta;
      } else {
        const resposta: Retorno = {
          status: 'Error',
          description: 'NOT FOUND',
        };
        return resposta;
      }
    } catch (error) {
      const resposta: Retorno = {
        status: 'Error',
        description: error,
      };
      return resposta;
    }
  }

  async postRegisterUser(req: Request) {
    const { name, password, email } = req.body;
    try {
      const login = await User;

      if (name && password && email) {
        const newUser = await User.create({
          name,
          password,
          email,
        });

        const resposta: Retorno = {
          status: 'SUCESS',
          description: newUser,
        };

        return resposta;
      } else {
        const resposta: Retorno = {
          status: 'Error',
          description: 'NOT FOUND',
        };
        return resposta;
      }
    } catch (error) {
      const resposta: Retorno = {
        status: 'Error',
        description: error,
      };
      return resposta;
    }
  }

  async deleteUser(req: Request) {
    const UserId = req.params.user_id;
    try {
      const user = await User.findByPk(UserId);
      if (user) {
        await user.destroy();
        const resposta: Retorno = {
          status: 'SUCESS',
          description: user,
        };
        return resposta;
      } else {
        const resposta: Retorno = {
          status: 'Error',
          description: 'NOT FOUND',
        };
        return resposta;
      }
    } catch (error) {
      const resposta: Retorno = {
        status: 'Error',
        description: error,
      };
      return resposta;
    }
  }

  async putUser(req: Request) {
    const UserId = req.params.user_id;
    const { LoginId, fullName, nickName, birthDate } = req.body;
    try {
      const user = await User.findByPk(UserId);
      if (user) {
        await user.update({ LoginId, fullName, nickName, birthDate });

        const resposta: Retorno = {
          status: 'SUCESS',
          description: 'UPDATED',
        };

        return resposta;
      } else {
        const resposta: Retorno = {
          status: 'Error',
          description: 'NOT FOUND',
        };
        return resposta;
      }
    } catch (error) {
      const resposta: Retorno = {
        status: 'Error',
        description: error,
      };
      return resposta;
    }
  }
}

export default UserService;
