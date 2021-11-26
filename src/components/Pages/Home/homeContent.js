/*homeContent.js integrates all the different components of home page into one.*/

import React, { useState, useEffect } from "react";
import useWebSocket from "react-use-websocket";
import TDS from "./Graphs/TDS";
import ElectricalConductivity from "./Graphs/electricalConductivity";
import PH from "./Graphs/pH";
import Temperature from "./Graphs/Temperature";
import Turbidity from "./Graphs/Turbidity";
import Table from "./Table";

import Summary from "./Summary";
import MenuBar from "../../MenuBar";
import Map from "../Map/Map";
import { useDispatch } from "react-redux";
import {
  setCurrentData,
  setHistoryData,
} from "../../../redux/reducers/saafwaterReducer";
//import Heatmap from "./Heatmap/Heatmap";

require("dotenv").config();

export default function HomeContent() {
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
  }, [history]);

  useEffect(() => {
    dispatch(setCurrentData({ data: current }));
  }, [current]);

  return (
    <>
      <div className="font-roboto flex-col pb-44 space-y-2 container px-5 py-5 mx-auto">
        <MenuBar current={current} />
        <div className="flex flex-wrap -m-4 ">
          <div className="p-4 w-full lg:w-2/4 xl:w-3/5">
            <div className="flex flex-row">
              <div className="flex-auto justify-center items-center  border border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 h-96 overflow-auto no-scrollbar">
                <div className="flex items-start justify-center h-full">
                  <Map />
                </div>
              </div>
            </div>
          </div>
          <div className="order-first p-4 w-full lg:w-2/4 xl:w-2/5">
            <Summary current={current} />
          </div>
        </div>
        <div className="flex flex-wrap -m-4 overflow-x-auto">
          <div className="flex justify-center flex-row p-4 lg:w-full">
            <div className="p-4 w-full lg:w-1/6 my-4 mx-4  border border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800">
              <TDS current={current} history={history} />
            </div>
            <div className="p-4 w-full lg:w-1/6 my-4 mx-4  border border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800">
              <Turbidity current={current} history={history} />
            </div>
            <div className="p-4 w-full lg:w-1/6 my-4 mx-4  border border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800">
              <PH current={current} history={history} />
            </div>
            <div className="p-4 w-full lg:w-1/6 my-4 mx-4  border border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800">
              <ElectricalConductivity current={current} history={history} />
            </div>
            <div className="p-4 w-full lg:w-1/6 my-4 mx-4  border border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800">
              <Temperature current={current} history={history} />
            </div>
          </div>
        </div>

        <div className="pb-5">
          <div className="flex flex-wrap justify-center -m-4 ">
            <div className=" w-full xl:w-2/3 m-4 relative border border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800">
              <div className="p-4">
                <div className="p-5 justify-self-start content-center font-roboto font-extrabold text-black dark:text-white text-3xl pb-5">
                  History{" "}
                </div>
                <Table historyMax={historyMax} />
              </div>
            </div>

            {/*
                        <div className=" w-full xl:w-1/4 m-4 relative border border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800" >
                            <div className="p-4">
                                <div className="p-5 justify-self-start content-center font-roboto font-extrabold text-black dark:text-white text-3xl pb-5">Water Quality History </div>
                                    <div className="flex justify-center">
                                        <Heatmap current={historyMax} />
                                    </div>
                            </div>
                        </div>
                        */}
          </div>
        </div>
      </div>
    </>
  );
}
