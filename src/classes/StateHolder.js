import requester from "easier-requests";

export default class StateHolder {
  constructor() {
    debugger;
    this.isLoading = true; // true until we finish get
    this.errors = "";

    // check for login
    const token = localStorage.getItem("token");
    this.isLoggedIn = token ? true : false;

    if (token) {
      // store authorization information and related information
      this.token = token;
      requester.setOptions({ headers: { Authorization: `Bearer ${token}` } });

      // get and store user information
      this.userId = JSON.parse(localStorage.getItem("userId"));
      this._initializeUser();
    }
  }

  async _initializeUser() {
    debugger;

    try {
      const id = requester.createUniqueID();
      await requester.get(
        `https://lre-notapotluck.herokuapp.com/users/user/${this.userId}`,
        id
      );
      const user = requester.response(id).data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

//  LocalWords:  userId
