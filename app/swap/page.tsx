"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowUpDown, Zap, Shield, Clock, TrendingUp, RefreshCw, Settings, History } from "lucide-react"

export default function SwapPage() {
  const [fromAmount, setFromAmount] = useState("1.0")
  const [toAmount, setToAmount] = useState("107,234.56")
  const [fromToken, setFromToken] = useState("BTC")
  const [toToken, setToToken] = useState("USDT")
  const [slippage, setSlippage] = useState("0.5")

  const tokens = [
    { symbol: "BTC", name: "Bitcoin", price: "$107,234.56", icon: "🟠", balance: "4.18064" },
    { symbol: "ETH", name: "Ethereum", price: "$2,441.51", icon: "🔵", balance: "15.67" },
    { symbol: "BNB", name: "BNB", price: "$656.78", icon: "🟡", balance: "234.56" },
    { symbol: "USDT", name: "Tether", price: "$1.00", icon: "🟢", balance: "25,847.23" },
    { symbol: "USDC", name: "USD Coin", price: "$1.00", icon: "🔵", balance: "12,456.78" },
    { symbol: "XRP", name: "Ripple", price: "$2.17", icon: "⚪", balance: "5,000.00" },
    { symbol: "ADA", name: "Cardano", price: "$0.89", icon: "🔵", balance: "8,900.45" },
    { symbol: "SOL", name: "Solana", price: "$234.67", icon: "🟣", balance: "125.34" },
  ]

  const recentSwaps = [
    {
      from: "BTC",
      to: "USDT",
      fromAmount: "0.5",
      toAmount: "53,617.28",
      time: "2 minutes ago",
      status: "completed",
      fee: "$5.36",
    },
    {
      from: "ETH",
      to: "BNB",
      fromAmount: "5.0",
      toAmount: "18.6",
      time: "15 minutes ago",
      status: "completed",
      fee: "$2.44",
    },
    {
      from: "USDT",
      to: "SOL",
      fromAmount: "1,000",
      toAmount: "4.26",
      time: "1 hour ago",
      status: "completed",
      fee: "$1.00",
    },
    {
      from: "BNB",
      to: "XRP",
      fromAmount: "10.0",
      toAmount: "3,027.65",
      time: "3 hours ago",
      status: "completed",
      fee: "$0.66",
    },
  ]

  const swapFeatures = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Instant Execution",
      description: "Swaps execute in under 2 minutes with guaranteed rates",
      color: "text-yellow-400",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Secure Protocol",
      description: "Bank-level security with multi-signature protection",
      color: "text-green-400",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "24/7 Availability",
      description: "Trade anytime with our always-on liquidity pools",
      color: "text-blue-400",
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Best Rates",
      description: "Aggregated liquidity for optimal pricing across DEXs",
      color: "text-purple-400",
    },
  ]

  const handleSwapTokens = () => {
    const tempToken = fromToken
    const tempAmount = fromAmount
    setFromToken(toToken)
    setToToken(tempToken)
    setFromAmount(toAmount)
    setToAmount(tempAmount)
  }

  const getTokenBySymbol = (symbol: string) => {
    return tokens.find((token) => token.symbol === symbol) || tokens[0]
  }

  return (
    <div className="py-8 px-4 bg-black">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-gray-800/20 text-gray-300 border-gray-700/30">Instant Crypto Swap</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Exchange Crypto
            <span className="bg-gradient-to-r from-gray-400 to-gray-300 bg-clip-text text-transparent"> Instantly</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Swap between 150+ cryptocurrencies with 0.1% fees, instant execution, and the best rates across multiple
            exchanges. No order books, no waiting.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Swap Interface */}
          <div className="lg:col-span-2">
            <Card className="bg-black/5 border-gray-800/10 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-white text-2xl">Swap Tokens</CardTitle>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm" className="border-gray-700/20 text-white bg-transparent">
                      <Settings className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm" className="border-gray-700/20 text-white bg-transparent">
                      <RefreshCw className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* From Token */}
                <div className="bg-gray-900/30 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <label className="text-gray-400 text-sm font-medium">From</label>
                    <div className="text-gray-400 text-sm">
                      Balance: {getTokenBySymbol(fromToken).balance} {fromToken}
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex-1">
                      <Input
                        value={fromAmount}
                        onChange={(e) => setFromAmount(e.target.value)}
                        className="bg-transparent border-none text-2xl font-bold text-white placeholder:text-gray-500 p-0 h-auto focus-visible:ring-0"
                        placeholder="0.0"
                      />
                      <div className="text-gray-400 text-sm mt-1">
                        ≈ $
                        {(
                          Number.parseFloat(fromAmount) *
                          Number.parseFloat(getTokenBySymbol(fromToken).price.replace(/[$,]/g, ""))
                        ).toLocaleString()}
                      </div>
                    </div>
                    <Select value={fromToken} onValueChange={setFromToken}>
                      <SelectTrigger className="w-32 bg-gray-800/50 border-gray-700/30 text-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-900 border-gray-700">
                        {tokens.map((token) => (
                          <SelectItem key={token.symbol} value={token.symbol} className="text-white">
                            <div className="flex items-center space-x-2">
                              <span className="text-lg">{token.icon}</span>
                              <span>{token.symbol}</span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex justify-end mt-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-gray-400 hover:text-white p-0 h-auto"
                      onClick={() => setFromAmount(getTokenBySymbol(fromToken).balance)}
                    >
                      MAX
                    </Button>
                  </div>
                </div>

                {/* Swap Button */}
                <div className="flex justify-center">
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full w-12 h-12 border-gray-700/30 bg-gray-900/50 hover:bg-gray-800/50"
                    onClick={handleSwapTokens}
                  >
                    <ArrowUpDown className="h-5 w-5 text-white" />
                  </Button>
                </div>

                {/* To Token */}
                <div className="bg-gray-900/30 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <label className="text-gray-400 text-sm font-medium">To</label>
                    <div className="text-gray-400 text-sm">
                      Balance: {getTokenBySymbol(toToken).balance} {toToken}
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex-1">
                      <Input
                        value={toAmount}
                        onChange={(e) => setToAmount(e.target.value)}
                        className="bg-transparent border-none text-2xl font-bold text-white placeholder:text-gray-500 p-0 h-auto focus-visible:ring-0"
                        placeholder="0.0"
                        readOnly
                      />
                      <div className="text-gray-400 text-sm mt-1">
                        ≈ $
                        {(
                          Number.parseFloat(toAmount.replace(/,/g, "")) *
                          Number.parseFloat(getTokenBySymbol(toToken).price.replace(/[$,]/g, ""))
                        ).toLocaleString()}
                      </div>
                    </div>
                    <Select value={toToken} onValueChange={setToToken}>
                      <SelectTrigger className="w-32 bg-gray-800/50 border-gray-700/30 text-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-900 border-gray-700">
                        {tokens.map((token) => (
                          <SelectItem key={token.symbol} value={token.symbol} className="text-white">
                            <div className="flex items-center space-x-2">
                              <span className="text-lg">{token.icon}</span>
                              <span>{token.symbol}</span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Swap Details */}
                <div className="bg-gray-900/20 rounded-xl p-4 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">Exchange Rate</span>
                    <span className="text-white text-sm">
                      1 {fromToken} ={" "}
                      {(Number.parseFloat(toAmount.replace(/,/g, "")) / Number.parseFloat(fromAmount)).toLocaleString()}{" "}
                      {toToken}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">Network Fee</span>
                    <span className="text-white text-sm">$2.50</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">Platform Fee (0.1%)</span>
                    <span className="text-white text-sm">$1.07</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">Slippage Tolerance</span>
                    <div className="flex items-center space-x-2">
                      <Input
                        value={slippage}
                        onChange={(e) => setSlippage(e.target.value)}
                        className="w-16 h-6 text-xs bg-gray-800/50 border-gray-700/30 text-white text-center"
                      />
                      <span className="text-white text-sm">%</span>
                    </div>
                  </div>
                  <div className="border-t border-gray-700/30 pt-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm">Estimated Time</span>
                      <span className="text-green-400 text-sm font-medium">~2 minutes</span>
                    </div>
                  </div>
                </div>

                {/* Swap Button */}
                <Button className="w-full bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 text-lg py-6">
                  <Zap className="h-5 w-5 mr-2" />
                  Swap {fromToken} for {toToken}
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Swap Features */}
            <Card className="bg-black/5 border-gray-800/10">
              <CardHeader>
                <CardTitle className="text-white">Why Choose Our Swap?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {swapFeatures.map((feature, index) => (
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

            {/* Market Stats */}
            <Card className="bg-black/5 border-gray-800/10">
              <CardHeader>
                <CardTitle className="text-white">Market Statistics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">24h Volume</span>
                  <span className="text-white font-bold">$45.2M</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Total Swaps</span>
                  <span className="text-white font-bold">1,234,567</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Supported Tokens</span>
                  <span className="text-white font-bold">150+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Average Fee</span>
                  <span className="text-green-400 font-bold">0.1%</span>
                </div>
              </CardContent>
            </Card>

            {/* Recent Swaps */}
            <Card className="bg-black/5 border-gray-800/10">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-white">Recent Swaps</CardTitle>
                  <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-0">
                    <History className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                {recentSwaps.map((swap, index) => (
                  <div key={index} className="bg-gray-900/30 rounded-lg p-3">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-white text-sm font-medium">
                          {swap.from} → {swap.to}
                        </span>
                        <Badge className="bg-gray-800/20 text-gray-400 text-xs">{swap.status}</Badge>
                      </div>
                      <span className="text-gray-400 text-xs">{swap.time}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-gray-400">
                        {swap.fromAmount} {swap.from} → {swap.toAmount} {swap.to}
                      </span>
                      <span className="text-gray-400">Fee: {swap.fee}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
