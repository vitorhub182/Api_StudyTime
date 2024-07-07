import { express } from '../utils/pacotes';
import SubTopicController from '../controllers/SubTopicController';
const subTopicController = new SubTopicController();
const router = express.Router();

router.get('/:topicId', subTopicController.getSubTopicList);
// router.get('/:subTopic_id', subTopicController.getSubTopic);
router.post('/', subTopicController.postRegisterSubTopic);
router.delete('/:subTopic_id', subTopicController.deleteSubTopic);
router.put('/:subTopic_id', subTopicController.putSubTopic);

module.exports = router;
