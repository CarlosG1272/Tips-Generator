import { Route } from "react-router-dom";
import Tips from "./Components/Tips";

function App() {
  return (
    <div className="App">
     <Route to={"/app/quotes"}></Route>
     <Route to={"/app/tips"}><Tips /></Route>
    </div>
  );
}

export default App;
