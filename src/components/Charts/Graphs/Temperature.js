import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Line } from "react-chartjs-2";

const Graph = (graphData) => {
  const data = {
    labels: ["1", "2", "3", "4", "5", "6"],
    datasets: [
      {
        label: "Temperature in Celsius",
        data: [],
        fill: true,
        fillOpacity: 0.5,
        backgroundColor: "rgba(26, 201, 230, 0.4)",
        borderColor: "rgba(23, 107, 160, 1.00)"
      }
    ]
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  };

  graphData.graphData.hist.map((item) => {
    data.datasets[0].data.push(item.temperature);
    return 0;
  });

  return <Line data={data} options={options} />;
};

const Temperature = ({ current, history }) => {
  return (
    <>
      <div className="header text-black dark:text-white">
        <h5 className="title text-gray-400 dark:text-gray-400 font-bold">
          Temperature
        </h5>
        <h1 className="font-extrabold text-4xl">
          {current.lastJsonMessage
            ? current.lastJsonMessage.temperature + "°C"
            : "Loading..."}
        </h1>
        <div className="links"></div>
      </div>
      {history.lastJsonMessage ? (
        <Graph graphData={history.lastJsonMessage} />
      ) : (
        <SkeletonTheme color="#202020" highlightColor="#444">
          <p>
            <Skeleton count={3} />
          </p>
        </SkeletonTheme>
      )}
    </>
  );
};
export default Temperature;
