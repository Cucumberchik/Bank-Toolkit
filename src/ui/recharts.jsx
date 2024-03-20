import { useSelector } from 'react-redux';
import { CartesianGrid, XAxis, YAxis, Tooltip, AreaChart, Area } from 'recharts';


const RenderLineChart =()=> {
  let { history } = useSelector(state => state);



 return <AreaChart width={1130} height={300} data={history}
 margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
 <defs>
   <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
     <stop offset="5%" stopColor="#171923" stopOpacity={0.8}/>
     <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
   </linearGradient>
   <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
     <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
     <stop offset="95%" stopColor="#3fd299" stopOpacity={0.1}/>
   </linearGradient>
 </defs>
 <XAxis dataKey="name" />
 <YAxis />
 <CartesianGrid strokeDasharray=" 0 3" />
 <Tooltip />
 <Area type="monotone" dataKey="price" stroke="#7a98b0" fillOpacity={1} fill="url(#colorUv)" />
 <Area type="monotone" dataKey="replenish" stroke="#3fd299" fillOpacity={1} fill="url(#colorPv)" />
</AreaChart>
};
export default RenderLineChart