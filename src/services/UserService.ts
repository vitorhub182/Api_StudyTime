import {User} from '../models/User';

interface  Retorno {
    tipo: string;
    description: any;
  }

class UserService {

    async getUserList() {
        try {
            const users = await User.findAll();
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

    async getUser(req) {
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

    async postRegisterUser(req) {
        const { name, description } = req.body;
        try {
            const newUser = await User.create({ name, description });
            const resposta: Retorno = {
                tipo: 'Sucess',
                description: newUser
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

    async deleteUser(req) {
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

    async putUser(req) {
        const userId = req.params.user_id;
        const { name, description } = req.body;
        try {
            const user = await User.findByPk(userId);
        if (user) {
            await user.update({ name, description });
            
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