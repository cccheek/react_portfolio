import React from "react";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from "./pages/About";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/portfolio" component={Portfolio} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
