//import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Navbar from "./component/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
     <div>
       <Navbar />
     </div>
     <Home />
    </div>
  );
}

export default App;
