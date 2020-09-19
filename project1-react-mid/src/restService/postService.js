import axios from "axios";
import RestService from "./restService.js";
const path = "posts";

var posts = [];
let isPostsWasLoaded = false;
let postsLastId;
let loadAllposts = async () => {
  if (isPostsWasLoaded) return;
  let { data } = await axios.get(`${RestService.ApiUrl}/${path}`);
  posts = data;

  if (posts.length === data.length) {
    isPostsWasLoaded = true;
    if (posts.length === 0) postsLastId = 0;
    if (posts.length === 1) postsLastId = posts[0].id;
    if (posts.length > 1)
      postsLastId = posts.reduce((maxIdPost, currentPost) => {
        return maxIdPost.id < currentPost.id ? currentPost : maxIdPost;
      }).id;
    return RestService.responseMessages.OK;
  }
  return RestService.responseMessages.SERVER_ERROR;
};

function getAllposts() {
  return posts;
}

function getPostById(id) {
  return posts.find((post) => post.id === id);
}

function getUserPostsById(userId) {
  return posts.filter((post) => post.userId === userId);
}

function updatePostById(id, post) {
  let indexOfPost = posts.findIndex((post) => post.id === id);
  if (indexOfPost === -1) return RestService.responseMessages.POST_NOT_FOUND;
  posts[indexOfPost] = post;
  return RestService.responseMessages.OK;
}

function addNewPost(post) {
  post.id = postsLastId + 1;
  let sizeBefore = posts.length;
  let newSize = posts.push(post);
  if (newSize === sizeBefore + 1) {
    postsLastId++;
    return RestService.responseMessages.OK;
  }
  return RestService.responseMessages.SERVER_ERROR;
}

function deleteAllUserPostsById(userId) {
  posts = posts.filter((post) => post.userId !== userId);
}
export default {
  loadAllposts,
  getAllposts,
  getPostById,
  updatePostById,
  getUserPostsById,
  addNewPost,
  deleteAllUserPostsById,
};
