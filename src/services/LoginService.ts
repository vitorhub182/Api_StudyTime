import {Login} from '../models/Login';

interface  Retorno {
    tipo: string;
    description: any;
  }

class LoginService {

    async getLoginList() {
        try {
            const logins = await Login.findAll();
            const resposta: Retorno = {
                tipo: 'Sucess',
                description: logins
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

    async getLogin(req) {
        const loginId = req.params.login_id;
        try {
            const login = await Login.findByPk(loginId);
            if (login) {
                const resposta: Retorno = {
                    tipo: 'Sucess',
                    description: login
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

    async postRegisterLogin(req) {
        const { name, last_name } = req.body;
        try {
            const newLogin = await Login.create({ name, last_name });
            const resposta: Retorno = {
                tipo: 'Sucess',
                description: newLogin
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

    async deleteLogin(req) {
        const loginId = req.params.login_id;
        try {
            const login = await Login.findByPk(loginId);
            if (login) {
                await login.destroy();
                const resposta: Retorno = {
                    tipo: 'Sucess',
                    description: login
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

    async putLogin(req) {
        const loginId = req.params.login_id;
        const { name, last_name } = req.body;
        try {
            const login = await Login.findByPk(loginId);
        if (login) {
            await login.update({ name, last_name });
            
            const resposta: Retorno = {
                tipo: 'Sucess',
                description: login
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

export default LoginService;