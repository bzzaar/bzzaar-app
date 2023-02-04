import { AbiItem } from "web3-utils";
import ERC20ABI from "../../interfaces/ERC20.json";
import TokenABI from "../../interfaces/Token.json";
import CurveABI from "../../interfaces/Curve.json";
import BrokerABI from "../../interfaces/Eth_broker.json";
import { Contract } from "ethers";

export interface Contracts {
  daiContract: Contract;
  curveContract: Contract;
  tokenContract: Contract;
  ethBrokerContract: Contract;
}

export const getWeb3Contracts = (payload: any) => {
  const web3 = payload;

  const daiContract = new web3.eth.Contract(
    ERC20ABI.abi as AbiItem[],
    `${process.env.REACT_APP_DAI}`
  );

  const curveContract = new web3.eth.Contract(
    CurveABI.abi as AbiItem[],
    `${process.env.REACT_APP_CURVE}`
  );

  const tokenContract = new web3.eth.Contract(
    TokenABI.abi as AbiItem[],
    `${process.env.REACT_APP_TOKEN}`
  );

  const ethBrokerContract = new web3.eth.Contract(
    BrokerABI.abi as AbiItem[],
    `${process.env.REACT_APP_ETHBROKER}`
  );

  const contracts = {
    daiContract,
    curveContract,
    tokenContract,
    ethBrokerContract,
  };

  return contracts;
};
