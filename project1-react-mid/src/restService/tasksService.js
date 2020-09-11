import axios from "axios";
import * as serviceData from "./restService";
const path = "todos";

async function getUsersTodos(userId) {
  let { data } = await axios.get(
    `${serviceData.ApiUrl}/${path}?userId=${userId}`
  );
  return data;
}

export { getUsersTodos };
