"use client";
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BarChart3,
  DollarSign,
  Target,
  Zap,
  ArrowUpRight,
  ArrowDownRight,
  TrendingUp,
  TrendingDown,
  Play,
  Pause,
  Shield,
  Clock,
  Users,
  Globe,
  Smartphone,
  Lock,
  AlertTriangle,
  Info,
  TrendingUpIcon,
  Calculator,
  Eye,
  Award,
  Star,
  Headphones,
  GraduationCap,
} from "lucide-react";

// Type definitions
interface PriceData {
  price: number;
  change: number;
}

interface CandleData {
  timestamp: number;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  isGreen: boolean;
}

type PricesType = {
  [key: string]: PriceData;
};

export default function TradingPage() {
  const [selectedPair, setSelectedPair] = useState("BTC/USDT");
  const [orderType, setOrderType] = useState("market");
  const [orderSide, setOrderSide] = useState("buy");
  const [orderAmount, setOrderAmount] = useState("");
  const [orderPrice, setOrderPrice] = useState("");
  const [leverage, setLeverage] = useState("1");
  const [isLive, setIsLive] = useState(true);
  const [chartData, setChartData] = useState<CandleData[]>([]);

  // Real-time price simulation
  const [prices, setPrices] = useState<PricesType>({
    "BTC/USDT": { price: 107234.56, change: 2.34 },
    "ETH/USDT": { price: 2441.51, change: -0.87 },
    "BNB/USDT": { price: 656.78, change: 1.23 },
    "XRP/USDT": { price: 2.17, change: -0.45 },
    "ADA/USDT": { price: 0.89, change: 3.21 },
    "SOL/USDT": { price: 234.67, change: 5.67 },
  });

  // Generate realistic candlestick data
  const generateChartData = (): CandleData[] => {
    const data: CandleData[] = [];
    let basePrice = 106000;
    const now = Date.now();
    for (let i = 0; i < 50; i++) {
      const timestamp = now - (50 - i) * 60000; // 1 minute intervals
      const open = basePrice + (Math.random() - 0.5) * 500;
      const volatility = 200 + Math.random() * 300;
      const close = open + (Math.random() - 0.5) * volatility;
      const high = Math.max(open, close) + Math.random() * 200;
      const low = Math.min(open, close) - Math.random() * 200;
      const volume = 50 + Math.random() * 200;

      data.push({
        timestamp,
        open,
        high,
        low,
        close,
        volume,
        isGreen: close >= open,
      });

      basePrice = close;
    }
    return data;
  };

  // Initialize chart data
  useEffect(() => {
    setChartData(generateChartData());
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isLive) {
        setPrices((prev) => {
          const newPrices = { ...prev };
          Object.keys(newPrices).forEach((pair) => {
            const change = (Math.random() - 0.5) * 2;
            newPrices[pair].price += change;
            newPrices[pair].change = change;
          });
          return newPrices;
        });

        // Update chart data
        setChartData((prevData) => {
          const newData = [...prevData];
          if (newData.length > 0) {
            const lastCandle = newData[newData.length - 1];
            const newPrice = lastCandle.close + (Math.random() - 0.5) * 200;
            // Update last candle
            newData[newData.length - 1] = {
              ...lastCandle,
              close: newPrice,
              high: Math.max(lastCandle.high, newPrice),
              low: Math.min(lastCandle.low, newPrice),
              isGreen: newPrice >= lastCandle.open,
            };
          }
          return newData;
        });
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [isLive]);

  const tradingPairs = Object.entries(prices).map(([pair, data]) => ({
    symbol: pair,
    price: data.price.toFixed(2),
    change: data.change.toFixed(2),
    volume: `${(Math.random() * 100 + 50).toFixed(1)}M`,
  }));

  const orderBook = {
    bids: [
      { price: "107,230.45", amount: "0.5432", total: "58,234.56" },
      { price: "107,225.12", amount: "1.2345", total: "132,456.78" },
      { price: "107,220.89", amount: "0.8765", total: "94,123.45" },
      { price: "107,215.67", amount: "2.1098", total: "226,234.56" },
      { price: "107,210.34", amount: "0.6789", total: "72,789.12" },
    ],
    asks: [
      { price: "107,240.78", amount: "0.4321", total: "46,345.67" },
      { price: "107,245.23", amount: "1.5678", total: "168,123.45" },
      { price: "107,250.56", amount: "0.9876", total: "105,987.65" },
      { price: "107,255.89", amount: "1.8765", total: "201,234.56" },
      { price: "107,260.12", amount: "0.7654", total: "82,123.45" },
    ],
  };

  const recentTrades = [
    { price: "107,234.56", amount: "0.1234", time: "14:32:45", side: "buy" },
    { price: "107,230.12", amount: "0.5678", time: "14:32:44", side: "sell" },
    { price: "107,235.89", amount: "0.2345", time: "14:32:43", side: "buy" },
    { price: "107,228.67", amount: "0.8901", time: "14:32:42", side: "sell" },
    { price: "107,240.23", amount: "0.3456", time: "14:32:41", side: "buy" },
  ];

  const openOrders = [
    {
      pair: "BTC/USDT",
      side: "Buy",
      type: "Limit",
      amount: "0.5 BTC",
      price: "$106,500.00",
      filled: "0%",
      status: "Open",
    },
    {
      pair: "ETH/USDT",
      side: "Sell",
      type: "Stop",
      amount: "2.5 ETH",
      price: "$2,400.00",
      filled: "0%",
      status: "Open",
    },
    {
      pair: "BNB/USDT",
      side: "Buy",
      type: "Market",
      amount: "10 BNB",
      price: "Market",
      filled: "100%",
      status: "Filled",
    },
  ];

  const tradingHistory = [
    {
      pair: "BTC/USDT",
      side: "Buy",
      amount: "0.25 BTC",
      price: "$106,234.56",
      total: "$26,558.64",
      time: "2 hours ago",
      pnl: "+$234.56",
    },
    {
      pair: "ETH/USDT",
      side: "Sell",
      amount: "1.5 ETH",
      price: "$2,456.78",
      total: "$3,685.17",
      time: "4 hours ago",
      pnl: "+$123.45",
    },
    {
      pair: "XRP/USDT",
      side: "Buy",
      amount: "1000 XRP",
      price: "$2.15",
      total: "$2,150.00",
      time: "1 day ago",
      pnl: "+$20.00",
    },
  ];

  const tradingFeatures = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Lightning Fast Execution",
      description:
        "Sub-millisecond order execution with institutional-grade infrastructure",
      color: "text-yellow-400",
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Advanced Charting",
      description:
        "Professional TradingView integration with 100+ technical indicators",
      color: "text-blue-400",
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Risk Management",
      description: "Advanced stop-loss, take-profit, and position sizing tools",
      color: "text-green-400",
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Low Fees",
      description:
        "Competitive trading fees starting from 0.1% with volume discounts",
      color: "text-purple-400",
    },
  ];

  const serviceFeatures = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Bank-Grade Security",
      description:
        "Multi-layer security with cold storage, 2FA, and insurance coverage up to $100M",
      stats: "99.9% Uptime",
      color: "text-green-400",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "24/7 Global Trading",
      description:
        "Trade cryptocurrencies around the clock with global market access",
      stats: "150+ Trading Pairs",
      color: "text-blue-400",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Expert Support",
      description:
        "Dedicated account managers and 24/7 multilingual customer support",
      stats: "5M+ Active Users",
      color: "text-purple-400",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Global Liquidity",
      description:
        "Access to deep liquidity pools and institutional-grade order matching",
      stats: "$50B+ Daily Volume",
      color: "text-orange-400",
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile Trading",
      description:
        "Full-featured mobile apps for iOS and Android with push notifications",
      stats: "4.8★ App Rating",
      color: "text-cyan-400",
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: "Regulatory Compliance",
      description:
        "Fully licensed and regulated in multiple jurisdictions worldwide",
      stats: "SOC 2 Certified",
      color: "text-red-400",
    },
  ];

  const tradingTips = [
    {
      icon: <Target className="h-5 w-5" />,
      title: "Risk Management",
      description:
        "Never risk more than 2-3% of your portfolio on a single trade",
      color: "text-red-400",
    },
    {
      icon: <TrendingUpIcon className="h-5 w-5" />,
      title: "Follow the Trend",
      description: "The trend is your friend - trade with market momentum",
      color: "text-green-400",
    },
    {
      icon: <Calculator className="h-5 w-5" />,
      title: "Position Sizing",
      description: "Calculate your position size before entering any trade",
      color: "text-blue-400",
    },
    {
      icon: <Eye className="h-5 w-5" />,
      title: "Market Analysis",
      description:
        "Combine technical and fundamental analysis for better decisions",
      color: "text-purple-400",
    },
  ];

  const platformBenefits = [
    {
      icon: <Award className="h-6 w-6" />,
      title: "Industry Leading",
      description: "Trusted by over 5 million traders worldwide",
      color: "text-yellow-400",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Secure Trading",
      description: "Bank-grade security with insurance protection",
      color: "text-green-400",
    },
    {
      icon: <Headphones className="h-6 w-6" />,
      title: "24/7 Support",
      description: "Expert support team available around the clock",
      color: "text-blue-400",
    },
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Learn & Earn",
      description: "Free educational resources and trading courses",
      color: "text-purple-400",
    },
  ];

  // Helper function to safely get price data
  const getCurrentPrice = (pair: string) => {
    return prices[pair] || { price: 0, change: 0 };
  };

  return (
    <div className="py-8 px-4 bg-black">
      <div className="container mx-auto max-w-7xl">
        {/* Enhanced Demo Notice Banner with CTA */}
        <div className="mb-8 bg-gradient-to-r from-orange-500/20 via-red-500/20 to-purple-500/20 border border-orange-500/30 rounded-xl p-6 backdrop-blur-sm relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-purple-500/5 animate-pulse"></div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-400/10 to-transparent rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-400/10 to-transparent rounded-full blur-xl"></div>

          <div className="relative z-10">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center shadow-lg">
                    <AlertTriangle className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-orange-400 font-bold text-xl mb-2 flex items-center gap-2">
                    Demo Trading Platform
                    <Badge className="bg-orange-500/20 text-orange-300 text-xs px-2 py-1">
                      SIMULATION
                    </Badge>
                  </h3>
                  <p className="text-orange-200 text-sm leading-relaxed mb-3">
                    This is a demonstration interface for educational purposes
                    only. All prices, trades, and account balances are
                    simulated. No real money or cryptocurrencies are involved in
                    this demo.
                  </p>
                  <div className="flex items-center space-x-2 text-xs text-orange-300">
                    <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                    <span>
                      Live market simulation • Real-time price feeds •
                      Professional trading tools
                    </span>
                  </div>
                </div>
              </div>
              {/* Attractive CTA Button */}
              <div className="flex-shrink-0">
                <div className="text-center">
                  <p className="text-white text-sm font-medium mb-3">
                    Ready for real trading?
                  </p>
                  <Button
                    className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0 relative overflow-hidden group"
                    onClick={() =>
                      window.open(
                        "https://example-trading-platform.com",
                        "_blank"
                      )
                    }
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative flex items-center space-x-2">
                      <Zap className="h-5 w-5" />
                      <span>Try Real Platform</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
          <div>
            <Badge className="mb-4 bg-gray-800/30 text-gray-200 border-gray-600/30">
              Professional Trading
            </Badge>
            <h1 className="text-4xl font-bold text-white mb-2">
              Advanced Trading Interface
            </h1>
            <p className="text-gray-300 text-lg">
              Trade spot, futures, and CFDs with up to 50x leverage on 150+
              cryptocurrency pairs
            </p>
          </div>
          <div className="flex items-center space-x-4 mt-4 lg:mt-0">
            <Select value={selectedPair} onValueChange={setSelectedPair}>
              <SelectTrigger className="w-40 bg-gray-900/80 border-gray-600/30 text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-gray-900 border-gray-600">
                {tradingPairs.map((pair) => (
                  <SelectItem
                    key={pair.symbol}
                    value={pair.symbol}
                    className="text-white hover:bg-gray-800"
                  >
                    {pair.symbol}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Service Overview Section */}
        <Card className="mb-8 bg-black border-gray-700/30 backdrop-blur-sm">
          <CardHeader className="text-center pb-6">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Info className="h-6 w-6 text-blue-400" />
              <CardTitle className="text-white text-2xl">
                What We Offer
              </CardTitle>
            </div>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Experience the future of cryptocurrency trading with our
              institutional-grade platform. Built for both beginners and
              professional traders, we provide the tools, security, and
              liquidity you need to succeed.
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gray-800/30 rounded-xl p-6 border border-gray-600/20 hover:border-gray-500/40 transition-all duration-300 hover:bg-gray-800/50"
                >
                  <div className="flex items-start space-x-4">
                    <div
                      className={`p-3 rounded-lg bg-gray-700/50 ${feature.color}`}
                    >
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-bold text-lg mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                        {feature.description}
                      </p>
                      <div
                        className={`inline-flex items-center px-3 py-1 rounded-full bg-gray-700/50 ${feature.color} text-sm font-medium`}
                      >
                        {feature.stats}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Key Benefits */}
            <div className="mt-8 pt-8 border-t border-gray-700/30">
              <h3 className="text-white text-xl font-bold mb-6 text-center">
                Why Choose Our Platform?
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">
                    0.1%
                  </div>
                  <div className="text-gray-300 text-sm">
                    Starting Trading Fees
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">
                    50x
                  </div>
                  <div className="text-gray-300 text-sm">Maximum Leverage</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">
                    150+
                  </div>
                  <div className="text-gray-300 text-sm">Trading Pairs</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">
                    24/7
                  </div>
                  <div className="text-gray-300 text-sm">Customer Support</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Price Ticker */}
        <Card className="mb-8 bg-gray-900/50 border-gray-700/30 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-2xl font-bold text-white">
                  {selectedPair}
                </h2>
                <div className="flex items-center space-x-4">
                  <span className="text-3xl font-bold text-white">
                    ${getCurrentPrice(selectedPair).price.toFixed(2)}
                  </span>
                  <div
                    className={`flex items-center space-x-1 ${
                      getCurrentPrice(selectedPair).change >= 0
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    {getCurrentPrice(selectedPair).change >= 0 ? (
                      <ArrowUpRight className="h-5 w-5" />
                    ) : (
                      <ArrowDownRight className="h-5 w-5" />
                    )}
                    <span className="font-bold">
                      {getCurrentPrice(selectedPair).change >= 0 ? "+" : ""}
                      {getCurrentPrice(selectedPair).change.toFixed(2)}%
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-gray-400 text-sm">24h Volume</div>
                <div className="text-white font-bold text-lg">$1.2B</div>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div>
                <div className="text-gray-400">24h High</div>
                <div className="text-white font-medium">$108,456.78</div>
              </div>
              <div>
                <div className="text-gray-400">24h Low</div>
                <div className="text-white font-medium">$105,123.45</div>
              </div>
              <div>
                <div className="text-gray-400">24h Change</div>
                <div className="text-green-400 font-medium">+2.34%</div>
              </div>
              <div>
                <div className="text-gray-400">Market Cap</div>
                <div className="text-white font-medium">$2.1T</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Trading Interface */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="spot" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3 bg-gray-900/50 border-gray-700/30">
                <TabsTrigger
                  value="spot"
                  className="text-gray-300 data-[state=active]:bg-gray-800/80 data-[state=active]:text-white"
                >
                  Spot Trading
                </TabsTrigger>
                <TabsTrigger
                  value="futures"
                  className="text-gray-300 data-[state=active]:bg-gray-800/80 data-[state=active]:text-white"
                >
                  Futures
                </TabsTrigger>
                <TabsTrigger
                  value="options"
                  className="text-gray-300 data-[state=active]:bg-gray-800/80 data-[state=active]:text-white"
                >
                  Options
                </TabsTrigger>
              </TabsList>

              {/* Enhanced Professional Chart */}
              <Card className="bg-gray-900/50 border-gray-700/30 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-white text-lg">
                      Advanced Chart - {selectedPair}
                    </CardTitle>
                    <div className="flex items-center space-x-4">
                      <Button
                        onClick={() => setIsLive(!isLive)}
                        size="sm"
                        className={`${
                          isLive
                            ? "bg-green-600 hover:bg-green-700"
                            : "bg-red-600 hover:bg-red-700"
                        }`}
                      >
                        {isLive ? (
                          <Pause className="h-4 w-4 mr-2" />
                        ) : (
                          <Play className="h-4 w-4 mr-2" />
                        )}
                        {isLive ? "Live" : "Paused"}
                      </Button>
                      <div
                        className={`flex items-center space-x-1 text-sm ${
                          getCurrentPrice(selectedPair).change >= 0
                            ? "text-green-400"
                            : "text-red-400"
                        }`}
                      >
                        {getCurrentPrice(selectedPair).change >= 0 ? (
                          <TrendingUp className="h-4 w-4" />
                        ) : (
                          <TrendingDown className="h-4 w-4" />
                        )}
                        <span>
                          {getCurrentPrice(selectedPair).change >= 0 ? "+" : ""}
                          {getCurrentPrice(selectedPair).change.toFixed(2)}%
                        </span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  {/* Chart Controls */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1">
                      {["1m", "5m", "15m", "1h", "4h", "1d"].map(
                        (timeframe, i) => (
                          <Button
                            key={timeframe}
                            size="sm"
                            variant={i === 2 ? "default" : "outline"}
                            className={`text-xs h-6 px-2 ${
                              i === 2
                                ? "bg-blue-600 text-white hover:bg-blue-700"
                                : "border-gray-600/30 text-gray-300 bg-transparent hover:bg-gray-800/50"
                            }`}
                          >
                            {timeframe}
                          </Button>
                        )
                      )}
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-gray-600/30 text-gray-300 bg-transparent hover:bg-gray-800/50"
                      >
                        Indicators
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-gray-600/30 text-gray-300 bg-transparent hover:bg-gray-800/50"
                      >
                        Drawing Tools
                      </Button>
                    </div>
                  </div>

                  <div className="h-96 bg-gradient-to-b from-gray-900/80 to-black/90 rounded-lg relative overflow-hidden border border-gray-700/30">
                    {/* Chart Grid */}
                    <div className="absolute inset-0 pointer-events-none">
                      {/* Horizontal grid lines */}
                      {Array.from({ length: 8 }, (_, i) => (
                        <div
                          key={`h-${i}`}
                          className="absolute w-full border-t border-gray-700/20"
                          style={{ top: `${(i * 100) / 7}%` }}
                        />
                      ))}
                      {/* Vertical grid lines */}
                      {Array.from({ length: 10 }, (_, i) => (
                        <div
                          key={`v-${i}`}
                          className="absolute h-full border-l border-gray-700/20"
                          style={{ left: `${(i * 100) / 9}%` }}
                        />
                      ))}
                    </div>

                    {/* Professional Candlestick Chart */}
                    <div className="absolute inset-4 flex items-end justify-between">
                      {chartData.map((candle, i) => {
                        const maxPrice = Math.max(
                          ...chartData.map((c) => c.high)
                        );
                        const minPrice = Math.min(
                          ...chartData.map((c) => c.low)
                        );
                        const priceRange = maxPrice - minPrice;
                        const wickHeight =
                          ((candle.high - candle.low) / priceRange) * 320;
                        const bodyHeight =
                          Math.abs((candle.close - candle.open) / priceRange) *
                          320;
                        const wickBottom =
                          ((candle.low - minPrice) / priceRange) * 320;
                        const bodyBottom =
                          ((Math.min(candle.open, candle.close) - minPrice) /
                            priceRange) *
                          320;

                        return (
                          <div
                            key={i}
                            className="flex flex-col items-center relative group w-[1.8%]"
                          >
                            {/* Wick */}
                            <div
                              className="w-0.5 bg-gray-400/80 absolute transition-all duration-200 group-hover:bg-white"
                              style={{
                                height: `${wickHeight}px`,
                                bottom: `${wickBottom}px`,
                              }}
                            />
                            {/* Candlestick Body */}
                            <div
                              className={`w-2 absolute transition-all duration-200 group-hover:scale-110 ${
                                candle.isGreen
                                  ? "bg-gradient-to-t from-green-500 to-green-400 shadow-lg shadow-green-500/30"
                                  : "bg-gradient-to-t from-red-500 to-red-400 shadow-lg shadow-red-500/30"
                              }`}
                              style={{
                                height: `${Math.max(bodyHeight, 2)}px`,
                                bottom: `${bodyBottom}px`,
                              }}
                            />
                            {/* Volume Bar */}
                            <div
                              className={`w-1 absolute bottom-0 opacity-60 ${
                                candle.isGreen
                                  ? "bg-green-400/40"
                                  : "bg-red-400/40"
                              }`}
                              style={{
                                height: `${(candle.volume / 250) * 40}px`,
                              }}
                            />
                          </div>
                        );
                      })}
                    </div>

                    {/* Price Scale */}
                    <div className="absolute right-1 top-8 bottom-12 flex flex-col justify-between text-xs text-gray-400 pointer-events-none">
                      {Array.from({ length: 8 }, (_, i) => {
                        const maxPrice = Math.max(
                          ...chartData.map((c) => c.high)
                        );
                        const minPrice = Math.min(
                          ...chartData.map((c) => c.low)
                        );
                        const price =
                          maxPrice - ((maxPrice - minPrice) * i) / 7;
                        return (
                          <div
                            key={i}
                            className="bg-gray-900/90 px-1 py-0.5 rounded text-xs font-mono border border-gray-700/30"
                          >
                            {price.toFixed(0)}
                          </div>
                        );
                      })}
                    </div>

                    {/* Time Scale */}
                    <div className="absolute bottom-1 left-4 right-16 flex justify-between text-xs text-gray-400 pointer-events-none">
                      {Array.from({ length: 6 }, (_, i) => {
                        const time = new Date(
                          Date.now() - (5 - i) * 10 * 60000
                        );
                        return (
                          <div
                            key={i}
                            className="bg-gray-900/90 px-1 py-0.5 rounded text-xs font-mono border border-gray-700/30"
                          >
                            {time.getHours().toString().padStart(2, "0")}:
                            {time.getMinutes().toString().padStart(2, "0")}
                          </div>
                        );
                      })}
                    </div>

                    {/* Chart Info Overlay */}
                    <div className="absolute top-2 left-2 bg-gray-900/90 backdrop-blur-sm rounded-lg p-3 border border-gray-700/30 pointer-events-none">
                      <div className="text-white text-xs space-y-1 font-mono">
                        <div className="flex items-center space-x-2">
                          <span className="text-gray-400">O:</span>
                          <span className="text-white">
                            {chartData[chartData.length - 1]?.open?.toFixed(
                              2
                            ) || "0.00"}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-gray-400">H:</span>
                          <span className="text-green-400">
                            {chartData[chartData.length - 1]?.high?.toFixed(
                              2
                            ) || "0.00"}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-gray-400">L:</span>
                          <span className="text-red-400">
                            {chartData[chartData.length - 1]?.low?.toFixed(2) ||
                              "0.00"}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-gray-400">C:</span>
                          <span
                            className={
                              chartData[chartData.length - 1]?.isGreen
                                ? "text-green-400"
                                : "text-red-400"
                            }
                          >
                            {chartData[chartData.length - 1]?.close?.toFixed(
                              2
                            ) || "0.00"}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Moving Average Lines */}
                    <svg
                      className="absolute inset-0 w-full h-full pointer-events-none"
                      style={{ zIndex: 1 }}
                    >
                      <defs>
                        <linearGradient
                          id="ma20"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="0%"
                        >
                          <stop
                            offset="0%"
                            stopColor="#3b82f6"
                            stopOpacity="0.8"
                          />
                          <stop
                            offset="100%"
                            stopColor="#06b6d4"
                            stopOpacity="0.8"
                          />
                        </linearGradient>
                        <linearGradient
                          id="ma50"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="0%"
                        >
                          <stop
                            offset="0%"
                            stopColor="#f59e0b"
                            stopOpacity="0.8"
                          />
                          <stop
                            offset="100%"
                            stopColor="#ef4444"
                            stopOpacity="0.8"
                          />
                        </linearGradient>
                      </defs>
                      {/* MA20 Line */}
                      <path
                        d={`M 20,${
                          200 + Math.sin(Date.now() / 10000) * 20
                        } ${Array.from(
                          { length: 15 },
                          (_, i) =>
                            `L ${20 + (i + 1) * 20},${
                              200 +
                              Math.sin((Date.now() + i * 1000) / 10000) * 20
                            }`
                        ).join(" ")}`}
                        stroke="url(#ma20)"
                        strokeWidth="2"
                        fill="none"
                        className="drop-shadow-sm"
                      />
                      {/* MA50 Line */}
                      <path
                        d={`M 20,${
                          220 + Math.cos(Date.now() / 15000) * 15
                        } ${Array.from(
                          { length: 15 },
                          (_, i) =>
                            `L ${20 + (i + 1) * 20},${
                              220 +
                              Math.cos((Date.now() + i * 1500) / 15000) * 15
                            }`
                        ).join(" ")}`}
                        stroke="url(#ma50)"
                        strokeWidth="2"
                        fill="none"
                        className="drop-shadow-sm"
                      />
                    </svg>

                    {/* Crosshair */}
                    <div className="absolute inset-0 pointer-events-none">
                      <div className="absolute w-full h-px bg-gray-500/50 top-1/2 transform -translate-y-1/2 opacity-0 hover:opacity-100 transition-opacity"></div>
                      <div className="absolute h-full w-px bg-gray-500/50 left-1/2 transform -translate-x-1/2 opacity-0 hover:opacity-100 transition-opacity"></div>
                    </div>
                  </div>

                  {/* Enhanced Technical Indicators */}
                  <div className="mt-4 grid grid-cols-2 lg:grid-cols-4 gap-3">
                    <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-lg p-3 border border-gray-600/30">
                      <div className="text-gray-400 text-xs mb-1">RSI (14)</div>
                      <div className="text-yellow-400 font-semibold text-sm">
                        67.8
                      </div>
                      <div className="text-gray-500 text-xs">Neutral</div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-lg p-3 border border-gray-600/30">
                      <div className="text-gray-400 text-xs mb-1">MACD</div>
                      <div className="text-green-400 font-semibold text-sm">
                        Bullish
                      </div>
                      <div className="text-green-300 text-xs">+1,234</div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-lg p-3 border border-gray-600/30">
                      <div className="text-gray-400 text-xs mb-1">MA(20)</div>
                      <div className="text-blue-400 font-semibold text-sm">
                        106,890
                      </div>
                      <div className="text-blue-300 text-xs">Above</div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-lg p-3 border border-gray-600/30">
                      <div className="text-gray-400 text-xs mb-1">Volume</div>
                      <div className="text-purple-400 font-semibold text-sm">
                        High
                      </div>
                      <div className="text-purple-300 text-xs">+15.2%</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Order Book & Recent Trades */}
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-gray-900/50 border-gray-700/30 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-white">Order Book</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="grid grid-cols-3 gap-4 text-xs text-gray-400 font-medium">
                        <div>Price (USDT)</div>
                        <div className="text-right">Amount (BTC)</div>
                        <div className="text-right">Total</div>
                      </div>
                      {/* Asks */}
                      {orderBook.asks.reverse().map((ask, index) => (
                        <div
                          key={index}
                          className="grid grid-cols-3 gap-4 text-xs text-red-400 hover:bg-red-500/10 p-1 rounded transition-colors"
                        >
                          <div>{ask.price}</div>
                          <div className="text-right">{ask.amount}</div>
                          <div className="text-right">{ask.total}</div>
                        </div>
                      ))}
                      {/* Spread */}
                      <div className="py-2 text-center bg-gray-800/50 rounded-lg border border-gray-600/30">
                        <span className="text-white font-bold text-lg">
                          ${getCurrentPrice(selectedPair).price.toFixed(2)}
                        </span>
                        <div className="text-gray-400 text-xs">
                          Spread: $5.33
                        </div>
                      </div>
                      {/* Bids */}
                      {orderBook.bids.map((bid, index) => (
                        <div
                          key={index}
                          className="grid grid-cols-3 gap-4 text-xs text-green-400 hover:bg-green-500/10 p-1 rounded transition-colors"
                        >
                          <div>{bid.price}</div>
                          <div className="text-right">{bid.amount}</div>
                          <div className="text-right">{bid.total}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900/50 border-gray-700/30 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-white">Recent Trades</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="grid grid-cols-3 gap-4 text-xs text-gray-400 font-medium">
                        <div>Price (USDT)</div>
                        <div className="text-right">Amount (BTC)</div>
                        <div className="text-right">Time</div>
                      </div>
                      {recentTrades.map((trade, index) => (
                        <div
                          key={index}
                          className={`grid grid-cols-3 gap-4 text-xs hover:bg-gray-800/30 p-1 rounded transition-colors ${
                            trade.side === "buy"
                              ? "text-green-400"
                              : "text-red-400"
                          }`}
                        >
                          <div>{trade.price}</div>
                          <div className="text-right">{trade.amount}</div>
                          <div className="text-right text-gray-400">
                            {trade.time}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </Tabs>
          </div>

          {/* Educational Content Sidebar */}
          <div className="space-y-6">
            {/* Platform Features Sidebar */}
            <div className="space-y-6">
              {/* Trading Tools */}
              <Card className="bg-gray-900/50 border-gray-700/30 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <BarChart3 className="h-5 w-5 text-blue-400" />
                    <CardTitle className="text-white">
                      Advanced Trading Tools
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="p-2 rounded-lg bg-blue-500/20">
                        <Target className="h-4 w-4 text-blue-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white font-semibold text-sm mb-1">
                          Professional Charts
                        </h3>
                        <p className="text-gray-300 text-xs">
                          TradingView integration with 100+ indicators
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="p-2 rounded-lg bg-green-500/20">
                        <Calculator className="h-4 w-4 text-green-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white font-semibold text-sm mb-1">
                          Order Types
                        </h3>
                        <p className="text-gray-300 text-xs">
                          Market, Limit, Stop, Stop-Limit orders
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="p-2 rounded-lg bg-purple-500/20">
                        <Zap className="h-4 w-4 text-purple-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white font-semibold text-sm mb-1">
                          Leverage Trading
                        </h3>
                        <p className="text-gray-300 text-xs">
                          Up to 50x leverage on major pairs
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="p-2 rounded-lg bg-orange-500/20">
                        <Eye className="h-4 w-4 text-orange-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white font-semibold text-sm mb-1">
                          Real-time Data
                        </h3>
                        <p className="text-gray-300 text-xs">
                          Live order book and trade history
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Trading Options */}
              <Card className="bg-gray-900/50 border-gray-700/30 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <DollarSign className="h-5 w-5 text-green-400" />
                    <CardTitle className="text-white">
                      Trading Options
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-lg p-4 border border-green-500/20">
                    <h3 className="text-white font-bold mb-2 flex items-center gap-2">
                      <Globe className="h-4 w-4 text-green-400" />
                      Spot Trading
                    </h3>
                    <p className="text-gray-300 text-sm mb-2">
                      Trade cryptocurrencies with immediate settlement
                    </p>
                    <div className="text-green-400 text-xs font-medium">
                      150+ Trading Pairs
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg p-4 border border-purple-500/20">
                    <h3 className="text-white font-bold mb-2 flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-purple-400" />
                      Futures Trading
                    </h3>
                    <p className="text-gray-300 text-sm mb-2">
                      Trade with leverage and advanced risk management
                    </p>
                    <div className="text-purple-400 text-xs font-medium">
                      Up to 50x Leverage
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-lg p-4 border border-orange-500/20">
                    <h3 className="text-white font-bold mb-2 flex items-center gap-2">
                      <Target className="h-4 w-4 text-orange-400" />
                      Options Trading
                    </h3>
                    <p className="text-gray-300 text-sm mb-2">
                      Advanced derivatives for sophisticated strategies
                    </p>
                    <div className="text-orange-400 text-xs font-medium">
                      Coming Soon
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Platform Security */}
              <Card className="bg-gray-900/50 border-gray-700/30 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Shield className="h-5 w-5 text-green-400" />
                    <CardTitle className="text-white">
                      Security & Reliability
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm">
                        Cold Storage
                      </span>
                      <Badge className="bg-green-500/20 text-green-400">
                        95%
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm">
                        Insurance Coverage
                      </span>
                      <span className="text-white font-semibold text-sm">
                        $100M
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm">Uptime</span>
                      <span className="text-green-400 font-semibold text-sm">
                        99.9%
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm">
                        2FA Security
                      </span>
                      <Badge className="bg-blue-500/20 text-blue-400">
                        Required
                      </Badge>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-gray-700/30">
                    <div className="flex items-center space-x-2 text-xs text-gray-400">
                      <Lock className="h-3 w-3" />
                      <span>SOC 2 Certified • Regulated Globally</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Trading Features */}
        <Card className="mt-8 bg-gray-900/50 border-gray-700/30 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white text-xl">
              Professional Trading Features
            </CardTitle>
            <p className="text-gray-300">Advanced tools for serious traders</p>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {tradingFeatures.map((feature, index) => (
                <div key={index} className="text-center">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gray-800/50 flex items-center justify-center mx-auto mb-4 border border-gray-600/30 ${feature.color}`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
