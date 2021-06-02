import React from 'react'
import Navbar from './Navbar'

export default function Dashboard() {
  return (
    <div className="font-roboto bg-gray-200 dark:bg-gray-900 h-screen overflow-hidden">
      
      <Navbar/>
      
      <div class="flex flex-row">
        <div class="flex-auto lg:border lg:border-l border-t border-gray-300 dark:border-gray-700 lg:rounded-t-xl bg-white dark:bg-gray-800 h-screen relative"></div>
      </div>
    </div>
    ); 
}
