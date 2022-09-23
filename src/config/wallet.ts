import CONFIG from './config';
import { ethers, utils } from 'ethers';

export const serverWallet: ethers.Wallet = new ethers.Wallet(CONFIG.PRIVATE_KEY);
