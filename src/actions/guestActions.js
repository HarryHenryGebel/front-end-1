export const RESPOND_EVENT_START = "RESPOND_EVENT_START";
export const RESPOND_EVENT_SUCCESS = "RESPOND_EVENT_SUCCESS";
export const RESPOND_EVENT_FAIL = "RESPOND_EVENT_FAIL";

export const UPDATE_FOOD_START = "UPDATE_FOOD_START";
export const UPDATE_FOOD_SUCESS = "UPDATE_FOOD_SUCESS";
export const UPDATE_FOOD_FAIL = "UPDATE_FOOD_FAIL";

export const CANCEL_ATTENDANCE_START = "CANCEL_ATTENDANCE_START";
export const CANCEL_ATTENDANCE_SUCESS = "CANCEL_ATTENDANCE_SUCESS";
export const CANCEL_ATTENDANCE_FAIL = "CANCEL_ATTENDANCE_FAIL";
//responding to the event should accept the event invitation, add the event to the guest's userprofile AND update the response field
//cancelling attendance should remove the event from the guests personal data, and remove the guest from the guest list on the host's data
export const respondEvent = () => (dispatch) => {
  dispatch({ action: RESPOND_EVENT_START });
  dispatch({ action: RESPOND_EVENT_SUCCESS, payload: "" });
  dispatch({ action: RESPOND_EVENT_FAIL, payload: "" });
};

export const updateFood = () => (dispatch) => {
  dispatch({ action: UPDATE_FOOD_START });
  dispatch({ action: UPDATE_FOOD_SUCESS, payload: "" });
  dispatch({ action: UPDATE_FOOD_FAIL, payload: "" });
};

export const cancelAttendance = () => (dispatch) => {
  dispatch({ action: CANCEL_ATTENDANCE_START });
  dispatch({ action: CANCEL_ATTENDANCE_SUCESS });
  dispatch({ action: CANCEL_ATTENDANCE_FAIL, payload: "" });
};
