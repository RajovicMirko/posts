import { BrowserRouter } from "react-router-dom";
import Router from "router";
import Store from "store";

function App() {
  return (
    <div className="App">
      <Store>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </Store>
    </div>
  );
}

export default App;
