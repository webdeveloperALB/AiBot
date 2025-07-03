import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Bot, Zap, TrendingUp, Shield, ArrowRight } from "lucide-react"

export function ArbitrageSection() {
  const features = [
    {
      icon: <Bot className="h-6 w-6" />,
      title: "AI-Powered Detection",
      description: "Advanced algorithms scan 20+ exchanges for profitable arbitrage opportunities 24/7",
      stat: "20+ Exchanges",
      color: "text-purple-400",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Lightning Fast Execution",
      description: "Sub-second execution speeds ensure you capture opportunities before they disappear",
      stat: "<1 Second",
      color: "text-yellow-400",
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Consistent Profits",
      description: "Generate steady daily returns with low-risk arbitrage strategies",
      stat: "$45+ Daily",
      color: "text-green-400",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Risk Management",
      description: "Built-in safety mechanisms and position limits protect your capital",
      stat: "Protected",
      color: "text-blue-400",
    },
  ]

  const performanceStats = [
    { label: "Total Trades", value: "12,847", change: "+234 today" },
    { label: "Success Rate", value: "94.2%", change: "+1.2%" },
    { label: "Average Profit", value: "$47.23", change: "+$3.45" },
    { label: "Active Pairs", value: "156", change: "+12" },
  ]

  const exchangeConnections = [
    { name: "Binance", status: "connected", latency: "12ms", icon: "🟡" },
    { name: "Coinbase", status: "connected", latency: "18ms", icon: "🔵" },
    { name: "Kraken", status: "connected", latency: "15ms", icon: "🟣" },
    { name: "Bitfinex", status: "connected", latency: "22ms", icon: "🟢" },
    { name: "KuCoin", status: "connected", latency: "25ms", icon: "🟢" },
    { name: "Huobi", status: "connected", latency: "19ms", icon: "🔴" },
  ]

  const recentOpportunities = [
    {
      pair: "BTC/USDT",
      exchange1: "Binance",
      exchange2: "Coinbase",
      spread: "0.21%",
      profit: "$45.67",
      status: "executed",
    },
    {
      pair: "ETH/USDT",
      exchange1: "Kraken",
      exchange2: "Bitfinex",
      spread: "0.30%",
      profit: "$22.17",
      status: "monitoring",
    },
    {
      pair: "BNB/USDT",
      exchange1: "Binance",
      exchange2: "KuCoin",
      spread: "0.41%",
      profit: "$13.34",
      status: "executed",
    },
  ]

  return (
    <section id="arbitrage" className="py-20 px-4 bg-black/20 backdrop-blur-sm">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gray-800/20 text-gray-300 border-gray-700/30">AI Arbitrage Engine</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Automated
            <span className="bg-gradient-to-r from-gray-400 to-gray-300 bg-clip-text text-transparent">
              {" "}
              Arbitrage Trading
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            AI-powered arbitrage bot that automatically detects and executes profitable trades across 20+ exchanges,
            earning you consistent daily profits.
          </p>
        </div>

        {/* Performance Overview */}
        <Card className="mb-12 bg-black/5 border-gray-800/10 backdrop-blur-sm">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-white text-2xl">Arbitrage Bot Performance</CardTitle>
                <p className="text-gray-400">Real-time statistics and performance metrics</p>
              </div>
              <Badge className="bg-green-500/20 text-green-400">Active</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {performanceStats.map((stat, index) => (
                <div key={index} className="bg-gray-900/30 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-400 text-sm">{stat.label}</span>
                    <Badge className="bg-gray-800/20 text-gray-400 text-xs">{stat.change}</Badge>
                  </div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="bg-black/5 border-gray-800/10 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gray-800/50 flex items-center justify-center ${feature.color}`}
                  >
                    {feature.icon}
                  </div>
                  <Badge className="bg-gray-800/20 text-gray-400">{feature.stat}</Badge>
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Exchange Connections */}
          <Card className="bg-black/5 border-gray-800/10 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">Connected Exchanges</CardTitle>
              <p className="text-gray-400">Real-time connections to major cryptocurrency exchanges</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {exchangeConnections.map((exchange, index) => (
                  <div key={index} className="flex items-center justify-between bg-gray-900/30 rounded-lg p-3">
                    <div className="flex items-center space-x-3">
                      <span className="text-xl">{exchange.icon}</span>
                      <span className="text-white font-medium">{exchange.name}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-gray-400 text-sm">{exchange.latency}</span>
                      <Badge className="bg-gray-800/20 text-gray-400">{exchange.status}</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Opportunities */}
          <Card className="bg-black/5 border-gray-800/10 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">Recent Opportunities</CardTitle>
              <p className="text-gray-400">Latest arbitrage opportunities detected and executed</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentOpportunities.map((opportunity, index) => (
                  <div key={index} className="bg-gray-900/30 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-bold">{opportunity.pair}</span>
                      <Badge
                        className={`${
                          opportunity.status === "executed"
                            ? "bg-gray-800/20 text-gray-400"
                            : "bg-gray-800/20 text-gray-400"
                        }`}
                      >
                        {opportunity.status}
                      </Badge>
                    </div>
                    <div className="text-gray-400 text-sm mb-2">
                      {opportunity.exchange1} → {opportunity.exchange2}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-green-400 font-bold">{opportunity.spread} spread</span>
                      <span className="text-green-400 font-bold">{opportunity.profit}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 text-lg px-8 py-6 h-auto"
          >
            <Bot className="mr-2 h-5 w-5" />
            Start AI Arbitrage Bot
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
