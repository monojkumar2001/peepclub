import React from "react";
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Mint from './components/Mint';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TermsOfUse from "./components/TermsOfUse";
import Faqs from "./components/Faq";

function App() {


  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/mint">
            <Mint />
          </Route>
          <Route exact path="/terms">
            <TermsOfUse/>
          </Route>
          <Route exact path="/faq">
            <Faqs/>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
