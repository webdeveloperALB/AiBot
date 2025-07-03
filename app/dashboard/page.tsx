"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BarChart3,
  TrendingUp,
  DollarSign,
  Coins,
  Bot,
  Trophy,
  Calendar,
  ArrowUpRight,
  Eye,
  Settings,
} from "lucide-react"

export default function DashboardPage() {
  const [totalBalance, setTotalBalance] = useState(125847.23)
  const [dailyPnL, setDailyPnL] = useState(2847.56)
  const [portfolioData, setPortfolioData] = useState([
    { name: "Jan", value: 95000 },
    { name: "Feb", value: 98000 },
    { name: "Mar", value: 102000 },
    { name: "Apr", value: 108000 },
    { name: "May", value: 115000 },
    { name: "Jun", value: 125847 },
  ])

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setTotalBalance((prev) => prev + (Math.random() - 0.5) * 100)
      setDailyPnL((prev) => prev + (Math.random() - 0.5) * 50)

      // Update portfolio chart data
      setPortfolioData((prev) => {
        const newData = [...prev]
        newData[newData.length - 1].value = totalBalance
        return newData
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [totalBalance])

  const portfolioOverview = [
    { asset: "BTC", amount: "4.18064", value: "$448,234.67", allocation: "45%", change: "+2.34%", icon: "🟠" },
    { asset: "ETH", amount: "15.67", value: "$38,245.67", allocation: "30%", change: "-0.87%", icon: "🔵" },
    { asset: "BNB", amount: "234.56", value: "$153,890.12", allocation: "15%", change: "+1.23%", icon: "🟡" },
    { asset: "USDT", amount: "25,847.23", value: "$25,847.23", allocation: "10%", change: "0.00%", icon: "🟢" },
  ]

  const tradingActivities = [
    {
      type: "Spot Trading",
      profit: "+$1,234.56",
      trades: 23,
      winRate: "78%",
      icon: <TrendingUp className="h-5 w-5" />,
      color: "text-green-400",
    },
    {
      type: "Futures Trading",
      profit: "+$2,456.78",
      trades: 15,
      winRate: "85%",
      icon: <BarChart3 className="h-5 w-5" />,
      color: "text-blue-400",
    },
    {
      type: "AI Arbitrage",
      profit: "+$567.89",
      trades: 45,
      winRate: "92%",
      icon: <Bot className="h-5 w-5" />,
      color: "text-purple-400",
    },
    {
      type: "Staking Rewards",
      profit: "+$345.67",
      trades: 0,
      winRate: "100%",
      icon: <Coins className="h-5 w-5" />,
      color: "text-yellow-400",
    },
  ]

  const recentTransactions = [
    {
      type: "Buy",
      asset: "BTC",
      amount: "0.5 BTC",
      price: "$107,234.56",
      time: "2 minutes ago",
      status: "completed",
    },
    {
      type: "Sell",
      asset: "ETH",
      amount: "2.5 ETH",
      price: "$2,441.51",
      time: "15 minutes ago",
      status: "completed",
    },
    {
      type: "Stake",
      asset: "BNB",
      amount: "100 BNB",
      price: "$656.78",
      time: "1 hour ago",
      status: "active",
    },
    {
      type: "Swap",
      asset: "USDT → XRP",
      amount: "1,000 USDT",
      price: "$2.17",
      time: "3 hours ago",
      status: "completed",
    },
  ]

  const activePositions = [
    {
      symbol: "BTC/USDT",
      side: "Long",
      size: "2.45 BTC",
      entryPrice: "$105,234.56",
      currentPrice: "$107,316.20",
      pnl: "+$5,099.02",
      pnlPercent: "+1.98%",
      status: "profitable",
    },
    {
      symbol: "ETH/USDT",
      side: "Short",
      size: "12.5 ETH",
      entryPrice: "$2,456.78",
      currentPrice: "$2,441.51",
      pnl: "+$190.88",
      pnlPercent: "+0.62%",
      status: "profitable",
    },
    {
      symbol: "XRP/USDT",
      side: "Long",
      size: "5000 XRP",
      entryPrice: "$2.19",
      currentPrice: "$2.17",
      pnl: "-$100.00",
      pnlPercent: "-0.91%",
      status: "losing",
    },
  ]

  const quickActions = [
    { name: "Buy Crypto", icon: <TrendingUp className="h-5 w-5" />, href: "/swap", color: "text-green-400" },
    { name: "Start Trading", icon: <BarChart3 className="h-5 w-5" />, href: "/trading", color: "text-blue-400" },
    { name: "Stake Tokens", icon: <Coins className="h-5 w-5" />, href: "/staking", color: "text-yellow-400" },
    { name: "AI Arbitrage", icon: <Bot className="h-5 w-5" />, href: "/arbitrage", color: "text-purple-400" },
    { name: "Prop Trading", icon: <Trophy className="h-5 w-5" />, href: "/prop-firm", color: "text-orange-400" },
    { name: "Event Markets", icon: <Calendar className="h-5 w-5" />, href: "/events", color: "text-pink-400" },
  ]

  return (
    <div className="py-8 px-4 bg-black">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
          <div>
            <Badge className="mb-4 bg-gray-800/20 text-gray-300 border-gray-700/30">Trading Dashboard</Badge>
            <h1 className="text-4xl font-bold text-white mb-2">Welcome Back, Trader</h1>
            <p className="text-gray-400 text-lg">
              Monitor your portfolio, track performance, and manage all your trading activities in one place
            </p>
          </div>
          <div className="flex items-center space-x-4 mt-4 lg:mt-0">
            <Button variant="outline" className="border-gray-700/20 text-white hover:bg-gray-800/10 bg-transparent">
              <Eye className="h-4 w-4 mr-2" />
              View Reports
            </Button>
            <Button variant="outline" className="border-gray-700/20 text-white hover:bg-gray-800/10 bg-transparent">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
          </div>
        </div>

        {/* Portfolio Overview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-black/5 border-gray-800/10">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="text-gray-400">
                  <DollarSign className="h-5 w-5" />
                </div>
                <Badge className="bg-gray-800/20 text-gray-400">+12.5%</Badge>
              </div>
              <div className="text-2xl font-bold text-white mb-1">${totalBalance.toFixed(2)}</div>
              <div className="text-gray-400 text-sm">Total Portfolio Value</div>
            </CardContent>
          </Card>

          <Card className="bg-black/5 border-gray-800/10">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="text-gray-400">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <Badge className="bg-gray-800/20 text-gray-400">+8.3%</Badge>
              </div>
              <div className="text-2xl font-bold text-white mb-1">${dailyPnL.toFixed(2)}</div>
              <div className="text-gray-400 text-sm">Today's P&L</div>
            </CardContent>
          </Card>

          <Card className="bg-black/5 border-gray-800/10">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="text-gray-400">
                  <BarChart3 className="h-5 w-5" />
                </div>
                <Badge className="bg-gray-800/20 text-gray-400">+15.7%</Badge>
              </div>
              <div className="text-2xl font-bold text-white mb-1">$15,234.89</div>
              <div className="text-gray-400 text-sm">Total P&L</div>
            </CardContent>
          </Card>

          <Card className="bg-black/5 border-gray-800/10">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="text-gray-400">
                  <Trophy className="h-5 w-5" />
                </div>
                <Badge className="bg-gray-800/20 text-gray-400">+2.1%</Badge>
              </div>
              <div className="text-2xl font-bold text-white mb-1">78.5%</div>
              <div className="text-gray-400 text-sm">Win Rate</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 bg-gray-900/30 border-gray-800/10">
            <TabsTrigger value="overview" className="text-white data-[state=active]:bg-gray-800/50">
              Portfolio Overview
            </TabsTrigger>
            <TabsTrigger value="trading" className="text-white data-[state=active]:bg-gray-800/50">
              Trading Activity
            </TabsTrigger>
            <TabsTrigger value="positions" className="text-white data-[state=active]:bg-gray-800/50">
              Active Positions
            </TabsTrigger>
            <TabsTrigger value="actions" className="text-white data-[state=active]:bg-gray-800/50">
              Quick Actions
            </TabsTrigger>
          </TabsList>

          {/* Portfolio Overview */}
          <TabsContent value="overview">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Portfolio Breakdown */}
              <div className="lg:col-span-2">
                <Card className="bg-black/5 border-gray-800/10">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">Portfolio Breakdown</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {portfolioOverview.map((asset, index) => (
                        <div key={index} className="bg-gray-900/30 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center space-x-3">
                              <div className="text-2xl">{asset.icon}</div>
                              <div>
                                <div className="text-white font-bold text-lg">{asset.asset}</div>
                                <div className="text-gray-400 text-sm">{asset.amount}</div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-white font-bold text-lg">{asset.value}</div>
                              <div
                                className={`text-sm ${
                                  asset.change.startsWith("+")
                                    ? "text-green-400"
                                    : asset.change.startsWith("-")
                                      ? "text-red-400"
                                      : "text-gray-400"
                                }`}
                              >
                                {asset.change}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="text-gray-400 text-sm">Allocation: {asset.allocation}</div>
                            <Progress value={Number.parseInt(asset.allocation.replace("%", ""))} className="w-24 h-2" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Recent Transactions */}
              <div>
                <Card className="bg-black/5 border-gray-800/10">
                  <CardHeader>
                    <CardTitle className="text-white">Recent Transactions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {recentTransactions.map((transaction, index) => (
                      <div key={index} className="bg-gray-900/30 rounded-lg p-3">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <Badge
                              className={`${
                                transaction.type === "Buy" || transaction.type === "Stake"
                                  ? "bg-gray-800/20 text-gray-400"
                                  : "bg-gray-800/20 text-gray-400"
                              }`}
                            >
                              {transaction.type}
                            </Badge>
                            <span className="text-white text-sm font-medium">{transaction.asset}</span>
                          </div>
                          <span className="text-gray-400 text-xs">{transaction.time}</span>
                        </div>
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-gray-400">{transaction.amount}</span>
                          <Badge
                            className={`${
                              transaction.status === "completed"
                                ? "bg-gray-800/20 text-gray-400"
                                : "bg-gray-800/20 text-gray-400"
                            }`}
                          >
                            {transaction.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Trading Activity */}
          <TabsContent value="trading">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {tradingActivities.map((activity, index) => (
                <Card key={index} className="bg-black/5 border-gray-800/10">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`${activity.color}`}>{activity.icon}</div>
                      <Badge className="bg-gray-800/20 text-gray-400">{activity.winRate}</Badge>
                    </div>
                    <div className="text-xl font-bold text-white mb-1">{activity.profit}</div>
                    <div className="text-gray-400 text-sm mb-2">{activity.type}</div>
                    <div className="text-gray-400 text-xs">{activity.trades} trades</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Active Positions */}
          <TabsContent value="positions">
            <Card className="bg-black/5 border-gray-800/10">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-white">Active Positions</CardTitle>
                  <Badge className="bg-gray-800/20 text-gray-400">{activePositions.length} Open</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {activePositions.map((position, index) => (
                  <div key={index} className="bg-gray-900/30 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <Badge
                          className={`${
                            position.side === "Long" ? "bg-gray-800/20 text-gray-400" : "bg-gray-800/20 text-gray-400"
                          }`}
                        >
                          {position.side}
                        </Badge>
                        <div className="text-white font-bold">{position.symbol}</div>
                      </div>
                      <div className="text-right">
                        <div
                          className={`font-bold ${position.status === "profitable" ? "text-green-400" : "text-red-400"}`}
                        >
                          {position.pnl}
                        </div>
                        <div className="text-gray-400 text-sm">{position.pnlPercent}</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <div className="text-gray-400">Size</div>
                        <div className="text-white">{position.size}</div>
                      </div>
                      <div>
                        <div className="text-gray-400">Entry Price</div>
                        <div className="text-white">{position.entryPrice}</div>
                      </div>
                      <div>
                        <div className="text-gray-400">Current Price</div>
                        <div className="text-white">{position.currentPrice}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Quick Actions */}
          <TabsContent value="actions">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {quickActions.map((action, index) => (
                <Card
                  key={index}
                  className="bg-black/5 border-gray-800/10 hover:bg-black/10 transition-all cursor-pointer"
                >
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gray-800/50 flex items-center justify-center mx-auto mb-4 ${action.color}`}
                    >
                      {action.icon}
                    </div>
                    <h3 className="text-white font-bold text-lg mb-2">{action.name}</h3>
                    <Button className="w-full bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800">
                      Get Started
                      <ArrowUpRight className="h-4 w-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
