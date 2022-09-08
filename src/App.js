// import css
import "./index.css";

// import site components
import Header from "./components/Header.js";
import Content from "./components/Content.js";
import Carousell from "./components/Carousell.js";
import Footer from "./components/Footer.js";

// main app function
function App() {
  return (
    <div className="App">
      {/* import header component */}
      <Header></Header>
      {/* import body component */}
      <Content>
        {/* import carousell component into body */}
        <Carousell></Carousell>
      </Content>
      {/* import footer component */}
      <Footer></Footer>
    </div>
  );
}

export default App;
