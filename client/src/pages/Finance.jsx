import React from "react";
import { dummyFinanceData } from "../assets/assets";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { LineChart, TrendingUp, Wallet, PiggyBank, ArrowDownCircle } from "lucide-react";
import IncomeChart from "@/components/IncomeChart";
import ExpensesChart from "@/components/ExpensesChart";




const Finance = () => {

    const totalIncome = dummyFinanceData.incomes.reduce((acc, i) => acc + i.amount, 0);
    const totalExpense = dummyFinanceData.expenses.reduce((acc, e) => acc + e.amount, 0);
    const totalSavings = dummyFinanceData.savings.reduce((acc, s) => acc + s.currentAmount, 0);
    const totalInvestments = dummyFinanceData.investments.reduce((acc, j) => acc + j.currentValue, 0);
    const balance = totalIncome - totalExpense;


  return (
    <div className="h-full flex items-start justify-center overflow-y-scroll no-scrollbar py-10 xl:pr-5 space-y-8">

      {/* GLobal Resume */}
        <div className="w-[70%]">
            <h1 className="mb-16 text-3xl font-bold">Finance Your Travel Project</h1>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-16">
                <Card className="border-t-8 border-green-600 shadow-lg">
                    <CardContent className="p-2">
                        <div className="flex items-center gap-2 mb-2">
                            <Wallet className="text-green-600" />
                            <h2 className="font-semibold">Balance</h2>
                        </div>
                        <p className="text-xl">{balance.toLocaleString()} FCFA</p>
                    </CardContent>
                </Card>
                <Card className="border-t-8 border-[#2a629a] shadow-lg">
                    <CardContent className="p-2">
                        <div className="flex items-center gap-2 mb-2">
                            <TrendingUp className="text-[#2a629a]" />
                            <h2 className="font-semibold">Income</h2>
                        </div>
                        <p className="text-xl">{totalIncome.toLocaleString()} FCFA</p>
                    </CardContent>
                </Card>
                <Card className="border-t-8 border-[#ff7f3e] shadow-lg">
                    <CardContent className="p-2">
                        <div className="flex items-center gap-2 mb-2">
                            <ArrowDownCircle className="text-[#ff7f3e]" />
                            <h2 className="font-semibold">Expenses</h2>
                        </div>
                        <p className="text-xl">- {totalExpense.toLocaleString()} FCFA</p>
                    </CardContent>
                </Card>
                <Card className="border-t-8 border-[#ffc52c] shadow-lg">
                    <CardContent className="p-2">
                        <div className="flex items-center gap-2 mb-2">
                            <PiggyBank className="text-[#ffc52c]" />
                            <h2 className="font-semibold">Savings</h2>
                        </div>
                        <p className="text-xl">{totalSavings.toLocaleString()} FCFA</p>
                    </CardContent>
                </Card>
            </div>

            {/* Revenus */}
            <div className="mb-16 p-4 flex flex-col lg:flex-row items-center justify-between gap-4">
                <div className="w-full h-[430px] lg:w-[50%] rounded-md shadow-md border-b-4 border-[#4989c8] p-2">
                    <h2 className="text-lg text-[#4989c8] font-bold mb-2">Incomes</h2>
                    <ul className="space-y-4">
                    {dummyFinanceData.incomes.map((inc) => (
                        <li key={inc._id} className="flex justify-between border-b pb-2">
                        <span>{inc.source} ({inc.category})</span>
                        <span className="text-[#000000]">+{inc.amount.toLocaleString()} FCFA</span>
                        </li>
                    ))}
                    </ul>
                </div>

                <div className="w-full lg:w-[50%] rounded-md shadow-md">
                  <IncomeChart />
                </div>
            </div>

            {/* Expenses*/}
            <div className="mb-16 p-4 flex flex-col lg:flex-row items-center justify-between gap-4">
              <div className="h-[430px] w-full lg:w-[50%] rounded-md shadow-md border-b-4 border-[#ff6e25] p-2">
                    <h2 className="text-lg text-[#ff6e25] font-bold mb-2">Expenses</h2>
                    <ul className="space-y-2">
                    {dummyFinanceData.expenses.map((exp) => (
                        <li key={exp._id} className="flex justify-between border-b pb-2">
                        <span>{exp.title} ({exp.category})</span>
                        <span className="text-[#000000]">-{exp.amount.toLocaleString()} FCFA</span>
                        </li>
                    ))}
                    </ul>
                </div>

                <div className="w-full lg:w-[50%] rounded-md shadow-md">
                    <ExpensesChart/>
                </div>
            </div>

            {/* Savings */}
            <div className="mb-16 p-4 shadow-lg rounded">
                <h2 className="text-lg font-bold mb-2">Savings Goal</h2>
                <div className="space-y-4">
                {dummyFinanceData.savings.map((sav) => {
                    const progress = (sav.currentAmount / sav.targetAmount) * 100;
                    return (
                    <div key={sav._id}>
                        <div className="flex justify-between">
                            <span>{sav.goal}</span>
                            <div>
                                <span className="font-semibold">{sav.currentAmount.toLocaleString()} / </span> 
                                <span>{sav.targetAmount.toLocaleString()} FCFA</span>
                            </div>
                        </div>
                        <Progress value={progress} />
                    </div>
                    );
                })}
                </div>
            </div>

            {/* Investissements */}
            <div className="mb-16 p-4 shadow-lg rounded">
                <h2 className="text-lg font-bold mb-2">Investments</h2>
                <ul className="space-y-2">
                {dummyFinanceData.investments.map((inv) => (
                    <li key={inv._id} className="flex justify-between border-b pb-2">
                    <span>{inv.asset} ({inv.type})</span>
                    <span className="text-black font-semibold">
                        {inv.currentValue.toLocaleString()} FCFA
                        <span className="ml-2 text-gray-500 text-sm">invested {inv.amountInvested.toLocaleString()} FCFA</span>
                    </span>
                    </li>
                ))}
                </ul>
            </div>
        </div>
    </div>
  );
}

export default Finance
