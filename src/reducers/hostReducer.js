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
  UPDATE_FOOD_SUCESS,
  UPDATE_FOOD_FAIL,
  UDPATE_GUEST_START,
  UPDATE_GUEST_SUCCESS,
  UPDATE_GUEST_FAIL,
} from "../actions";

const hostState = {
  userId: "",
  username: "",
  primaryEmail: "",
  imageUrl: "../assets/user.svg",
  isLoading: false,
  errors: "",
  potlucks: [
    {
      potluckId: "",
      isHost: undefined,
      eventName: "",
      date: "",
      time: "",
      location: "",
      description: "",
      foods: [
        {
          foodId: "",
          foodName: "",
          isClaimed: undefined,
          isLoading: false,
          errors: "",
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
          isLoading: false,
          errors: "",
        },
      ],
    },
  ],
};

function hostReducer(state = hostState, action) {
  switch (action) {
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
