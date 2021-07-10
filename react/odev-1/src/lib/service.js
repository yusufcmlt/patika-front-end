import axios from "axios";

export default async function getData(userID) {
  userID = Number(userID);
  const url = "https://jsonplaceholder.typicode.com";

  const userData = await axios.get(`${url}/users/${userID}`);
  const userPosts = await axios.get(`${url}/posts?userId=${userID}`);

  return { user: userData.data, posts: userPosts.data };
}
