import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BarChart3, TrendingUp, Target, Zap, Shield, ArrowRight, CheckCircle } from "lucide-react"

export function TradingSection() {
  const tradingFeatures = [
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Professional Charting",
      description: "Advanced TradingView integration with 100+ technical indicators and drawing tools",
      features: ["100+ Technical Indicators", "Custom Drawing Tools", "Multi-Timeframe Analysis", "Real-time Data"],
      color: "from-gray-700 to-gray-900",
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Risk Management",
      description: "Comprehensive risk management tools including stop-loss, take-profit, and position sizing",
      features: ["Stop-Loss Orders", "Take-Profit Targets", "Position Sizing", "Risk Calculator"],
      color: "from-gray-700 to-gray-900",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Fast Execution",
      description: "Ultra-low latency order execution with direct market access and institutional infrastructure",
      features: ["<1ms Execution", "Direct Market Access", "High Frequency Trading", "Co-location"],
      color: "from-gray-700 to-gray-900",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Security & Compliance",
      description: "Bank-level security with regulatory compliance and institutional-grade custody solutions",
      features: ["Multi-Sig Wallets", "Cold Storage", "Regulatory Compliance", "Insurance Coverage"],
      color: "from-gray-700 to-gray-900",
    },
  ]

  const tradingPairs = [
    { symbol: "BTC/USDT", price: "$107,234.56", change: "+2.34%", volume: "$1.2B", icon: "🟠" },
    { symbol: "ETH/USDT", price: "$2,441.51", change: "-0.87%", volume: "$856M", icon: "🔵" },
    { symbol: "BNB/USDT", price: "$656.78", change: "+1.23%", volume: "$234M", icon: "🟡" },
    { symbol: "XRP/USDT", price: "$2.17", change: "-0.45%", volume: "$189M", icon: "⚪" },
    { symbol: "ADA/USDT", price: "$0.89", change: "+3.21%", volume: "$145M", icon: "🔵" },
    { symbol: "SOL/USDT", price: "$234.67", change: "+5.67%", volume: "$298M", icon: "🟣" },
  ]

  const platformStats = [
    { label: "Platform Uptime", value: "99.9%", description: "System Reliability" },
    { label: "Execution Speed", value: "<5ms", description: "Order Latency" },
    { label: "Daily Volume", value: "$2.5B+", description: "Trading Activity" },
    { label: "Active Traders", value: "500K+", description: "Global Community" },
  ]

  return (
    <section id="trading" className="py-20 px-4 bg-black/20 backdrop-blur-sm">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gray-800/30 text-gray-200 border-gray-600/30">Professional Trading</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Institutional-Grade
            <span className="bg-gradient-to-r from-gray-400 to-gray-300 bg-clip-text text-transparent">
              {" "}
              Trading Platform
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience professional-grade trading with comprehensive market access, advanced charting capabilities, and
            sophisticated order management for cryptocurrencies, forex, commodities, and indices.
          </p>
        </div>

        {/* Trading Interface Preview */}
        <Card className="bg-gray-900/50 border-gray-700/30 backdrop-blur-sm mb-16">
          <CardHeader>
            <CardTitle className="text-white text-2xl text-center">Professional Trading Interface</CardTitle>
            <p className="text-gray-300 text-center">Advanced tools for serious traders</p>
          </CardHeader>
          <CardContent>
            <div className="h-96 bg-gradient-to-b from-gray-800/50 to-black/80 rounded-lg flex items-center justify-center border border-gray-600/30">
              <div className="text-center">
                <BarChart3 className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-white font-bold text-xl mb-2">Advanced Trading Chart</h3>
                <p className="text-gray-300">
                  Professional TradingView integration with real-time data, technical indicators, and drawing tools
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Trading Features */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {tradingFeatures.map((feature, index) => (
            <Card
              key={index}
              className="bg-gray-900/50 border-gray-700/30 backdrop-blur-sm hover:bg-gray-800/50 transition-all"
            >
              <CardHeader>
                <div className="flex items-start space-x-4">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center text-white flex-shrink-0 border border-gray-600/30`}
                  >
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-white text-xl mb-2">{feature.title}</CardTitle>
                    <p className="text-gray-300 text-sm">{feature.description}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {feature.features.map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Popular Trading Pairs */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Popular Trading Pairs</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tradingPairs.map((pair, index) => (
              <Card
                key={index}
                className="bg-gray-900/50 border-gray-700/30 backdrop-blur-sm hover:bg-gray-800/50 transition-all"
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="text-2xl">{pair.icon}</div>
                      <div>
                        <div className="text-white font-bold text-lg">{pair.symbol}</div>
                        <div className="text-gray-400 text-sm">{pair.volume} 24h volume</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-white font-mono text-lg">{pair.price}</div>
                    <div
                      className={`text-sm font-bold ${pair.change.startsWith("+") ? "text-green-400" : "text-red-400"}`}
                    >
                      {pair.change}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Platform Statistics */}
        <Card className="bg-gray-900/50 border-gray-700/30 backdrop-blur-sm mb-12">
          <CardHeader>
            <CardTitle className="text-white text-xl text-center">Platform Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-6">
              {platformStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300 font-semibold mb-1">{stat.label}</div>
                  <div className="text-gray-400 text-sm">{stat.description}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 text-lg px-8 py-6 h-auto"
          >
            <TrendingUp className="mr-2 h-5 w-5" />
            Start Trading Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
