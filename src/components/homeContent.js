import React, { useState, useEffect } from "react";
import useWebSocket from "react-use-websocket";

import TDS from "./../components/Charts/Graphs/TDS"
import ElectricalConductivity from "./../components/Charts/Graphs/electricalConductivity"
import PH from "./../components/Charts/Graphs/pH"
import Temperature from "./../components/Charts/Graphs/Temperature"
import Turbidity from "./../components/Charts/Graphs/Turbidity"
import Table from "./Table"

import Summary from "./Summary";
import Heatmap from "./Heatmap/Heatmap";


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
        "wss://node-red-saaf-water.eu-gb.mybluemix.net/ws/ID20210716/history"
    );

    const [socketCurrentUrl] = useState(
        "wss://node-red-saaf-water.eu-gb.mybluemix.net/ws/ID20210716"
    );
    const [socketUrlMax] = useState(
        "wss://node-red-saaf-water.eu-gb.mybluemix.net/ws/ID20210716/historyMax"
    );

    const historyMax = useWebSocket(socketUrlMax);
    const history = useWebSocket(socketUrl);
    const current = useWebSocket(socketCurrentUrl);

    useEffect(() => {
        console.log("Sending Message on Component Mount");
        current.sendMessage("Get Data");
        setTimeout(() => {
            history.sendMessage("Get Data");
        }, 1000);
        setTimeout(() => {
            historyMax.sendMessage("Get Data");
        }, 1000);

        //Every 30 Mins
        setInterval(() => {
            console.log("Sending Message");
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
                <div className="flex flex-wrap -m-4 order-last lg:order-first">
                    <div className="p-4 w-full lg:w-2/4 xl:w-3/5">
                        <div className="flex flex-row">
                            <div className="flex-auto justify-center items-center  border border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 h-96 overflow-auto no-scrollbar">
                                <div className="flex items-start justify-center h-full">
                                    <iframe
                                        className={classNames(useThemeDetector() ? 'hidden' : 'block', 'border-gray-300 rounded-xl')}
                                        width="100%"
                                        height="100%"
                                        frameborder="0"
                                        scrolling="no"
                                        marginheight="0"
                                        marginwidth="0"
                                        title="Saaf-Water-light"
                                        src="//www.arcgis.com/apps/Embed/index.html?webmap=fbadf2d08dd141aa8fbfe60a227e189b&extent=73.5435,15.0755,74.5577,15.6462&zoom=true&previewImage=false&scale=true&search=true&searchextent=true&disable_scroll=true&theme=light">
                                    </iframe>

                                    <iframe
                                        className={classNames(useThemeDetector() ? 'block' : 'hidden', 'border-gray-700 rounded-xl')}
                                        width="100%"
                                        height="100%"
                                        frameborder="0"
                                        scrolling="no"
                                        marginheight="0"
                                        marginwidth="0"
                                        title="Saaf-Water-Dark"
                                        src="//www.arcgis.com/apps/Embed/index.html?webmap=3c0c2dc817994509b9d529f7000b3a85&extent=50.3459,3.4536,115.2531,38.1566&zoom=true&previewImage=false&scale=true&search=true&searchextent=true&disable_scroll=true&theme=dark">
                                    </iframe>
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
                    <div className=" w-full lg:w-2/3 m-4 relative border border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800" >
                        <div className="p-4">
                            <div className="p-5 justify-self-start content-center font-roboto font-extrabold text-black dark:text-white text-3xl pb-5">History </div>
                            <Table historyMax={historyMax} />
                        </div>
                    </div>
                </div>

                <div className="pb-5">
                    <div className=" w-full lg:w-2/3 m-4 relative border border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800" >
                        <div className="p-4">
                            <div className="p-5 justify-self-start content-center font-roboto font-extrabold text-black dark:text-white text-3xl pb-5">HeatMap </div>
                            <Heatmap current={current} />
                        </div>
                    </div>
                </div>

                <div className="pb-5">
                    <div className=" w-full m-4 relative border border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800" >
                        <div className="p-4">
                            <div className="p-5 justify-self-start content-center font-roboto font-extrabold text-black dark:text-white text-3xl pb-5">Charts </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}