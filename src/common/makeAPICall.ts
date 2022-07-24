import axios from "axios";

//const https = require("https");
//const http = require("http");


// Choose to use local or server url
const api_base_url = process.env.REACT_APP_ENDPOINT || "";

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
  if(api_base_url === "") {
    console.log("No endpoint defined");
    return {status: {
      message: "Endpoint not available"
    }}
  }

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
