import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Footer from "./components/Footer/Footer";
const App = () => {
 
  return (
    <>
    <Router>
      {/* <Routes>
      <Route path="/" component={Home} />

      </Routes> */}
      <Home/>
        {/* <Route path="/home" component={Home} ></Route> */}

      
      {/* <Footer /> */}
    </Router>
</>
  );
};

export default App;
