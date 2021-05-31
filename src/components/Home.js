import React from 'react'
import './Home.css'
import SideBar from './Sidebar';
function Home() {
    return (
        <div class="flex flex-col font-roboto bg-gray-200 h-screen">
      <div class="flex flex-row py-4 px-12 justify-between items-center">
        <div class="text-4xl font-thin text-gray-600">
          <span class="text-4xl font-black text-blue-700">Saaf </span> water
        </div>
        <div class="flex flex-row rounded-xl bg-white h-5/6 w-64 border border-gray-300  items-center">
          <svg class=" p-1 w-6 h-6" fill="none" stroke="gray" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          <div class="text-gray-500">Global Search</div>
        </div>
        <div class="flex flex-row items-center">
          <a>
            <div class="flex w-8 h-8 rounded-full bg-red-300 items-center" >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
            </div>
            
          </a>
          <p class="text-lg px-2">Hi,</p>
          <p class="text-lg font-bold">Manikanta</p>
        </div>
      </div>
      
      <div class="flex flex-row overflow-auto">
        <div class="flex flex-col justify-between items-center w-64 p-10">
          <div class="flex flex-col space-y-5">
           <SideBar/>
          </div>
          <div class="flex flex-col space-y-2">
            <p class="text-gray-500 text-sm">Ground Water Pump</p>
            <a><div class="flex items-center text-lg font-medium text-blue-600 rounded-xl bg-white border border-gray-300 shadow-lg px-10 w-52 h-20" >Pump 2402</div></a>   
          </div>          
        </div>

        <div class="flex-auto border border-l border-t border-gray-300 rounded-tl-3xl bg-white h-screen"></div>
      </div>
    </div>
    );
}

export default Home;