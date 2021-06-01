import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import Navbar from './Navbar'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Home() {
  return (
    <div className="font-roboto bg-gray-200 dark:bg-gray-900 h-screen overflow-hidden">
      
      <Navbar/>
      
      <div class="flex flex-row">
        <div class="flex-auto lg:border lg:border-l border-t border-gray-300 dark:border-gray-800 lg:rounded-t-xl bg-white dark:bg-black h-screen relative"></div>
      </div>
    </div>
    ); 
}
