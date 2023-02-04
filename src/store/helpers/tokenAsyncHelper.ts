import { BigNumber } from "ethers";
import { parseToken } from "./tokenHelpers";

// Async Helpers
export async function approve(
  sender: any,
  contract: any,
  spender: any,
  amount: BigNumber
) {
  return await contract.methods.approve(spender, amount).send({
    from: sender,
  });
}

export async function getCost(contract: any, amount: number) {
  return await contract.methods.buyPrice(parseToken(amount.toString())).call();
}

export async function getReward(contract: any, amount: number) {
  return await contract.methods
    .sellReward(parseToken(amount.toString()))
    .call();
}
