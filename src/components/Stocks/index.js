import { Redirect, useHistory } from "react-router-dom";

function Stocks() {
  let loggedIn = true;
  const history = useHistory();

  if (!loggedIn) return <Redirect to="/" />;

  const handleClick = () => {
    window.alert("sending info to the DB!");
    console.log(history);
    history.push("/");
  };
  return (
    <div className="comp orange">
      <h1>Stocks Component</h1>
      <button onClick={handleClick}>Home</button>
    </div>
  );
}

export default Stocks;
