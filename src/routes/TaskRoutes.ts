import {express} from '../utils/pacotes';
const router = express.Router();
import TaskController from '../controllers/TaskController';

const taskController = new TaskController();

router.get('/', taskController.getTaskList);
router.get('/TASK=:task_id', taskController.getTask);
router.post('/', taskController.postRegisterTask);
router.delete('/TASK=:task_id', taskController.deleteTask);
router.put('/TASK=:task_id', taskController.putTask);

module.exports = router;