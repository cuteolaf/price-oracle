import { ethers, utils } from 'ethers';
import {serverWallet as wallet} from '../config/wallet';
const signData = async (data) =>{

    const abiCoder = new utils.AbiCoder();
    const serializedData = abiCoder.encode(['tuple(string, uint256, uint256)[]'], [data]);
    const signature = await wallet.signMessage(serializedData);

    return signature;
}

export default signData;