import axios from "axios";
import RestService from "./restService.js";
const path = "todos";

var tasks = [];
let isTasksWasLoaded = false;

let loadAlltasks = async () => {
  if (isTasksWasLoaded) return;
  let { data } = await axios.get(`${RestService.ApiUrl}/${path}`);
  tasks = data;

  if (tasks.length === data.length) {
    isTasksWasLoaded = true;
    return RestService.responseMessages.OK;
  }
  return RestService.responseMessages.SERVER_ERROR;
};

function getAlltasks() {
  return tasks;
}

function getTaskById(id) {
  return tasks.find((task) => task.id === id);
}

function getUserTasksById(userId) {
  return tasks.filter((task) => task.userId === userId);
}
function isAllUSerTasksCompleted(userId) {
  let userTasks = getUserTasksById(userId);
  let unCompletedTasks = userTasks.filter((task) => !task.completed);
  if (unCompletedTasks && unCompletedTasks.length > 0) return false;
  return true;
}

function updateTaskById(id, task) {
  let indexOfTask = tasks.findIndex((task) => task.id === id);
  if (indexOfTask === -1) return RestService.responseMessages.TASK_NOT_FOUND;
  tasks[indexOfTask] = task;
  return RestService.responseMessages.OK;
}

export default {
  loadAlltasks,
  getAlltasks,
  getTaskById,
  updateTaskById,
  getUserTasksById,
  isAllUSerTAsksCompleted: isAllUSerTasksCompleted,
};
