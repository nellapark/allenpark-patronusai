"use client";

import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LabelList } from 'recharts';

interface DataPoint {
  company: string;
  value: number;
  displayValue: number;
}

export default function AnimatedBarGraph() {
  const [data, setData] = useState<DataPoint[]>([]);

  useEffect(() => {
    const finalData: DataPoint[] = [
      { company: 'Patronus AI', value: 5, displayValue: 5 },
      { company: 'Galileo', value: 5, displayValue: 5 },
      { company: 'Ragas', value: 2, displayValue: 2 },
      { company: 'Robust Intelligence', value: 2, displayValue: 2 },
      { company: 'Arize AI', value: 0, displayValue: 0.1 },
      { company: 'Aporia', value: 0, displayValue: 0.1 },
      { company: 'Credo AI', value: 0, displayValue: 0.1 },
      { company: 'Confident AI', value: 0, displayValue: 0.1 },
      { company: 'Uptrain AI', value: 0, displayValue: 0.1 },
      { company: 'Athina AI', value: 0, displayValue: 0.1 },
    ];

    setData(finalData.map(item => ({ ...item, displayValue: 0 })));

    let step = 0;
    const totalSteps = 50;
    const interval = setInterval(() => {
      if (step >= totalSteps) {
        clearInterval(interval);
        setData(finalData);
      } else {
        setData(prevData =>
          prevData.map((item, index) => ({
            ...item,
            displayValue: Math.max(
              0.1,
              Math.min(finalData[index].displayValue, item.displayValue + finalData[index].displayValue / totalSteps)
            ),
          }))
        );
        step++;
      }
    }, 1);

    return () => clearInterval(interval);
  }, []);

  const CustomLabel = (props: any) => {
    const { x, y, width, value } = props;
    return (
      <text x={x + width / 2} y={y - 10} fill="var(--solid-colors--black)" textAnchor="middle" dominantBaseline="middle">
        {value}
      </text>
    );
  };

  return (
    <BarChart width={800} height={400} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis
      dataKey="company"
      interval={0} 
      angle={-30} 
      textAnchor="end" 
      height={70}
      />
      <YAxis domain={[0, 8]} />
      <Tooltip 
        formatter={(_, name, props) => [props.payload.value, name]}
      />
      <Legend />
      <Bar dataKey="displayValue" name="Relevant Published Papers" fill="#ab77ff">
        <LabelList dataKey="value" content={CustomLabel} />
      </Bar>
    </BarChart>
  );
};