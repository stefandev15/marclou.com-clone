"use client";
import { formatCurrency } from "@/lib/utils";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Chart() {
  const data = [
    {
      name: "Jun",
      uv: 0,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Jul",
      uv: 0,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Aug",
      uv: 0,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Sep",
      uv: 0,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Oct",
      uv: 0,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Nov",
      uv: 0,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Dec",
      uv: 0,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Jan",
      uv: 41500,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Feb",
      uv: 36400,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Mar",
      uv: 75100,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Apr",
      uv: 127700,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "May",
      uv: 40100,
      pv: 4300,
      amt: 2100,
    },
  ];

  const CustomizedXAxisTick = ({ x, y, payload }: any) => (
    <text
      x={x}
      y={y}
      dy={12}
      dx={-8}
      className="fill-base-color/75 text-[0.65rem]"
    >
      {payload.value}
    </text>
  );

  const CustomizedYAxisTick = ({ x, y, payload }: any) => {
    if (payload.value > 0)
      return (
        <text
          x={x}
          y={y}
          dx={-32}
          className="fill-base-color/75 text-[0.65rem]"
        >
          {formatCurrency(payload.value)}
        </text>
      );
  };
  return (
    <div className="h-28 w-full">
      <ResponsiveContainer>
        <AreaChart
          data={data}
          margin={{
            top: 0,
            right: 24,
            left: -16,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#e0a82e" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#e0a82e" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="4 3" className="opacity-25" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickSize={0}
            className="text-xs"
            tick={<CustomizedXAxisTick />}
          />
          <YAxis
            axisLine={false}
            tickSize={0}
            className="text-xs"
            tick={<CustomizedYAxisTick />}
          />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="uv"
            stroke="#e0a82e"
            fill="url(#colorUv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
