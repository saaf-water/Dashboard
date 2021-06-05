import React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['1', '2', '3', '4', '5', '6'],
  datasets: [
    {
      label: 'Temperature in Celsius',
      data: [20, 25, 24, 20, 22, 21],
      fill: true,
      fillOpacity: 0.5,
      backgroundColor: 'rgba(26, 201, 230, 0.4)',
      borderColor: 'rgba(23, 107, 160, 1.00)',
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

const Temperature = () => (
  <>
    <div className='header text-black dark:text-white'>
      <h5 className='title text-gray-400 dark:text-gray-400 font-bold'>Temperature</h5>
      <h1 class="font-extrabold text-4xl">50 ppm</h1>
      <div className='links'>
      </div>
    </div>
    <Line data={data} options={options} />
  </>
);
export default Temperature;
