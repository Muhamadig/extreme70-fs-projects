import axios from "axios";
import * as serviceData from "./restService";
const path = "users";

async function getAllUsers() {
  let { data } = await axios.get(`${serviceData.ApiUrl}/${path}`);
  return data;
}

export { getAllUsers };
