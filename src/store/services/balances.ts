import { Contract, ethers } from "ethers";
import Web3 from "web3";
import { Contracts } from "../helpers/contractBooter";
import { IBalances } from "../reducers";

const getEthBalance = async (
  ethAddress: string,
  provider: any
): Promise<number> => {
  try {
    const web3 = new Web3(provider);
    const ethBalance = await web3.eth.getBalance(ethAddress);

    return ethBalance
      ? Number(ethers.utils.formatEther(ethBalance.toString()))
      : 0;
  } catch (error) {
    return 0;
  }
};

const getERC20Balance = async (
  ethAddress: string,
  contract: Contract,
  decimals: number
): Promise<number> => {
  try {
    const tokenBalance = await contract.methods.balanceOf(ethAddress).call();

    return tokenBalance
      ? Number(ethers.utils.formatUnits(tokenBalance.toString(), decimals))
      : 0;
  } catch (error) {
    return 0;
  }
};

export interface BalancesPayload {
  ethAddress: string;
  contracts: Contracts;
  provider: any;
}

export const getBalances = async (payload: BalancesPayload) => {
  const { ethAddress, contracts, provider } = payload;
  const [ethBalance, daiBalance, bzzBalance] = await Promise.all([
    getEthBalance(ethAddress, provider),
    getERC20Balance(ethAddress, contracts.daiContract, 18),
    getERC20Balance(ethAddress, contracts.tokenContract, 16),
  ]);

  return {
    bzzBalance: Number(bzzBalance.toFixed(4)),
    daiBalance: Number(daiBalance.toFixed(4)),
    ethBalance: Number(ethBalance.toFixed(4)),
  } as IBalances;
};
