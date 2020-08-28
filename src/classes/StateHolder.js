import requester from "easier-requests";

export default class StateHolder {
  constructor() {
    debugger;
    this.errors = "";

    // check for login
    const token = localStorage.getItem("token");
    this.token = token;
    this.isLoggedIn = token ? true : false;

    if (token) {
      this.isLoading = true; // true until we finish get

      // store authorization information and related information
      requester.setOptions({ headers: { Authorization: `Bearer ${token}` } });

      // get and store user information
      this.userId = JSON.parse(localStorage.getItem("userId"));
      this._initializeUser();
    } else {
      requester.setOptions({ headers: {} });
      this.userId = -1;
      this.username = "";
      this.primaryEmail = "";
      this.imageUrl = "../assets/user.svg";
      this.isLoading = false;
      this.potlucks = [];
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
