import React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['1', '2', '3', '4', '5', '6'],
  datasets: [
    {
      label: 'Turbidity in NTU',
      data: [4, 9, 12, 10, 7, 5],
      fill: true,
      fillOpacity: 0.5,
      backgroundColor: 'rgba(239, 126, 50, 0.5)',
      borderColor: 'rgb(222, 84, 44)',
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

const Turbidity = () => (
  <>
    <div className='header text-black dark:text-white'>
      <h5 className='title text-gray-400 dark:text-gray-400 font-bold'>Turbidity</h5>
      <h1 class="font-extrabold text-4xl"> 5 NTU</h1>
      <div className='links'>
      </div>
    </div>
    <Line data={data} options={options} />
  </>
);
export default Turbidity;
