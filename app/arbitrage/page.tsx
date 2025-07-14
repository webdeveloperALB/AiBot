"use client";
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import {
  Bot,
  TrendingUp,
  DollarSign,
  Zap,
  Target,
  Play,
  Pause,
  Activity,
  Clock,
  Shield,
  Award,
  Users,
  Star,
  CheckCircle,
  Globe,
} from "lucide-react";

export default function ArbitragePage() {
  const [isActive, setIsActive] = useState(false);
  const [selectedStrategy, setSelectedStrategy] = useState("triangular");
  const [riskLevel, setRiskLevel] = useState("medium");
  const [maxInvestment, setMaxInvestment] = useState("10000");
  const [minProfit, setMinProfit] = useState("0.5");

  const [realTimeData, setRealTimeData] = useState({
    totalProfit: 12847.56,
    todayProfit: 234.78,
    successRate: 87.3,
    activeTrades: 12,
  });

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setRealTimeData((prev) => ({
        totalProfit: prev.totalProfit + (Math.random() - 0.5) * 50,
        todayProfit: prev.todayProfit + (Math.random() - 0.5) * 10,
        successRate: Math.max(
          80,
          Math.min(95, prev.successRate + (Math.random() - 0.5) * 2)
        ),
        activeTrades: Math.max(
          0,
          prev.activeTrades + Math.floor((Math.random() - 0.5) * 3)
        ),
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const arbitrageOpportunities = [
    {
      pair: "BTC/USDT",
      exchange1: "Binance",
      price1: "107,234.56",
      exchange2: "Coinbase",
      price2: "107,456.78",
      profit: "0.21%",
      amount: "$5,000",
      status: "Active",
    },
    {
      pair: "ETH/USDT",
      exchange1: "Kraken",
      price1: "2,441.23",
      exchange2: "Bitfinex",
      price2: "2,453.67",
      profit: "0.51%",
      amount: "$3,200",
      status: "Pending",
    },
    {
      pair: "BNB/USDT",
      exchange1: "Binance",
      price1: "656.78",
      exchange2: "KuCoin",
      price2: "659.12",
      profit: "0.36%",
      amount: "$2,800",
      status: "Completed",
    },
  ];

  const tradingHistory = [
    {
      pair: "BTC/USDT",
      profit: "+$234.56",
      percentage: "+0.47%",
      time: "2 min ago",
      exchanges: "Binance → Coinbase",
    },
    {
      pair: "ETH/USDT",
      profit: "+$123.45",
      percentage: "+0.31%",
      time: "5 min ago",
      exchanges: "Kraken → Bitfinex",
    },
    {
      pair: "ADA/USDT",
      profit: "+$67.89",
      percentage: "+0.28%",
      time: "8 min ago",
      exchanges: "Binance → KuCoin",
    },
  ];

  const strategies = [
    {
      id: "triangular",
      name: "Triangular Arbitrage",
      description: "Exploit price differences across three currencies",
      risk: "Low",
      avgReturn: "0.3-0.8%",
    },
    {
      id: "spatial",
      name: "Spatial Arbitrage",
      description: "Trade between different exchanges",
      risk: "Medium",
      avgReturn: "0.5-1.2%",
    },
    {
      id: "statistical",
      name: "Statistical Arbitrage",
      description: "Use statistical models to identify opportunities",
      risk: "High",
      avgReturn: "1.0-2.5%",
    },
  ];

  return (
    <div className="py-8 px-4 bg-black">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
          <div>
            <Badge className="mb-4 bg-gray-800/30 text-gray-200 border-gray-600/30">
              AI-Powered Trading
            </Badge>
            <h1 className="text-4xl font-bold text-white mb-2">
              Arbitrage Robot
            </h1>
            <p className="text-gray-300 text-lg">
              Automated arbitrage trading with advanced AI algorithms for
              maximum profit extraction
            </p>
          </div>
          <div className="flex items-center space-x-4 mt-4 lg:mt-0">
            <Button
              onClick={() => setIsActive(!isActive)}
              className={`${
                isActive
                  ? "bg-red-600 hover:bg-red-700"
                  : "bg-green-600 hover:bg-green-700"
              }`}
            >
              {isActive ? (
                <Pause className="h-4 w-4 mr-2" />
              ) : (
                <Play className="h-4 w-4 mr-2" />
              )}
              {isActive ? "Stop Robot" : "Start Robot"}
            </Button>
          </div>
        </div>

        {/* AI Robot Animation */}
        <Card className="mb-8 bg-gray-900/50 border-gray-700/30 backdrop-blur-sm">
          <CardContent className="p-8">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className="lg:w-1/2 mb-6 lg:mb-0">
                <h2 className="text-2xl font-bold text-white mb-4">
                  AI Trading Robot Status
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Robot Status</span>
                    <Badge
                      className={`${
                        isActive
                          ? "bg-green-500/20 text-green-400"
                          : "bg-red-500/20 text-red-400"
                      }`}
                    >
                      {isActive ? "Active" : "Inactive"}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Strategy</span>
                    <span className="text-white font-medium">
                      {strategies.find((s) => s.id === selectedStrategy)?.name}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Risk Level</span>
                    <Badge className="bg-gray-700/50 text-gray-300 capitalize">
                      {riskLevel}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Success Rate</span>
                    <span className="text-green-400 font-bold">
                      {realTimeData.successRate.toFixed(1)}%
                    </span>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 flex justify-center">
                {/* Lottie Animation Container */}
                <div className="w-80 h-80 bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-2xl border border-gray-600/30 flex items-center justify-center relative overflow-hidden">
                  <iframe
                    src="https://lottie.host/embed/d09367e3-7501-4f63-8db8-1b47c25c847d/00Qq40vWPV.json"
                    className="w-full h-full border-0"
                    title="AI Robot Animation"
                  />
                  {/* Overlay for better integration */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Real-time Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gray-900/50 border-gray-700/30 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Total Profit</p>
                  <p className="text-2xl font-bold text-green-400">
                    ${realTimeData.totalProfit.toFixed(2)}
                  </p>
                </div>
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-green-400" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-gray-700/30 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Today's Profit</p>
                  <p className="text-2xl font-bold text-blue-400">
                    ${realTimeData.todayProfit.toFixed(2)}
                  </p>
                </div>
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-blue-400" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-gray-700/30 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Success Rate</p>
                  <p className="text-2xl font-bold text-purple-400">
                    {realTimeData.successRate.toFixed(1)}%
                  </p>
                </div>
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <Target className="h-6 w-6 text-purple-400" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-gray-700/30 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Active Trades</p>
                  <p className="text-2xl font-bold text-yellow-400">
                    {realTimeData.activeTrades}
                  </p>
                </div>
                <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                  <Activity className="h-6 w-6 text-yellow-400" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content - Takes up remaining space */}
          <div className="flex-1">
            <Tabs defaultValue="opportunities" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3 bg-gray-900/50 border-gray-700/30">
                <TabsTrigger
                  value="opportunities"
                  className="text-gray-300 data-[state=active]:bg-gray-800/80 data-[state=active]:text-white"
                >
                  Opportunities
                </TabsTrigger>
                <TabsTrigger
                  value="history"
                  className="text-gray-300 data-[state=active]:bg-gray-800/80 data-[state=active]:text-white"
                >
                  History
                </TabsTrigger>
                <TabsTrigger
                  value="analytics"
                  className="text-gray-300 data-[state=active]:bg-gray-800/80 data-[state=active]:text-white"
                >
                  Analytics
                </TabsTrigger>
              </TabsList>

              <TabsContent value="opportunities">
                <Card className="bg-gray-900/50 border-gray-700/30 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-white">
                      Live Arbitrage Opportunities
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {arbitrageOpportunities.map((opportunity, index) => (
                        <div
                          key={index}
                          className="bg-gray-800/50 rounded-lg p-4 border border-gray-600/30"
                        >
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center space-x-3">
                              <Badge className="bg-blue-500/20 text-blue-400">
                                {opportunity.pair}
                              </Badge>
                              <span className="text-white font-medium">
                                {opportunity.exchange1} →{" "}
                                {opportunity.exchange2}
                              </span>
                            </div>
                            <Badge
                              className={`${
                                opportunity.status === "Active"
                                  ? "bg-green-500/20 text-green-400"
                                  : opportunity.status === "Pending"
                                  ? "bg-yellow-500/20 text-yellow-400"
                                  : "bg-gray-500/20 text-gray-400"
                              }`}
                            >
                              {opportunity.status}
                            </Badge>
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                            <div>
                              <div className="text-gray-400">Buy Price</div>
                              <div className="text-white font-medium">
                                ${opportunity.price1}
                              </div>
                            </div>
                            <div>
                              <div className="text-gray-400">Sell Price</div>
                              <div className="text-white font-medium">
                                ${opportunity.price2}
                              </div>
                            </div>
                            <div>
                              <div className="text-gray-400">Profit</div>
                              <div className="text-green-400 font-bold">
                                {opportunity.profit}
                              </div>
                            </div>
                            <div>
                              <div className="text-gray-400">Amount</div>
                              <div className="text-white font-medium">
                                {opportunity.amount}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="history">
                <Card className="bg-gray-900/50 border-gray-700/30 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-white">
                      Trading History
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {tradingHistory.map((trade, index) => (
                        <div
                          key={index}
                          className="bg-gray-800/50 rounded-lg p-4 border border-gray-600/30"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center space-x-3">
                              <Badge className="bg-blue-500/20 text-blue-400">
                                {trade.pair}
                              </Badge>
                              <span className="text-gray-300 text-sm">
                                {trade.exchanges}
                              </span>
                            </div>
                            <div className="text-right">
                              <div className="text-green-400 font-bold">
                                {trade.profit}
                              </div>
                              <div className="text-gray-400 text-sm">
                                {trade.time}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-400 text-sm">
                              Profit Percentage
                            </span>
                            <span className="text-green-400 font-medium">
                              {trade.percentage}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="analytics">
                <Card className="bg-gray-900/50 border-gray-700/30 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-white">
                      Performance Analytics
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-600/30">
                          <h3 className="text-white font-medium mb-3">
                            Monthly Performance
                          </h3>
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span className="text-gray-400">January</span>
                              <span className="text-green-400">+$2,456</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-400">February</span>
                              <span className="text-green-400">+$3,123</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-400">March</span>
                              <span className="text-green-400">+$2,890</span>
                            </div>
                          </div>
                        </div>
                        <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-600/30">
                          <h3 className="text-white font-medium mb-3">
                            Strategy Performance
                          </h3>
                          <div className="space-y-3">
                            <div>
                              <div className="flex justify-between mb-1">
                                <span className="text-gray-400 text-sm">
                                  Triangular
                                </span>
                                <span className="text-white text-sm">85%</span>
                              </div>
                              <Progress value={85} className="h-2" />
                            </div>
                            <div>
                              <div className="flex justify-between mb-1">
                                <span className="text-gray-400 text-sm">
                                  Spatial
                                </span>
                                <span className="text-white text-sm">72%</span>
                              </div>
                              <Progress value={72} className="h-2" />
                            </div>
                            <div>
                              <div className="flex justify-between mb-1">
                                <span className="text-gray-400 text-sm">
                                  Statistical
                                </span>
                                <span className="text-white text-sm">91%</span>
                              </div>
                              <Progress value={91} className="h-2" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Professional Marketing Content - Fixed width sidebar */}
          <div className="lg:w-80 lg:flex-shrink-0 space-y-6">
            {/* Why Choose Us */}
            <Card className="bg-black border-blue-500/30 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-white flex items-center text-lg">
                  <Award className="h-5 w-5 mr-2 text-yellow-400" />
                  Industry Leader
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-400 mb-1">
                    #1
                  </div>
                  <p className="text-gray-300 text-sm">
                    Rated arbitrage platform
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-green-400">
                      500K+
                    </div>
                    <div className="text-gray-400 text-xs">Trades Executed</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-400">
                      $50M+
                    </div>
                    <div className="text-gray-400 text-xs">Volume Traded</div>
                  </div>
                </div>
                <Button
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  asChild
                >
                  <a href="https://dex.whiterock24.ai/sign-in">Start Trading Now</a>
                </Button>
              </CardContent>
            </Card>

            {/* Combined Advantages and Success */}
            <div className="grid grid-cols-1 gap-6">
              {/* Competitive Advantages */}
              <Card className="bg-gray-900/50 border-gray-700/30 backdrop-blur-sm">
                <CardHeader className="pb-3">
                  <CardTitle className="text-white flex items-center text-lg">
                    <Shield className="h-5 w-5 mr-2 text-green-400" />
                    Our Advantages
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                      <div>
                        <div className="text-white font-medium text-sm">
                          Military Security
                        </div>
                        <div className="text-gray-400 text-xs">
                          Bank-level encryption
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                      <div>
                        <div className="text-white font-medium text-sm">
                          Lightning Speed
                        </div>
                        <div className="text-gray-400 text-xs">
                          Sub-millisecond execution
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                      <div>
                        <div className="text-white font-medium text-sm">
                          AI Intelligence
                        </div>
                        <div className="text-gray-400 text-xs">
                          Advanced ML algorithms
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                      <div>
                        <div className="text-white font-medium text-sm">
                          24/7 Support
                        </div>
                        <div className="text-gray-400 text-xs">
                          Expert specialists
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <Card className="mt-8 bg-gray-900/50 border-gray-700/30 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white text-xl">
              AI Arbitrage Features
            </CardTitle>
            <p className="text-gray-300">
              Advanced artificial intelligence for maximum profit extraction
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center mx-auto mb-4 border border-blue-500/30">
                  <Bot className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">
                  AI-Powered Detection
                </h3>
                <p className="text-gray-300 text-sm">
                  Advanced machine learning algorithms detect profitable
                  opportunities in real-time
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-green-500/20 flex items-center justify-center mx-auto mb-4 border border-green-500/30">
                  <Zap className="h-6 w-6 text-green-400" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">
                  Lightning Execution
                </h3>
                <p className="text-gray-300 text-sm">
                  Execute trades in milliseconds across multiple exchanges
                  simultaneously
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-purple-500/20 flex items-center justify-center mx-auto mb-4 border border-purple-500/30">
                  <Target className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">
                  Risk Management
                </h3>
                <p className="text-gray-300 text-sm">
                  Sophisticated risk controls and position sizing for capital
                  protection
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-yellow-500/20 flex items-center justify-center mx-auto mb-4 border border-yellow-500/30">
                  <Clock className="h-6 w-6 text-yellow-400" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">
                  24/7 Operation
                </h3>
                <p className="text-gray-300 text-sm">
                  Continuous monitoring and trading across global markets around
                  the clock
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
