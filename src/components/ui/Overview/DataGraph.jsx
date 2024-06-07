'use client';

import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';

const DataGraph = () => {
  const data = {
    labels: ['Live casino', 'Sports', 'Slots'],
    datasets: [
      {
        label: 'Most played games',
        data: [300, 50, 100],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
        ],
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="flex h-[20rem] max-h-[20rem] flex-col justify-center rounded-xl border border-slate-200 bg-white p-3 shadow-lg">
      <p className="pt-1 text-sm font-medium text-slate-700">
        Most Played Games
      </p>
      <div className="relative h-full p-4">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
};

export default DataGraph;
