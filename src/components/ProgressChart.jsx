import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register necessary components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const ProgressChart = ({ data }) => {
  // Prepare chart data
  const chartData = {
    labels: data.map(entry => entry.date), // Dates on the X-axis
    datasets: [
      {
        label: 'Total Weight Lifted',
        data: data.map(entry => 
          entry.exercises.reduce((total, exercise) => 
            total + (exercise.sets * exercise.reps * exercise.weight), 0
          )
        ), // Total weight lifted on the Y-axis
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Workout Progress - Total Weight Lifted',
      },
    },
  };

  return (
    <div className="mt-10 md:mt-20 flex flex-col text-center">
      <h2 className="flex justify-center font-poppins text-3xl md:text-5xl font-bold mb-10">Workout Progress Chart</h2>
      <h3 className="font-dmSans flex justify-center" >Workout Progress</h3>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default ProgressChart;
