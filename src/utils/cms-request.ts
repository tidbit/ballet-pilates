import { request } from "graphql-request";

const CMS_API = import.meta.env.VITE_CMS_API;
const TOKEN = import.meta.env.VITE_TOKEN;

export const CMSRequest = <T>(
  query: Parameters<typeof request>[1],
  variables: object | undefined = undefined,
) => {
  const data = request<T>(CMS_API, query, variables, {
    authorization: `Bearer ${TOKEN}`,
  });
  return data;
};
