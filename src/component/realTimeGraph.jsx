// src/RealTimeChart.js
import React, { useEffect, useRef, useState } from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import zoomPlugin from "chartjs-plugin-zoom";

Chart.register(zoomPlugin);

const RealTimeChart = () => {
  const [data, setData] = useState([]);
  const chartRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      setData((prevData) => [
        ...prevData.slice(-49), // Keep only the last 50 data points
        { x: now, y: Math.random() * 100 },
      ]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const chartData = {
    datasets: [
      {
        label: "Real-time Data",
        data: data,
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.2)",
        fill: true,
        cubicInterpolationMode: "monotone",
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: "time",
        time: {
          unit: "second",
        },
        title: {
          display: true,
          text: "Time",
        },
      },
      y: {
        title: {
          display: true,
          text: "Value",
        },
        suggestedMin: 0,
        suggestedMax: 100,
      },
    },
    plugins: {
      zoom: {
        pan: {
          enabled: true,
          mode: "x",
        },
        zoom: {
          wheel: {
            enabled: true,
          },
          pinch: {
            enabled: true,
          },
          mode: "x",
        },
      },
    },
  };

  return (
    <div>
      <h2>Real-time Line Chart</h2>
      <Line ref={chartRef} data={chartData} options={options} />
    </div>
  );
};

export default RealTimeChart;
