/*homeContent.js integrates all the different components of home page into one.*/

import React, { useState, useEffect } from "react";
import useWebSocket from "react-use-websocket";
import TDS from "./Graphs/TDS"
import ElectricalConductivity from "./Graphs/electricalConductivity"
import PH from "./Graphs/pH"
import Temperature from "./Graphs/Temperature"
import Turbidity from "./Graphs/Turbidity"
import Table from "./Table"

import Summary from "./Summary";
import MenuBar from "../../MenuBar";
//import Heatmap from "./Heatmap/Heatmap";

require('dotenv').config()

const useThemeDetector = () => {
    const getCurrentTheme = () => window.matchMedia("(prefers-color-scheme: dark)").matches;
    const [isDarkTheme, setIsDarkTheme] = useState(getCurrentTheme());
    const mqListener = (e => {
        setIsDarkTheme(e.matches);
    });

    useEffect(() => {
        const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
        darkThemeMq.addListener(mqListener);
        return () => darkThemeMq.removeListener(mqListener);
    }, []);
    return isDarkTheme;
}

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function HomeContent() {

    const [socketUrl] = useState(
        process.env.React_App_HISTORY_WEBSOCKET
    );

    const [socketCurrentUrl] = useState(
        process.env.React_App_PUMP_WEBSOCKET
    );
    const [socketUrlMax] = useState(
        process.env.React_App_HISTORYMAX_WEBSOCKET
    );

    const historyMax = useWebSocket(socketUrlMax);
    const history = useWebSocket(socketUrl);
    const current = useWebSocket(socketCurrentUrl);
    

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

    return (

        <>
            <div className="font-roboto flex-col pb-44 space-y-2 container px-5 py-5 mx-auto">
                <MenuBar current={current} />
                <div className="flex flex-wrap -m-4 ">
                    <div className="p-4 w-full lg:w-2/4 xl:w-3/5">
                        <div className="flex flex-row">
                            <div className="flex-auto justify-center items-center  border border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 h-96 overflow-auto no-scrollbar">
                                <div className="flex items-start justify-center h-full">
                                    <iframe
                                        className={classNames(useThemeDetector() ? 'block' : 'block', 'border-gray-300 rounded-xl')}
                                        width="100%"
                                        height="100%"
                                        frameborder="0"
                                        scrolling="no"
                                        marginheight="0"
                                        marginwidth="0"
                                        title="Saaf-Water-Demo" 
                                        src="//mslqpg6pwmixd3ji.maps.arcgis.com/apps/Embed/index.html?webmap=56b19dadc06545a6a34e0e02be4c427a&extent=73.5535,14.9888,75.5819,16.1371&home=true&zoom=true&previewImage=false&scale=true&search=true&searchextent=true&basemap_gallery=true&disable_scroll=false&theme=light">                                    </iframe>
                                    {/* <iframe
                                        className={classNames(useThemeDetector() ? 'block' : 'hidden', 'border-gray-700 rounded-xl')}
                                        width="100%"
                                        height="100%"
                                        frameborder="0"
                                        scrolling="no"
                                        marginheight="0"
                                        marginwidth="0"
                                        title="Saaf-Water-Dark"
                                        src="//www.arcgis.com/apps/Embed/index.html?webmap=3c0c2dc817994509b9d529f7000b3a85&extent=50.3459,3.4536,115.2531,38.1566&zoom=true&previewImage=false&scale=true&search=true&searchextent=true&disable_scroll=true&theme=dark">
                                    </iframe> */}
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
                        <div className=" w-full xl:w-2/3 m-4 relative border border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800" >
                            <div className="p-4">
                                <div className="p-5 justify-self-start content-center font-roboto font-extrabold text-black dark:text-white text-3xl pb-5">History </div>
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