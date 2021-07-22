import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Line } from "react-chartjs-2";

const Graph = (graphData) => {
  const data = {
    labels: ["1", "2", "3", "4", "5", "6"],
    datasets: [
      {
        label: 'Turbidity in NTU',
        data: [],
        fill: true,
        fillOpacity: 0.5,
        backgroundColor: 'rgba(239, 126, 50, 0.5)',
        borderColor: 'rgb(222, 84, 44)',
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
    data.datasets[0].data.push(item.turbidity);
    return 0;
  });

  return <Line data={data} options={options} />;
};

const Turbidity = ({ current, history }) => {
  return (
    <>
      <div className="header text-black dark:text-white">
        <h5 className="title text-gray-400 dark:text-gray-400 font-bold">
        Turbidity
        </h5>
        <h1 className="font-extrabold text-4xl">
          {current.lastJsonMessage
            ? current.lastJsonMessage.turbidity + " NTU"
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
export default Turbidity;
