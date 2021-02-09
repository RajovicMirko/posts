import http from "utils/http";

export const getPost = (postId) => {
  return async (dispatch, getState) => {
    dispatch({ type: "GET_POST" });

    const payload = await http.get(`/posts/${postId}`);

    if (payload.status < 400) {
      await dispatch(preparePreviousAndNext(payload.data.id));
      await dispatch(getPostUser(payload.data.userId));
      await dispatch(getPostComments(payload.data.id));

      dispatch({ type: "GET_POST_SUCCES", payload: payload.data });
    } else {
      dispatch({ type: "GET_POST_ERROR" });
    }
  };
};

const preparePreviousAndNext = (postId) => {
  return async (dispatch, getState) => {
    dispatch({ type: "PREPARE_PREVIOUS_AND_NEXT" });
    const { posts } = getState().posts;
    if (!posts.length) return;

    const currentIndex = posts.findIndex((post) => post.id === postId);
    const previousId = currentIndex === 0 ? null : posts[currentIndex - 1].id;
    const nextId =
      currentIndex === posts.length - 1 ? null : posts[currentIndex + 1].id;

    const payload = {
      previousId,
      nextId,
    };

    if (payload) {
      dispatch({
        type: "PREPARE_PREVIOUS_AND_NEXT_SUCCES",
        payload,
      });
    } else {
      dispatch({ type: "PREPARE_PREVIOUS_AND_NEXT_ERROR" });
    }
  };
};

const getPostUser = (userId) => {
  return async (dispatch, getState) => {
    dispatch({ type: "GET_POST_USER" });
    const payload = await http.get(`/users/${userId}`);

    if (payload.status < 400) {
      dispatch({ type: "GET_POST_USER_SUCCES", payload: payload.data });
    } else {
      dispatch({ type: "GET_POST_USER_ERROR" });
    }
  };
};

const getPostComments = (postId) => {
  return async (dispatch, getState) => {
    dispatch({ type: "GET_POST_COMMENTS" });
    const payload = await http.get(`/comments?postId=${postId}`);

    if (payload.status < 400) {
      dispatch({ type: "GET_POST_COMMENTS_SUCCES", payload: payload.data });
    } else {
      dispatch({ type: "GET_POST_COMMENTS_ERROR" });
    }
  };
};
