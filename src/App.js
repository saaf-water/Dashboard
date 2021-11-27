import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Charts from "./components/Pages/Charts/Charts";
import Dashboard from "./components/Pages/Home/Dashboard";
//import MapPage from "./components/Pages/Map/MapPage";
//import Map from './components/Pages/Map/Map'
import Navbar from "./components/Navbar";
import { useDispatch } from "react-redux";
import {
  //setDataLocation,
  setCurrentData,
  setHistoryData,
  setHistoryMax,
} from "./redux/reducers/saafwaterReducer";
import useWebSocket from "react-use-websocket";
/* The App.js file takes care of the routing of the webapp*/

// import LogIn from "./components/Login"
// import SignUp from "./components/SignUp"
// import { AuthProvider } from "./components/Auth"
// import ForgotPassword from "./components/ForgotPassword"

function App() {
  const [socketUrl] = useState(process.env.React_App_HISTORY_WEBSOCKET);
  const [socketCurrentUrl] = useState(process.env.React_App_PUMP_WEBSOCKET);
  const [socketUrlMax] = useState(process.env.React_App_HISTORYMAX_WEBSOCKET);
  const historyMax = useWebSocket(socketUrlMax);
  const history = useWebSocket(socketUrl);
  const current = useWebSocket(socketCurrentUrl);
  const dispatch = useDispatch();

  useEffect(() => {
    //console.log("Sending Message on Component Mount");
    current.sendMessage("Get Data");

    setTimeout(() => {
      history.sendMessage("Get Data");
    }, 1000);
    setTimeout(() => {
      historyMax.sendMessage("Get Data");
    }, 1000);

    //Every 30 Mins
    setInterval(() => {
      //console.log("Sending Message");
      current.sendMessage("Get Data");
      setTimeout(() => {
        history.sendMessage("Get Data");
      }, 2000);
      setTimeout(() => {
        historyMax.sendMessage("Get Data");
      }, 1000);
    }, 1800000);

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    dispatch(setHistoryData({ data: history }));
  }, [history, dispatch]);

  useEffect(() => {
    dispatch(setCurrentData({ data: current }));
  }, [current, dispatch]);
  useEffect(() => {
    dispatch(setHistoryMax({ data: historyMax }));
  }, [historyMax, dispatch]);
  return (
    //<AuthProvider>
    <BrowserRouter>
      <div className="font-roboto bg-gray-200 dark:bg-gray-900 h-screen overflow-hidden">
        <Navbar />
        <Switch>
          <Route path="/" component={Dashboard} exact />
          {/* <Route path="/Predictions" component={Dashboard}/> */}
          <Route path="/Charts" component={Charts} />
          {/* <Route path="/labTest" component={Dashboard} /> 
          <Route path="/map" component={MapPage} />*/}
        </Switch>
      </div>
    </BrowserRouter>
    //</AuthProvider>
  );
}

export default App;
