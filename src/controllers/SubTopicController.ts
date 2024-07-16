import SubTopicService from '../services/SubTopicService';
const subTopicService = new SubTopicService();
import { Request, Response } from 'express';

class SubTopicController {
  async getSubTopicList(req: Request, res: Response) {
    const resposta = await subTopicService.getSubTopicList(req);
    if (resposta.status == 'SUCESS') {
      res.status(200).json(resposta.description);
    } else {
      console.error('Erro ao obter lista de SubTopics:', resposta);
      res.status(500).json({ error: 'Erro ao obter lista de SubTopics' });
    }
  }

  async getSubTopic(req: Request, res: Response) {
    const resposta = await subTopicService.getSubTopic(req);
    if (resposta.status == 'SUCESS') {
      res.status(200).json(resposta.description);
    } else if (resposta.description == 'NOT FOUND') {
      res.status(404).json({ status: 'SubTopic não encontrado' });
    } else {
      console.error('Erro ao obter SubTopic:', resposta.description);
      res.status(500).json({ error: 'Erro ao obter SubTopic' });
    }
  }

  async postRegisterSubTopic(req: Request, res: Response) {
    const { title, topicId } = req.body;
    if (title != null && topicId != null) {
      const resposta = await subTopicService.postRegisterSubTopic(req);
      if (resposta.status == 'SUCESS') {
        res.status(201).json({
          status: 'Registrado',
          id: resposta.description.id,
        });
      } else if (resposta.description == 'NOT FOUND') {
        res.status(404).json({ status: 'SubTopic não encontrado' });
      } else {
        console.error('Erro ao inserir SubTopic:', resposta.description);
        res.status(500).json({ error: 'Erro ao inserir SubTopic' });
      }
    } else {
      res.status(400).json({ error: 'Parâmetros invalidos' });
    }
  }

  async deleteSubTopic(req: Request, res: Response) {
    const resposta = await subTopicService.deleteSubTopic(req);
    if (resposta.status == 'SUCESS') {
      res.status(200).json({ id: resposta.description });
    } else if (resposta.description == 'NOT FOUND') {
      res.status(404).json({ status: 'Subtopic não encontrada' });
    } else {
      console.error('Erro ao deletar Subtopic:', resposta.description);
      res.status(500).json({ error: 'Erro ao deletar SubTopic' });
    }
  }
  async putSubTopic(req: Request, res: Response) {
    const { title, topicId } = req.body;
    if (title != null && topicId != null) {
      const resposta = await subTopicService.putSubTopic(req);
      if (resposta.status == 'SUCESS') {
        res.status(200).json({ status: 'Atualizado' });
      } else if (resposta.description == 'NOT FOUND') {
        res.status(404).json({ status: 'SubTopic não encontrado' });
      } else {
        console.error('Erro ao atualizar SubTopic:', resposta.description);
        res.status(500).json({ error: 'Erro ao atualizar SubTopic' });
      }
    } else {
      res.status(400).json({ error: 'Parâmetros invalidos' });
    }
  }
}
export default SubTopicController;
