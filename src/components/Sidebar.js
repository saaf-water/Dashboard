import React from 'react'
import { NavLink } from "react-router-dom";
import DashboardTwoToneIcon from "@material-ui/icons/DashboardTwoTone";
import TimelineIcon from "@material-ui/icons/Timeline";
import MapTwoToneIcon from "@material-ui/icons/MapTwoTone";
import OpacityTwoToneIcon from "@material-ui/icons/OpacityTwoTone";
export default function SideBar() {
  return (
<>
  <div class="flex px-3 rounded-xl border w-52 h-12 items-center hover:border-gray-300 hover:bg-white hover:shadow-lg hover:text-blue-900">
  <DashboardTwoToneIcon/><p class="px-3 text-currentColor">Dashboard</p>
  </div>
  <div class="flex px-3 rounded-xl border w-52 h-12 items-center hover:border-gray-300 hover:bg-white hover:shadow-lg hover:text-blue-900" >
  <MapTwoToneIcon/><p class="px-3">Map</p>
  </div>
  <div class="flex px-3 rounded-xl border w-52 h-12 items-center hover:border-gray-300 hover:bg-white hover:shadow-lg hover:text-blue-900">
  <TimelineIcon/><p class="px-3">Charts</p>
  </div>
  <div class="flex px-3 rounded-xl border w-52 h-12 items-center hover:border-gray-300 hover:bg-white hover:shadow-lg hover:text-blue-900">
   <OpacityTwoToneIcon/> <p class="px-3">Lab Test</p>
  </div>
  </>
    );
}