import { appAxios } from "@/api/appAxios";

export const makePutRequest = async (endpoint, body, config = {}) => {
  const { data } = await appAxios(config).put(endpoint, body, config);

  return data;
};
