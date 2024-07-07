import TopicService from '../services/TopicService';
const topicService = new TopicService();
import { Request, Response } from 'express';

class TopicController {
  async getTopicList(req: Request, res: Response) {
    const resposta = await topicService.getTopicList(req);
    if (resposta.status == 'SUCESS') {
      res.status(200).json(resposta.description);
    } else {
      console.error('Erro ao obter lista de topic:', resposta);
      res.status(500).json({ error: 'Erro ao obter lista de topic' });
    }
  }

  async getTopic(req: Request, res: Response) {
    const resposta = await topicService.getTopic(req);
    if (resposta.status == 'SUCESS') {
      res.status(200).json(resposta.description);
    } else if (resposta.description == 'NOT FOUND') {
      res.status(404).json({ status: 'Topic não encontrado' });
    } else {
      console.error('Erro ao obter topic:', resposta.description);
      res.status(500).json({ error: 'Erro ao obter topic' });
    }
  }

  async postRegisterTopic(req: Request, res: Response) {
    const { title, userId } = req.body;
    if (title != null && userId != null) {
      const resposta = await topicService.postRegisterTopic(req);
      if (resposta.status == 'SUCESS') {
        res.status(201).json({
          status: 'Registrado',
          id: resposta.description.id,
        });
      } else if (resposta.description == 'NOT FOUND') {
        res.status(404).json({ status: 'Topic não encontrado' });
      } else {
        console.error('Erro ao inserir topic:', resposta.description);
        res.status(500).json({ error: 'Erro ao inserir topic' });
      }
    } else {
      res.status(400).json({ error: 'Parâmetros invalidos' });
    }
  }

  async deleteTopic(req: Request, res: Response) {
    const resposta = await topicService.deleteTopic(req);
    if (resposta.status == 'SUCESS') {
      res.status(200).json({ status: 'Deletado' });
    } else if (resposta.description == 'NOT FOUND') {
      res.status(404).json({ status: 'Topic não encontrado' });
    } else {
      console.error('Erro ao deletar topic:', resposta.description);
      res.status(500).json({ error: 'Erro ao deletar topic' });
    }
  }

  async putTopic(req: Request, res: Response) {
    const { title, UserId } = req.body;
    if (title != null && UserId != null) {
      const resposta = await topicService.putTopic(req);
      if (resposta.status == 'SUCESS') {
        res.status(200).json({ status: 'Atualizado' });
      } else if (resposta.description == 'NOT FOUND') {
        res.status(404).json({ status: 'Topic não encontrado' });
      } else {
        console.error('Erro ao atualizar topic:', resposta.description);
        res.status(500).json({ error: 'Erro ao atualizar topic' });
      }
    } else {
      res.status(400).json({ error: 'Parâmetros invalidos' });
    }
  }
}
export default TopicController;
