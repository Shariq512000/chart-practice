// import React from 'react';
// import {
//   Chart as ChartJS,
//   RadialLinearScale,
//   PointElement,
//   LineElement,
//   Filler,
//   Tooltip,
//   Legend,
// } from 'chart.js';
// import { Radar } from 'react-chartjs-2';

// function RadarChart() {

// ChartJS.register(
//   RadialLinearScale,
//   PointElement,
//   LineElement,
//   Filler,
//   Tooltip,
//   Legend
// );

// const data = {
//   labels: ['Thing 1', 'Thing 2', 'Thing 3', 'Thing 4', 'Thing 5', 'Thing 6'],
//   datasets: [
//     {
//       label: '# of Votes',
//       data: [2, 9, 3, 5, 2, 3],
//       backgroundColor: 'rgba(255, 99, 132, 0.2)',
//       borderColor: 'rgba(255, 99, 132, 1)',
//       borderWidth: 1,
//     },
//   ],
// };

//   return <Radar data={data} />;
// }

// export default RadarChart;



import React from 'react';
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';



function ChartRadar() {


  const data = [
    {
      subject: 'Math',
      A: 120,
      B: 110,
      C: 90,
      fullMark: 150,
    },
    {
      subject: 'Chinese',
      A: 98,
      B: 130,
      C: 120,
      fullMark: 150,
    },
    {
      subject: 'English',
      A: 86,
      B: 130,
      C: 77,
      fullMark: 150,
    },
    {
      subject: 'Geography',
      A: 99,
      B: 100,
      C: 111,
      fullMark: 150,
    },
    {
      subject: 'Physics',
      A: 85,
      B: 90,
      C: 88,
      fullMark: 150,
    },
    {
      subject: 'History',
      A: 65,
      B: 85,
      C: 120,
      fullMark: 150,
    },
  ];

    return (
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 150]} />
          <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
          <Radar name="Lily" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
          <Radar name="Lily" dataKey="C" stroke="#FF0000" fill="#FF0000" fillOpacity={0.6} />
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    );
  }

export default ChartRadar;

