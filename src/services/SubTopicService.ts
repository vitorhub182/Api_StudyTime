import { SubTopic } from '../models/SubTopic';
import { Request } from 'express';
import { Topic } from '../models/Topic';

interface Retorno {
  status: string;
  description: any;
}

class SubTopicService {
  async getSubTopicList(req: Request) {
    try {
      const topicId = parseInt(req.params.topicId);
      const subtopics = await SubTopic.findAll({
        where: { TopicId: topicId },
      });
      const resposta: Retorno = {
        status: 'SUCESS',
        description: subtopics,
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

  async getSubTopic(req: Request) {
    const subtopicId = req.params.subTopic_id;
    try {
      const subtopic = await SubTopic.findByPk(subtopicId);
      if (subtopic) {
        const resposta: Retorno = {
          status: 'SUCESS',
          description: subtopic,
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

  async postRegisterSubTopic(req: Request) {
    const { title, topicId, time, lastDateStudy } = req.body;
    try {
      const topic = await Topic.findByPk(topicId);
      if (topic) {
        const newSubTopic = await SubTopic.create({
          title,
          TopicId: parseInt(topicId),
          time,
          lastDateStudy,
        });
        const resposta: Retorno = {
          status: 'SUCESS',
          description: newSubTopic,
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

  async deleteSubTopic(req: Request) {
    const subtopicId = req.params.subTopic_id;
    try {
      const subtopic = await SubTopic.findByPk(subtopicId);
      if (subtopic) {
        await subtopic.destroy();
        const resposta: Retorno = {
          status: 'SUCESS',
          description: subtopic,
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

  async putSubTopic(req: Request) {
    const subtopicId = req.params.subTopic_id;
    const { title, topicId, describe, time, lastDateStudy } = req.body;
    try {
      const subtopic = await SubTopic.findByPk(subtopicId);
      if (subtopic) {
        await subtopic.update({ title, topicId, describe, time, lastDateStudy });

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

export default SubTopicService;
