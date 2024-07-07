import { Request } from 'express';
import { User } from '../models/User';
import { Topic } from '../models/Topic';

interface Retorno {
  status: string;
  description: any;
}

class TopicService {
  async getTopicList(req: Request) {
    try {
      const userId = parseInt(req.params.userId);
      const topics = await Topic.findAll({ where: { UserId: userId } });
      const resposta: Retorno = {
        status: 'SUCESS',
        description: topics,
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

  async getTopic(req: Request) {
    const TopicId = req.params.topic_id;
    try {
      const topic = await Topic.findByPk(TopicId);
      if (topic) {
        const resposta: Retorno = {
          status: 'SUCESS',
          description: topic,
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

  async postRegisterTopic(req: Request) {
    const { title, userId, describe, time, lastDateStudy } = req.body;
    try {
      const user = await User.findByPk(userId);

      if (user) {
        const newTopic = await Topic.create({
          title,
          UserId: parseInt(userId),
          describe,
          time,
          lastDateStudy,
        });
        const resposta: Retorno = {
          status: 'SUCESS',
          description: newTopic,
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

  async deleteTopic(req: Request) {
    const TopicId = req.params.topic_id;
    try {
      const topic = await Topic.findByPk(TopicId);
      if (topic) {
        await topic.destroy();
        const resposta: Retorno = {
          status: 'SUCESS',
          description: topic,
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

  async putTopic(req: Request) {
    const TopicId = req.params.topic_id;
    const { title, UserId, describe, time, lastDateStudy } = req.body;
    try {
      const topic = await Topic.findByPk(TopicId);
      if (topic) {
        await topic.update({ title, UserId, describe, time, lastDateStudy });

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

export default TopicService;
