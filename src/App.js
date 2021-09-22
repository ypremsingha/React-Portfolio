import "./App.css";
import "./media.css";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
//import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <div className="App" >
     <div>
       <Navbar />
     </div>
     <Home />
     <About />
     <Portfolio />
     <Contact />
    </div>
  );
}

export default App;
