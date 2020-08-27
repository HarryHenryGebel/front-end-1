import axios from 'axios'

export const CREATE_EVENT_START = "CREATE_EVENT_START";
export const CREATE_EVENT_SUCCESS = "CREATE_EVENT_SUCCESS";
export const CREATE_EVENT_FAIL = "CREATE_EVENT_FAIL";

export const UPDATE_EVENT_START = "UPDATE_EVENT_START";
export const UPDATE_EVENT_SUCESS = "UPDATE_EVENT_SUCESS";
export const UPDATE_EVENT_FAIL = "UPDATE_EVENT_FAIL";

export const DELETE_EVENT_START = "DELETE_EVENT_START";
export const DELETE_EVENT_SUCESS = "DELETE_EVENT_SUCESS";
export const DELETE_EVENT_FAIL = "DELETE_EVENT_FAIL";

export const createEvent = (data) => (dispatch)=> {
  dispatch({ action: CREATE_EVENT_START });
   axios
  .post('https://lre-notapotluck.herokuapp.com/potlucks/potluck', data)
  .then(res => dispatch({ action: CREATE_EVENT_SUCCESS, payload: res.data }))
  .catch(e=> dispatch({ action: CREATE_EVENT_FAIL, payload: `${e}` })) 
};

export const updateEvent = () => (dispatch) => {
  dispatch({ action: UPDATE_EVENT_START });
  dispatch({ action: UPDATE_EVENT_SUCESS, payload: "" });
  dispatch({ action: UPDATE_EVENT_FAIL, payload: "" });
};

export const deleteEvent = () => (dispatch) => {
  dispatch({ action: DELETE_EVENT_START });
  dispatch({ action: DELETE_EVENT_SUCESS });
  dispatch({ action: DELETE_EVENT_FAIL, payload: "" });
};
