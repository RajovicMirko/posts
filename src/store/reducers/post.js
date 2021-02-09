const initState = {
  post: {},
  user: {
    address: {},
  },
  comments: [],
  previousId: null,
  nextId: null,
};

const posts = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "GET_POST":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_POST_ERROR":
      return {
        ...state,
        isLoading: false,
      };
    case "GET_POST_SUCCES":
      return {
        ...state,
        post: payload,
        isLoading: false,
      };

    case "PREPARE_PREVIOUS_AND_NEXT":
      return {
        ...state,
      };
    case "PREPARE_PREVIOUS_AND_NEXT_ERROR":
      return {
        ...state,
      };
    case "PREPARE_PREVIOUS_AND_NEXT_SUCCES":
      return {
        ...state,
        ...payload,
      };

    case "GET_POST_USER":
      return {
        ...state,
      };
    case "GET_POST_USER_ERROR":
      return {
        ...state,
      };
    case "GET_POST_USER_SUCCES":
      return {
        ...state,
        user: payload,
      };

    case "GET_POST_COMMENTS":
      return {
        ...state,
      };
    case "GET_POST_COMMENTS_ERROR":
      return {
        ...state,
      };
    case "GET_POST_COMMENTS_SUCCES":
      return {
        ...state,
        comments: payload,
      };

    default:
      return state;
  }
};

export default posts;
