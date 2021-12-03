// Copyright 2021 Saaf water under Apache 2.0 License.
// Chart.js where Chart content is exported.

import React from 'react'
import ChartContent from './ChartContent';
/*Chart.js shows the ChartContent.js*/
export default function Dashboard() {
  return (
    <div className="font-roboto">
      <div class="flex flex-row">
        <div class="flex-auto  lg:border lg:border-l border-t border-gray-300 dark:border-gray-700 lg:rounded-t-xl bg-white dark:bg-gray-800 h-screen relative overflow-auto no-scrollbar">
          <ChartContent />
        </div>
      </div>
    </div>
  );
};