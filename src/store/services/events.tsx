// import React, { useContext } from "react";
// import { ethers } from "ethers";
// import { StoreContext } from "../store";
// import { ContractContext } from "../contractContext/contractContext";

// const swarmOrange = "color: #dd7200";

// const asciiLogBeeMessage = (message: string) =>
//   console.log(
//     // eslint-disable-next-line
//     "%c \n\
//                  //`\\        __ __    __ _ _ _ __ _ __ ___ \n\
//                  \\\\_/ //    /__\\ \\ /\\ / / _`| '__| '_ ` _ \\\n\
// '-.._.-''-.._.. -(||)(')    \\__ \\ V V  /(_| | |  | | | | | |\n\
//                   '''       |___/\\_/\\_/\\__,_|_|  |_| |_| |_|\n\
// \n\
// " +
//       message,
//     swarmOrange
//   );

// const asciiLogBurnMessage = (message: string) =>
//   console.log(
//     // eslint-disable-next-line
//     "%c \n\
//               ,--.!,     ,-.\n\
//            __/   -*-     \\ /\n\
//         ,d08b.  '|`    >(|||}\n\
//         0088MM           / \\ \n\
//         `9MMP'           `-^\n\
// \n\
// " +
//       message,
//     swarmOrange
//   );

// const asciiLogMintMessage = (message: string) =>
//   console.log(
//     // eslint-disable-next-line
//     "%c \n\
//        (`-=-=-=-=-`) \n\
//       (`-=-=-=-=-=-=`)  ^^       ^^  __         .' '. \n\
// ^^   (`-=-=-=-=-=-=-=`)   ^^       _/__)        .   .       .\n\
//     (`-=-=-=(@)-=-=-=-`)         (8|)_}}- .      .        .\n\
//     (`-=-=-=-=-=-=-=-`)            `\\__)    '. . ' ' .  . '\n\
//      (`-=-=-=-=-=-=-`)  ^^ \n\
//        (`-=-=-=-=-`)\n\
// \n\
// " +
//       message,
//     swarmOrange
//   );

// export const asciiBeeOn = () =>
//   asciiLogBeeMessage(
//     "Worker bees are BUZZZZZING. Transaction notifications turned on"
//   );
// export const asciiBeeOff = () =>
//   asciiLogBeeMessage(
//     "Worker bees are returning to the hive for some ZZZZZZ. Transaction notifications turned off."
//   );
// export const asciiBeeBurn = (
//   txHash: any,
//   amount: string,
//   rewardReceived: string,
//   seller: any,
//   blocknumber: any,
//   minReward: string
// ) =>
//   asciiLogBurnMessage(
//     `\n---   BURN AT BLOCK ${blocknumber}   --- \n TX HASH - ${txHash}\n SELLER - ${seller} \n BZZ - ${amount} \n DAI RECEIVED - ${rewardReceived} \n MIN REWARD - ${minReward} \n --- END OF BURN ---`
//   );
// export const asciiBeeMint = (
//   txHash: any,
//   amount: string,
//   pricePaid: string,
//   buyer: any,
//   blocknumber: any,
//   maxSpend: string
// ) =>
//   asciiLogMintMessage(
//     `\n---   MINT AT BLOCK ${blocknumber} --- \n TX HASH - ${txHash} \n BUYER - ${buyer} \n BZZ - ${amount} \n DAI SPENT - ${pricePaid} \n MAX SPEND - ${maxSpend}  \n --- END OF MINT ---`
//   );

// // This is because EventListener is refreshed by the DOM and we MUST NOT CREATE MORE EVENTLISTENERS
// // PLEASE LORD DO NOT KILL MY INFURA ENDPOINT - NO TOUCHY THIS VALUE
// let booted: boolean = false;

// const EventListener = () => {
//   const { actions } = useContext(StoreContext);
//   const { contracts } = useContext(ContractContext);
//   if (booted) return <></>;

//   if (`${process.env.REACT_APP_INFURA_ENDPOINT}` === null) {
//     console.log("NO INFURA ENDPOINT SET -- CANNOT LOG", swarmOrange);
//     return;
//   }
//   let provider = getProvider();

//   contractsEthers.curveContract.once(
//     "burnTokens",
//     (seller, amount, rewardReceived, minReward, event) => {
//       asciiBeeBurn(
//         event.transactionHash,
//         ethers.utils.formatUnits(amount, 16),
//         ethers.utils.formatUnits(rewardReceived, 18),
//         seller,
//         event.blockNumber,
//         ethers.utils.formatUnits(minReward, 18)
//       );
//       actions.loadConversions(contracts);
//     }
//   );

//   contractsEthers.curveContract.once(
//     "mintTokens",
//     (buyer, amount, pricePaid, maxSpend, event) => {
//       asciiBeeMint(
//         event.transactionHash,
//         ethers.utils.formatUnits(amount, 16),
//         ethers.utils.formatUnits(pricePaid, 18),
//         buyer,
//         event.blockNumber,
//         ethers.utils.formatUnits(maxSpend, 18)
//       );
//       actions.loadConversions(contracts);
//     }
//   );

//   contractsEthers.curveContract.once(
//     "mintTokensTo",
//     (buyer, receiver, amount, pricePaid, maxSpend, event) => {
//       asciiBeeMint(
//         event.transactionHash,
//         ethers.utils.formatUnits(amount, 16),
//         ethers.utils.formatUnits(pricePaid, 18),
//         buyer,
//         event.blockNumber,
//         ethers.utils.formatUnits(maxSpend, 18)
//       );
//       actions.loadConversions(contracts);
//     }
//   );
//   booted = true;
//   return <></>;
// };

// function getProvider() {
//   let provider : ethers.providers.JsonRpcProvider;
//   if (parseInt(`${process.env.REACT_APP_CHAIN_ID}`) !== 1337) {
//     provider = new ethers.providers.JsonRpcProvider(
//       `${process.env.REACT_APP_INFURA_ENDPOINT}`
//     );
//   } else {
//     provider = new ethers.providers.JsonRpcProvider("http://localhost:8545/");
//   }
//   return provider;
// }

export default EventListener;
