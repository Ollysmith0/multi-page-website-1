import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Webdesign from "../src/page/web-design/web-design-page/Webdesign";
import Appdesign from "../src/page/app-design/app-design-page/Appdesign";
import Graphicdesign from "../src/page/graphic-design/graphic-design-page/Graphicdesign";
import Home from "../src/page/home/Home";
import Loading from "./page/home/components/Loading/Loading";
import About from "../src/page/about/About";
import Location from "../src/page/locations/Location";
import Contact from "../src/page/contact/Contact";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);
  return loading ? (
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
        <Route path="/Contact" component={Contact} />
        {/* <Route component={NotFound} /> */}
      </div>
    </Router>
  );
}

export default App;
