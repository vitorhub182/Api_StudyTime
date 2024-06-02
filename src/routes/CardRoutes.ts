import {express} from '../utils/pacotes';
const router = express.Router();
import CardController  from '../controllers/CardController';
const cardController = new CardController();

router.get('/', cardController.getCardList);
router.get('/CARD=:card_id', cardController.getCard);
router.post('/', cardController.postRegisterCard);
router.delete('/CARD=:card_id', cardController.deleteCard);
router.put('/CARD=:card_id', cardController.putCard);

module.exports = router;