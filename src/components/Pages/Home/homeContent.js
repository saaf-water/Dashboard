/*homeContent.js integrates all the different components of home page into one.*/

import React, {Fragment, useState, useEffect } from "react";
import { Listbox, Transition } from '@headlessui/react'
import useWebSocket from "react-use-websocket";
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import TDS from "./Graphs/TDS"
import ElectricalConductivity from "./Graphs/electricalConductivity"
import PH from "./Graphs/pH"
import Temperature from "./Graphs/Temperature"
import Turbidity from "./Graphs/Turbidity"
import Table from "./Table"

import Summary from "./Summary";
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
var nodeLocation = [
    { id: 20211112, location: 'St. Paul' },
    { id: 20211113, location: 'Caranzalem' },
  ]

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
    const [selected, setSelected] = useState(nodeLocation[0])

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
                <p className="font-light text-sm">Last Updated: {current.lastJsonMessage
                    ? current.lastJsonMessage.date + ", " + current.lastJsonMessage.time : (
                        <SkeletonTheme className="py-1" color="#cfcfcf" highlightColor="#c4c4c4">
                            <p>
                                <Skeleton count={1} />
                            </p>
                        </SkeletonTheme>)}</p>


                <Listbox value={selected} onChange={setSelected}>
                    {({ open }) => (
                        <>
                            <Listbox.Label className="block text-sm font-medium text-gray-700"></Listbox.Label>
                            <div className="mt-1 relative">
                                <Listbox.Button className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                    <span className="flex items-center">
                                        <span className="ml-3 block truncate">{selected.location}</span>
                                    </span>
                                    <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                        <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                    </span>
                                </Listbox.Button>

                                <Transition
                                    show={open}
                                    as={Fragment}
                                    leave="transition ease-in duration-100"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                                        {nodeLocation.map((area) => (
                                            <Listbox.Option
                                                key={area.id}
                                                className={({ active }) =>
                                                    classNames(
                                                        active ? 'text-white bg-indigo-600' : 'text-gray-900',
                                                        'cursor-default select-none relative py-2 pl-3 pr-9'
                                                    )
                                                }
                                                value={area}
                                            >
                                                {({ selected, active }) => (
                                                    <>
                                                        <div className="flex items-center">
                                                            <span
                                                                className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                                                            >
                                                                {area.location}
                                                            </span>
                                                        </div>

                                                        {selected ? (
                                                            <span
                                                                className={classNames(
                                                                    active ? 'text-white' : 'text-indigo-600',
                                                                    'absolute inset-y-0 right-0 flex items-center pr-4'
                                                                )}
                                                            >
                                                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                            </span>
                                                        ) : null}
                                                    </>
                                                )}
                                            </Listbox.Option>
                                        ))}
                                    </Listbox.Options>
                                </Transition>
                            </div>
                        </>
                    )}
                </Listbox>


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
                                        title="Saaf-Water-light"
                                        src="//www.arcgis.com/apps/Embed/index.html?webmap=fbadf2d08dd141aa8fbfe60a227e189b&extent=73.5435,15.0755,74.5577,15.6462&zoom=true&previewImage=false&scale=true&search=true&searchextent=true&disable_scroll=true&theme=light">
                                    </iframe>

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