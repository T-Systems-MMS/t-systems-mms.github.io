// import css
import "./index.css";

// import site components
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import Carousell from "./components/Carousell.js";
import Footer from "./components/Footer.js";

// main app function
function App() {
  return (
    <div className="App">
      {/* import header component */}
      <Header></Header>
      {/* import body component */}
      <Body>
        {/* import carousell component into body */}
        <Carousell></Carousell>
      </Body>
      {/* import footer component */}
      <Footer></Footer>
    </div>
  );
}

export default App;
