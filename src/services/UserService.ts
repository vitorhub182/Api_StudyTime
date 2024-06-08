import { Login } from '../models/Login';
import {User} from '../models/User';
import { Request, Response } from 'express';

interface  Retorno {
    tipo: string;
    description: any;
  }

class UserService {

    async getUserList(req: Request) {
        try {
            const users = await User.findAll({ where: {loginId: req.body.loginId},});
            const resposta: Retorno = {
                tipo: 'Sucess',
                description: users
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

    async getUser(req: Request) {
        const userId = req.params.user_id;
        try {
            const user = await User.findByPk(userId);
            if (user) {
                const resposta: Retorno = {
                    tipo: 'Sucess',
                    description: user
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

    async postRegisterUser(req: Request) {
        const {loginId, fullName, nickName, birthDate} = req.body;
        try {
            
            const login = await Login.findByPk(loginId);

            if (login) {
                const newUser = await User.create({ loginId, fullName, nickName, birthDate });
            
                const resposta: Retorno = {
                    tipo: 'Sucess',
                    description: newUser
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

    async deleteUser(req: Request) {
        const userId = req.params.user_id;
        try {
            const user = await User.findByPk(userId);
            if (user) {
                await user.destroy();
                const resposta: Retorno = {
                    tipo: 'Sucess',
                    description: user
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

    async putUser(req: Request) {
        const userId = req.params.user_id;
        const {loginId, fullName, nickName, birthDate} = req.body;
        try {
            const user = await User.findByPk(userId);
        if (user) {
            await user.update({ loginId, fullName, nickName, birthDate });
            
            const resposta: Retorno = {
                tipo: 'Sucess',
                description: user
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

  export default UserService;