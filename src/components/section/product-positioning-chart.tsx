"use client";

import { useState } from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Label, ReferenceLine } from 'recharts';

const initialLabels = {
  top: 'High Quality',
  bottom: 'Low Quality',
  left: 'Low Price',
  right: 'High Price'
};

const data = [
  { x: -1, y: 1, name: 'Brand B', color: '#FF6384' },
  { x: 1, y: 1, name: 'Brand A', color: '#36A2EB' },
  { x: -1, y: -1, name: 'Brand C', color: '#4B0082' },
  { x: 1, y: -1, name: 'Brand D', color: '#FFA500' }
];

export default function QuadrantChartInput() {
  const [labels, setLabels] = useState(initialLabels);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setLabels((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <div className="flex justify-center gap-4 mb-4">
        <input type="text" name="top" value={labels.top} onChange={handleInputChange} className="border p-1" placeholder="Top Label" />
        <input type="text" name="bottom" value={labels.bottom} onChange={handleInputChange} className="border p-1" placeholder="Bottom Label" />
        <input type="text" name="left" value={labels.left} onChange={handleInputChange} className="border p-1" placeholder="Left Label" />
        <input type="text" name="right" value={labels.right} onChange={handleInputChange} className="border p-1" placeholder="Right Label" />
      </div>
      <ResponsiveContainer width={700} height={700}>
        <ScatterChart>
          <XAxis type="number" dataKey="x" domain={[-2, 2]} tick={false} axisLine={false}> 
            {/* <Label value={labels.left} position="insideBottomLeft" offset={0} />
            <Label value={labels.right} position="insideBottomRight" offset={0} /> */}
          </XAxis>
          <YAxis type="number" dataKey="y" domain={[-2, 2]} tick={false} axisLine={false}> 
            {/* <Label value={labels.top} angle={-90} position="insideTopRight" offset={0} />
            <Label value={labels.bottom} angle={-90} position="insideBottomRight" offset={0} /> */}
          </YAxis>
          <ReferenceLine x={0} stroke="black" strokeWidth={3}/>
          <ReferenceLine y={0} stroke="black" />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Scatter data={data} shape={(props: any) => {
            const { cx, cy, payload } = props;
            return (
              <g>
                <circle cx={cx} cy={cy} r={10} fill={payload.color} />
                <text x={cx} y={cy - 12} textAnchor="middle" fill={payload.color} fontSize={12} fontWeight="bold">{payload.name}</text>
              </g>
            );
          }} />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
}
