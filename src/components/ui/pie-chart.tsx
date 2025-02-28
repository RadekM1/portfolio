"use client";

import * as React from "react";
import { Label, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/src/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/src/components/ui/chart";

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

interface PiChartProps {
  input: number;
  days: string;
}

export const PieChartComponent = ({ input, days }: PiChartProps) => {
  console.log(days);

  const chartData = React.useMemo(() => {
    return [
      {
        browser: "chrome",
        visitors: days === "90d" ? (input / 100) * 37 : (input / 100) * 38,
        fill: "var(--color-chrome)",
      },
      {
        browser: "safari",
        visitors: days === "90d" ? (input / 100) * 25 : (input / 100) * 5,
        fill: "var(--color-safari)",
      },
      {
        browser: "firefox",
        visitors: days === "90d" ? (input / 100) * 8 : (input / 100) * 25,
        fill: "var(--color-firefox)",
      },
      {
        browser: "ostatní",
        visitors: days === "90d" ? (input / 100) * 10 : (input / 100) * 10,
        fill: "var(--color-edge)",
      },
      {
        browser: "edge",
        visitors: days === "90d" ? (input / 100) * 13 : (input / 100) * 7,
        fill: "var(--color-other)",
      },
    ];
  }, [input]);

  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0).toFixed(0);
  }, [input]);

  return (
    <Card className="flex h-full flex-col">
      <CardHeader className="items-center pb-0"></CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto h-full w-full aspect-square max-h-[300px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalVisitors}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Návštěvníků
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm"></CardFooter>
    </Card>
  );
};
