import { IConversions } from "../reducers";
import { ethers } from "ethers";
import {
  getParsedMaxSlippageAmount,
  formatHexEthtoNumber,
  parseToken,
  getDeadlinePlusMin,
  getParsedMinSlippageAmount,
  parseUnits,
  amountToFixedNumber,
} from "../helpers/tokenHelpers";
import { getCost, approve, getReward } from "../helpers/tokenAsyncHelper";
import {
  mintTokenWithDAI,
  mintWithETH,
  burnTokenForETH,
  burnTokenForDai,
  mintToWithETH,
  mintToTokenWithDAI,
} from "../contractServices/mintAndBurn";

const getConversion = async (options) => {
  const { curveContract, ethBrokerContract } = options;

  return {
    priceForOneInDAI: amountToFixedNumber(
      await getCost(curveContract, 1),
      18,
      4
    ),
    priceForOneInETH: amountToFixedNumber(
      await getCost(ethBrokerContract, 1),
      18,
      4
    ),
    rewardForOneInDAI: amountToFixedNumber(
      await getReward(curveContract, 1),
      18,
      4
    ),
    rewardForOneInETH: amountToFixedNumber(
      await getReward(ethBrokerContract, 1),
      18,
      4
    ),
  } as IConversions;
};

export const approveMint = async (options) => {
  const {
    contracts: { daiContract, curveContract },
    amount,
    slippage,
    sender,
  } = options;

  return await getCost(curveContract, amount).then(
    async (cost) =>
      await approve(
        sender,
        daiContract,
        curveContract._address,
        getParsedMaxSlippageAmount(formatHexEthtoNumber(cost), slippage)
      )
  );
};

export const checkMintAllowance = async (options) => {
  const {
    contracts: { daiContract, curveContract },
  } = options;
  const allowance = await daiContract.mehtods
    .allowance(options.context.walletAddress, curveContract.address)
    .call();

  return ethers.utils.parseEther(allowance);
};

export const mintToken = async (options) => {
  const {
    contracts: { curveContract },
    amount,
    slippage,
    sender,
  } = options;

  return await getCost(curveContract, amount).then(
    async (cost) =>
      await mintTokenWithDAI(
        sender,
        curveContract,
        parseToken(amount),
        getParsedMaxSlippageAmount(formatHexEthtoNumber(cost), slippage)
      )
  );
};

export const mintToToken = async (options) => {
  const {
    contracts: { curveContract },
    amount,
    slippage,
    sender,
    receiver,
  } = options;

  return await getCost(curveContract, amount).then(
    async (cost) =>
      await mintToTokenWithDAI(
        sender,
        curveContract,
        parseToken(amount),
        getParsedMaxSlippageAmount(formatHexEthtoNumber(cost), slippage),
        receiver
      )
  );
};

export const mintTokenEth = async (options) => {
  const {
    contracts: { curveContract, ethBrokerContract },
    amount,
    slippage,
    sender,
  } = options;

  return await getCost(curveContract, amount).then((cost) =>
    getCost(ethBrokerContract, amount).then(
      async (ethCostHex) =>
        await mintWithETH(
          sender,
          ethBrokerContract,
          parseToken(amount),
          getParsedMaxSlippageAmount(formatHexEthtoNumber(cost), slippage),
          getParsedMaxSlippageAmount(
            formatHexEthtoNumber(ethCostHex),
            slippage
          ),
          getDeadlinePlusMin(2)
        )
    )
  );
};

export const mintToTokenEth = async (options) => {
  const {
    contracts: { curveContract, ethBrokerContract },
    amount,
    slippage,
    sender,
    receiver,
  } = options;

  return await getCost(curveContract, amount).then((cost) =>
    getCost(ethBrokerContract, amount).then(
      async (ethCostHex) =>
        await mintToWithETH(
          sender,
          ethBrokerContract,
          parseToken(amount),
          getParsedMaxSlippageAmount(formatHexEthtoNumber(cost), slippage),
          getParsedMaxSlippageAmount(
            formatHexEthtoNumber(ethCostHex),
            slippage
          ),
          getDeadlinePlusMin(2),
          receiver
        )
    )
  );
};

export const burnTokenEth = async (options) => {
  const {
    contracts: { curveContract, ethBrokerContract },
    amount,
    slippage,
    sender,
  } = options;

  return await getReward(curveContract, amount).then(
    async (daiRewardAmount) =>
      await burnTokenForETH({
        sender,
        ethBrokeContract: ethBrokerContract,
        tokenAmount: parseToken(amount.toString()),
        minRewardAmount: getParsedMinSlippageAmount(
          formatHexEthtoNumber(daiRewardAmount),
          slippage
        ),
        deadline: getDeadlinePlusMin(2),
      })
  );
};

export const approveBurn = async (options) => {
  const {
    contracts: { curveContract, tokenContract, ethBrokerContract },
    amount,
    currency,
    sender,
  } = options;

  return currency === "ETH"
    ? await approve(
        sender,
        tokenContract,
        ethBrokerContract._address,
        parseToken(amount.toString())
      )
    : await approve(
        sender,
        tokenContract,
        curveContract._address,
        parseUnits(amount.toString(), 18)
      );
};

export const burnToken = async (options) => {
  const {
    contracts: { curveContract },
    amount,
    slippage,
    sender,
  } = options;

  return await getReward(curveContract, amount).then(
    async (sellReward) =>
      await burnTokenForDai(
        sender,
        curveContract,
        parseToken(amount.toString()),
        getParsedMinSlippageAmount(formatHexEthtoNumber(sellReward), slippage)
      )
  );
};

export default getConversion;
