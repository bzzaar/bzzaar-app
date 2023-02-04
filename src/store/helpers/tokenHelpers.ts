import { ethers } from "ethers";

// Non-Async Helpers
export function formatHexEthtoNumber(tokenAmount: number | string) {
  return Number(ethers.utils.formatEther(tokenAmount.toString()));
}
export function getParsedMaxSlippageAmount(
  formattedCost: number,
  slippage: number
) {
  return slippage === 0
    ? parseUnits(formattedCost.toString(), 18)
    : parseUnits((formattedCost * (1 + slippage / 100)).toString(), 18);
}
export function getParsedMinSlippageAmount(
  formattedCost: number,
  slippage: number
) {
  return slippage === 0
    ? parseUnits(formattedCost.toString(), 18)
    : parseUnits((formattedCost * (1 - slippage / 100)).toString(), 18);
}
export function parseToken(amount: any) {
  return parseUnits(amount.toString(), 16);
}
export function parseUnits(amount: string, decimals: number) {
  return ethers.utils.parseUnits(amount, decimals);
}
export function getDeadlinePlusMin(min: number) {
  const dt = new Date();
  dt.setMinutes(dt.getMinutes() + min);

  return Math.trunc(dt.getTime() / 1000);
}
export function amountToFixedNumber(
  amount: any,
  decimal: number,
  toFixed: number
): number {
  return Number(
    Number(ethers.utils.formatUnits(amount, decimal)).toFixed(toFixed)
  );
}

export const chainIdToPrefix = {
  1: "",
  4: "r",
  5: "g",
  42: "k",
  31337: "hh",
};

export const chainIdToNetwork: { [network: string]: string } = {
  1: "mainnet",
  3: "ropsten",
  4: "rinkeby",
  5: "goerli",
  42: "kovan",
  100: "xdai",
  30: "orchid",
  31: "orchidTestnet",
  99: "core",
  77: "sokol",
  61: "classic",
  8: "ubiq",
  108: "thundercore",
  18: "thundercoreTestnet",
  163: "lightstreams",
  122: "fuse",
  15001: "maticTestnet",
  31337: "hardhat",
};
