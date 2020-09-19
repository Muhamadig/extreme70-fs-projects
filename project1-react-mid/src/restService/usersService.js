import axios from "axios";
import RestService from "./restService.js";
const path = "users";

var users = [];
let usersLastId = 0;
let isUsersWasLoaded = false;
let loadAllUsers = async () => {
  if (isUsersWasLoaded) return;
  let { data } = await axios.get(`${RestService.ApiUrl}/${path}`);
  users = data;
  if (users.length === 0) usersLastId = 0;
  if (users.length === 1) usersLastId = users[0].id;
  else {
    usersLastId = users.reduce((maxIdUser, currentUser) =>
      maxIdUser.id < currentUser.id ? currentUser : maxIdUser
    ).id;
  }
  if (users.length === data.length) {
    isUsersWasLoaded = true;
    return RestService.responseMessages.OK;
  }
  return RestService.responseMessages.SERVER_ERROR;
};

function getAllUsers() {
  return users;
}

function getUserById(id) {
  return users.find((user) => user.id === id);
}

function addNewUser(user) {
  user.id = usersLastId + 1;
  let sizeBefore = users.length;
  let newSize = users.push(user);
  if (newSize === sizeBefore + 1) {
    usersLastId++;
    return user;
  }
  return RestService.responseMessages.SERVER_ERROR;
}

function updateUserById(id, user) {
  let indexOfUser = users.findIndex((user) => user.id === id);
  if (indexOfUser === -1) return RestService.responseMessages.USER_NOT_FOUND;
  users[indexOfUser] = user;
  return RestService.responseMessages.OK;
}

function deleteUserById(id) {
  let indexOfUser = users.findIndex((user) => user.id === id);
  if (indexOfUser === -1) return RestService.responseMessages.USER_NOT_FOUND;
  users.splice(indexOfUser, 1);
  indexOfUser = users.findIndex((user) => user.id === id);
  if (indexOfUser === -1) return RestService.responseMessages.OK;
  return RestService.responseMessages.SERVER_ERROR;
}

function deleteUserDataById(id) {
  let indexOfUser = users.findIndex((user) => user.id === id);
  if (indexOfUser === -1) return RestService.responseMessages.USER_NOT_FOUND;
  let userInDb = users[indexOfUser];
  let dataDeleted = true;
  for (let key in userInDb) {
    if (userInDb.hasOwnProperty(key) && key !== "id") {
      userInDb[key] = "";
      dataDeleted = dataDeleted && userInDb[key] === "";
    }
  }
  if (dataDeleted) return updateUserById(id, userInDb);
  return RestService.responseMessages.SERVER_ERROR;
}
export default {
  loadAllUsers,
  getAllUsers,
  getUserById,
  addNewUser,
  updateUserById,
  deleteUserById,
  deleteUserDataById,
};
