import * as bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import * as jwt from 'jwt-then';
import { setInterval } from 'timers';
import config from '../../config/config';
import getTokenPrice from '../../helpers/tokenPrice';
import Price from './price.model';


const tokens = ['ETH', 'MATIC', 'BNB']
export default class PriceController {

  constructor() {
    const updateInterval = parseInt(config.PRICE_UPDATE_TIME);
    setInterval(async ()=>{
      console.log("Getting token price");
      tokens.forEach(async (token) => {
        await this.realtimePriceUpdate(token);        
      });
    }, updateInterval);
  }
  public tokenPrice = async (req: Request, res: Response): Promise<any> => {
    const { name } = req.query;
    try {
      const tokenPrice = await Price.findOne({ name });
      if (!tokenPrice) {
        return res.status(404).send({
          success: false,
          message: 'Token not found'
        });
      }

      res.status(200).json({
        name, 
        price: tokenPrice["price"], 
        time:tokenPrice["time"]})
    } catch (err) {
      res.status(500).send({
        success: false,
        message: err.toString()
      });
    }
  };

  public realtimePriceUpdate = async (token: string) => {
    try {
      const newTokenPriceStr = await getTokenPrice(token);
      const tokenPrice = new Price({
        name: token,
        price: newTokenPriceStr
      })

      
      const newTokenPrice = await Price.findOneAndReplace({ name: token }, {
        name: token,
        price: newTokenPriceStr
      });
      if(!newTokenPrice) {
        tokenPrice.save();
      }

    } catch (err) {
      console.log(`Failed to save token price: ${err.toString()}`);
    }
  };
}
