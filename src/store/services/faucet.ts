import axios from "axios";

export const getGeth = async (receiver: string) => {
  const url = process.env.REACT_APP_GOERLI_FAUCET;
  const authToken = process.env.REACT_APP_AUTH_TOKEN;
  try {
    const receiverTrimmed = receiver.substring(2);
    const response = await axios.post(`${url}`, {
      token: authToken,
      receiver: receiverTrimmed,
    });

    return response;
  } catch (error) {
    return error;
  }
};
