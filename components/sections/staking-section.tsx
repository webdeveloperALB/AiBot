import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Coins, TrendingUp, Shield, Clock, ArrowRight } from "lucide-react"

export function StakingSection() {
  const stakingPools = [
    {
      symbol: "BTC",
      name: "Bitcoin",
      apy: "8.5%",
      minStake: "0.01",
      totalStaked: "1,234.56",
      poolSize: "$132.5M",
      lockPeriod: "30 days",
      icon: "🟠",
      risk: "Low",
    },
    {
      symbol: "ETH",
      name: "Ethereum",
      apy: "12.0%",
      minStake: "0.1",
      totalStaked: "8,765.43",
      poolSize: "$21.4M",
      lockPeriod: "60 days",
      icon: "🔵",
      risk: "Medium",
    },
    {
      symbol: "USDT",
      name: "Tether",
      apy: "6.5%",
      minStake: "100",
      totalStaked: "2,456,789",
      poolSize: "$2.5M",
      lockPeriod: "Flexible",
      icon: "🟢",
      risk: "Very Low",
    },
    {
      symbol: "SOL",
      name: "Solana",
      apy: "15.8%",
      minStake: "1",
      totalStaked: "45,678.90",
      poolSize: "$10.7M",
      lockPeriod: "120 days",
      icon: "🟣",
      risk: "High",
    },
  ]

  const stakingFeatures = [
    {
      icon: <Coins className="h-6 w-6" />,
      title: "High Yield Returns",
      description: "Earn up to 15.8% APY on your crypto holdings",
      color: "text-green-400",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Secure Staking",
      description: "Multi-signature security and insurance coverage",
      color: "text-blue-400",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Daily Rewards",
      description: "Receive staking rewards distributed daily",
      color: "text-purple-400",
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Compound Growth",
      description: "Auto-compound your rewards for maximum returns",
      color: "text-yellow-400",
    },
  ]

  const platformStats = [
    { label: "Total Value Locked", value: "$4.8B+", description: "Across all pools" },
    { label: "Highest APY", value: "15.8%", description: "SOL staking" },
    { label: "Reward Distribution", value: "24/7", description: "Automated" },
    { label: "Security Level", value: "100%", description: "Institutional grade" },
  ]

  return (
    <section id="staking" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gray-800/30 text-gray-200 border-gray-600/30">High-Yield Staking</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Maximize Your
            <span className="bg-gradient-to-r from-gray-400 to-gray-300 bg-clip-text text-transparent">
              {" "}
              Crypto Rewards
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Earn passive income by staking your cryptocurrencies with our institutional-grade staking platform. Access
            high-yield pools, flexible terms, and automated reward optimization.
          </p>
        </div>

        {/* Staking Calculator Demo */}
        <Card className="bg-gray-900/50 border-gray-700/30 backdrop-blur-sm mb-16">
          <CardHeader>
            <CardTitle className="text-white text-2xl text-center">Staking Calculator Demo</CardTitle>
            <p className="text-gray-300 text-center">
              Calculate your potential staking rewards with real-time APY rates
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Calculator Interface */}
              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-600/30">
                <h3 className="text-white font-bold text-lg mb-4">Stake 1,000 USDT</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Selected Pool:</span>
                    <span className="text-white font-semibold">USDT (6.5% APY)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Lock Period:</span>
                    <span className="text-white font-semibold">Flexible</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Daily Rewards:</span>
                    <span className="text-green-400 font-bold">$0.18</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Monthly Rewards:</span>
                    <span className="text-green-400 font-bold">$5.42</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Yearly Rewards:</span>
                    <span className="text-green-400 font-bold">$65.00</span>
                  </div>
                </div>
                <Button className="w-full mt-6 bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800">
                  Start Staking Demo
                </Button>
              </div>

              {/* Staking Features */}
              <div className="space-y-4">
                {stakingFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className={`${feature.color} mt-1`}>{feature.icon}</div>
                    <div>
                      <div className="text-white font-medium text-sm">{feature.title}</div>
                      <div className="text-gray-400 text-xs">{feature.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Staking Pools */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Available Staking Pools</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stakingPools.map((pool, index) => (
              <Card
                key={index}
                className="bg-gray-900/50 border-gray-700/30 backdrop-blur-sm hover:bg-gray-800/50 transition-all"
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="text-3xl">{pool.icon}</div>
                      <div>
                        <CardTitle className="text-white text-lg">{pool.name}</CardTitle>
                        <p className="text-gray-400 text-sm">{pool.symbol}</p>
                      </div>
                    </div>
                    <Badge
                      className={`${
                        pool.risk === "Low" || pool.risk === "Very Low"
                          ? "bg-green-500/20 text-green-400"
                          : pool.risk === "Medium"
                            ? "bg-yellow-500/20 text-yellow-400"
                            : "bg-red-500/20 text-red-400"
                      }`}
                    >
                      {pool.risk}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="text-gray-400">APY</div>
                        <div className="text-green-400 font-bold text-lg">{pool.apy}</div>
                      </div>
                      <div>
                        <div className="text-gray-400">Min Stake</div>
                        <div className="text-white font-semibold">
                          {pool.minStake} {pool.symbol}
                        </div>
                      </div>
                      <div>
                        <div className="text-gray-400">Lock Period</div>
                        <div className="text-white">{pool.lockPeriod}</div>
                      </div>
                      <div>
                        <div className="text-gray-400">Pool Size</div>
                        <div className="text-white">{pool.poolSize}</div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Pool Capacity</span>
                        <span className="text-white">78%</span>
                      </div>
                      <Progress value={78} className="h-2" />
                    </div>

                    <Button className="w-full bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800">
                      Demo Stake {pool.symbol}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Platform Statistics */}
        <Card className="bg-gray-900/50 border-gray-700/30 backdrop-blur-sm mb-12">
          <CardHeader>
            <CardTitle className="text-white text-xl text-center">Platform Statistics</CardTitle>
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
            <Coins className="mr-2 h-5 w-5" />
            Start Earning Rewards
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
