const initState = {
  posts: [],
};

const posts = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "GET_POSTS":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_POSTS_ERROR":
      return {
        ...state,
        isLoading: false,
      };
    case "GET_POSTS_SUCCES":
      return {
        ...state,
        posts: payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default posts;
