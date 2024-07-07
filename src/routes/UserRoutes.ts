import { express } from '../utils/pacotes';
import UserController from '../controllers/UserController';

const userController = new UserController();
const router = express.Router();

router.get('/:user_id', userController.getUser);
router.post('/login', userController.getLogin);
router.post('/', userController.postRegisterUser);
router.delete('/:user_id', userController.deleteUser);
router.put('/:user_id', userController.putUser);

module.exports = router;
