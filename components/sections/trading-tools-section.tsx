import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BarChart3, Target, Shield, Zap, Bot, ArrowRight } from "lucide-react"

export function TradingToolsSection() {
  const tools = [
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Advanced Charting",
      description:
        "Professional TradingView integration with 100+ indicators, drawing tools, and real-time data feeds.",
      features: ["100+ Technical Indicators", "Custom Drawing Tools", "Multi-Timeframe Analysis", "Real-time Data"],
      color: "from-gray-700 to-gray-900",
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Risk Management",
      description:
        "Comprehensive risk management tools including stop-loss, take-profit, and position sizing calculators.",
      features: ["Stop-Loss Orders", "Take-Profit Targets", "Position Sizing", "Risk Calculator"],
      color: "from-gray-700 to-gray-900",
    },
    {
      icon: <Bot className="h-8 w-8" />,
      title: "Trading Bots",
      description: "Automated trading strategies with customizable parameters and backtesting capabilities.",
      features: ["Grid Trading", "DCA Strategies", "Backtesting", "Custom Algorithms"],
      color: "from-gray-700 to-gray-900",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Fast Execution",
      description:
        "Ultra-low latency order execution with direct market access and institutional-grade infrastructure.",
      features: ["<1ms Execution", "Direct Market Access", "High Frequency Trading", "Co-location"],
      color: "from-gray-700 to-gray-900",
    },
  ]

  return (
    <section id="trading-tools" className="py-20 px-4 bg-black/20 backdrop-blur-sm">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gray-800/20 text-gray-300 border-gray-700/30">Professional Tools</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Advanced Trading
            <span className="bg-gradient-to-r from-gray-400 to-gray-300 bg-clip-text text-transparent">
              {" "}
              Infrastructure
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional-grade trading tools and infrastructure designed for serious traders and institutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {tools.map((tool, index) => (
            <Card
              key={index}
              className="bg-black/5 border-gray-800/10 backdrop-blur-sm hover:bg-black/10 transition-all duration-300"
            >
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${tool.color} rounded-2xl flex items-center justify-center text-white`}
                  >
                    {tool.icon}
                  </div>
                  <div>
                    <CardTitle className="text-white text-xl">{tool.title}</CardTitle>
                  </div>
                </div>
                <p className="text-gray-300 text-base leading-relaxed">{tool.description}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  {tool.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button
                  variant="ghost"
                  className="text-gray-400 hover:text-white hover:bg-gray-800/20 p-0 h-auto font-semibold"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 text-lg px-8 py-6 h-auto"
          >
            <Shield className="mr-2 h-5 w-5" />
            Start Professional Trading
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
