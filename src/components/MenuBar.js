import React, { Fragment, useState } from "react";
import { Listbox, Transition } from '@headlessui/react'
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import { LocationMarkerIcon } from '@heroicons/react/outline'


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const nodeLocation = [{id:20211112, location:"St. Paul"}]

const MenuBar = ({ current }) => {
    const [selected, setSelected] = useState(nodeLocation[0])

    if (current.lastJsonMessage) {
        const nodeLocation = current.lastJsonMessage.listID;
        console.log(nodeLocation)
        return (
            <div className="right-0 pl-1 flex flex-row justify-between items-center">
                <p className="font-light text-xs md:text-sm truncate">Last Updated: {current.lastJsonMessage
                    ? current.lastJsonMessage.date + ", " + current.lastJsonMessage.time : (
                        <SkeletonTheme className="py-1" color="#cfcfcf" highlightColor="#c4c4c4">
                            <p>
                                <Skeleton count={1} />
                            </p>
                        </SkeletonTheme>)}</p>


                <Listbox value={selected} onChange={setSelected}>
                        {({ open }) => (
                            <>
                                <Listbox.Label className="hidden sm:block flex-grow text-xs md:text-sm text-right font-medium text-gray-700 px-2">Location</Listbox.Label>
                                <div className="mt-1 w-36 sm:w-60 relative">
                                    <Listbox.Button className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                        <span className="flex items-center justify-start">
                                            <LocationMarkerIcon className="text-red-600 flex-shrink-0 h-6 w-6" aria-hidden="true" />
                                            <span className="ml-2 text-xs sm:text-sm block truncate">{selected.location}</span>
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
                                        <Listbox.Options className="absolute z-10 mt-1 right-0 w-60 bg-white shadow-lg max-h-56 rounded-md py-1 text-xs ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
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
                                                                <LocationMarkerIcon className={classNames(selected ? 'text-gray-900' : 'text-gray-400', "flex-shrink-0 h-6 w-6")} />
                                                                <span
                                                                    className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block')}
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
            </div>
        )
    }
    else{
        return(
            <SkeletonTheme className="py-1" color="#cfcfcf" highlightColor="#c4c4c4">
                            <p>
                                <Skeleton count={1} />
                            </p>
                        </SkeletonTheme>
        )

    }
};

export default MenuBar;