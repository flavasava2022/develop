import React from "react";
import moment from "moment";
// import { StreamingPlugin, ChartStreaming } from "chartjs-plugin-streaming";

import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  RadialLinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Legend,
  Tooltip,
} from "chart.js";
import {
  Chart,
  Line,
  Pie,
  Doughnut,
  Radar,
  getDatasetAtEvent,
  getElementAtEvent,
  getElementsAtEvent,
} from "react-chartjs-2";
ChartJS.register(
  LinearScale,
  RadialLinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  //   StreamingPlugin,
  Legend,
  Tooltip
);

const data = {
  datasets: [
    {
      label: "real",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      fill: false,
      lineTension: 0,
      borderDash: [8, 4],
      data: [],
      showLine: true,
    },
  ],
};
console.log(data.datasets[0].data);
const RealTime_ChartTest_options = {
  elements: {
    line: {
      tesion: 0.5,
    },
  },

  scales: {
    xAxes: {
      realtime: async (chart) => {
        // request data so that it can be received asynchronously
        // assume the response is an array of {x: timestamp, y: value} objects
        await fetch(
          "https://aietproject-e3c42-default-rtdb.firebaseio.com/sensors/distance/measurement.json"
        )
          .then((response) => response.json())
          .then((data) => {
            console.log("datadatadatadatadatadatadata>>>>", data);
            // append the new data array to the existing chart data
            chart.data.datasets[0].data.push(...data);

            // update chart datasets keeping the current animation
            chart.update("quiet");
          });
      },
    },

    // yAxes: [
    //   {
    //     scaleLabel: {
    //       display: true,
    //       fontFamily: "Arial",
    //       labelString: "Moment",
    //       fontSize: 20,
    //       fontColor: "#6c757d",
    //     },
    //     ticks: {
    //       max: 100,
    //       min: 0,
    //     },
    //   },
    // ],
  },

  //   scales: {
  //     xAxes: [
  //       {
  //         type: "realtime",
  //         realtime: {
  //           onRefresh: function () {
  //             data.push({
  //               x: Date.now(),
  //               y: Math.random() * 100,
  //             });
  //           },
  //           delay: 300,
  //           refresh: 300,
  //         },
  //       },
  //     ],
  //     yAxes: [
  //       {
  //         scaleLabel: {
  //           display: true,
  //           fontFamily: "Arial",
  //           labelString: "Moment",
  //           fontSize: 20,
  //           fontColor: "#6c757d",
  //         },
  //         ticks: {
  //           max: 100,
  //           min: 0,
  //         },
  //       },
  //     ],
  //   },
  //   scales: {
  //     x: {
  //       type: "realtime",
  //       realtime: {
  //         onRefresh: function () {
  //           data.datasets[0].data.push({
  //             x: Date.now(),
  //             y: Math.random() * 100,
  //           });
  //         },
  //         delay: 300,
  //         refresh: 300,
  //       },
  //     },
  //     y: {
  //       max: 100,
  //       min: 0,
  //     },
  //   },
};

const RealtimeGraph = () => {
  return (
    <div className="App">
      <Line data={data} options={RealTime_ChartTest_options} />
    </div>
  );
};

export default RealtimeGraph;
