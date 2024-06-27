import {express} from '../utils/pacotes';
import TaskController from '../controllers/TaskController';
const taskController = new TaskController();
const router = express.Router();

router.get('/', taskController.getTaskList);
router.get('/TASK=:task_id', taskController.getTask);
router.post('/', taskController.postRegisterTask);
router.delete('/TASK=:task_id', taskController.deleteTask);
router.put('/TASK=:task_id', taskController.putTask);

module.exports = router;