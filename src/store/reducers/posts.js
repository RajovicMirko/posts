const initState = {
  posts: [
    {
      id: "1",
      title: "Test post 1",
      body:
        "Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet",
    },
    {
      id: "2",
      title: "Test post 2",
      body:
        "Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet",
    },
  ],
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
