import { Router } from 'express';
import Controller from './price.controller';

const price: Router = Router();
const controller = new Controller();

// Fetch token price
price.get('/price', controller.tokenPrice);

export default price;
