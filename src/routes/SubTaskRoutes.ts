import {express} from '../utils/pacotes';
import SubTaskController from '../controllers/SubTaskController';
const subTaskController = new SubTaskController();
const router = express.Router();

router.get('/', subTaskController.getSubTaskList);
router.get('/SUBTASK=:subTask_id', subTaskController.getSubTask);
router.post('/', subTaskController.postRegisterSubTask);
router.delete('/SUBTASK=:subTask_id', subTaskController.deleteSubTask);
router.put('/SUBTASK=:subTask_id', subTaskController.putSubTask);

module.exports = router;