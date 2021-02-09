import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "store/reducers";
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk));

const Store = ({ children }) => <Provider store={store}>{children}</Provider>;

export default Store;
