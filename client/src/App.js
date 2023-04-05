import React , {useContext, useEffect, useState} from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import "antd/dist/antd.css";
import "font-awesome/css/font-awesome.min.css";
import Footer from "./components/Footer/Footer";
import Editor from "./components/Video/Editor";
import VideoContext from "./context/VideoContext";
const App = () => {
 
  return (
    <>
    {/* <Editor
          language="xml"
          displayName="HTML"
          value={message}
          onChange={setMessage}
        /> */}
        {/* {<Editor/>} */}
    <Router>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </Router>
</>
  );
};

export default App;
