import axios from "axios";

const all_user = () => async (dispatch) => {
  try {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users`);
    dispatch({
      type: "ALL_USER",
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: "ERROR",
      payload: error,
    });
  }
};

export default all_user;
