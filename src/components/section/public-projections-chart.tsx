"use client"

import { Pie, PieChart } from "recharts";
import { 
    Card, 
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "../ui/card";
import { 
    ChartConfig,
    ChartContainer,
    ChartLegend,
    ChartLegendContent
} from "../ui/chart";

const projectionsData = [
    { projection: "Product development", target: 275, fill: "hsl(var(--chart-1))" },
    { projection: "Marketing & Growth", target: 200, fill: "hsl(var(--chart-2))" },
    { projection: "Customer support", target: 187, fill: "hsl(var(--chart-3))" },
    { projection: "Security & Complience", target: 173, fill: "hsl(var(--chart-4))" },
];

const chartConfig = {
    target: {
      label: "Target",
    },
    "Product development": {
      label: "Product development",
      color: "hsl(var(--chart-1))",
    },
    "Marketing & Growth": {
      label: "Marketing & Growth",
      color: "hsl(var(--chart-2))",
    },
    "Customer support": {
      label: "Customer support",
      color: "hsl(var(--chart-3))",
    },
    "Security & Complience": {
      label: "Security & Complience",
      color: "hsl(var(--chart-4))",
    }
  } satisfies ChartConfig;

export function ProjectionsChart() {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="items-start pb-0">
        <CardTitle>Projections</CardTitle>
        <CardDescription>Breaks down next quarter&#39;s budget</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[300px]"
        >
          <PieChart className="h-[300]">
            <Pie 
              data={projectionsData} 
              dataKey="target"
              nameKey="projection"
            />
            <ChartLegend
              content={<ChartLegendContent nameKey="projection" />}
              className="-translate-y-2 grid grid-cols-2 gap-x-10 gap-y-2 [&>*]:flex [&>*]:items-center [&>*]:gap-2 [&>*]:min-w-[200px]"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}