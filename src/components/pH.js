import React from 'react';
import { Line } from 'react-chartjs-2';

const data = { 
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
      {
        label: 'pH value',
        data: [12, 19, 3, 5, 2, 3],
        fill: true,
        fillOpacity: 0.5,
        backgroundColor: 'rgba(255, 10, 13, 0.1)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
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
    <div className='header'>
      <h5 className='title'>pH</h5>
      <h1 class="">6.4</h1>
      </div>
    <Line data={data} options={options} />
    </>
);
export default PH;
