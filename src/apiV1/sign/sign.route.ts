import { Router } from 'express';
import Controller from './sign.controller';

const user: Router = Router();
const controller = new Controller();

// Fetch token price
user.get('/sign', controller.sign, controller.signData);
user.get('/verify', controller.sign, controller.verifyData);

export default user;
