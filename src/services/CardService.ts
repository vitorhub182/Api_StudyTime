import {Card} from '../models/Card';

interface  Retorno {
    tipo: string;
    description: any;
  }

class CardService {

    async getCardList() {
        try {
            const cards = await Card.findAll();
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

    async getCard(req) {
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

    async postRegisterCard(req) {
        const { name, last_name } = req.body;
        try {
            const newCard = await Card.create({ name, last_name });
            const resposta: Retorno = {
                tipo: 'Sucess',
                description: newCard
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

    async deleteCard(req) {
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

    async putCard(req) {
        const cardId = req.params.card_id;
        const { name, last_name } = req.body;
        try {
            const card = await Card.findByPk(cardId);
        if (card) {
            await card.update({ name, last_name });
            
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