import requester from "easier-requests";

import {
  CREATE_STATE_START,
  CREATE_STATE_SUCCESS,
  CREATE_STATE_FAIL,
} from "../actions";

import Potluck from "./Potluck";

class StateHolder {
  constructor(dispatch) {
    this.errors = "";
    this._dispatch = dispatch;

    // check for login
    const token = localStorage.getItem("token");
    this.token = token;
    this.isLoggedIn = token ? true : false;

    this.potlucks = []; // temporary holder

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
    try {
      const id = requester.createUniqueID();
      await requester.get(
        `https://lre-notapotluck.herokuapp.com/users/user/${this.userId}`,
        id
      );
      const user = requester.response(id).data;
      this.username = user.username;
      this.primaryEmail = user.primaryemail;
      this.imageUrl = user.imageurl ? user.imageurl : "../assets/user.svg";
      this.potlucks = user.potlucks.map((potluck) => new Potluck(potluck));
      this.isLoading = false;
      this._dispatch({ type: CREATE_STATE_SUCCESS, newState: this });
    } catch (error) {
      console.log(error);
      this._dispatch({ type: CREATE_STATE_FAIL, error: error });
    }
  }
}

export default function createStoreHolder() {
  return function (dispatch) {
    dispatch({ type: CREATE_STATE_START, newState: new StateHolder(dispatch) });
  };
}

//  LocalWords:  userId
