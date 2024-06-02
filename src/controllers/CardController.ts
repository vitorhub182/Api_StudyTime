const cardService = require('../services/CardService');

class CardController{

  async  getCardList(req, res) {
    const resposta = await cardService.getCardList(req);
    if (resposta.tipo == "Sucess"){
      res.status(200).json(resposta);
    }else{
      console.error('Erro ao obter lista de card:', resposta);
      res.status(500).json({ error: 'Erro ao obter lista de card' });
    }
  }

  async getCard(req, res) {
    const resposta =  await cardService.getCard(req);
    if (resposta.tipo == "Sucess"){
      res.status(200).json(resposta);
    }else if (resposta.description == "NOT FOUND"){
      res.status(404).json({ status: 'Card não encontrado'})
    
    }else{
      console.error('Erro ao obter card:', resposta.description);
      res.status(500).json({ error: 'Erro ao obter card' });
    }
  }
  
  async  postRegisterCard(req, res) {
    if(req.body.last_name != null && req.body.name != null){
    const resposta = await cardService.postRegisterCard(req);
    
    if (resposta.tipo == "Sucess"){
      res.status(201).json(resposta);
  
    }else if (resposta.description == "NOT FOUND"){
      res.status(404).json({ status: 'Card não encontrado'})
    
    }else{
      console.error('Erro ao obter card:', resposta.description);
      res.status(500).json({ error: 'Erro ao obter card' });
    }
  }else{
    res.status(400).json({Error: "Parâmetros invalidos"});
  }
  }
  
  async deleteCard(req, res) {
    const resposta = await cardService.deleteCard(req);
    if (resposta.tipo == "Sucess"){
      res.status(200).json(resposta);
  
    }else if (resposta.description == "NOT FOUND"){
      res.status(404).json({ status: 'Card não encontrado'})
    
    }else{
      console.error('Erro ao obter card:', resposta.description);
      res.status(500).json({ error: 'Erro ao obter card' });
    }
  }
  
  async putCard(req, res) {
    if(req.body.last_name != null && req.body.name != null){
    const resposta = await cardService.putCard(req);
    if (resposta.tipo == "Sucess"){
      res.status(200).json(resposta);
  
    }else if (resposta.description == "NOT FOUND"){
      res.status(404).json({ status: 'Card não encontrado'})
    
    }else{
      console.error('Erro ao obter card:', resposta.description);
      res.status(500).json({ error: 'Erro ao obter card' });
    }
    
  }else{
    res.status(400).json({Error: "Parâmetros invalidos"});
  }
  }
}
export default CardController;