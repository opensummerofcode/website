import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from '../navigation/navigation';
import Home from '../home/home-container';
import Footer from '../footer/footer';
import Partners from '../companies/partners';

function App() {
  return (
    <Router>
      <React.Fragment>
        <Navigation />
        <Route exact path="/" render={() => <Home />} />
        <Partners />
        <Footer />
      </React.Fragment>
    </Router>
  );
}

export default App;
