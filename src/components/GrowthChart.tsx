import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Month 1", revenue: 2000 },
  { month: "Month 2", revenue: 12000 },
  { month: "Month 3", revenue: 45000 },
  { month: "Month 4", revenue: 150000 },
];

export function GrowthChart() {
  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(160, 80%, 55%)" stopOpacity={0.4} />
              <stop offset="95%" stopColor="hsl(160, 80%, 55%)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(240, 6%, 18%)" />
          <XAxis dataKey="month" stroke="hsl(240, 5%, 45%)" fontSize={12} />
          <YAxis
            stroke="hsl(240, 5%, 45%)"
            fontSize={12}
            tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(240, 8%, 8%)",
              border: "1px solid hsl(240, 6%, 18%)",
              borderRadius: "8px",
              color: "hsl(0, 0%, 95%)",
              fontSize: 13,
            }}
            formatter={(value: number) => [`$${value.toLocaleString()}`, "Revenue"]}
          />
          <Area
            type="monotone"
            dataKey="revenue"
            stroke="hsl(160, 80%, 55%)"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorRevenue)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
