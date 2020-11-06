import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Webdesign from "../src/page/home/web-design-page/Webdesign";
import Appdesign from "../src/page/home/app-design-page/Appdesign";
import Graphicdesign from "../src/page/home/graphic-design-page/Graphicdesign";
import Home from "../src/page/home/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={Home} />
        <Route path="/Webdesign" component={Webdesign} />
        <Route path="/Appdesign" component={Appdesign} />
        <Route path="/Graphicdesign" component={Graphicdesign} />
        {/* <Route component={NotFound} /> */}
      </div>
    </Router>
  );
}

export default App;
