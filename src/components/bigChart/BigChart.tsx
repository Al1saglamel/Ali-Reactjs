import { Area, AreaChart,  ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import  "./bigChart.scss"

const data = [
  {
    name: "Sun",
    revenue: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Mon",
    revenue: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Tue",
    revenue: -1000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Wed",
    revenue: 500,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Thu",
    revenue: -2000,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Fri",
    revenue: -250,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Sat",
    revenue: 3490,
    pv: 4300,
    amt: 2100,
  },
]; 
const gradientOffset = () => {
  const dataMax = Math.max(...data.map((i) => i.revenue));
  const dataMin = Math.min(...data.map((i) => i.revenue));

  if (dataMax <= 0) {
    return 0;
  }
  if (dataMin >= 0) {
    return 1;
  }

  return dataMax / (dataMax - dataMin);
};

const off = gradientOffset();


const BigChart = () => {
  return (
    <div className="bigChart">
        <h2>Revenue Graph</h2>
        <div className="chart">
        <ResponsiveContainer width="99%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <XAxis dataKey="name"/>
          <YAxis  />
          <Tooltip />
          <defs>
            <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
              <stop offset={off} stopColor="#8884d8" stopOpacity={1} />
              <stop offset={off} stopColor="#fff" stopOpacity={1} />
            </linearGradient>
          </defs>
          <Area type="monotone" dataKey="revenue" stroke="#000" fill="url(#splitColor)"/>
        </AreaChart>
      </ResponsiveContainer>
        </div>
    </div>
  )
}
export default BigChart