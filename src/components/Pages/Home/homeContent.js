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
import { useSelector } from "react-redux";
require("dotenv").config();

export default function HomeContent() {
  const [selected, setSelected] = useState({
    id: 20211112,
    location: "St. Paul",
  });
  const [historyData, setHistoryData] = useState({});
  const [currentSummary, setCurrentSummary] = useState({ summary: undefined });
  const history = useSelector((state) => state.swData.historyData.data);
  const current = useSelector((state) => state.swData.currentData.data);

  const [socketUrlMax] = useState(process.env.React_App_HISTORYMAX_WEBSOCKET);

  const historyMax = useWebSocket(socketUrlMax);

  useEffect(() => {
    setHistoryData(history);
  }, [history]);

  useEffect(() => {
    if (historyData.lastJsonMessage) {
      let data = { lastJsonMessage: { hist: [] } };
      data.lastJsonMessage.hist = history.lastJsonMessage.hist.filter(
        (data) => selected.id === data.id
      );
      setHistoryData(data);
    }
  }, [selected]);

  useEffect(() => {
    setTimeout(() => {
      historyMax.sendMessage("Get Data");
    }, 1000);

    setInterval(() => {
      setTimeout(() => {
        historyMax.sendMessage("Get Data");
      }, 1000);
    }, 1800000);
  }, []);

  return (
    <>
      <div className="font-roboto flex-col pb-44 space-y-2 container px-5 py-5 mx-auto">
        <MenuBar
          current={current}
          selected={selected}
          setSelected={(data) => {
            setSelected(data);
          }}
        />
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
            <Summary current={current.lastJsonMessage} />
          </div>
        </div>
        <div className="flex flex-wrap -m-4 overflow-x-auto">
          <div className="flex justify-center flex-row p-4 lg:w-full">
            <div className="p-4 w-full lg:w-1/6 my-4 mx-4  border border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800">
              <TDS current={current} history={historyData} />
            </div>
            <div className="p-4 w-full lg:w-1/6 my-4 mx-4  border border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800">
              <Turbidity current={current} history={historyData} />
            </div>
            <div className="p-4 w-full lg:w-1/6 my-4 mx-4  border border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800">
              <PH current={current} history={historyData} />
            </div>
            <div className="p-4 w-full lg:w-1/6 my-4 mx-4  border border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800">
              <ElectricalConductivity current={current} history={historyData} />
            </div>
            <div className="p-4 w-full lg:w-1/6 my-4 mx-4  border border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800">
              <Temperature current={current} history={historyData} />
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
