import React from 'react';
import {
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  LabelList,
  ResponsiveContainer
} from 'recharts';

const rangeData = [
  {
    "feature": "Annual Client",
    "importance": [
      0,
      11
    ],
    "barLabel": 11
  },
  {
    "feature": "Infraction Type",
    "importance": [
      11,
      30
    ],
    "barLabel": 16
  },
  {
    "feature": "Infraction Timeline",
    "importance": [
      30,
      45
    ],
    "barLabel": 17
  },
  {
    "feature": "Public Complaints",
    "importance": [
      45,
      60
    ]
    ,
    "barLabel": 17
  },
  {
    "feature": "Sentiment Analysis",
    "importance": [
      60,
      90
    ],
    "barLabel": 26
  },
  {
    "feature": "Inspection Results",
    "importance": [
      90,
      100
    ],
    "barLabel": 13
  },
  {
    "feature": "Total",
    "importance": [
      0,
      100
    ],
    "barLabel": 100
  },
]



const data = [
  { 
    name: "Annual Clients", 
    value: 10 
  },
  { name: "Infraction Type", value: 16 },
  { name: "Infraction Timeline", value: 17 },
  { name: "Public Complaints", value: 17 },
  { name: "Sentiment Analysis", value: 26 },
  { name: "Inspection Results", value: 13 },
  { name: "Total", value: 100 },
];

const stackedBarData = [
  {
    name: 'Flagged',
    Fail: 1000,
    None: 200,
    Pass: 800,
  },
  {
    name: 'None',
    Fail: 500,
    None: 300,
    Pass: 3200,
  },
];


function App() {
  return (
    <div>
      <h1>Feature Importance (Waterfall Chart)</h1>
      <ResponsiveContainer width="80%" height={400}>
        <BarChart width={700} height={250} data={rangeData} margin={{top: 20, right: 20, bottom: 20, left: 20}} >
          <XAxis dataKey="feature" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="importance" fill="#8884d8" >
            <LabelList dataKey="barLabel" position="top" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      <h1>Distribution of Sentiment Analysis with Inspection Results (Stacked Bar Chart)</h1>
      <ResponsiveContainer width="80%" height={400}>
        <BarChart width={600} height={400} data={stackedBarData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Fail" stackId="a" fill="#ff6384" />
          <Bar dataKey="None" stackId="a" fill="#36a2eb" />
          <Bar dataKey="Pass" stackId="a" fill="#4bc0c0" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default App;
