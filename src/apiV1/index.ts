import { Router } from 'express';
import price from './price/price.route';
import sign from './sign/sign.route';

const router: Router = Router();

router.use('/', price);
router.use('/', sign);

export default router;
