"use client"

import { TrendingDown, TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A simple area chart"

const chartData = [
  { category: "Salary", amount: 450 },
  { category: "Business Online", amount: 120 },
  { category: "Investments", amount: 80 },
  { category: "Gifts", amount: 20},
]

const chartConfig = {
  amount: {
    label: "Amount",
    color: "#4989c8",
  },
}

const IncomeChart = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Income's Progression</CardTitle>
        <CardDescription>
          Total Incomes Progression (x 1000 FCFA) !
        </CardDescription>
      </CardHeader>

      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            data={chartData}
            margin={{ left: 12, right: 12 }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="category"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Area
              dataKey="amount"
              type="natural"
              fill="#4989c8"
              fillOpacity={0.4}
              stroke="#4989c8" // Tailwind blue-500 (borders)
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>

      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 leading-none font-medium">
              Trending Down this month <TrendingDown className="h-4 w-4 text-[#4989c8]" />
            </div>
            <div className="text-muted-foreground flex items-center gap-2 leading-none">
              September - October 2025
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}

export default IncomeChart;