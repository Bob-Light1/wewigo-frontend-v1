"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

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

export const description = "A multiple bar chart"

const chartData = [
  { category: "House Rent", amount: 150, increase: 20 },
  { category: "Food Shoping", amount: 60, increase: 10 },
  { category: "Transport", amount: 25, increase: -5 },
  { category: "Hobbies", amount: 30, increase: -5 },
  { category: "Bills", amount: 45, increase: 0 },
]

const chartConfig = {
  amount: {
    label: "Amount",
    color: "#000000",
  },
  increase: {
    label: "Increase",
    color: "#ff6e25",
  },
}

const ExpensesChart = () =>{
  return (
    <Card>
      <CardHeader>
        <CardTitle>Expense's Progression</CardTitle>
        <CardDescription>September - October 2025</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="amount" fill="#777777" radius={4} />
            <Bar dataKey="increase" fill="#ff6e25" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          Trending <TrendingUp className="h-4 w-4 text-[#4989c8]" />
        </div>
        <div className="text-muted-foreground leading-none">
          Showing total expenses !
        </div>
      </CardFooter>
    </Card>
  )
}

export default ExpensesChart;