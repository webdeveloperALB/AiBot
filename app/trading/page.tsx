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
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
  AlertTriangle,
  Info,
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const tradingFeatures = [
    {
      icon: <Zap className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: "Lightning Fast",
      description: "Sub-millisecond execution",
      color: "text-yellow-400",
    },
    {
      icon: <BarChart3 className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: "Advanced Charts",
      description: "100+ indicators",
      color: "text-blue-400",
    },
    {
      icon: <Target className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: "Risk Management",
      description: "Advanced tools",
      color: "text-green-400",
    },
    {
      icon: <DollarSign className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: "Low Fees",
      description: "From 0.1%",
      color: "text-purple-400",
    },
  ];

  const serviceFeatures = [
    {
      icon: <Shield className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Bank-Grade Security",
      description: "Multi-layer security with cold storage and insurance",
      stats: "99.9% Uptime",
      color: "text-green-400",
    },
    {
      icon: <Clock className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "24/7 Trading",
      description: "Global market access around the clock",
      stats: "150+ Pairs",
      color: "text-blue-400",
    },
    {
      icon: <Users className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Expert Support",
      description: "24/7 multilingual customer support",
      stats: "5M+ Users",
      color: "text-purple-400",
    },
  ];

  // Helper function to safely get price data
  const getCurrentPrice = (pair: string) => {
    return prices[pair] || { price: 0, change: 0 };
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="px-3 sm:px-4 lg:px-6 py-4 sm:py-6 lg:py-8">
        <div className="container mx-auto max-w-7xl">
          {/* Mobile-Optimized Demo Notice Banner */}
          <div className="mb-4 sm:mb-6 lg:mb-8 bg-gradient-to-r from-orange-500/20 via-red-500/20 to-purple-500/20 border border-orange-500/30 rounded-lg sm:rounded-xl p-4 sm:p-6 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-purple-500/5 animate-pulse"></div>
            <div className="relative z-10">
              <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:items-center sm:justify-between sm:space-x-4">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg">
                      <AlertTriangle className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-orange-400 font-bold text-lg sm:text-xl mb-1 sm:mb-2 flex items-center gap-2">
                      Demo Platform
                      <Badge className="bg-orange-500/20 text-orange-300 text-xs px-2 py-1">
                        SIMULATION
                      </Badge>
                    </h3>
                    <p className="text-orange-200 text-sm leading-relaxed mb-2 sm:mb-3">
                      Educational demo with simulated trading. No real money
                      involved.
                    </p>
                    <div className="flex items-center space-x-2 text-xs text-orange-300">
                      <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                      <span className="truncate">
                        Live simulation • Real-time feeds
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex-shrink-0 w-full sm:w-auto">
                  <div className="text-center">
                    <p className="text-white text-sm font-medium mb-2 sm:mb-3">
                      Ready for real trading?
                    </p>
                    <Button
                      className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold px-6 sm:px-8 py-2 sm:py-3 rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0"
                      onClick={() =>
                        window.open(
                          "https://example-trading-platform.com",
                          "_blank"
                        )
                      }
                    >
                      <div className="flex items-center justify-center space-x-2">
                        <Zap className="h-4 w-4 sm:h-5 sm:w-5" />
                        <span>Try Real Platform</span>
                        <ArrowUpRight className="h-3 w-3 sm:h-4 sm:w-4" />
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile-Optimized Header */}
          <div className="flex flex-col space-y-4 sm:space-y-6 lg:flex-row lg:justify-between lg:items-start lg:space-y-0 mb-6 sm:mb-8">
            <div className="flex-1">
              <Badge className="mb-3 sm:mb-4 bg-gray-800/30 text-gray-200 border-gray-600/30 text-xs sm:text-sm">
                Professional Trading
              </Badge>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
                Advanced Trading
              </h1>
              <p className="text-gray-300 text-sm sm:text-base lg:text-lg">
                Trade with up to 50x leverage on 150+ pairs
              </p>
            </div>
            <div className="flex items-center space-x-3 sm:space-x-4">
              <Select value={selectedPair} onValueChange={setSelectedPair}>
                <SelectTrigger className="w-32 sm:w-40 bg-gray-900/80 border-gray-600/30 text-white text-sm">
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

          {/* Mobile-Optimized Service Overview */}
          <Card className="mb-6 sm:mb-8 bg-black border-gray-700/30 backdrop-blur-sm">
            <CardHeader className="text-center pb-4 sm:pb-6">
              <div className="flex items-center justify-center space-x-2 mb-3 sm:mb-4">
                <Info className="h-5 w-5 sm:h-6 sm:w-6 text-blue-400" />
                <CardTitle className="text-white text-lg sm:text-xl lg:text-2xl">
                  What We Offer
                </CardTitle>
              </div>
              <p className="text-gray-300 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto">
                Experience institutional-grade cryptocurrency trading
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {serviceFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-gray-800/30 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-gray-600/20 hover:border-gray-500/40 transition-all duration-300"
                  >
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div
                        className={`p-2 sm:p-3 rounded-lg bg-gray-700/50 ${feature.color}`}
                      >
                        {feature.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-white font-bold text-sm sm:text-base lg:text-lg mb-1 sm:mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-gray-300 text-xs sm:text-sm mb-2 sm:mb-3 leading-relaxed">
                          {feature.description}
                        </p>
                        <div
                          className={`inline-flex items-center px-2 sm:px-3 py-1 rounded-full bg-gray-700/50 ${feature.color} text-xs sm:text-sm font-medium`}
                        >
                          {feature.stats}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile-Optimized Key Stats */}
              <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-700/30">
                <h3 className="text-white text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-center">
                  Why Choose Us?
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-1 sm:mb-2">
                      0.1%
                    </div>
                    <div className="text-gray-300 text-xs sm:text-sm">
                      Trading Fees
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-1 sm:mb-2">
                      50x
                    </div>
                    <div className="text-gray-300 text-xs sm:text-sm">
                      Max Leverage
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-purple-400 mb-1 sm:mb-2">
                      150+
                    </div>
                    <div className="text-gray-300 text-xs sm:text-sm">
                      Trading Pairs
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-orange-400 mb-1 sm:mb-2">
                      24/7
                    </div>
                    <div className="text-gray-300 text-xs sm:text-sm">
                      Support
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Mobile-Optimized Price Ticker */}
          <Card className="mb-6 sm:mb-8 bg-gray-900/50 border-gray-700/30 backdrop-blur-sm">
            <CardContent className="p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 space-y-3 sm:space-y-0">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-1">
                    {selectedPair}
                  </h2>
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <span className="text-2xl sm:text-3xl font-bold text-white">
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
                        <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5" />
                      ) : (
                        <ArrowDownRight className="h-4 w-4 sm:h-5 sm:w-5" />
                      )}
                      <span className="font-bold text-sm sm:text-base">
                        {getCurrentPrice(selectedPair).change >= 0 ? "+" : ""}
                        {getCurrentPrice(selectedPair).change.toFixed(2)}%
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-left sm:text-right">
                  <div className="text-gray-400 text-sm">24h Volume</div>
                  <div className="text-white font-bold text-base sm:text-lg">
                    $1.2B
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-sm">
                <div>
                  <div className="text-gray-400 text-xs sm:text-sm">
                    24h High
                  </div>
                  <div className="text-white font-medium text-sm">$108,456</div>
                </div>
                <div>
                  <div className="text-gray-400 text-xs sm:text-sm">
                    24h Low
                  </div>
                  <div className="text-white font-medium text-sm">$105,123</div>
                </div>
                <div>
                  <div className="text-gray-400 text-xs sm:text-sm">
                    24h Change
                  </div>
                  <div className="text-green-400 font-medium text-sm">
                    +2.34%
                  </div>
                </div>
                <div>
                  <div className="text-gray-400 text-xs sm:text-sm">
                    Market Cap
                  </div>
                  <div className="text-white font-medium text-sm">$2.1T</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Mobile-Optimized Main Trading Interface */}
          <div className="space-y-6 sm:space-y-8">
            <Tabs defaultValue="spot" className="space-y-4 sm:space-y-6">
              <TabsList className="grid w-full grid-cols-3 bg-gray-900/50 border-gray-700/30 h-10 sm:h-12">
                <TabsTrigger
                  value="spot"
                  className="text-gray-300 data-[state=active]:bg-gray-800/80 data-[state=active]:text-white text-xs sm:text-sm"
                >
                  Spot
                </TabsTrigger>
                <TabsTrigger
                  value="futures"
                  className="text-gray-300 data-[state=active]:bg-gray-800/80 data-[state=active]:text-white text-xs sm:text-sm"
                >
                  Futures
                </TabsTrigger>
                <TabsTrigger
                  value="options"
                  className="text-gray-300 data-[state=active]:bg-gray-800/80 data-[state=active]:text-white text-xs sm:text-sm"
                >
                  Options
                </TabsTrigger>
              </TabsList>

              {/* Mobile-Optimized Chart */}
              <Card className="bg-gray-900/50 border-gray-700/30 backdrop-blur-sm">
                <CardHeader className="pb-3 sm:pb-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
                    <CardTitle className="text-white text-base sm:text-lg">
                      Chart - {selectedPair}
                    </CardTitle>
                    <div className="flex items-center justify-between sm:justify-end space-x-3 sm:space-x-4">
                      <Button
                        onClick={() => setIsLive(!isLive)}
                        size="sm"
                        className={`text-xs sm:text-sm h-8 sm:h-9 px-3 sm:px-4 ${
                          isLive
                            ? "bg-green-600 hover:bg-green-700"
                            : "bg-red-600 hover:bg-red-700"
                        }`}
                      >
                        {isLive ? (
                          <Pause className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                        ) : (
                          <Play className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                        )}
                        {isLive ? "Live" : "Paused"}
                      </Button>
                      <div
                        className={`flex items-center space-x-1 text-xs sm:text-sm ${
                          getCurrentPrice(selectedPair).change >= 0
                            ? "text-green-400"
                            : "text-red-400"
                        }`}
                      >
                        {getCurrentPrice(selectedPair).change >= 0 ? (
                          <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4" />
                        ) : (
                          <TrendingDown className="h-3 w-3 sm:h-4 sm:w-4" />
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
                  {/* Mobile-Optimized Chart Controls */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 sm:mb-4 space-y-3 sm:space-y-0">
                    <div className="flex items-center space-x-1 overflow-x-auto pb-2 sm:pb-0">
                      {["1m", "5m", "15m", "1h", "4h", "1d"].map(
                        (timeframe, i) => (
                          <Button
                            key={timeframe}
                            size="sm"
                            variant={i === 2 ? "default" : "outline"}
                            className={`text-xs h-7 sm:h-8 px-2 sm:px-3 flex-shrink-0 ${
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
                        className="border-gray-600/30 text-gray-300 bg-transparent hover:bg-gray-800/50 text-xs h-7 sm:h-8 px-2 sm:px-3"
                      >
                        Tools
                      </Button>
                    </div>
                  </div>

                  {/* Mobile-Optimized Chart Container */}
                  <div className="h-64 sm:h-80 lg:h-96 bg-gradient-to-b from-gray-900/80 to-black/90 rounded-lg relative overflow-hidden border border-gray-700/30">
                    {/* Chart Grid */}
                    <div className="absolute inset-0 pointer-events-none">
                      {/* Horizontal grid lines */}
                      {Array.from({ length: 6 }, (_, i) => (
                        <div
                          key={`h-${i}`}
                          className="absolute w-full border-t border-gray-700/20"
                          style={{ top: `${(i * 100) / 5}%` }}
                        />
                      ))}
                      {/* Vertical grid lines */}
                      {Array.from({ length: 8 }, (_, i) => (
                        <div
                          key={`v-${i}`}
                          className="absolute h-full border-l border-gray-700/20"
                          style={{ left: `${(i * 100) / 7}%` }}
                        />
                      ))}
                    </div>

                    {/* Mobile-Optimized Candlestick Chart */}
                    <div className="absolute inset-2 sm:inset-4 flex items-end justify-between">
                      {chartData.slice(-30).map((candle, i) => {
                        const maxPrice = Math.max(
                          ...chartData.slice(-30).map((c) => c.high)
                        );
                        const minPrice = Math.min(
                          ...chartData.slice(-30).map((c) => c.low)
                        );
                        const priceRange = maxPrice - minPrice;
                        const chartHeight = window.innerWidth < 640 ? 220 : 280;
                        const wickHeight =
                          ((candle.high - candle.low) / priceRange) *
                          chartHeight;
                        const bodyHeight =
                          Math.abs((candle.close - candle.open) / priceRange) *
                          chartHeight;
                        const wickBottom =
                          ((candle.low - minPrice) / priceRange) * chartHeight;
                        const bodyBottom =
                          ((Math.min(candle.open, candle.close) - minPrice) /
                            priceRange) *
                          chartHeight;

                        return (
                          <div
                            key={i}
                            className="flex flex-col items-center relative group"
                            style={{ width: `${100 / 30}%` }}
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
                              className={`w-1 sm:w-2 absolute transition-all duration-200 group-hover:scale-110 ${
                                candle.isGreen
                                  ? "bg-gradient-to-t from-green-500 to-green-400 shadow-lg shadow-green-500/30"
                                  : "bg-gradient-to-t from-red-500 to-red-400 shadow-lg shadow-red-500/30"
                              }`}
                              style={{
                                height: `${Math.max(bodyHeight, 2)}px`,
                                bottom: `${bodyBottom}px`,
                              }}
                            />
                          </div>
                        );
                      })}
                    </div>

                    {/* Mobile-Optimized Price Scale */}
                    <div className="absolute right-1 top-4 bottom-8 flex flex-col justify-between text-xs text-gray-400 pointer-events-none">
                      {Array.from({ length: 6 }, (_, i) => {
                        const maxPrice = Math.max(
                          ...chartData.slice(-30).map((c) => c.high)
                        );
                        const minPrice = Math.min(
                          ...chartData.slice(-30).map((c) => c.low)
                        );
                        const price =
                          maxPrice - ((maxPrice - minPrice) * i) / 5;
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

                    {/* Mobile-Optimized Chart Info */}
                    <div className="absolute top-2 left-2 bg-gray-900/90 backdrop-blur-sm rounded-lg p-2 sm:p-3 border border-gray-700/30 pointer-events-none">
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
                  </div>

                  {/* Mobile-Optimized Technical Indicators */}
                  <div className="mt-3 sm:mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
                    <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-lg p-2 sm:p-3 border border-gray-600/30">
                      <div className="text-gray-400 text-xs mb-1">RSI</div>
                      <div className="text-yellow-400 font-semibold text-sm">
                        67.8
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-lg p-2 sm:p-3 border border-gray-600/30">
                      <div className="text-gray-400 text-xs mb-1">MACD</div>
                      <div className="text-green-400 font-semibold text-sm">
                        Bull
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-lg p-2 sm:p-3 border border-gray-600/30">
                      <div className="text-gray-400 text-xs mb-1">MA(20)</div>
                      <div className="text-blue-400 font-semibold text-sm">
                        106K
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-lg p-2 sm:p-3 border border-gray-600/30">
                      <div className="text-gray-400 text-xs mb-1">Vol</div>
                      <div className="text-purple-400 font-semibold text-sm">
                        High
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Mobile-Optimized Order Book & Trades */}
              <div className="space-y-4 sm:space-y-6 lg:grid lg:grid-cols-2 lg:gap-6 lg:space-y-0">
                <Card className="bg-gray-900/50 border-gray-700/30 backdrop-blur-sm">
                  <CardHeader className="pb-3 sm:pb-4">
                    <CardTitle className="text-white text-base sm:text-lg">
                      Order Book
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-1 sm:space-y-2">
                      <div className="grid grid-cols-3 gap-2 sm:gap-4 text-xs text-gray-400 font-medium pb-2">
                        <div>Price</div>
                        <div className="text-right">Amount</div>
                        <div className="text-right">Total</div>
                      </div>
                      {/* Asks - Mobile optimized */}
                      {orderBook.asks
                        .reverse()
                        .slice(0, 3)
                        .map((ask, index) => (
                          <div
                            key={index}
                            className="grid grid-cols-3 gap-2 sm:gap-4 text-xs text-red-400 hover:bg-red-500/10 p-1 rounded transition-colors"
                          >
                            <div className="truncate">{ask.price}</div>
                            <div className="text-right truncate">
                              {ask.amount}
                            </div>
                            <div className="text-right truncate">
                              {ask.total}
                            </div>
                          </div>
                        ))}
                      {/* Spread */}
                      <div className="py-2 sm:py-3 text-center bg-gray-800/50 rounded-lg border border-gray-600/30 my-2">
                        <span className="text-white font-bold text-base sm:text-lg">
                          ${getCurrentPrice(selectedPair).price.toFixed(2)}
                        </span>
                        <div className="text-gray-400 text-xs">
                          Spread: $5.33
                        </div>
                      </div>
                      {/* Bids - Mobile optimized */}
                      {orderBook.bids.slice(0, 3).map((bid, index) => (
                        <div
                          key={index}
                          className="grid grid-cols-3 gap-2 sm:gap-4 text-xs text-green-400 hover:bg-green-500/10 p-1 rounded transition-colors"
                        >
                          <div className="truncate">{bid.price}</div>
                          <div className="text-right truncate">
                            {bid.amount}
                          </div>
                          <div className="text-right truncate">{bid.total}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900/50 border-gray-700/30 backdrop-blur-sm">
                  <CardHeader className="pb-3 sm:pb-4">
                    <CardTitle className="text-white text-base sm:text-lg">
                      Recent Trades
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-1 sm:space-y-2">
                      <div className="grid grid-cols-3 gap-2 sm:gap-4 text-xs text-gray-400 font-medium pb-2">
                        <div>Price</div>
                        <div className="text-right">Amount</div>
                        <div className="text-right">Time</div>
                      </div>
                      {recentTrades.slice(0, 6).map((trade, index) => (
                        <div
                          key={index}
                          className={`grid grid-cols-3 gap-2 sm:gap-4 text-xs hover:bg-gray-800/30 p-1 rounded transition-colors ${
                            trade.side === "buy"
                              ? "text-green-400"
                              : "text-red-400"
                          }`}
                        >
                          <div className="truncate">{trade.price}</div>
                          <div className="text-right truncate">
                            {trade.amount}
                          </div>
                          <div className="text-right text-gray-400 truncate">
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

          {/* Mobile-Optimized Trading Features */}
          <Card className="mt-6 sm:mt-8 bg-gray-900/50 border-gray-700/30 backdrop-blur-sm">
            <CardHeader className="text-center pb-4 sm:pb-6">
              <CardTitle className="text-white text-lg sm:text-xl">
                Professional Features
              </CardTitle>
              <p className="text-gray-300 text-sm">
                Advanced tools for traders
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                {tradingFeatures.map((feature, index) => (
                  <div key={index} className="text-center">
                    <div
                      className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gray-800/50 flex items-center justify-center mx-auto mb-3 sm:mb-4 border border-gray-600/30 ${feature.color}`}
                    >
                      {feature.icon}
                    </div>
                    <h3 className="text-white font-bold text-sm sm:text-base lg:text-lg mb-1 sm:mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 text-xs sm:text-sm">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
