import Home from "./components/Home";
import Stocks from "./components/Stocks";
import Movies from "./components/Movies";
import { Route, Switch, NavLink } from "react-router-dom";
import { movies } from "./data/movieData";

function App() {
  return (
    <div className="main">
      <h1>App Component</h1>
      <nav className="comp nav">
        <ul>
          <li>
            <NavLink
              activeClassName="purple"
              activeStyle={{ fontWeight: "bold" }}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="purple"
              activeStyle={{ fontWeight: "bold" }}
              to="/movies"
            >
              Movie
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="purple"
              activeStyle={{ fontWeight: "bold" }}
              to="/stocks"
            >
              Stock
            </NavLink>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/stocks">
          <Stocks />
        </Route>
        <Route path="/movies">
          {movies.map((item) => (
            <Movies {...item} />
          ))}
        </Route>
        <Route path="/not-logged-in">
          <h1> You Must Be Logged In To Enter.</h1>
        </Route>
        <Route path="">
          <h1>Page Not Found</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
