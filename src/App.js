import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Dashboard from './components/Dashboard'
import Map from './components/Map'





function App() {
  return (
    <BrowserRouter>
        <Switch>
           <Route path="/" component={Dashboard} exact/>
           <Route path="/Charts" component={Dashboard}/>
           <Route path="/labTest" component={Dashboard}/>
           <Route path="/Map" component={Map}/>
       </Switch>
    </BrowserRouter>
  );
}

export default App;
