import {getPairInformationByChain} from "dexscreener-api"
const getTokenPrice = async (token)=>{
    let pairAddress;
    let chain;
    switch (token) {
        case "MATIC":
            chain = "ethereum";
            pairAddress = "0x88c095c8ba2c7a1353cf3d21e692c5d4d0f90793";
            break;
        case "ETH":
            chain = "ethereum";
            pairAddress = "0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640";
            break;
        case "BNB":
            chain = "bsc";
            pairAddress = "0x16b9a82891338f9ba80e2d6970fdda79d1eb0dae";
            break;
    
        default:
            return '0';
            break;
    }
    const pairsResponse = await getPairInformationByChain(chain, pairAddress);
    console.log(pairsResponse);
    return pairsResponse.pair.priceUsd;
}

export default getTokenPrice;