import CardService from "../services/CardService";
const cardService = new CardService();
import { Request, Response } from 'express';

class CardController{

  async  getCardList(req: Request, res: Response) {
    const resposta = await cardService.getCardList();
    if (resposta.tipo == "Sucess"){
      res.status(200).json(resposta);
    }else{
      console.error('Erro ao obter lista de card:', resposta);
      res.status(500).json({ error: 'Erro ao obter lista de card' });
    }
  }

  async getCard(req: Request, res: Response) {
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
  
  async  postRegisterCard(req: Request, res: Response) {
    const {title, subTaskId, cardActivated} = req.body;
    if((title != null) && (subTaskId != null)&& (cardActivated != null)){
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
  
  async deleteCard(req: Request, res: Response) {
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
  
  async putCard(req: Request, res: Response) {
    const {title, subTaskId, cardActivated} = req.body;
    if((title != null) && (subTaskId != null) && (cardActivated != null)){
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