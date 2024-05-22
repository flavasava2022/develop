import { useEffect, useState } from "react";
import { Chart } from "primereact/chart";

const Graphs = () => {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue("--text-color");
    const textColorSecondary = documentStyle.getPropertyValue(
      "--text-color-secondary"
    );
    const surfaceBorder = documentStyle.getPropertyValue("--surface-border");
    const data = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "First Dataset",
          data: [40, 50, 55, 62, 67, 69, 70],
          fill: false,
          borderColor: documentStyle.getPropertyValue("--blue-500"),
          tension: 0.4,
        },
        // {
        //   label: "Second Dataset",
        //   data: [28, 48, 40, 19, 86, 27, 90],
        //   fill: false,
        //   borderColor: documentStyle.getPropertyValue("--pink-500"),
        //   tension: 0.4,
        // },
      ],
    };
    const options = {
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
          },
        },
        y: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
          },
        },
      },
    };

    setChartData(data);
    setChartOptions(options);
  }, []);

  return (
    <div className="w-[80%] m-auto pb-20 flex flex-col items-center justify-center gap-12">
      <h2 className="font-bold text-[2.5em] text-[#F4B102]  ">Graphs</h2>
      <div className="w-full" >
        <Chart type="line" data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default Graphs;
