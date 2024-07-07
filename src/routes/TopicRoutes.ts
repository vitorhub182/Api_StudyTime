import { express } from '../utils/pacotes';
import TopicController from '../controllers/TopicController';
const topicController = new TopicController();
const router = express.Router();

router.get('/:userId', topicController.getTopicList);
// router.get('/:topic_id', topicController.getTopic);
router.post('/', topicController.postRegisterTopic);
router.delete('/:topic_id', topicController.deleteTopic);
router.put('/:topic_id', topicController.putTopic);

module.exports = router;
