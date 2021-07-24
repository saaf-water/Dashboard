import React from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import ReactTooltip from "react-tooltip";

import "./Heatmap.css";

const today = new Date();

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

const Heatmap = ({ current }) => {
  let calenderData = [];
  // console.log(current.lastJsonMessage);
  // eslint-disable-next-line
  const randomValues = getRange(2000).map((index) => {
    return {
      date: shiftDate(today, -index),
      count: getRandomInt(0, 4)
    };
  });
  //console.log(randomValues);

  if (current.lastJsonMessage) {
    Object.keys(current.lastJsonMessage.hist).map((item) =>
      calenderData.push({
        date: shiftDate(today, -item),                     //Dummy Date
        //date: current.lastJsonMessage.hist[item].date,   //Websocket date
        count: current.lastJsonMessage.hist[item].summary
      })
    );
  }

   //console.log(calenderData);

  return (
    <div>
      <div style={{ width: "125px" }}>
      <CalendarHeatmap
        startDate={shiftDate(today, -364)}
        endDate={today}
        horizontal={false}
        values={calenderData}
        classForValue={(value) => {
          if (!value) {
            return "color-empty";
          }
          return `color-beammp-${value.count}`;
        }}
        tooltipDataAttrs={(value) => {
          return {
            "data-tip": `Water Quality: ${value.count} on ${value.date}`               
          };
        }}
        showWeekdayLabels={false}
      />
      </div>

      <ReactTooltip />
    </div>
  );
};
export default Heatmap;
