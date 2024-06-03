import {express} from '../utils/pacotes';
import CardController  from '../controllers/CardController';
const cardController = new CardController();
const router = express.Router();

router.get('/', cardController.getCardList);
router.get('/CARD=:card_id', cardController.getCard);
router.post('/', cardController.postRegisterCard);
router.delete('/CARD=:card_id', cardController.deleteCard);
router.put('/CARD=:card_id', cardController.putCard);

module.exports = router;