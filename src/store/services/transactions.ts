interface Payload {
  provider: any;
  ethAddress: string;
}

const getPendingTransactions = async (payload: Payload) => {
  const { provider, ethAddress } = payload;
  const options = {
    fromBlock: "pending",
    toBlock: "latest",
    address: ethAddress,
  };
  const transactions = await provider.eth.filter(options, (error: any) => {
    if (!error) {
      return transactions;
    }
  });
};

export default getPendingTransactions;
