import { NextFunction, Request, Response } from 'express';
import config from '../../config/config';
import Price from '../price/price.model';
import generateSignature from '../../helpers/signData'
import { ethers, utils } from 'ethers';


const tokens = ['ETH', 'MATIC', 'BNB']
export default class SignController {
  public signData = async (req: Request, res: Response): Promise<any> => {
    const signedData = res.locals.signature;
    res.status(200).json({signedData});
  };
  public verifyData = async (req: Request, res: Response): Promise<any> => {
    const sig = res.locals.signature;
    const { signedData } = req.query;
    if (sig == signedData) res.status(200).json({ success: true });
    else res.status(200).json({ success: false, sig });
  };
  public sign = async (req: Request, res: Response, next: NextFunction) => {
    const { list, date } = req.query;
  
    // validate query params
    let list_: string | string[] = [];
    // validate query params
    if (list && typeof list === 'string') {
      list_ = list.split(',');
    } else if (list && Array.isArray(list)) {
      // !todo: validate if the list is string[]
      list_ = list as string[];
    } else {
      res.status(500).send({
        success: false,
        message: 'Please use valid token list'
      });

      return;
    }
  
    let date_ = new Date().valueOf();
    if (date && typeof date === 'string' && parseInt(date)) {
      date_ = Math.floor(parseInt(date) / 10_000) * 10_000;
    }
  
    try {
      const response = await Promise.all(
        list_.map((token) =>
          Price.findOne({
            name: token
          }),
        ),
      );

      
  
      const data = response
        .filter((item) => item)
        .map((item) => {
          return [item["name"], ethers.utils.parseEther(item["price"]), date];
        });
  
      // struct Price {
      //   symbol: string;
      //   quote: uint;
      //   time: uint;
      // }
      if (data.length > 0) {
        const signature = await generateSignature(data);
        res.locals.signature = signature;
        console.log(signature);
        next();
        // res.status(200).json(signature);
      } else {
        res.status(500).send({
          success: false,
          message: 'Nothing to sign'
        });

      }
    } catch (err) {
      res.status(500).send({
        success: false,
        message: err.toString()
      });
    }
  };
}
