import { express } from '../utils/pacotes';
import CardController from '../controllers/CardController';
const cardController = new CardController();
const router = express.Router();

router.get('/:subtopicId', cardController.getCardList);
// router.get('/:cardId', cardController.getCard);
router.post('/', cardController.postRegisterCard);
router.delete('/:cardId', cardController.deleteCard);
router.put('/:cardId', cardController.putCard);

module.exports = router;
