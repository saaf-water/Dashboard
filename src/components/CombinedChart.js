import React from 'react';
import { Line } from 'react-chartjs-2';

const CombinedData = { 
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
      {
        label: 'TDS',
        data: [12, 19, 3, 5, 2, 3],
        fill: true,
        fillOpacity: 0.5,
        backgroundColor: 'rgba(255, 10, 13, 0.1)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
      {
        label: 'Turbidity',
        data: [12, 19, 3, 5, 2, 3],
        fill: true,
        fillOpacity: 0.5,
        backgroundColor: 'rgba(255, 10, 13, 0.1)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
      {
        label: 'pH',
        data: [12, 19, 3, 5, 2, 3],
        fill: true,
        fillOpacity: 0.5,
        backgroundColor: 'rgba(255, 10, 13, 0.1)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
      {
        label: 'Electrical Conductivity',
        data: [12, 19, 3, 5, 2, 3],
        fill: true,
        fillOpacity: 0.5,
        backgroundColor: 'rgba(255, 10, 13, 0.1)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
      {
        label: 'Temperature',
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

const CombinedChart = () => (
    <>
    <div className='header'>
      <h1 className='title'>History</h1>
      </div>
    <Line data={CombinedData} options={options} />
    </>
);
export default CombinedChart;
