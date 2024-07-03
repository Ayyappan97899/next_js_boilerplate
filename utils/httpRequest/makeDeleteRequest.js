import { appAxios } from "@/api/appAxios";

export const makeDeleteRequest = async (endpoint, config = {}) => {
  const { data } = await appAxios(config).delete(endpoint, config);
  return data;
};
