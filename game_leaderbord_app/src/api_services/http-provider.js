import axios from "axios";
import { getToken } from "../utils/auth.util";
import { API_URL } from "@env"

export async function getApiRequestHeader(isFormData = false) {
  const token = await getToken()

  return {
    Accept: "application/json",
    "Content-Type": isFormData ? "multipart/form-data" : "application/json",
    "Authorization": `Bearer ${token}`
  };
}

const instance = axios.create({
  baseURL: API_URL,
  timeout: 600000,
  withCredentials: false,
});

export async function updateHeaders(isFormData = false) {
  const header = await getApiRequestHeader(isFormData);
  instance.defaults.headers = header;
}

export async function request({
  method,
  url,
  data,
  headers,
  isFormData = false,
}) {
  if (headers === undefined) {
    await updateHeaders(isFormData);
  }
  const promise = instance[method](url, data);
  let response;
  try {
    response = await promise;
  } catch (error) {
    throw error.response;
  }

  return response;
}

export async function get(url, params) {
  for (var key in params) {
    url = url + "" + params[key];
  }
  return request({ method: "get", url, });
}

export async function del(url, params) {
  return request({ method: "delete", url, data: { params }, });
}

export async function post(url, data, isFormData = false) {
  return request({ method: "post", url, data, isFormData, });
}

export async function put(url, data, isFormData = false) {
  return request({ method: "put", url, data, isFormData });
}
export async function patch(url, data, isFormData = false) {
  return request({ method: "patch", url, data, isFormData, });
}
export const independentRequest = async (url, method, data) => {
  const promise = axios[method](url, data);
  let response;
  try {
    response = await promise;
  } catch (error) {
    throw error.response;
  }
  const payload = response;
  return payload;
};
