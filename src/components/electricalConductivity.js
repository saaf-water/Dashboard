import React from 'react';
import { Line } from 'react-chartjs-2';

const data = { 
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
      {
        label: 'Electrical Conductivity',
        data: [12, 19, 3, 5, 2, 3],
        fill: true,
        fillOpacity: 0.5,
        backgroundColor: 'rgba(255, 10, 13, 0.1)',
        borderColor: 'rgba(235, 84, 140, 1.00)',
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

const ElectricalConductivity = () => (
    <>
    <div className='header'>
      <h5 className='title text-gray-400 font-bold'>Electrical Conductivity</h5>
      <h1 class="font-extrabold text-4xl">-- uS/cm</h1>
      <div className='links'>
      </div>
    </div>
    <Line data={data} options={options} />
    </>
);
export default ElectricalConductivity;
