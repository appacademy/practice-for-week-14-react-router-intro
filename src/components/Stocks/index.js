import { Redirect } from "react-router-dom";

function Stocks() {
  let loggedIn = true;

  if (!loggedIn) return <Redirect to="/" />;
  return (
    <div className="comp orange">
      <h1>Stocks Component</h1>
    </div>
  );
}

export default Stocks;
