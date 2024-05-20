import axios, { RawAxiosRequestHeaders } from "axios";

export const getApiClient = (headers?: RawAxiosRequestHeaders) => {
  const baseURL = `${process.env.NEXT_PUBLIC_API_BASE_URL}:${process.env.NEXT_PUBLIC_API_PORT}`;
  return axios.create({
    headers,
    baseURL,
  });
};

export const getStrapiApiClient = (headers?: RawAxiosRequestHeaders) => {
  const baseURL = `${process.env.NEXT_PUBLIC_STRAPI_API_BASE_URL}:${process.env.NEXT_PUBLIC_STRAPI_API_PORT}/api/`;
  return axios.create({
    headers,
    baseURL,
  });
};
