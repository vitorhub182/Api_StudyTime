import {Card} from '../models/Card';
import { Request, Response } from 'express';
import { SubTask } from '../models/SubTask';

interface  Retorno {
    tipo: string;
    description: any;
  }

class CardService {

    async getCardList(req: Request) {
        try {
            const cards = await Card.findAll({ where: {SubTaskId: req.body.SubTaskId},});
            const resposta: Retorno = {
                tipo: 'Sucess',
                description: cards
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

    async getCard(req: Request) {
        const cardId = req.params.card_id;
        try {
            const card = await Card.findByPk(cardId);
            if (card) {
                const resposta: Retorno = {
                    tipo: 'Sucess',
                    description: card
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

    async postRegisterCard(req: Request) {
        const { title, SubTaskId, question, answer, lastDateStudy, nextDateStudy, cardActivated} = req.body;
        try {
            const subTask = await SubTask.findByPk(SubTaskId);
            if (subTask) {
                const newCard = await Card.create({ title, SubTaskId, question, answer, lastDateStudy, nextDateStudy, cardActivated });
            const resposta: Retorno = {
                tipo: 'Sucess',
                description: newCard
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

    async deleteCard(req: Request) {
        const cardId = req.params.card_id;
        try {
            const card = await Card.findByPk(cardId);
            if (card) {
                await card.destroy();
                const resposta: Retorno = {
                    tipo: 'Sucess',
                    description: card
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

    async putCard( req: Request) {
        const cardId = req.params.card_id;
        const { title, SubTaskId, question, answer, lastDateStudy, nextDateStudy, cardActivated } = req.body;
        try {
            const card = await Card.findByPk(cardId);
        if (card) {
            await card.update({ title, SubTaskId, question, answer, lastDateStudy, nextDateStudy, cardActivated });
            
            const resposta: Retorno = {
                tipo: 'Sucess',
                description: card
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

export default CardService;