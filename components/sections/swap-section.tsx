import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Repeat, Zap, Shield, Clock, ArrowRight } from "lucide-react"

export function SwapSection() {
  const swapFeatures = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Instant Execution",
      description: "Swap cryptocurrencies instantly with guaranteed rates and 1-2 minute execution times.",
      stat: "<2 min",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Low Fees",
      description: "Industry-leading 0.1% swap fees with no hidden costs or additional charges.",
      stat: "0.1%",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "24/7 Available",
      description: "Trade anytime with our always-on liquidity pools and automated market makers.",
      stat: "24/7",
    },
    {
      icon: <Repeat className="h-6 w-6" />,
      title: "150+ Pairs",
      description: "Access to over 150 cryptocurrency trading pairs with deep liquidity.",
      stat: "150+",
    },
  ]

  const popularPairs = [
    { from: "BTC", to: "USDT", rate: "1 BTC = 107,234.56 USDT", volume: "$45.2M", icon1: "🟠", icon2: "🟢" },
    { from: "ETH", to: "USDT", rate: "1 ETH = 2,441.51 USDT", volume: "$32.1M", icon1: "🔵", icon2: "🟢" },
    { from: "BNB", to: "USDT", rate: "1 BNB = 656.78 USDT", volume: "$18.7M", icon1: "🟡", icon2: "🟢" },
    { from: "XRP", to: "USDT", rate: "1 XRP = 2.17 USDT", volume: "$12.3M", icon1: "⚪", icon2: "🟢" },
  ]

  return (
    <section id="swap" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gray-800/20 text-gray-300 border-gray-700/30">Instant Crypto Swap</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Exchange Crypto
            <span className="bg-gradient-to-r from-gray-400 to-gray-300 bg-clip-text text-transparent"> Instantly</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Swap between 150+ cryptocurrencies with the best rates, lowest fees, and fastest execution times in the
            market
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Swap Interface Preview */}
          <div>
            <Card className="bg-black/5 border-gray-800/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white text-xl">Quick Swap Interface</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* From Token */}
                <div className="bg-gray-900/30 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-400 text-sm">From</span>
                    <span className="text-gray-400 text-sm">Balance: 4.18064 BTC</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl">🟠</span>
                      <span className="text-white font-bold">BTC</span>
                    </div>
                    <div className="flex-1 text-right">
                      <div className="text-2xl font-bold text-white">1.0</div>
                      <div className="text-gray-400 text-sm">≈ $107,234.56</div>
                    </div>
                  </div>
                </div>

                {/* Swap Arrow */}
                <div className="flex justify-center">
                  <div className="w-12 h-12 bg-gray-800/50 rounded-full flex items-center justify-center">
                    <ArrowRight className="h-6 w-6 text-white rotate-90" />
                  </div>
                </div>

                {/* To Token */}
                <div className="bg-gray-900/30 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-400 text-sm">To</span>
                    <span className="text-gray-400 text-sm">Balance: 25,847.23 USDT</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl">🟢</span>
                      <span className="text-white font-bold">USDT</span>
                    </div>
                    <div className="flex-1 text-right">
                      <div className="text-2xl font-bold text-white">107,234.56</div>
                      <div className="text-gray-400 text-sm">≈ $107,234.56</div>
                    </div>
                  </div>
                </div>

                {/* Swap Details */}
                <div className="bg-gray-900/20 rounded-xl p-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Rate</span>
                    <span className="text-white">1 BTC = 107,234.56 USDT</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Fee (0.1%)</span>
                    <span className="text-white">$107.23</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Estimated Time</span>
                    <span className="text-green-400">~2 minutes</span>
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 text-lg py-6">
                  <Zap className="mr-2 h-5 w-5" />
                  Swap BTC for USDT
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Features */}
          <div className="space-y-6">
            {swapFeatures.map((feature, index) => (
              <Card key={index} className="bg-black/5 border-gray-800/10 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gray-800/50 rounded-xl flex items-center justify-center text-gray-400">
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-white font-bold text-lg">{feature.title}</h3>
                        <Badge className="bg-gray-800/20 text-gray-400">{feature.stat}</Badge>
                      </div>
                      <p className="text-gray-300 text-sm">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Popular Trading Pairs */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Popular Trading Pairs</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularPairs.map((pair, index) => (
              <Card
                key={index}
                className="bg-black/5 border-gray-800/10 backdrop-blur-sm hover:bg-black/10 transition-all"
              >
                <CardContent className="p-6 text-center">
                  <div className="flex items-center justify-center space-x-2 mb-4">
                    <span className="text-3xl">{pair.icon1}</span>
                    <ArrowRight className="h-5 w-5 text-gray-400" />
                    <span className="text-3xl">{pair.icon2}</span>
                  </div>
                  <div className="text-white font-bold text-lg mb-2">
                    {pair.from}/{pair.to}
                  </div>
                  <div className="text-gray-400 text-sm mb-2">{pair.rate}</div>
                  <div className="text-gray-400 text-xs">24h Volume: {pair.volume}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 text-lg px-8 py-6 h-auto"
          >
            <Repeat className="mr-2 h-5 w-5" />
            Start Swapping Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
