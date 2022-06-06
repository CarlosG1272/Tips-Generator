import Tips from "./Components/Tips";
import  Footer  from "./Components/footer";
import "./App.css"

function App() {
  return (
    <div className="App">
      <div className="tipContainer">
        <Tips />
      </div>

      <div className="footerContainer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
