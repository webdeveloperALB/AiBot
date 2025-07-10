"use client";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ArrowUpDown,
  Zap,
  Shield,
  Clock,
  TrendingUp,
  RefreshCw,
  Settings,
  History,
  ArrowRight,
  CheckCircle,
  Users,
  Globe,
  Lock,
  Gauge,
  DollarSign,
  BarChart3,
} from "lucide-react";

export default function SwapPage() {
  const [fromAmount, setFromAmount] = useState("1.0");
  const [toAmount, setToAmount] = useState("107,234.56");
  const [fromToken, setFromToken] = useState("BTC");
  const [toToken, setToToken] = useState("USDT");
  const [slippage, setSlippage] = useState("0.5");

  const tokens = [
    {
      symbol: "BTC",
      name: "Bitcoin",
      price: "$107,234.56",
      icon: "https://img.icons8.com/fluency/48/bitcoin.png",
      balance: "4.18064",
    },
    {
      symbol: "ETH",
      name: "Ethereum",
      price: "$2,441.51",
      icon: "https://img.icons8.com/fluency/48/ethereum.png",
      balance: "15.67",
    },
    {
      symbol: "USDT",
      name: "Tether",
      price: "$1.00",
      icon: "https://img.icons8.com/color/48/tether--v1.png",
      balance: "25,847.23",
    },
    {
      symbol: "XRP",
      name: "Ripple",
      price: "$2.17",
      icon: "https://img.icons8.com/color/48/xrp.png",
      balance: "5,000.00",
    },
    {
      symbol: "ADA",
      name: "Cardano",
      price: "$0.89",
      icon: "https://img.icons8.com/ios/50/cardano.png",
      balance: "8,900.45",
    },
    {
      symbol: "SOL",
      name: "Solana",
      price: "$234.67",
      icon: "https://img.icons8.com/nolan/64/solana.png",
      balance: "125.34",
    },
  ];

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
  ];

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
  ];

  const handleSwapTokens = () => {
    const tempToken = fromToken;
    const tempAmount = fromAmount;
    setFromToken(toToken);
    setToToken(tempToken);
    setFromAmount(toAmount);
    setToAmount(tempAmount);
  };

  const getTokenBySymbol = (symbol: string) => {
    return tokens.find((token) => token.symbol === symbol) || tokens[0];
  };

  return (
    <div className="py-8 px-4 bg-black">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-gray-800/20 text-gray-300 border-gray-700/30">
            Instant Crypto Swap
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Exchange Crypto
            <span className="bg-gradient-to-r from-gray-400 to-gray-300 bg-clip-text text-transparent">
              {" "}
              Instantly
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Swap between 150+ cryptocurrencies with 0.1% fees, instant
            execution, and the best rates across multiple exchanges. No order
            books, no waiting.
          </p>
        </div>

        {/* What is Crypto Swapping - Explanation Section */}
        <div className="mb-16">
          <Card className="bg-black border-gray-700/20 backdrop-blur-sm">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-3xl font-bold text-white mb-4">
                What is Crypto Swapping?
              </CardTitle>
              <p className="text-gray-300 text-lg max-w-4xl mx-auto">
                Cryptocurrency swapping is the process of directly exchanging
                one digital asset for another without the need for traditional
                order books or centralized exchanges. Our platform acts as a
                bridge between different blockchain networks, enabling seamless
                token exchanges.
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="bg-blue-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <ArrowRight className="h-8 w-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Direct Exchange
                  </h3>
                  <p className="text-gray-400">
                    Trade directly between cryptocurrencies without converting
                    to fiat currency first
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-green-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Gauge className="h-8 w-8 text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Real-Time Rates
                  </h3>
                  <p className="text-gray-400">
                    Get the best exchange rates by aggregating liquidity from
                    multiple decentralized exchanges
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Lock className="h-8 w-8 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Non-Custodial
                  </h3>
                  <p className="text-gray-400">
                    Maintain full control of your assets throughout the entire
                    swap process
                  </p>
                </div>
              </div>
              {/* How It Works Process */}
              <div className="bg-gray-900/40 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white text-center mb-8">
                  How Our Swap Service Works
                </h3>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                      1
                    </div>
                    <h4 className="text-white font-semibold mb-2">
                      Select Tokens
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Choose the cryptocurrency you want to swap from and to
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                      2
                    </div>
                    <h4 className="text-white font-semibold mb-2">Get Quote</h4>
                    <p className="text-gray-400 text-sm">
                      Our system finds the best rate across multiple DEXs
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                      3
                    </div>
                    <h4 className="text-white font-semibold mb-2">
                      Execute Swap
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Confirm the transaction and execute the swap instantly
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                      4
                    </div>
                    <h4 className="text-white font-semibold mb-2">
                      Receive Tokens
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Get your new tokens in your wallet within 2 minutes
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Service Benefits */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Why Choose Our Swap Service?
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Experience the future of cryptocurrency trading with our advanced
              swap technology that prioritizes speed, security, and user
              experience.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card className="bg-black border-gray-700/30">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-yellow-500/20 rounded-lg p-3 mr-4">
                    <Zap className="h-6 w-6 text-yellow-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    Lightning Fast
                  </h3>
                </div>
                <p className="text-gray-400 mb-4">
                  Execute swaps in under 2 minutes with our optimized routing
                  algorithms and direct blockchain integration.
                </p>
                <div className="flex items-center text-yellow-400 text-sm">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Average execution: 90 seconds
                </div>
              </CardContent>
            </Card>
            <Card className="bg-black to-gray-800/40 border-gray-700/30">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-green-500/20 rounded-lg p-3 mr-4">
                    <DollarSign className="h-6 w-6 text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    Lowest Fees
                  </h3>
                </div>
                <p className="text-gray-400 mb-4">
                  Pay only 0.1% platform fee - significantly lower than
                  traditional exchanges and competitors.
                </p>
                <div className="flex items-center text-green-400 text-sm">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Save up to 80% on fees
                </div>
              </CardContent>
            </Card>
            <Card className="bg-black border-gray-700/30">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-500/20 rounded-lg p-3 mr-4">
                    <BarChart3 className="h-6 w-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    Best Rates
                  </h3>
                </div>
                <p className="text-gray-400 mb-4">
                  Access aggregated liquidity from 15+ DEXs to ensure you always
                  get the most competitive rates.
                </p>
                <div className="flex items-center text-blue-400 text-sm">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Rate optimization guaranteed
                </div>
              </CardContent>
            </Card>
            <Card className="bg-black border-gray-700/30">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-500/20 rounded-lg p-3 mr-4">
                    <Shield className="h-6 w-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    Bank-Level Security
                  </h3>
                </div>
                <p className="text-gray-400 mb-4">
                  Multi-signature wallets, smart contract audits, and real-time
                  monitoring protect your assets.
                </p>
                <div className="flex items-center text-purple-400 text-sm">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  $0 lost in 3+ years
                </div>
              </CardContent>
            </Card>
            <Card className="bg-black border-gray-700/30">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-red-500/20 rounded-lg p-3 mr-4">
                    <Globe className="h-6 w-6 text-red-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    Global Access
                  </h3>
                </div>
                <p className="text-gray-400 mb-4">
                  Available 24/7 worldwide with support for 150+
                  cryptocurrencies across multiple blockchains.
                </p>
                <div className="flex items-center text-red-400 text-sm">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  No geographic restrictions
                </div>
              </CardContent>
            </Card>
            <Card className="bg-black border-gray-700/30">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-cyan-500/20 rounded-lg p-3 mr-4">
                    <Users className="h-6 w-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    Trusted by Millions
                  </h3>
                </div>
                <p className="text-gray-400 mb-4">
                  Over 2 million users trust our platform with $45M+ in daily
                  trading volume.
                </p>
                <div className="flex items-center text-cyan-400 text-sm">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  99.9% uptime guarantee
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Swap Interface */}
          <div className="lg:col-span-2">
            <Card className="bg-black/5 border-gray-800/10 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-white text-2xl">
                    Swap Tokens
                  </CardTitle>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-gray-700/20 text-white bg-transparent"
                    >
                      <Settings className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-gray-700/20 text-white bg-transparent"
                    >
                      <RefreshCw className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* From Token */}
                <div className="bg-gray-900/30 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <label className="text-gray-400 text-sm font-medium">
                      From
                    </label>
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
                          Number.parseFloat(
                            getTokenBySymbol(fromToken).price.replace(
                              /[$,]/g,
                              ""
                            )
                          )
                        ).toLocaleString()}
                      </div>
                    </div>
                    <Select value={fromToken} onValueChange={setFromToken}>
                      <SelectTrigger className="w-32 bg-gray-800/50 border-gray-700/30 text-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-900 border-gray-700">
                        {tokens.map((token) => (
                          <SelectItem
                            key={token.symbol}
                            value={token.symbol}
                            className="text-white"
                          >
                            <div className="flex items-center space-x-2">
                              <img
                                src={token.icon || "/placeholder.svg"}
                                alt={token.name}
                                className="w-5 h-5 rounded-full"
                                crossOrigin="anonymous"
                              />
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
                      onClick={() =>
                        setFromAmount(getTokenBySymbol(fromToken).balance)
                      }
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
                    <label className="text-gray-400 text-sm font-medium">
                      To
                    </label>
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
                          Number.parseFloat(
                            getTokenBySymbol(toToken).price.replace(/[$,]/g, "")
                          )
                        ).toLocaleString()}
                      </div>
                    </div>
                    <Select value={toToken} onValueChange={setToToken}>
                      <SelectTrigger className="w-32 bg-gray-800/50 border-gray-700/30 text-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-900 border-gray-700">
                        {tokens.map((token) => (
                          <SelectItem
                            key={token.symbol}
                            value={token.symbol}
                            className="text-white"
                          >
                            <div className="flex items-center space-x-2">
                              <img
                                src={token.icon || "/placeholder.svg"}
                                alt={token.name}
                                className="w-5 h-5 rounded-full"
                                crossOrigin="anonymous"
                              />
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
                      {(
                        Number.parseFloat(toAmount.replace(/,/g, "")) /
                        Number.parseFloat(fromAmount)
                      ).toLocaleString()}{" "}
                      {toToken}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">Network Fee</span>
                    <span className="text-white text-sm">$2.50</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">
                      Platform Fee (0.1%)
                    </span>
                    <span className="text-white text-sm">$1.07</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">
                      Slippage Tolerance
                    </span>
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
                      <span className="text-gray-400 text-sm">
                        Estimated Time
                      </span>
                      <span className="text-green-400 text-sm font-medium">
                        ~2 minutes
                      </span>
                    </div>
                  </div>
                </div>

                {/* Swap Button */}
                <Button className="w-full bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 text-lg py-6">
                  <Zap className="h-5 w-5 mr-2" />
                  Swap {fromToken} for {toToken}
                </Button>

                {/* Demo Notice */}
                <div className="bg-gradient-to-r from-amber-900/20 to-orange-900/20 border border-amber-500/30 rounded-xl p-6 text-center">
                  <div className="flex items-center justify-center mb-3">
                    <div className="bg-amber-500/20 rounded-full p-2 mr-3">
                      <Zap className="h-5 w-5 text-amber-400" />
                    </div>
                    <Badge className="bg-amber-500/20 text-amber-300 border-amber-500/30">
                      Simple Demo
                    </Badge>
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">
                    This is Just a Simple Demo
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 max-w-md mx-auto">
                    What you see here is just a basic demonstration. Our real
                    platform offers advanced trading tools, institutional-grade
                    security, and professional features that serious traders
                    demand.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white border-0">
                      <ArrowRight className="h-4 w-4 mr-2" />
                      See Real Platform
                    </Button>
                    <Button
                      variant="outline"
                      className="border-gray-600 text-gray-300 hover:text-white hover:bg-gray-800/50 bg-transparent"
                    >
                      Get Professional Access
                    </Button>
                  </div>
                  <div className="flex items-center justify-center mt-4 text-xs text-gray-400">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    Professional traders choose our advanced platform
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Swap Features */}
            <Card className="bg-black/5 border-gray-800/10">
              <CardHeader>
                <CardTitle className="text-white">
                  Why Choose Our Swap?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {swapFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className={`${feature.color} mt-1`}>
                      {feature.icon}
                    </div>
                    <div>
                      <div className="text-white font-medium text-sm">
                        {feature.title}
                      </div>
                      <div className="text-gray-400 text-xs">
                        {feature.description}
                      </div>
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
                  <span className="text-gray-400 text-sm">
                    Supported Tokens
                  </span>
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
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-400 hover:text-white p-0"
                  >
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
                        <Badge className="bg-gray-800/20 text-gray-400 text-xs">
                          {swap.status}
                        </Badge>
                      </div>
                      <span className="text-gray-400 text-xs">{swap.time}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-gray-400">
                        {swap.fromAmount} {swap.from} → {swap.toAmount}{" "}
                        {swap.to}
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
  );
}
