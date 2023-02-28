import { useHistory, Redirect } from "react-router-dom";

function Stocks() {
  const history = useHistory();
  const loggedIn = true;

  console.log("history: ", history);

  if (!loggedIn) return <Redirect to="/not-logged-in" />;

  const handleClick = () => {
    window.alert("Sending info to the DB!");

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
