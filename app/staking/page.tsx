"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Coins, TrendingUp, Clock, Shield, Calculator, Award, Lock, Unlock } from "lucide-react"

export default function StakingPage() {
  const [stakeAmount, setStakeAmount] = useState("")
  const [selectedPool, setSelectedPool] = useState("btc")
  const [lockPeriod, setLockPeriod] = useState("30")

  const stakingPools = [
    {
      id: "btc",
      symbol: "BTC",
      name: "Bitcoin",
      apy: "8.5%",
      minStake: "0.01",
      totalStaked: "1,234.56",
      poolSize: "$132.5M",
      lockPeriod: "30 days",
      icon: "🟠",
      risk: "Low",
      rewards: "Daily",
      status: "active",
    },
    {
      id: "eth",
      symbol: "ETH",
      name: "Ethereum",
      apy: "12.0%",
      minStake: "0.1",
      totalStaked: "8,765.43",
      poolSize: "$21.4M",
      lockPeriod: "60 days",
      icon: "🔵",
      risk: "Medium",
      rewards: "Daily",
      status: "active",
    },
    {
      id: "usdt",
      symbol: "USDT",
      name: "Tether",
      apy: "6.5%",
      minStake: "100",
      totalStaked: "2,456,789",
      poolSize: "$2.5M",
      lockPeriod: "Flexible",
      icon: "🟢",
      risk: "Very Low",
      rewards: "Daily",
      status: "active",
    },
    {
      id: "bnb",
      symbol: "BNB",
      name: "BNB",
      apy: "10.2%",
      minStake: "1",
      totalStaked: "12,345.67",
      poolSize: "$8.1M",
      lockPeriod: "90 days",
      icon: "🟡",
      risk: "Medium",
      rewards: "Daily",
      status: "active",
    },
    {
      id: "sol",
      symbol: "SOL",
      name: "Solana",
      apy: "15.8%",
      minStake: "1",
      totalStaked: "45,678.90",
      poolSize: "$10.7M",
      lockPeriod: "120 days",
      icon: "🟣",
      risk: "High",
      rewards: "Daily",
      status: "active",
    },
    {
      id: "ada",
      symbol: "ADA",
      name: "Cardano",
      apy: "9.3%",
      minStake: "100",
      totalStaked: "234,567.89",
      poolSize: "$208K",
      lockPeriod: "45 days",
      icon: "🔵",
      risk: "Medium",
      rewards: "Daily",
      status: "active",
    },
  ]

  const myStakes = [
    {
      pool: "BTC",
      amount: "2.5",
      value: "$268,086.40",
      apy: "8.5%",
      earned: "$1,234.56",
      daysLeft: 15,
      status: "active",
      icon: "🟠",
    },
    {
      pool: "ETH",
      amount: "15.0",
      value: "$36,622.65",
      apy: "12.0%",
      earned: "$2,456.78",
      daysLeft: 45,
      status: "active",
      icon: "🔵",
    },
    {
      pool: "USDT",
      amount: "50,000",
      value: "$50,000.00",
      apy: "6.5%",
      earned: "$890.41",
      daysLeft: 0,
      status: "unlocked",
      icon: "🟢",
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

  const calculateRewards = () => {
    const pool = stakingPools.find((p) => p.id === selectedPool)
    if (!pool || !stakeAmount) return { daily: 0, monthly: 0, yearly: 0 }

    const amount = Number.parseFloat(stakeAmount)
    const apy = Number.parseFloat(pool.apy.replace("%", "")) / 100
    const daily = (amount * apy) / 365
    const monthly = daily * 30
    const yearly = amount * apy

    return { daily, monthly, yearly }
  }

  const rewards = calculateRewards()

  return (
    <div className="py-8 px-4 bg-black">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-gray-800/20 text-gray-300 border-gray-700/30">High-Yield Staking</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Earn Passive Income
            <span className="bg-gradient-to-r from-gray-400 to-gray-300 bg-clip-text text-transparent">
              {" "}
              Through Staking
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stake your crypto assets and earn up to 15.8% APY with daily rewards, flexible lock periods, and
            institutional-grade security. Start earning passive income today.
          </p>
        </div>

        <Tabs defaultValue="stake" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3 bg-gray-900/30 border-gray-800/10">
            <TabsTrigger value="stake" className="text-white data-[state=active]:bg-gray-800/50">
              Stake Tokens
            </TabsTrigger>
            <TabsTrigger value="pools" className="text-white data-[state=active]:bg-gray-800/50">
              Staking Pools
            </TabsTrigger>
            <TabsTrigger value="portfolio" className="text-white data-[state=active]:bg-gray-800/50">
              My Stakes
            </TabsTrigger>
          </TabsList>

          {/* Stake Tokens Tab */}
          <TabsContent value="stake" className="space-y-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Staking Interface */}
              <div className="lg:col-span-2">
                <Card className="bg-black/5 border-gray-800/10">
                  <CardHeader>
                    <CardTitle className="text-white text-2xl">Stake Your Tokens</CardTitle>
                    <p className="text-gray-400">Choose a pool and start earning rewards immediately</p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Pool Selection */}
                    <div>
                      <label className="text-gray-400 text-sm font-medium mb-3 block">Select Staking Pool</label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {stakingPools.slice(0, 6).map((pool) => (
                          <button
                            key={pool.id}
                            onClick={() => setSelectedPool(pool.id)}
                            className={`p-4 rounded-xl border transition-all ${
                              selectedPool === pool.id
                                ? "border-gray-600 bg-gray-800/50"
                                : "border-gray-800/30 bg-gray-900/30 hover:bg-gray-800/30"
                            }`}
                          >
                            <div className="text-center">
                              <div className="text-2xl mb-2">{pool.icon}</div>
                              <div className="text-white font-bold text-sm">{pool.symbol}</div>
                              <div className="text-green-400 font-bold text-lg">{pool.apy}</div>
                              <div className="text-gray-400 text-xs">{pool.lockPeriod}</div>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Stake Amount */}
                    <div className="bg-gray-900/30 rounded-xl p-6">
                      <div className="flex items-center justify-between mb-4">
                        <label className="text-gray-400 text-sm font-medium">Stake Amount</label>
                        <div className="text-gray-400 text-sm">
                          Min: {stakingPools.find((p) => p.id === selectedPool)?.minStake}{" "}
                          {stakingPools.find((p) => p.id === selectedPool)?.symbol}
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="flex-1">
                          <Input
                            value={stakeAmount}
                            onChange={(e) => setStakeAmount(e.target.value)}
                            className="bg-transparent border-none text-2xl font-bold text-white placeholder:text-gray-500 p-0 h-auto focus-visible:ring-0"
                            placeholder="0.0"
                          />
                        </div>
                        <div className="text-white font-bold text-xl">
                          {stakingPools.find((p) => p.id === selectedPool)?.symbol}
                        </div>
                      </div>
                      <div className="flex justify-between items-center mt-4">
                        <div className="text-gray-400 text-sm">Available: 10.5 BTC</div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-gray-400 hover:text-white p-0 h-auto"
                          onClick={() => setStakeAmount("10.5")}
                        >
                          MAX
                        </Button>
                      </div>
                    </div>

                    {/* Lock Period */}
                    <div>
                      <label className="text-gray-400 text-sm font-medium mb-3 block">Lock Period</label>
                      <div className="grid grid-cols-4 gap-3">
                        {["30", "60", "90", "120"].map((days) => (
                          <button
                            key={days}
                            onClick={() => setLockPeriod(days)}
                            className={`p-3 rounded-lg border text-center transition-all ${
                              lockPeriod === days
                                ? "border-gray-600 bg-gray-800/50 text-white"
                                : "border-gray-800/30 bg-gray-900/30 text-gray-400 hover:bg-gray-800/30"
                            }`}
                          >
                            <div className="font-bold">{days}</div>
                            <div className="text-xs">days</div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Rewards Calculator */}
                    {stakeAmount && (
                      <div className="bg-gradient-to-r from-gray-800/20 to-gray-900/20 rounded-xl p-6 border border-gray-700/30">
                        <h4 className="text-white font-bold text-lg mb-4 flex items-center">
                          <Calculator className="h-5 w-5 mr-2" />
                          Estimated Rewards
                        </h4>
                        <div className="grid grid-cols-3 gap-6">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-green-400 mb-1">{rewards.daily.toFixed(4)}</div>
                            <div className="text-gray-300 text-sm">Daily</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-blue-400 mb-1">{rewards.monthly.toFixed(2)}</div>
                            <div className="text-gray-300 text-sm">Monthly</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-purple-400 mb-1">{rewards.yearly.toFixed(2)}</div>
                            <div className="text-gray-300 text-sm">Yearly</div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Stake Button */}
                    <Button className="w-full bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 text-lg py-6">
                      <Lock className="h-5 w-5 mr-2" />
                      Stake {stakingPools.find((p) => p.id === selectedPool)?.symbol}
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Staking Features */}
                <Card className="bg-black/5 border-gray-800/10">
                  <CardHeader>
                    <CardTitle className="text-white">Staking Benefits</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {stakingFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className={`${feature.color} mt-1`}>{feature.icon}</div>
                        <div>
                          <div className="text-white font-medium text-sm">{feature.title}</div>
                          <div className="text-gray-400 text-xs">{feature.description}</div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Pool Stats */}
                <Card className="bg-black/5 border-gray-800/10">
                  <CardHeader>
                    <CardTitle className="text-white">Platform Statistics</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm">Total Value Locked</span>
                      <span className="text-white font-bold">$175.2M</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm">Active Stakers</span>
                      <span className="text-white font-bold">45,678</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm">Rewards Distributed</span>
                      <span className="text-white font-bold">$12.4M</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm">Average APY</span>
                      <span className="text-green-400 font-bold">10.2%</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Staking Pools Tab */}
          <TabsContent value="pools">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {stakingPools.map((pool) => (
                <Card key={pool.id} className="bg-black/5 border-gray-800/10 hover:bg-black/10 transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="text-3xl">{pool.icon}</div>
                        <div>
                          <div className="text-white font-bold text-lg">{pool.symbol}</div>
                          <div className="text-gray-400 text-sm">{pool.name}</div>
                        </div>
                      </div>
                      <Badge
                        className={`${
                          pool.risk === "Low"
                            ? "bg-gray-800/20 text-gray-400"
                            : pool.risk === "Medium"
                              ? "bg-gray-800/20 text-gray-400"
                              : "bg-gray-800/20 text-gray-400"
                        }`}
                      >
                        {pool.risk}
                      </Badge>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 text-sm">APY</span>
                        <span className="text-green-400 font-bold text-xl">{pool.apy}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 text-sm">Lock Period</span>
                        <span className="text-white text-sm">{pool.lockPeriod}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 text-sm">Min Stake</span>
                        <span className="text-white text-sm">
                          {pool.minStake} {pool.symbol}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 text-sm">Pool Size</span>
                        <span className="text-white text-sm">{pool.poolSize}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 text-sm">Total Staked</span>
                        <span className="text-white text-sm">{pool.totalStaked}</span>
                      </div>
                    </div>

                    <Button
                      className="w-full bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800"
                      onClick={() => setSelectedPool(pool.id)}
                    >
                      Stake {pool.symbol}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* My Stakes Tab */}
          <TabsContent value="portfolio">
            <div className="space-y-6">
              {/* Portfolio Overview */}
              <div className="grid md:grid-cols-4 gap-6">
                <Card className="bg-black/5 border-gray-800/10">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-white mb-2">$354,709.05</div>
                    <div className="text-gray-400">Total Staked</div>
                  </CardContent>
                </Card>
                <Card className="bg-black/5 border-gray-800/10">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-green-400 mb-2">$4,581.75</div>
                    <div className="text-gray-400">Total Earned</div>
                  </CardContent>
                </Card>
                <Card className="bg-black/5 border-gray-800/10">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">9.2%</div>
                    <div className="text-gray-400">Avg APY</div>
                  </CardContent>
                </Card>
                <Card className="bg-black/5 border-gray-800/10">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-2">3</div>
                    <div className="text-gray-400">Active Stakes</div>
                  </CardContent>
                </Card>
              </div>

              {/* Active Stakes */}
              <Card className="bg-black/5 border-gray-800/10">
                <CardHeader>
                  <CardTitle className="text-white">My Active Stakes</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {myStakes.map((stake, index) => (
                    <div key={index} className="bg-gray-900/30 rounded-xl p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="text-2xl">{stake.icon}</div>
                          <div>
                            <div className="text-white font-bold text-lg">{stake.pool} Staking</div>
                            <div className="text-gray-400 text-sm">
                              {stake.amount} {stake.pool} • {stake.apy} APY
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-white font-bold text-lg">{stake.value}</div>
                          <div className="text-green-400 text-sm">+{stake.earned} earned</div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <div className="text-gray-400 text-sm">Status</div>
                          <div
                            className={`text-sm font-medium ${
                              stake.status === "active" ? "text-green-400" : "text-blue-400"
                            }`}
                          >
                            {stake.status === "active" ? "Staking" : "Ready to Claim"}
                          </div>
                        </div>
                        <div>
                          <div className="text-gray-400 text-sm">
                            {stake.status === "active" ? "Days Remaining" : "Available"}
                          </div>
                          <div className="text-white text-sm">
                            {stake.status === "active" ? `${stake.daysLeft} days` : "Now"}
                          </div>
                        </div>
                      </div>

                      {stake.status === "active" && (
                        <Progress value={((30 - stake.daysLeft) / 30) * 100} className="mb-4" />
                      )}

                      <div className="flex space-x-3">
                        {stake.status === "active" ? (
                          <>
                            <Button variant="outline" className="flex-1 border-gray-700/20 text-white bg-transparent">
                              <Award className="h-4 w-4 mr-2" />
                              Claim Rewards
                            </Button>
                            <Button variant="outline" className="border-gray-700/20 text-white bg-transparent">
                              <Lock className="h-4 w-4" />
                            </Button>
                          </>
                        ) : (
                          <Button className="flex-1 bg-gradient-to-r from-gray-700 to-gray-900">
                            <Unlock className="h-4 w-4 mr-2" />
                            Unstake & Claim
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
