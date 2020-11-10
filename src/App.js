import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Webdesign from "../src/page/web-design/web-design-page/Webdesign";
import Appdesign from "../src/page/app-design/app-design-page/Appdesign";
import Graphicdesign from "../src/page/graphic-design/graphic-design-page/Graphicdesign";
import Home from "../src/page/home/Home";
import Loading from "./page/home/components/Loading/Loading";
import About from "../src/page/about/About";
import Location from "../src/page/locations/Location";

function App() {
  const [loaded, setLoaded] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoaded(false), 2000);
  }, []);
  return loaded ? (
    <Loading />
  ) : (
    <Router>
      <div className="App">
        <Route exact path="/" exact component={Home} />
        <Route path="/Webdesign" component={Webdesign} />
        <Route path="/Appdesign" component={Appdesign} />
        <Route path="/Graphicdesign" component={Graphicdesign} />
        <Route path="/About" component={About} />
        <Route path="/Location" component={Location} />
        {/* <Route component={NotFound} /> */}
      </div>
    </Router>
  );
}

export default App;
