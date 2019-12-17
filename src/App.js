import React from "react";
import Main from "./components/main";
import About from "./components/about";
import Services from "./components/services";
import Contact from "./components/contact";
import Registration from "../src/components/registration";
// import Test from './components/test';
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <React.Fragment>
        {/* <Main/> */}
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Main} exact strict />
            <Route path="/about" component={About} />
            <Route path="/services" component={Services} />
            <Route path="/contact" component={Contact} />
            <Route path="/registration" component={Registration} />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    </div>
  );
}

export default App;
