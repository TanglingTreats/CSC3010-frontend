import makeAPICall from "./makeAPICall";

interface APIResponse {
  error: string
}

async function handleAPIResponse(api: any) {
  let response: any | APIResponse = {};
  try {
    await makeAPICall(api).then((res) => {
      switch (res.status) {
        case 200:
          response = res.data;
          break;
        case 201:
          response = res.data;
          break;
        default:
          console.log(res);
          throw new Error(res.status);
      }
    });
  } catch (err: any) {
    switch (err.message) {
      case '401':
        return {error: "Invalid credentials"}
      case '409':
        return {error: "Request conflict. Check your data and url."}
      case '419':
        return {error: "Credentials expired"}
      case '420':
        return {error: "Invalid credentials"}
      case '503':
        return {error: "Server is unavailable"}
      default:
        return {error: `HTTP Code ${err.message}`}
    }
  }
  return response;
}

export async function makeQuery(query: string) {
  let api = {
    method: "get",
    endpoint: "/",
    params: {
      query: query
    }
  }

  return await handleAPIResponse(api);
}

