import React from 'react';
import { Line } from 'react-chartjs-2';

const data = { 
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
      {
        label: 'TDS in ppm',
        data: [12, 9, 2, 10, 8, 7],
        fill: true,
        fillOpacity: 0.5,
        backgroundColor: 'rgba(123, 209, 82, 0.3)',
        borderColor: 'rgb(5, 115, 74)',
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

const TDS = () => (
    <>
    <div className='header'>
      <h5 className='title text-gray-400 font-bold'>TDS</h5>
      <h1 class="font-extrabold text-4xl">50 ppm</h1>
      <div className='links'>
      </div>
    </div>
    <Line data={data} options={options} />
    </>
);
export default TDS;
