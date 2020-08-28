import {
  CREATE_EVENT_START,
  CREATE_EVENT_SUCCESS,
  CREATE_EVENT_FAIL,
  ADD_GUEST_START,
  ADD_GUEST_SUCCESS,
  ADD_GUEST_FAIL,
  ADD_FOOD_START,
  ADD_FOOD_SUCCESS,
  ADD_FOOD_FAIL,
  UPDATE_EVENT_START,
  UPDATE_EVENT_SUCESS,
  UPDATE_EVENT_FAIL,
  DELETE_EVENT_START,
  DELETE_EVENT_SUCESS,
  DELETE_EVENT_FAIL,
  UPDATE_FOOD_START,
  UPDATE_FOOD_SUCCESS,
  UPDATE_FOOD_FAIL,
  UPDATE_GUEST_START,
  UPDATE_GUEST_SUCCESS,
  UPDATE_GUEST_FAIL,
} from "../actions";

const hostState = {
  userId: -1,
  username: "",
  primaryEmail: "",
  imageUrl: "../assets/user.svg",
  isLoading: false,
  errors: "",
  isLoggedIn: false,
  potlucks: [
    {
      potluckId: "",
      isHost: undefined,
      eventName: "",
      date: "",
      time: "",
      location: "",
      description: "",
      isLoading: false,
      errors: "",
      foods: [
        {
          foodId: "",
          foodName: "",
          isClaimed: undefined,
        },
      ],
      guests: [
        {
          guestId: "",
          firstName: "",
          lastName: "",
          primaryEmail: "",
          responded: false,
          isAttending: false,
          isBringing: [],
        },
      ],
    },
  ],
};

function hostReducer(state = hostState, action) {
  switch (action.type) {
    case CREATE_EVENT_START:
      return {
        ...state,
        isLoading: true,
      };
    case CREATE_EVENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        potlucks: [...state.potlucks, action.payload],
      };
    case CREATE_EVENT_FAIL:
      return {
        ...state,
        isLoading: false,
        errors: `Your event could not be added. Please try again. ${action.payload}`,
      };
    //This is probably wrong
    case ADD_FOOD_START:
      const foodPotluck = state.potlucks.filter(
        (potluck) => potluck.potluckId === action.payload.potluckid
      );
      return {
        ...foodPotluck,
        isLoading: true,
      };
    case ADD_FOOD_SUCCESS:
      return {
        ...foodPotluck,
        isLoading: false,
        foods: [...foodPotluck.foods, action.payload.results],
      };
    case ADD_FOOD_FAIL: {
      return {
        ...foodPotluck,
        isLoading: false,
        errors: action.payload.errors,
      };
    }
    case ADD_GUEST_START:
      const guestPotluck = state.potlucks.filter(
        (potluck) => potluck.potluckId === action.payload.potluckid
      );
      return {
        ...guestPotluck,
        isLoading: true,
      };
    case ADD_GUEST_SUCCESS:
      return {
        ...guestPotluck,
        isLoading: false,
        guests: [...guestPotluck.guest, action.payload.results],
      };
    case ADD_GUEST_FAIL:
      return {
        ...guestPotluck,
        isLoading: false,
        errors: action.payload.errors,
      };
    case UPDATE_EVENT_START:
      return {
        ...state,
        isLoading: true,
      };

    case UPDATE_EVENT_SUCESS:
      return {
        ...state,
        isLoading: false,
      };

    case UPDATE_EVENT_FAIL:
      return {
        ...state,
        isLoading: false,
        errors: `Your event could not be updated, please try again. ${action.payload}`,
      };
    case UPDATE_FOOD_START:
      console.log("START");
      return {};
    case UPDATE_FOOD_SUCCESS:
      console.log("SUCCESS");
      return {};
    case UPDATE_FOOD_FAIL:
      console.log("FAIL!");
      return {};
    case UPDATE_GUEST_START:
      console.log("START");
      return {};
    case UPDATE_GUEST_SUCCESS:
      console.log("SUCCESS");
      return {};
    case UPDATE_GUEST_FAIL:
      console.log("FAIL!");
      return {};

    case DELETE_EVENT_START:
      return {
        ...state,
        isLoading: true,
      };

    case DELETE_EVENT_SUCESS:
      return {
        ...state,
        isLoading: false,
      };

    case DELETE_EVENT_FAIL:
      return {
        ...state,
        isLoading: false,
        errors: `Your event could not be deleted. If you are attempting to cancel your event last minute, please inform your guests directly. ${action.payload}`,
      };
    default:
      return state;
  }
}

export default hostReducer;
