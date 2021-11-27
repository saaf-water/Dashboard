import React, { useState, useEffect } from "react";

import { useSelector } from "react-redux";
//import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import ElectricalConductivityFull from "./Graphs/electricalConductivity";
import PHFull from "./Graphs/pH";
import TDSFull from "./Graphs/TDS";
import TemperatureFull from "./Graphs/Temperature";
import TurbidityFull from "./Graphs/Turbidity";
import MenuBar from "../../MenuBar";

require("dotenv").config();
/* ChartContent.js communicates through websockets and sends props to other graph components*/

export default function ChartContent() {
  const [selected, setSelected] = useState({
    id: 20211112,
    location: "St. Paul",
  });
  const [historyData, setHistoryData] = useState({});
  const history = useSelector((state) => state.swData.historyData.data);
  const current = useSelector((state) => state.swData.currentData.data);

  useEffect(() => {
    setHistoryData(history);
  }, [history]);

  useEffect(() => {
    if (historyData.lastJsonMessage) {
      let data = { lastJsonMessage: { hist: [] } };
      data.lastJsonMessage.hist = history.lastJsonMessage.hist.filter(
        (data) => {
          if (selected.id === 0) return data;
          else if (selected.id === data.id) return data;
        }
      );
      setHistoryData(data);
    }
  }, [selected]);

  return (
    <div className="font-roboto flex-col pb-44 space-y-2 container px-5 py-5 mx-auto">
      <MenuBar
        current={current}
        selected={selected}
        setSelected={(data) => {
          setSelected(data);
        }}
      />
      <div className="flex flex-wrap justify-center -m-4">
        <div className=" w-full lg:w-2/5 m-4 relative border border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800">
          <div className="p-4">
            <div className="p-5 justify-self-start content-center font-roboto font-extrabold text-black dark:text-white text-3xl pb-5">
              TDS
            </div>
            <TDSFull current={current} history={historyData} />
          </div>
        </div>
        <div className=" w-full lg:w-2/5 lg:h-1/4 m-4 relative border border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800">
          <div className="p-4">
            <div className="p-5 justify-self-start content-center font-roboto font-extrabold text-black dark:text-white text-3xl pb-5">
              Turbidity
            </div>
            <TurbidityFull current={current} history={historyData} />
          </div>
        </div>
        <div className=" w-full lg:w-2/5 m-4 relative border border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800">
          <div className="p-4">
            <div className="p-5 justify-self-start content-center font-roboto font-extrabold text-black dark:text-white text-3xl pb-5">
              ph
            </div>
            <PHFull current={current} history={historyData} />
          </div>
        </div>
        <div className=" w-full lg:w-2/5 m-4 relative border border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800">
          <div className="p-4">
            <div className="p-5 justify-self-start content-center font-roboto font-extrabold text-black dark:text-white text-3xl pb-5">
              Electrical Conductivity
            </div>
            <ElectricalConductivityFull
              current={current}
              history={historyData}
            />
          </div>
        </div>
        <div className=" w-full lg:w-2/5 m-4 relative border border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800">
          <div className="p-4">
            <div className="p-5 justify-self-start content-center font-roboto font-extrabold text-black dark:text-white text-3xl pb-5">
              Temperature
            </div>
            <TemperatureFull current={current} history={historyData} />
          </div>
        </div>
      </div>
    </div>
  );
}
