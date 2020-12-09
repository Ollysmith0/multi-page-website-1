import React, { useEffect, useState, lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Loading from "./page/home/components/Loading/Loading";

const Webdesign = lazy(() =>
  import("./page/web-design/web-design-page/Webdesign")
);
const Appdesign = lazy(() =>
  import("./page/app-design/app-design-page/Appdesign")
);
const Graphicdesign = lazy(() =>
  import("./page/graphic-design/graphic-design-page/Graphicdesign")
);
const Home = lazy(() => import("./page/home/Home"));
const About = lazy(() => import("./page/about/About"));
const Location = lazy(() => import("./page/locations/Location"));
const Contact = lazy(() => import("./page/contact/Contact"));

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);
  return loading ? (
    <Loading />
  ) : (
    <Router>
      <Suspense fallback={<Loading />}>
        <Switch>
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
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
