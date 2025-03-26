"use client"

import { Bar, BarChart, XAxis, YAxis } from "recharts";
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
    ChartTooltip,
    ChartTooltipContent 
} from "../ui/chart";

const productsData = [
    { product: "CloudSyncX", users: 320, fill: "hsl(var(--chart-1))" },
    { product: "DataShield", users: 280, fill: "hsl(var(--chart-2))" },
    { product: "TaskFlow", users: 260, fill: "hsl(var(--chart-1))" },
    { product: "CodeHive", users: 240, fill: "hsl(var(--chart-2))" },
    { product: "AI Vision", users: 225, fill: "hsl(var(--chart-1))" },
    { product: "SecureVault", users: 210, fill: "hsl(var(--chart-2))" },
    { product: "StreamLine", users: 195, fill: "hsl(var(--chart-1))" },
    { product: "DevOpsX", users: 180, fill: "hsl(var(--chart-2))" },
    { product: "SmartDocs", users: 165, fill: "hsl(var(--chart-1))" },
    { product: "AutoScale", users: 150, fill: "hsl(var(--chart-2))" },
];

const chartConfig = {
    users: {
        label: "Users"
    },
    "CloudSyncX": {
        label: "CloudSyncX",
        color: "hsl(var(--chart-1))",
    },
    "DataShield": {
        label: "DataShield",
        color: "hsl(var(--chart-2))",
    },
    "TaskFlow": {
        label: "TaskFlow",
        color: "hsl(var(--chart-1))",
    },
    "CodeHive": {
        label: "CodeHive",
        color: "hsl(var(--chart-2))",
    },
    "AI Vision": {
        label: "AI Vision",
        color: "hsl(var(--chart-1))",
    },
    "SecureVault": {
        label: "SecureVault",
        color: "hsl(var(--chart-2))",
    },
    "StreamLine": {
        label: "StreamLine",
        color: "hsl(var(--chart-1))",
    },
    "DevOpsX": {
        label: "DevOpsX",
        color: "hsl(var(--chart-2))",
    },
    "SmartDocs": {
        label: "SmartDocs",
        color: "hsl(var(--chart-1))",
    },
    "AutoScale": {
        label: "AutoScale",
        color: "hsl(var(--chart-2))",
    },
} satisfies ChartConfig;

export function BestSellerProductChart() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Best Seller Product</CardTitle>
                <CardDescription>Best-selling items ranked by total customer purchases</CardDescription>
            </CardHeader>
            <CardContent className="min-w-0">
                <ChartContainer config={chartConfig}>
                <BarChart
                    accessibilityLayer
                    data={productsData}
                    layout="vertical"
                    margin={{
                    left: 0,
                    }}
                >
                    <YAxis
                        dataKey="product"
                        type="category"
                        tickLine={false}
                        tickMargin={10}
                        width={90}
                        axisLine={false}
                        tickFormatter={(value) =>
                            chartConfig[value as keyof typeof chartConfig]?.label
                        }
                        className="text-xs"
                    />
                    <XAxis dataKey="users" type="number" hide />
                    <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                    />
                    <Bar dataKey="users" layout="vertical" radius={5} />
                </BarChart>
                </ChartContainer>
            </CardContent>            
        </Card>
    );
}
