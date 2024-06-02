const taskService = require('../services/TaskService');

class TaskController{

  async  getTaskList(req, res) {
    const resposta = await taskService.getTaskList(req);
    if (resposta.tipo == "Sucess"){
      res.status(200).json(resposta);
    }else{
      console.error('Erro ao obter lista de task:', resposta);
      res.status(500).json({ error: 'Erro ao obter lista de task' });
    }
  }

  async getTask(req, res) {
    const resposta =  await taskService.getTask(req);
    if (resposta.tipo == "Sucess"){
      res.status(200).json(resposta);
    }else if (resposta.description == "NOT FOUND"){
      res.status(404).json({ status: 'Task não encontrado'})
    
    }else{
      console.error('Erro ao obter task:', resposta.description);
      res.status(500).json({ error: 'Erro ao obter task' });
    }
  }
  
  async  postRegisterTask(req, res) {
    if(req.body.last_name != null && req.body.name != null){
    const resposta = await taskService.postRegisterTask(req);
    
    if (resposta.tipo == "Sucess"){
      res.status(201).json(resposta);
  
    }else if (resposta.description == "NOT FOUND"){
      res.status(404).json({ status: 'Task não encontrado'})
    
    }else{
      console.error('Erro ao obter task:', resposta.description);
      res.status(500).json({ error: 'Erro ao obter task' });
    }
  }else{
    res.status(400).json({Error: "Parâmetros invalidos"});
  }
  }
  
  async deleteTask(req, res) {
    const resposta = await taskService.deleteTask(req);
    if (resposta.tipo == "Sucess"){
      res.status(200).json(resposta);
  
    }else if (resposta.description == "NOT FOUND"){
      res.status(404).json({ status: 'Task não encontrado'})
    
    }else{
      console.error('Erro ao obter task:', resposta.description);
      res.status(500).json({ error: 'Erro ao obter task' });
    }
  }
  
  async putTask(req, res) {
    if(req.body.last_name != null && req.body.name != null){
    const resposta = await taskService.putTask(req);
    if (resposta.tipo == "Sucess"){
      res.status(200).json(resposta);
  
    }else if (resposta.description == "NOT FOUND"){
      res.status(404).json({ status: 'Task não encontrado'})
    
    }else{
      console.error('Erro ao obter task:', resposta.description);
      res.status(500).json({ error: 'Erro ao obter task' });
    }
    
  }else{
    res.status(400).json({Error: "Parâmetros invalidos"});
  }
  }
}
export default TaskController;