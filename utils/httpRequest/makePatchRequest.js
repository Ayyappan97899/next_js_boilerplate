import { appAxios } from "@/api/appAxios";

export const makePatchRequest = async (endpoint, body, config = {}) => {
  const { data } = await appAxios(config).patch(endpoint, body, config);

  return data;
};
