import { BigNumber } from "ethers";

// Contract Function Calls
export async function burnTokenForDai(
  sender: any,
  curveContract: any,
  tokenAmount: BigNumber,
  slippagePriceFormmated: BigNumber
) {
  return await curveContract.methods
    .redeem(tokenAmount, slippagePriceFormmated)
    .send({
      from: sender,
    });
}
export async function burnTokenForETH({
  sender,
  ethBrokeContract,
  tokenAmount,
  minRewardAmount,
  deadline,
}: {
  sender: any;
  ethBrokeContract: any;
  tokenAmount: BigNumber;
  minRewardAmount: BigNumber;
  deadline: number;
}) {
  return await ethBrokeContract.methods
    .redeem(tokenAmount, minRewardAmount, deadline)
    .send({
      from: sender,
    });
}
export async function mintWithETH(
  sender: any,
  ethBrokerContract: any,
  tokenAmountParsed: BigNumber,
  slippageAmountParsed: BigNumber,
  ethSpentAmountParsed: BigNumber,
  deadline: number
) {
  return await ethBrokerContract.methods
    .mint(tokenAmountParsed, slippageAmountParsed, deadline)
    .send({
      from: sender,
      value: ethSpentAmountParsed,
    });
}

export async function mintToWithETH(
  sender: any,
  ethBrokerContract: any,
  tokenAmountParsed: BigNumber,
  slippageAmountParsed: BigNumber,
  ethSpentAmountParsed: BigNumber,
  deadline: number,
  receiver: string
) {
  return await ethBrokerContract.methods
    .mintTo(tokenAmountParsed, slippageAmountParsed, deadline, receiver)
    .send({
      from: sender,
      value: ethSpentAmountParsed,
    });
}
export async function mintTokenWithDAI(
  sender: any,
  curveContract: any,
  amountParsed: BigNumber,
  slippagePriceFormattted: BigNumber
) {
  return await curveContract.methods
    .mint(amountParsed, slippagePriceFormattted)
    .send({ from: sender });
}

export async function mintToTokenWithDAI(
  sender: any,
  curveContract: any,
  amountParsed: BigNumber,
  slippagePriceFormattted: BigNumber,
  receiver: string
) {
  return await curveContract.methods
    .mintTo(amountParsed, slippagePriceFormattted, receiver)
    .send({ from: sender });
}
