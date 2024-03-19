import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
const data = [{name: 'Page A', uv: 1000, pv: 1400, amt: 2400}, {name: 'Page A', uv: 200, pv: 2400, amt: 1400}];

const RenderLineChart =()=> {
 return <LineChart width={900} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
  </LineChart>
};
export default RenderLineChart