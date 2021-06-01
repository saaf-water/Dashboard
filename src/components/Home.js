import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import SideBar from './Sidebar'
import Navbar from './Navbar'


const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Home() {
  return (
    <div className="font-roboto bg-gray-200 h-screen overflow-hidden">
      
      <Navbar/>
      
      <div class="flex flex-row">
        {/* <div class="f flex-col justify-between items-center w-64 p-10 hidden lg:flex">
          <div class="flex flex-col space-y-5">
           <SideBar/>    
          </div>
          <div class="flex flex-col space-y-2">
            <p class="text-gray-500 text-sm">Ground Water Pump</p>
            <a><div class="flex items-center text-lg font-medium text-blue-600 rounded-xl bg-white border border-gray-300 shadow-lg px-10 w-52 h-20" >Pump 2402</div></a>   
          </div>          
        </div> */}

        <div class="flex-auto lg:border lg:border-l border-t border-gray-300 lg:rounded-t-3xl bg-white h-screen"></div>
      </div>
    </div>
    );
}
