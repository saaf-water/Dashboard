import React, { useState, useEffect } from "react";
import useWebSocket from "react-use-websocket";

import TDS from "./Graphs/TDS"
import ElectricalConductivity from "./Graphs/electricalConductivity"
import PH from "./Graphs/pH"
import Temperature from "./Graphs/Temperature"
import Turbidity from "./Graphs/Turbidity"
import History from "./History";


export default function ChartContent() {
    const [socketUrl] = useState(
        "wss://node-red-saaf-water.eu-gb.mybluemix.net/ws/ID20210716/history"
      );
    
      const [socketCurrentUrl] = useState(
        "wss://node-red-saaf-water.eu-gb.mybluemix.net/ws/ID20210716"
      );
    
      const history = useWebSocket(socketUrl);
      const current = useWebSocket(socketCurrentUrl);
    
      useEffect(() => {
        console.log("Sending Message on Component Mount");
        current.sendMessage("Get Data");
        setTimeout(() => {
          history.sendMessage("Get Data");
        }, 2000);
    
        //Every 30 Mins
        setInterval(() => {
          console.log("Sending Message");
          current.sendMessage("Get Data");
          setTimeout(() => {
            history.sendMessage("Get Data");
          }, 2000);
        }, 1800000);
        // eslint-disable-next-line
      }, []);
    
    return (

        <>
        <div className="flex-col pb-44 space-y-2 container px-5 py-5 mx-auto">
                <div className="flex flex-wrap -m-4 overflow-x-auto">
                    <div className="flex justify-center flex-row p-4 lg:w-full">
                        <div className="p-6 w-full lg:w-1/6 my-4 mx-4  border border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800">
                            <TDS current={current} history={history} />
                        </div>
                        <div className="p-6 w-full lg:w-1/6 my-4 mx-4  border border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800">
                            <Turbidity current={current} history={history} />
                        </div>
                        <div className="p-6 w-full lg:w-1/
                        6 my-4 mx-4  border border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800">
                            <PH current={current} history={history} />
                        </div>
                        <div className="p-6 w-full lg:w-1/6 my-4 mx-4  border border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800">
                            <ElectricalConductivity current={current} history={history} />
                        </div>
                        <div className="p-6 w-full lg:w-1/6 my-4 mx-4  border border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800">
                            <Temperature current={current} history={history} />
                        </div>
                    </div>
                </div>
                <div className=" hidden lg:block relative border border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800" >
                    <div className="p-4">
                        <div className="p-5 justify-self-start content-center font-roboto font-extrabold text-black dark:text-white text-3xl pb-5">History </div>
                        <History />
                    </div>
                </div>
            </div>
        </>
    );
}