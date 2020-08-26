import {
  CREATE_EVENT_START,
  CREATE_EVENT_SUCCESS,
  CREATE_EVENT_FAIL,
  UPDATE_EVENT_START,
  UPDATE_EVENT_SUCESS,
  UPDATE_EVENT_FAIL,
  DELETE_EVENT_START,
  DELETE_EVENT_SUCESS,
  DELETE_EVENT_FAIL,
} from "../actions";

const hostState = {
  userId: "1",
  username: "avadinner",
  primaryEmail: "avawingfield@email.com",
  imageUrl: "../assets/user.svg",
  isLoading: false,
  errors: "",
  potlucks: [
    {
      potluckid: "3",
      ishost: true,
      eventName: `Dinner at Ava's`,
      date: "02/11/2021",
      time: "12:00PM",
      location: `George's Deli`,
      description: `Turn left at the pointy hats!`,
      foods: [
        {
          foodid: "18",
          foodName: "pizza",
          isclaimed: true,
        },
        { foodid: "22", foodName: "strange cake", isclaimed: false },
      ],
      guests: [
        {
          guestid: "57",
          fname: "Martin",
          lname: "Ricky",
          primaryEmail: "avawingfield@email.com",
          responded: false,
          isattending: false,
          isbringing: [],
        },

        {
          guestid: "39",
          fname: "Ricky",
          lname: "Martin",
          primaryEmail: "livin@lavidaloca.com",
          responded: true,
          isattending: false,
          isbringing: [
            {
              foodid: "86",
              foodName: "not available",
            },
            {
              foodid: "13",
              foodName: "ice cream",
            },
          ],
        },
        {
          guestid: "17",
          fname: "Martin",
          lname: "Ricky",
          primaryEmail: "livin@lavidaloca.com",
          responded: true,
          isattending: true,
          isbringing: [
            {
              foodid: "86",
              foodName: "not available",
              isclaimed: true,
            },
            {
              foodid: "13",
              foodName: "ice cream",
              isclaimed: true,
            },
          ],
        },
      ],
      isLoading: false,
      errors: false,
    },
    {
      potluckid: "5",
      ishost: false,
      eventName: `Dinner at Not Ava's`,
      date: "22 March 2021",
      time: "12:00PM",
      location: `George's Deli`,
      description: `Turn left at the pointy hats!`,
      foods: [
        {
          foodid: "18",
          foodName: "pizza",
          isclaimed: true,
        },
        {
          foodid: "22",
          foodName: "strange cake",
          isclaimed: false,
        },
      ],
      guests: [
        {
          guestid: "57",
          fname: "Martin",
          lname: "Ricky",
          primaryEmail: "livin@lavidaloca.com",
          responded: false,
          isattending: false,
          isbringing: [],
        },

        {
          guestid: "39",
          fname: "Ricky",
          lname: "Martin",
          primaryEmail: "livin@lavidaloca.com",
          responded: true,
          isattending: false,
          isbringing: [
            {
              foodid: "86",
              foodName: "not available",
            },
            {
              foodid: "13",
              foodName: "ice cream",
            },
          ],
        },
        {
          guestid: "17",
          fname: "Martin",
          lname: "Ricky",
          primaryEmail: "livin@lavidaloca.com",
          responded: true,
          isattending: true,
          isbringing: [
            {
              foodid: "86",
              foodName: "not available",
            },
            {
              foodid: "13",
              foodName: "ice cream",
            },
          ],
        },
      ],
      isLoading: false,
      errors: false,
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
