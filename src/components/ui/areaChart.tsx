"use client";

import * as React from "react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/src/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select";

const chartData: {
  date: string;
  desktop: number;
  mobile: number;
}[] = [];
const iterations = 43;
const stepDays = 2;

const startDate = new Date();
startDate.setDate(startDate.getDate() - 90);

for (let i = 0; i < iterations; i++) {
  const currentDate = new Date(startDate);
  currentDate.setDate(startDate.getDate() + i * stepDays);
  const formattedDate = currentDate.toISOString().split("T")[0];
  chartData.push({
    date: formattedDate,
    desktop: Math.floor(Math.random() * (50 - 100) + 100),
    mobile: Math.floor(Math.random() * (50 - 100) + 100),
  });
}

const chartConfig = {
  visitors: {
    label: "Návštěvníci",
  },
  desktop: {
    label: "Počítač",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobil",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

interface ChartProps {
  // eslint-disable-next-line
  setVisitors: (visitors: number) => void;
  // eslint-disable-next-line
  setDays: (timeRange: string) => void;
}

export const AreaChartComponent = ({ setVisitors, setDays }: ChartProps) => {
  const [filteredData, setFilteredData] = React.useState(chartData);
  const [timeRange, setTimeRange] = React.useState("90d");

  React.useEffect(() => {
    const newFilteredData = chartData.filter((item) => {
      const date = new Date(item.date);
      const referenceDate = new Date("2025-02-24");

      let daysToSubtract = timeRange === "30d" ? 30 : 90;
      const startDate = new Date(referenceDate);
      startDate.setDate(startDate.getDate() - daysToSubtract);

      return date >= startDate;
    });

    setFilteredData(newFilteredData);
  }, [timeRange]);

  const visitorsSum = React.useMemo(() => {
    return filteredData.reduce(
      (acc, item) => acc + item.desktop + item.mobile,
      0,
    );
  }, [filteredData]);

  React.useEffect(() => {
    setVisitors(visitorsSum);
    setDays(timeRange);
  }, [visitorsSum]);

  return (
    <Card>
      <CardHeader className="flex items-center gap-2 w-full space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1 text-center sm:text-left">
          <CardTitle></CardTitle>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="w-[250px] rounded-lg sm:ml-auto"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Last 3 months" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="90d" className="rounded-lg">
              Návštěvy webu za 3 měsíce
            </SelectItem>
            <SelectItem value="30d" className="rounded-lg">
              Návštěvy webu za 30 dní
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-mobile)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-mobile)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("cs-Cz", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("cs-Cz", {
                      month: "short",
                      day: "numeric",
                    });
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="mobile"
              type="natural"
              fill="url(#fillMobile)"
              stroke="var(--color-mobile)"
              stackId="a"
            />
            <Area
              dataKey="desktop"
              type="natural"
              fill="url(#fillDesktop)"
              stroke="var(--color-desktop)"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};
