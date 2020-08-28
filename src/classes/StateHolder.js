import requester from "easier-requests";

export default class StateHolder {
  constructor() {
    debugger;
    // check for login
    const token = localStorage.getItem("token");
    this.token = token;
    this.isLoggedIn = token ? true : false;
    if (token)
      requester.setOptions({ headers: { Authorization: `Bearer ${token}` } });
    this.getter();
  }

  async getter() {
    debugger;

    try {
      const id = requester.createUniqueID();
      await requester.get(
        "https://lre-notapotluck.herokuapp.com/users/users",
        id
      );
      const response = requester.response(id);
      console.log(response);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
