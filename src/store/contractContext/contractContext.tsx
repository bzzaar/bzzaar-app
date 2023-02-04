import React, { createContext, useState, useContext } from "react";
import { getWeb3Contracts, Contracts } from "../helpers/contractBooter";

interface ContextProps {
  contracts: Contracts;
  updateContractsWeb3: (provider: any) => void;
}

export const ContractContext = createContext({} as ContextProps);

export function ContractProvider(props: any) {
  const [contracts, setContracts] = useState<Contracts>({} as Contracts);

  const updateContractsWeb3 = (provider: any) => {
    const contracts = getWeb3Contracts(provider);
    setContracts(contracts);
  };

  const value = { contracts, updateContractsWeb3 };

  return (
    <ContractContext.Provider value={value}>
      {props.children}
    </ContractContext.Provider>
  );
}

export function useContracts() {
  return useContext(ContractContext);
}
