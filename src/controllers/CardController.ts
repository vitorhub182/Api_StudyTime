import CardService from '../services/CardService';
const cardService = new CardService();
import { Request, Response } from 'express';

class CardController {
  async getCardList(req: Request, res: Response) {
    console.log(req.params);
    const resposta = await cardService.getCardList(req);
    if (resposta.status == 'SUCESS') {
      res.status(200).json(resposta.description);
    } else {
      console.error('Erro ao obter lista de card:', resposta);
      res.status(500).json({ error: 'Erro ao obter lista de card' });
    }
  }

  async getCard(req: Request, res: Response) {
    const resposta = await cardService.getCard(req);
    if (resposta.status == 'SUCESS') {
      res.status(200).json(resposta);
    } else if (resposta.description == 'NOT FOUND') {
      res.status(404).json({ status: 'Card não encontrado' });
    } else {
      console.error('Erro ao obter card:', resposta.description);
      res.status(500).json({ error: 'Erro ao obter card' });
    }
  }

  async postRegisterCard(req: Request, res: Response) {
    const { question, subtopicId, answer } = req.body;
    if (question != null && subtopicId != null && answer != null) {
      const resposta = await cardService.postRegisterCard(req);

      if (resposta.status == 'SUCESS') {
        res.status(201).json({
          status: 'Registrado',
          id: resposta.description.id,
        });
      } else if (resposta.description == 'NOT FOUND') {
        res.status(404).json({ status: 'Card não encontrado' });
      } else {
        console.error('Erro ao inserir card:', resposta.description);
        res.status(500).json({ error: 'Erro ao inserir card' });
      }
    } else {
      res.status(400).json({ error: 'Parâmetros invalidos' });
    }
  }

  async deleteCard(req: Request, res: Response) {
    const resposta = await cardService.deleteCard(req);
    if (resposta.status == 'SUCESS') {
      res.status(200).json({ id: resposta.description });
    } else if (resposta.description == 'NOT FOUND') {
      res.status(404).json({ status: 'Card não encontrado' });
    } else {
      console.error('Erro ao deletar card:', resposta.description);
      res.status(500).json({ error: 'Erro ao deletar card' });
    }
  }

  async putCard(req: Request, res: Response) {
    const { title, SubtopicId, cardActivated } = req.body;
    if (title != null && SubtopicId != null && cardActivated != null) {
      const resposta = await cardService.putCard(req);
      if (resposta.status == 'SUCESS') {
        res.status(200).json({ status: 'Atualizado' });
      } else if (resposta.description == 'NOT FOUND') {
        res.status(404).json({ status: 'Card não encontrado' });
      } else {
        console.error('Erro ao atualizar card:', resposta.description);
        res.status(500).json({ error: 'Erro ao atualizar card' });
      }
    } else {
      res.status(400).json({ error: 'Parâmetros invalidos' });
    }
  }
}
export default CardController;
