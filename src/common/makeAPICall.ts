import axios from "axios";

//const https = require("https");
//const http = require("http");

const useBase = process.env.USE_BASE === "true";

// Choose to use local or server url
const api_base_url = process.env.REACT_APP_ENDPOINT || "";
console.log(api_base_url);
  //process.env.USE_CUSTOM === "true"
    //? process.env.LOCAL_DEV_API
    //: process.env.DEV_API_DOMAIN || "base_url";

const api_proxy_url = process.env.DEV_API_PROXY || "proxy";
// const api_prod_url = process.env.REACT_APP_PROD_API_DOMAIN;
//
// Choose to use base url or proxy url
const api_url = api_base_url;

const axiosInstance = axios.create({
  baseURL: api_url,
});

/**
 *
 * @typedef {...{string: *}} config
 * @typedef {...{string: *}} queryParam
 * @typedef {...{string: *}} data
 * @param {{ method: string, endpoint: string, data: data, params: queryParam, config: config }} options
 * @returns
 */
export default async function makeAPICall(options: any) {
  const { method, endpoint, data, params, config } = options;
  let response;

  try {
    response = await axiosInstance({
      method: method,
      url: endpoint,
      data: data,
      params: params,
      ...config,
    });
  } catch (error: any) {
    console.log(error);
    return error.response;
  }

  return response;
}

const graph_base_api = process.env.REACT_APP_GRAPH_ENDPOINT;

const axiosInstanceTeams = axios.create({
  baseURL: graph_base_api,
});
