import React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['1', '2', '3', '4', '5', '6'],
  datasets: [
    {
      label: 'pH value',
      data: [3, 5, 5, 6, 4, 2],
      fill: true,
      fillOpacity: 0.5,
      backgroundColor: 'rgba(231, 227, 78, 0.8)',
      borderColor: 'rgb(234, 189, 59)',
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const PH = () => (
  <>
    <div className='header text-black dark:text-white'>
      <h5 className='title text-gray-400 dark:text-gray-400 font-bold'>pH</h5>
      <h1 class="font-extrabold text-4xl">6.4</h1>
    </div>
    <Line data={data} options={options} />
  </>
);
export default PH;
