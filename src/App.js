import Home from "./components/Home";
import Stocks from "./components/Stocks";
import Movies from "./components/Movies";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="main">
      <h1>App Components</h1>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/Stocks">
          <Stocks />
        </Route>
        <Route path="/Movies">
          <Movies />
        </Route>
        <Route path="">
          <h1>Page Not Found..</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
