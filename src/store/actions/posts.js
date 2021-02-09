import http from "utils/http";

export const getPosts = () => {
  return async (dispatch, getState) => {
    dispatch({ type: "GET_POSTS" });

    const payload = await http.get("/posts");

    if (payload.status < 400) {
      dispatch({ type: "GET_POSTS_SUCCES", payload: payload.data });
    } else {
      dispatch({ type: "GET_POSTS_ERROR" });
    }
  };
};
