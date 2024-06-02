const userService = require('../services/UserService');


class UserController{

  async  getUserList(req, res) {
    const resposta = await userService.getUserList(req);
    if (resposta.tipo == "Sucess"){
      res.status(200).json(resposta);
    }else{
      console.error('Erro ao obter lista de usuarios:', resposta);
      res.status(500).json({ error: 'Erro ao obter lista de usuarios' });
    }
  }

  async  getUser(req, res) {
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

  async  postRegisterUser(req, res) {
    if(req.body.description != null && req.body.name != null){
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

  async deleteUser(req, res) {
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

  async putUser(req, res) {
    if(req.body.description != null && req.body.name != null){
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