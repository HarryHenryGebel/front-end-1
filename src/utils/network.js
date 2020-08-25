import requester from "easier-requests";

export async function login(username, password) {
  try {
    const id = requester.createUniqueID();
    await requester.get("http://api/login", id);
    const token = requester.response(id).data;
    dispatch({ type: "LOGIN", token: token });
    requester.setOptions({ headers: { Authorization: token } });
  } catch (error) {
    console.log(error);
    throw error;
  } finally {
    console.log("Done");
  }
}

export async function getUserData(userId) {
  try {
    const id = requester.createUniqueID();
    await requester.get(`http://api/user/${userId}`, id);
    const data = requester.response(id).data;
    dispatch({ type: "SET_DATA", data: data });
  } catch (error) {
    console.log(error);
    throw error;
  } finally {
    console.log("Done");
  }
}

export async function createPotluck(potluck) {
  try {
    const id = requester.createUniqueID();
    await requester.push("http://api/potluck/", id, potluck);
  } catch (error) {
    console.log(error);
    // Inform user of error
  } finally {
    console.log("Done");
  }
}
