import React, { PureComponent, useRef } from "react";
import { useForm } from "react-hook-form";
import { Button, Card, IconButton, ListBox } from "../base";
import {
  LineChart,
  Line,
  PieChart,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Pie,
  Cell,
} from "recharts";
import { Coin } from "../icons";

interface currency {
  currency: "USD" | "NGN";
}
const timeRanges = [
  {
    label: "24h",
    value: "24h",
  },
  {
    label: "7days",
    value: "7days",
  },
  {
    label: "1Mn",
    value: "1Mn",
  },
  {
    label: "6Mn",
    value: "6Mn",
  },
  {
    label: "1yr",
    value: "1yr",
  },
];

const VALUE=150_000;
const WalletCard = () => {
  const { control } = useForm<currency>({});
  const [activeTime, setActiveTime] = React.useState("24h");
  const [activeCurrency, setActiveCurrency] = React.useState("USD");
  const [activeTab, setActiveTab] = React.useState("Wield Coin");
  const setTime = (time: string) => {
    setActiveTime(time);
  };
  return (
    <Card>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <IconButton icon={<Coin size="lg" />} size="md" color="gray" />
          <select
            value={activeTab}
            onChange={(e) => setActiveTab(e.target.value)}
            className="font-semibold rounded-full border border-gray-200 bg-gray-50 py-2 px-0.5 textlg text--sm  text-gray-900 outline-none focus:border-orange-300 focus:ring-orange-300
          ">
            <option value="Wield Coin">Wield Coin</option>
            <option value="Transactions">Transactions</option>
          </select>
        </div>
        <select
          value={activeCurrency}
          onChange={(e) => setActiveCurrency(e.target.value)}
          className="rounded-full border border-gray-200 bg-gray-50 py-2 px-0.5 text-sm  text-gray-900 outline-none focus:border-orange-300 focus:ring-orange-300"
        >
          <option value="NGN">NGN</option>
          <option value="USD">USD</option>
        </select>
      </div>
      <div className="my-1.5 flex gap-1">
        {timeRanges.map(({ label, value }) => (
          <Button
            key={value}
            size="sm"
            color={activeTime === label ? "gray" : "pink"}
            fontWeight="semibold"
            onClick={() => setTime(value)}
          >
            {label}
          </Button>
        ))}
      </div>
      {
        activeTab==="Transactions"?<PieChartd />:<TestChart />}
      <div className="text-center">
        <h1 className="text-xl font-bold ">
          {activeCurrency === "USD"
            ? `$${(VALUE * 500).toLocaleString()}`
            : `₦${VALUE.toLocaleString()}`}{" "}
        </h1>
        <p className="text-green-500">+2.5%</p>
      </div>
    </Card>
  );
};

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
const data01 = [
  { name: "Withdrawal", value: 40 },
  { name: "Deposit", value: 60 },

];

export const TestChart = () => {
  const demoUrl = useRef("https://codesandbox.io/s/tiny-line-chart-r5z0f");
  return (
    <ResponsiveContainer height={100}>
      <LineChart width={300} height={100} data={data}>
        <Line type="monotone" dataKey="uv" stroke="#43ce76" strokeWidth={2} />
       
      </LineChart>
    </ResponsiveContainer>
  );
};
// suggest color for "withdrawal" and deposit
const COLORS = [
  "#43ce76",
  "#ffa500",
]
const PieChartd = () => {
  return (
    <ResponsiveContainer height={200}>
      <PieChart width={100} height={100}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data01}
          cx="50%"
          cy="50%"
          outerRadius={75}
          fill="#8884d8"
        >
          {data01.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip formatter={(value:any)=>`${value}%`} />
        <Legend/>
      </PieChart>
    </ResponsiveContainer>
  );
}


export default WalletCard;
