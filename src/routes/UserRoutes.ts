
import {express} from '../utils/pacotes';
import UserController from '../controllers/UserController';
const userController = new UserController();
const router = express.Router();

router.get('/', userController.getUserList);
router.get('/USER=:user_id', userController.getUser);
router.get('/login/', userController.getLogin);
router.post('/', userController.postRegisterUser);
router.delete('/USER=:user_id', userController.deleteUser);
router.put('/USER=:user_id', userController.putUser);

module.exports = router;
