import Dashboard from './components/Dashboard'
import React from 'react'
import {
  HashRouter,
  Route,
} from "react-router-dom";

function App() {
  return (
    <HashRouter basename='/'>
      <Route exact path="/Dashboard/" component={Dashboard}/>
      <Route exact path="/" component={Dashboard}/>
      <Route  path="/Charts"component={Dashboard}/>
      <Route  path="/labTest"component={Dashboard}/>
      <Route  path="/Map"component={Dashboard}/>
    </HashRouter>
  );
}

export default App;
