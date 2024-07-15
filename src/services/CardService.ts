import { Card } from '../models/Card';
import { Request } from 'express';
import { SubTopic } from '../models/SubTopic';

interface Retorno {
  status: string;
  description: any;
}

class CardService {
  async getCardList(req: Request) {
    try {
      console.log(req.params);
      const subtopicId = parseInt(req.params.subtopicId);
      const cards = await Card.findAll({
        where: { SubTopicId: subtopicId },
      });
      console.log(cards);
      const resposta: Retorno = {
        status: 'SUCESS',
        description: cards,
      };
      return resposta;
    } catch (error) {
      console.log(error);
      const resposta: Retorno = {
        status: 'Error',
        description: error,
      };
      return resposta;
    }
  }

  async getCard(req: Request) {
    const cardId = req.params.card_id;
    try {
      const card = await Card.findByPk(cardId);
      if (card) {
        const resposta: Retorno = {
          status: 'SUCESS',
          description: card,
        };
        return resposta;
      } else {
        const resposta: Retorno = {
          status: 'Error',
          description: 'NOT FOUND',
        };
        return resposta;
      }
    } catch (error) {
      const resposta: Retorno = {
        status: 'Error',
        description: error,
      };
      return resposta;
    }
  }

  async postRegisterCard(req: Request) {
    const {
      subtopicId,
      question,
      answer,
    } = req.body;
    try {
      const subTopic = await SubTopic.findByPk(subtopicId);
      if (subTopic) {
        const newCard = await Card.create({
          SubTopicId: parseInt(subtopicId),
          question,
          answer,
        });
        const resposta: Retorno = {
          status: 'SUCESS',
          description: newCard,
        };
        return resposta;
      } else {
        const resposta: Retorno = {
          status: 'Error',
          description: 'NOT FOUND',
        };
        return resposta;
      }
    } catch (error) {
      const resposta: Retorno = {
        status: 'Error',
        description: error,
      };
      return resposta;
    }
  }

  async deleteCard(req: Request) {
    const cardId = parseInt(req.params.cardId);
    try {
      const card = await Card.findByPk(cardId);
      if (card) {
        await card.destroy();
        const resposta: Retorno = {
          status: 'SUCESS',
          description: cardId,
        };
        return resposta;
      } else {
        const resposta: Retorno = {
          status: 'Error',
          description: 'NOT FOUND',
        };
        return resposta;
      }
    } catch (error) {
      const resposta: Retorno = {
        status: 'Error',
        description: error,
      };
      return resposta;
    }
  }

  async putCard(req: Request) {
    const cardId = req.params.card_id;
    const {
      title,
      subtopicId,
      question,
      answer,
      lastDateStudy,
      nextDateStudy,
      cardActivated,
    } = req.body;
    try {
      const card = await Card.findByPk(cardId);
      if (card) {
        await card.update({
          title,
          subtopicId,
          question,
          answer,
          lastDateStudy,
          nextDateStudy,
          cardActivated,
        });

        const resposta: Retorno = {
          status: 'SUCESS',
          description: 'UPDATED',
        };

        return resposta;
      } else {
        const resposta: Retorno = {
          status: 'Error',
          description: 'NOT FOUND',
        };
        return resposta;
      }
    } catch (error) {
      const resposta: Retorno = {
        status: 'Error',
        description: error,
      };
      return resposta;
    }
  }
}

export default CardService;
