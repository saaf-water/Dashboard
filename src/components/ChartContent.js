import React from "react";
import TDS from "./TDS"
import ElectricalConductivity from "./electricalConductivity"
import PH from "./pH"
import Temperature from "./Temperature"
import Turbidity from "./Turbidity"
import CombinedChart from "./CombinedChart";


export default function ChartContent() {
    return (

        <>
        <div className="flex-col pb-44 space-y-2 container px-5 py-5 mx-auto">
                <div className="flex flex-wrap -m-4 overflow-x-auto">
                    <div className="flex justify-center flex-row p-4 lg:w-full">
                        <div className="p-6 w-full lg:w-1/6 my-4 mx-4  border border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800">
                            <TDS />
                        </div>
                        <div className="p-6 w-full lg:w-1/6 my-4 mx-4  border border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800">
                            <Turbidity />
                        </div>
                        <div className="p-6 w-full lg:w-1/6 my-4 mx-4  border border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800">
                            <PH />
                        </div>
                        <div className="p-6 w-full lg:w-1/6 my-4 mx-4  border border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800">
                            <ElectricalConductivity />
                        </div>
                        <div className="p-6 w-full lg:w-1/6 my-4 mx-4  border border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800">
                            <Temperature />
                        </div>
                    </div>
                </div>
                <div className=" hidden lg:block relative border border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800" >
                    <div className="p-4">
                        <div className="p-5 justify-self-start content-center font-roboto font-extrabold text-black dark:text-white text-3xl pb-5">History </div>
                        <CombinedChart />
                    </div>
                </div>
            </div>
        </>
    );
}