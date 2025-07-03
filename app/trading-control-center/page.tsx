"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import {
  BarChart3,
  TrendingUp,
  DollarSign,
  Target,
  Shield,
  Zap,
  AlertTriangle,
  Settings,
  RefreshCw,
  Eye,
  Bell,
} from "lucide-react"

export default function TradingControlCenterPage() {
  const [totalBalance, setTotalBalance] = useState(125847.23)
  const [dailyPnL, setDailyPnL] = useState(2847.56)
  const [totalPnL, setTotalPnL] = useState(15234.89)

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setTotalBalance((prev) => prev + (Math.random() - 0.5) * 100)
      setDailyPnL((prev) => prev + (Math.random() - 0.5) * 50)
      setTotalPnL((prev) => prev + (Math.random() - 0.5) * 25)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const portfolioOverview = [
    { asset: "BTC", amount: "4.18064", value: "$448,234.67", allocation: "45%", change: "+2.34%", icon: "🟠" },
    { asset: "ETH", amount: "15.67", value: "$38,245.67", allocation: "30%", change: "-0.87%", icon: "🔵" },
    { asset: "BNB", amount: "234.56", value: "$153,890.12", allocation: "15%", change: "+1.23%", icon: "🟡" },
    { asset: "USDT", amount: "25,847.23", value: "$25,847.23", allocation: "10%", change: "0.00%", icon: "🟢" },
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
      margin: "$21,046.91",
      leverage: "5x",
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
      margin: "$6,141.95",
      leverage: "10x",
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
      margin: "$1,095.00",
      leverage: "2x",
      status: "losing",
    },
  ]

  const tradingHistory = [
    {
      symbol: "BTC/USDT",
      side: "Long",
      size: "1.25 BTC",
      entryPrice: "$104,567.89",
      exitPrice: "$106,234.56",
      pnl: "+$2,083.34",
      time: "2 hours ago",
      status: "closed",
    },
    {
      symbol: "ETH/USDT",
      side: "Short",
      size: "8.5 ETH",
      entryPrice: "$2,478.90",
      exitPrice: "$2,445.67",
      pnl: "+$282.96",
      time: "4 hours ago",
      status: "closed",
    },
    {
      symbol: "BNB/USDT",
      side: "Long",
      size: "45.67 BNB",
      entryPrice: "$648.23",
      exitPrice: "$655.90",
      pnl: "+$350.24",
      time: "1 day ago",
      status: "closed",
    },
  ]

  const performanceMetrics = [
    {
      label: "Total Balance",
      value: `$${totalBalance.toFixed(2)}`,
      change: "+12.5%",
      icon: <DollarSign className="h-5 w-5" />,
    },
    { label: "Daily P&L", value: `$${dailyPnL.toFixed(2)}`, change: "+8.3%", icon: <TrendingUp className="h-5 w-5" /> },
    { label: "Total P&L", value: `$${totalPnL.toFixed(2)}`, change: "+15.7%", icon: <BarChart3 className="h-5 w-5" /> },
    { label: "Win Rate", value: "78.5%", change: "+2.1%", icon: <Target className="h-5 w-5" /> },
  ]

  const riskMetrics = [
    { label: "Portfolio Risk", value: "Medium", level: 60, color: "text-yellow-400" },
    { label: "Margin Usage", value: "45%", level: 45, color: "text-green-400" },
    { label: "Max Drawdown", value: "8.2%", level: 82, color: "text-red-400" },
    { label: "Sharpe Ratio", value: "2.34", level: 78, color: "text-blue-400" },
  ]

  const marketAlerts = [
    {
      type: "price",
      message: "BTC broke above $107,000 resistance",
      time: "2 minutes ago",
      severity: "info",
      icon: <TrendingUp className="h-4 w-4" />,
    },
    {
      type: "position",
      message: "ETH short position reached 50% profit target",
      time: "15 minutes ago",
      severity: "success",
      icon: <Target className="h-4 w-4" />,
    },
    {
      type: "risk",
      message: "Portfolio margin usage approaching 50%",
      time: "1 hour ago",
      severity: "warning",
      icon: <AlertTriangle className="h-4 w-4" />,
    },
  ]

  const tradingTools = [
    {
      name: "Advanced Charting",
      description: "TradingView integration with 100+ indicators",
      icon: <BarChart3 className="h-6 w-6" />,
      status: "active",
      color: "text-blue-400",
    },
    {
      name: "Risk Calculator",
      description: "Position sizing and risk management tools",
      icon: <Shield className="h-6 w-6" />,
      status: "active",
      color: "text-green-400",
    },
    {
      name: "Market Scanner",
      description: "Real-time opportunity detection across markets",
      icon: <Eye className="h-6 w-6" />,
      status: "active",
      color: "text-purple-400",
    },
    {
      name: "Auto Trading",
      description: "Algorithmic trading strategies and bots",
      icon: <Zap className="h-6 w-6" />,
      status: "premium",
      color: "text-orange-400",
    },
  ]

  return (
    <div className="py-8 px-4 bg-black">
      <div className="container mx-auto">
        {/* Enhanced Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
          <div>
            <Badge className="mb-4 bg-gray-800/20 text-gray-300 border-gray-700/30">Trading Control Center</Badge>
            <h1 className="text-4xl font-bold text-white mb-2">Professional Trading Dashboard</h1>
            <p className="text-gray-400 text-lg">
              Complete portfolio management and advanced trading analytics in one unified interface
            </p>
          </div>
          <div className="flex items-center space-x-4 mt-4 lg:mt-0">
            <Button variant="outline" className="border-gray-700/20 text-white hover:bg-gray-800/10 bg-transparent">
              <Bell className="h-4 w-4 mr-2" />
              Alerts
            </Button>
            <Button variant="outline" className="border-gray-700/20 text-white hover:bg-gray-800/10 bg-transparent">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
            <Button className="bg-gradient-to-r from-gray-700 to-gray-900">
              <RefreshCw className="h-4 w-4 mr-2" />
              Sync Data
            </Button>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {performanceMetrics.map((metric, index) => (
            <Card key={index} className="bg-black/5 border-gray-800/10">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-gray-400">{metric.icon}</div>
                  <Badge
                    className={`${
                      metric.change.startsWith("+") ? "bg-gray-800/20 text-gray-400" : "bg-gray-800/20 text-gray-400"
                    }`}
                  >
                    {metric.change}
                  </Badge>
                </div>
                <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                <div className="text-gray-400 text-sm">{metric.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Dashboard */}
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          {/* Portfolio Overview */}
          <div className="lg:col-span-2">
            <Card className="bg-black/5 border-gray-800/10">
              <CardHeader>
                <CardTitle className="text-white text-xl">Portfolio Overview</CardTitle>
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

                <div className="mt-6 bg-gradient-to-r from-gray-800/20 to-gray-900/20 rounded-lg p-6 border border-gray-700/30">
                  <h4 className="text-white font-bold text-lg mb-4">Portfolio Summary</h4>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-400 mb-1">$666,217.69</div>
                      <div className="text-gray-300">Total Value</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-400 mb-1">+12.5%</div>
                      <div className="text-gray-300">24h Change</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-400 mb-1">+45.7%</div>
                      <div className="text-gray-300">All Time</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Risk Management */}
          <div className="space-y-6">
            <Card className="bg-black/5 border-gray-800/10">
              <CardHeader>
                <CardTitle className="text-white">Risk Management</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {riskMetrics.map((metric, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm">{metric.label}</span>
                      <span className={`font-bold ${metric.color}`}>{metric.value}</span>
                    </div>
                    <Progress value={metric.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-black/5 border-gray-800/10">
              <CardHeader>
                <CardTitle className="text-white">Market Alerts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {marketAlerts.map((alert, index) => (
                  <div
                    key={index}
                    className={`p-3 rounded-lg border ${
                      alert.severity === "success"
                        ? "bg-gray-800/10 border-gray-700/30"
                        : alert.severity === "warning"
                          ? "bg-gray-800/10 border-gray-700/30"
                          : alert.severity === "error"
                            ? "bg-gray-800/10 border-gray-700/30"
                            : "bg-gray-800/10 border-gray-700/30"
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <div
                        className={`${
                          alert.severity === "success"
                            ? "text-green-400"
                            : alert.severity === "warning"
                              ? "text-yellow-400"
                              : alert.severity === "error"
                                ? "text-red-400"
                                : "text-blue-400"
                        } mt-0.5`}
                      >
                        {alert.icon}
                      </div>
                      <div className="flex-1">
                        <div className="text-white text-sm">{alert.message}</div>
                        <div className="text-gray-400 text-xs mt-1">{alert.time}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Active Positions & Trading History */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Active Positions */}
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

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-gray-400">Size</div>
                      <div className="text-white">{position.size}</div>
                    </div>
                    <div>
                      <div className="text-gray-400">Leverage</div>
                      <div className="text-white">{position.leverage}</div>
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

                  <div className="flex items-center justify-between mt-3">
                    <div className="text-gray-400 text-sm">Margin: {position.margin}</div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" className="border-gray-700/20 text-white bg-transparent">
                        Modify
                      </Button>
                      <Button size="sm" className="bg-red-600 hover:bg-red-700">
                        Close
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Trading History */}
          <Card className="bg-black/5 border-gray-800/10">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-white">Recent Trades</CardTitle>
                <Button variant="outline" className="border-gray-700/20 text-white bg-transparent">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  View All
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {tradingHistory.map((trade, index) => (
                <div key={index} className="bg-gray-900/30 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <Badge
                        className={`${
                          trade.side === "Long" ? "bg-gray-800/20 text-gray-400" : "bg-gray-800/20 text-gray-400"
                        }`}
                      >
                        {trade.side}
                      </Badge>
                      <div className="text-white font-bold">{trade.symbol}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-green-400 font-bold">{trade.pnl}</div>
                      <div className="text-gray-400 text-sm">{trade.time}</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <div className="text-gray-400">Size</div>
                      <div className="text-white">{trade.size}</div>
                    </div>
                    <div>
                      <div className="text-gray-400">Entry</div>
                      <div className="text-white">{trade.entryPrice}</div>
                    </div>
                    <div>
                      <div className="text-gray-400">Exit</div>
                      <div className="text-white">{trade.exitPrice}</div>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Trading Tools */}
        <Card className="bg-black/5 border-gray-800/10">
          <CardHeader>
            <CardTitle className="text-white text-xl">Professional Trading Tools</CardTitle>
            <p className="text-gray-400">Advanced tools and features for professional traders</p>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {tradingTools.map((tool, index) => (
                <Card key={index} className="bg-gray-900/30 border-gray-800/10 hover:bg-gray-900/50 transition-all">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gray-800/50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <div className={tool.color}>{tool.icon}</div>
                    </div>
                    <h3 className="text-white font-bold text-lg mb-2">{tool.name}</h3>
                    <p className="text-gray-400 text-sm mb-4">{tool.description}</p>
                    <Badge
                      className={`${
                        tool.status === "active"
                          ? "bg-gray-800/20 text-gray-400"
                          : tool.status === "premium"
                            ? "bg-gray-800/20 text-gray-400"
                            : "bg-gray-800/20 text-gray-400"
                      }`}
                    >
                      {tool.status === "active" ? "Active" : tool.status === "premium" ? "Premium" : "Available"}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
