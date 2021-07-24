import React from "react";
import ReactDOM from "react-dom";
import CalendarHeatmap from "react-calendar-heatmap";
import ReactTooltip from "react-tooltip";

import "./react-calendar-heatmap.css";

const today = new Date();

function Map() {
  const randomValues = getRange(2000).map((index) => {
    return {
      date: shiftDate(today, -index),
      count: getRandomInt(0, 4)
    };
  });
  return (
    <div>
      <CalendarHeatmap
        startDate={shiftDate(today, -364)}
        endDate={today}
        values={randomValues}
        classForValue={(value) => {
          if (!value) {
            return "color-empty";
          }
          return `color-beammp-${value.count}`;
        }}
        tooltipDataAttrs={(value) => {
          return {
            "data-tip": `${value.date.toISOString().slice(0, 10)} has count: ${
              value.count
            }`
          };
        }}
        showWeekdayLabels={false}
        onClick={(value) =>
          alert(`Clicked on value with count: ${value.count}`)
        }
      />
      <ReactTooltip />
    </div>
  );
}

function shiftDate(date, numDays) {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + numDays);
  return newDate;
}

function getRange(count) {
  return Array.from({ length: count }, (_, i) => i);
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Map />, rootElement);
