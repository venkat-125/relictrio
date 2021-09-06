import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { HireDeveloper } from './components';
import { AboutUs, Footer, Header } from './components/organisms';
import Careers from './components/organisms/Careers';



function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path="/hire-developers" exact component={HireDeveloper}/>
           <Route path="/aboutus" exact component={AboutUs} /> 
           <Route path="/careers" exact component={Careers} />
        </Switch>
      </Router>
     <Footer /> 
    </div>
  );
}

export default App;
