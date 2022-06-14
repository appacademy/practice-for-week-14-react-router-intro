import { Route, Switch } from "react-router-dom";
import MovieDetails from "../MovieDetails";

function Movies({ id, title, description }) {
  return (
    <div className="comp orange">
      <h1>Movies Component</h1>
      <nav></nav>
      <Switch>
        <Route path="/movies/:movieId">
          <MovieDetails />
        </Route>
      </Switch>
    </div>
  );
}

export default Movies;
