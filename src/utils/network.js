import axios from "axios";
import requester from "easier-requests";

export function axiosWithAuth() {
  const token = localStorage.getItem("token");
  return axios.create({
    headers: {
      Authorization: `Bearer ${token}`,
    },
    baseURL: "https://lre-notapotluck.herokuapp.com",
  });
}

export async function setUserIdByUsername(field, username) {
  try {
    const id = requester.createUniqueID();
    await requester.get(
      "https://lre-notapotluck.herokuapp.com/users/users",
      id
    );

    // usernames are canonically lowercase in API
    const canonicalUsername = username.toLowerCase();
    const users = requester.response(id).data;
    for (let user of users)
      if (user.username === canonicalUsername) {
        localStorage.setItem(field, JSON.stringify(user.userid));
        break;
      }
  } catch (error) {
    console.log(error);
    throw error;
  } finally {
    window.open("/", "_self");
  }
}

export async function storeLoginInformation(token, username) {
  localStorage.setItem("token", token);
  requester.setOptions({ headers: { Authorization: `Bearer ${token}` } });
  setUserIdByUsername("userId", username);
}

//  LocalWords:  userId
