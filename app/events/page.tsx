"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Calendar,
  TrendingUp,
  Trophy,
  Globe,
  Zap,
  Target,
  Clock,
  Users,
  Shield,
  BarChart3,
  Info,
  LineChart,
  DollarSign,
  Activity,
  Briefcase,
  FileText,
  CheckCircle,
  ArrowUpRight,
  ArrowDownRight,
  Eye,
  Filter,
  Search,
  Star,
  Lightbulb,
} from "lucide-react";

export default function EventsPage() {
  const [betAmount, setBetAmount] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const platformStats = {
    totalVolume: "$47.2M",
    activeMarkets: 419,
    totalUsers: "156K+",
    avgAccuracy: "87.3%",
    dailyVolume: "$2.8M",
    marketCap: "$12.4M",
  };

  const marketCategories = [
    {
      id: "business",
      name: "Business & Finance",
      icon: <Globe className="h-5 w-5" />,
      count: 45,
      volume: "$12.3M",
      color: "text-blue-400",
      change: "+8.2%",
      description:
        "Corporate earnings, market indices, economic indicators, and business outcomes",
    },
    {
      id: "technology",
      name: "Technology & Innovation",
      icon: <Zap className="h-5 w-5" />,
      count: 128,
      volume: "$18.7M",
      color: "text-green-400",
      change: "+15.4%",
      description:
        "Product launches, tech adoption rates, startup valuations, and innovation milestones",
    },
    {
      id: "markets",
      name: "Financial Markets",
      icon: <TrendingUp className="h-5 w-5" />,
      count: 67,
      volume: "$8.1M",
      color: "text-yellow-400",
      change: "-3.1%",
      description:
        "Asset price movements, market volatility, trading volumes, and financial events",
    },
    {
      id: "research",
      name: "Research & Development",
      icon: <Target className="h-5 w-5" />,
      count: 34,
      volume: "$4.8M",
      color: "text-purple-400",
      change: "+2.7%",
      description:
        "Scientific breakthroughs, clinical trials, patent approvals, and research outcomes",
    },
    {
      id: "industry",
      name: "Industry Trends",
      icon: <Trophy className="h-5 w-5" />,
      count: 89,
      volume: "$2.9M",
      color: "text-pink-400",
      change: "+11.3%",
      description:
        "Market share changes, industry adoption, regulatory approvals, and sector performance",
    },
    {
      id: "global",
      name: "Global Events",
      icon: <Calendar className="h-5 w-5" />,
      count: 56,
      volume: "$6.2M",
      color: "text-cyan-400",
      change: "+5.8%",
      description:
        "International developments, policy changes, economic summits, and global initiatives",
    },
  ];

  const showcaseEvents = [
    {
      id: 1,
      title: "Major Tech Company Q4 Earnings Exceed Analyst Expectations",
      category: "Business & Finance",
      description:
        "Will the leading technology company's Q4 earnings per share exceed the current analyst consensus estimate?",
      endDate: "2024-02-15",
      totalVolume: "$4,234,567",
      participants: 28678,
      liquidity: "$892K",
      marketMaker: "Institutional",
      riskLevel: "Low",
      dataSource: "Financial Data Providers, SEC Filings",
      options: [
        {
          name: "Exceeds Expectations",
          odds: "1.85",
          probability: "54.1%",
          volume: "$2,290,866",
          change: "+2.3%",
          lastTrade: "1.83",
        },
        {
          name: "Meets or Below",
          odds: "2.10",
          probability: "47.6%",
          volume: "$1,943,701",
          change: "-1.8%",
          lastTrade: "2.14",
        },
      ],
      status: "active",
      featured: true,
      insights:
        "Strong institutional interest driven by recent product launches and market expansion strategies.",
      compliance:
        "Financial prediction market regulated under applicable securities guidelines",
    },
    {
      id: 2,
      title: "Renewable Energy Adoption Milestone Achievement",
      category: "Industry Trends",
      description:
        "Will renewable energy sources account for over 35% of global electricity generation by year-end?",
      endDate: "2024-12-31",
      totalVolume: "$2,892,345",
      participants: 18934,
      liquidity: "$456K",
      marketMaker: "Algorithmic",
      riskLevel: "Medium",
      dataSource: "International Energy Agency, Government Reports",
      options: [
        {
          name: "Yes - Above 35%",
          odds: "2.45",
          probability: "40.8%",
          volume: "$1,180,781",
          change: "+5.2%",
          lastTrade: "2.33",
        },
        {
          name: "No - Below 35%",
          odds: "1.65",
          probability: "60.6%",
          volume: "$1,711,564",
          change: "-2.1%",
          lastTrade: "1.68",
        },
      ],
      status: "active",
      featured: true,
      insights:
        "Market sentiment influenced by recent policy announcements and infrastructure investments.",
      compliance:
        "Environmental prediction market with verified data sources and transparent methodology",
    },
    {
      id: 3,
      title: "AI Technology Breakthrough in Healthcare Sector",
      category: "Technology & Innovation",
      description:
        "Will a major AI breakthrough in medical diagnosis be announced by leading research institutions?",
      endDate: "2024-06-30",
      totalVolume: "$6,156,789",
      participants: 43456,
      liquidity: "$1.2M",
      marketMaker: "Professional",
      riskLevel: "High",
      dataSource: "Medical Journals, Research Institutions, FDA Announcements",
      options: [
        {
          name: "Major Breakthrough",
          odds: "3.20",
          probability: "31.3%",
          volume: "$1,927,095",
          change: "+1.5%",
          lastTrade: "3.15",
        },
        {
          name: "Incremental Progress",
          odds: "2.10",
          probability: "47.6%",
          volume: "$2,926,791",
          change: "+3.2%",
          lastTrade: "2.06",
        },
        {
          name: "Limited Advancement",
          odds: "5.00",
          probability: "20.0%",
          volume: "$1,231,358",
          change: "-0.8%",
          lastTrade: "5.04",
        },
        {
          name: "No Significant News",
          odds: "8.50",
          probability: "11.8%",
          volume: "$1,071,545",
          change: "-2.1%",
          lastTrade: "8.67",
        },
      ],
      status: "active",
      featured: true,
      insights:
        "High interest from healthcare investors and research institutions tracking clinical trial outcomes.",
      compliance:
        "Research prediction market with peer-reviewed data sources and expert validation",
    },
  ];

  const liveMarkets = [
    {
      id: 4,
      title: "Central Bank Interest Rate Decision Impact",
      category: "Financial Markets",
      description:
        "How will the upcoming central bank decision affect market volatility in the following week?",
      endDate: "2024-02-07",
      totalVolume: "$1,456,789",
      participants: 8456,
      liquidity: "$234K",
      riskLevel: "Low",
      options: [
        {
          name: "High Volatility (+2%)",
          odds: "3.50",
          probability: "28.6%",
          change: "+0.5%",
        },
        {
          name: "Moderate Impact (±1%)",
          odds: "1.80",
          probability: "55.6%",
          change: "-0.2%",
        },
        {
          name: "Minimal Change (<0.5%)",
          odds: "6.00",
          probability: "16.7%",
          change: "+1.1%",
        },
      ],
      status: "live",
      timeLeft: "2 days 14 hours",
      urgency: "high",
    },
    {
      id: 5,
      title: "Emerging Market Technology Adoption Rate",
      category: "Global Events",
      description:
        "Will mobile payment adoption in emerging markets exceed 75% by the measurement date?",
      endDate: "2024-03-15",
      totalVolume: "$834,567",
      participants: 5876,
      liquidity: "$156K",
      riskLevel: "Medium",
      options: [
        {
          name: "Yes - Above 75%",
          odds: "2.20",
          probability: "45.5%",
          change: "+2.1%",
        },
        {
          name: "No - Below 75%",
          odds: "1.75",
          probability: "57.1%",
          change: "-1.3%",
        },
      ],
      status: "live",
      timeLeft: "18 hours",
      urgency: "critical",
    },
  ];

  const demoPortfolio = {
    totalValue: "$12,847.50",
    totalAllocated: "$8,850.00",
    unrealizedPnL: "+$3,997.50",
    realizedPnL: "+$1,180.00",
    successRate: "73.2%",
    avgHoldTime: "45 days",
    riskScore: "Moderate",
    activePositions: 8,
    completedTrades: 24,
  };

  const demoPositions = [
    {
      event: "Renewable Energy Adoption Milestone Achievement",
      position: "Yes - Above 35%",
      amount: "$2,500",
      odds: "2.45",
      currentOdds: "2.30",
      potentialReturn: "$6,125",
      unrealizedPnL: "+$163.04",
      status: "active",
      confidence: "High",
      entryDate: "2024-01-15",
      marketValue: "$2,663.04",
    },
    {
      event: "Major Tech Company Q4 Earnings Exceed Expectations",
      position: "Exceeds Expectations",
      amount: "$1,750",
      odds: "1.85",
      currentOdds: "1.90",
      potentialReturn: "$3,237.50",
      unrealizedPnL: "+$46.05",
      status: "active",
      confidence: "Medium",
      entryDate: "2024-01-10",
      marketValue: "$1,796.05",
    },
    {
      event: "Central Bank Interest Rate Decision Impact",
      position: "Moderate Impact",
      amount: "$1,200",
      odds: "1.80",
      potentialReturn: "$2,160",
      result: "correct",
      actualPayout: "$2,160",
      status: "settled",
      settledDate: "2024-01-20",
      profit: "+$960",
    },
  ];

  const marketInsights = [
    {
      title: "Technology Sector Momentum",
      description:
        "AI and renewable energy markets showing increased institutional participation",
      impact: "High",
      category: "Technology",
      timeframe: "Next 30 days",
    },
    {
      title: "Financial Market Volatility",
      description:
        "Central bank decisions creating opportunities in volatility prediction markets",
      impact: "Medium",
      category: "Finance",
      timeframe: "Next 14 days",
    },
    {
      title: "Global Adoption Trends",
      description:
        "Emerging market technology adoption exceeding analyst expectations",
      impact: "Medium",
      category: "Global",
      timeframe: "Next 60 days",
    },
  ];

  const platformFeatures = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Advanced Risk Management",
      description:
        "Sophisticated position limits and portfolio risk assessment tools",
      color: "text-green-400",
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Real-Time Market Data",
      description:
        "Live odds, volume tracking, and comprehensive market analytics",
      color: "text-blue-400",
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "AI-Powered Insights",
      description:
        "Machine learning algorithms providing market sentiment and trend analysis",
      color: "text-yellow-400",
    },
    {
      icon: <Activity className="h-6 w-6" />,
      title: "Professional Trading Tools",
      description:
        "Advanced order types, portfolio optimization, and performance analytics",
      color: "text-purple-400",
    },
  ];

  return (
    <div className="py-8 px-4 bg-black min-h-screen">
      <div className="container mx-auto max-w-7xl">
        {/* Professional Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
              <Star className="h-3 w-3 mr-1" />
              Platform Demo
            </Badge>
            <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
              <CheckCircle className="h-3 w-3 mr-1" />
              Enterprise Ready
            </Badge>
            <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30">
              <Shield className="h-3 w-3 mr-1" />
              Institutional Grade
            </Badge>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Next-Generation
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              {" "}
              Prediction Platform
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Showcase of advanced prediction market technology with
            institutional-grade infrastructure, real-time analytics, and
            professional trading tools. Experience the future of market
            intelligence.
          </p>

          {/* Platform Stats */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 max-w-4xl mx-auto">
            <div className="bg-gray-900/30 rounded-xl p-4 border border-gray-800/20">
              <div className="text-2xl font-bold text-white">
                {platformStats.totalVolume}
              </div>
              <div className="text-gray-400 text-sm">Demo Volume</div>
            </div>
            <div className="bg-gray-900/30 rounded-xl p-4 border border-gray-800/20">
              <div className="text-2xl font-bold text-white">
                {platformStats.activeMarkets}
              </div>
              <div className="text-gray-400 text-sm">Sample Markets</div>
            </div>
            <div className="bg-gray-900/30 rounded-xl p-4 border border-gray-800/20">
              <div className="text-2xl font-bold text-white">
                {platformStats.totalUsers}
              </div>
              <div className="text-gray-400 text-sm">Platform Users</div>
            </div>
            <div className="bg-gray-900/30 rounded-xl p-4 border border-gray-800/20">
              <div className="text-2xl font-bold text-green-400">
                {platformStats.avgAccuracy}
              </div>
              <div className="text-gray-400 text-sm">Prediction Accuracy</div>
            </div>
            <div className="bg-gray-900/30 rounded-xl p-4 border border-gray-800/20">
              <div className="text-2xl font-bold text-white">
                {platformStats.dailyVolume}
              </div>
              <div className="text-gray-400 text-sm">Daily Activity</div>
            </div>
            <div className="bg-gray-900/30 rounded-xl p-4 border border-gray-800/20">
              <div className="text-2xl font-bold text-white">
                {platformStats.marketCap}
              </div>
              <div className="text-gray-400 text-sm">Total Value</div>
            </div>
          </div>
        </div>

        {/* Enhanced Market Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {marketCategories.map((category) => (
            <Card
              key={category.id}
              className="bg-gray-900/20 border-gray-800/20 hover:bg-gray-800/30 transition-all cursor-pointer group"
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gray-800/50 flex items-center justify-center ${category.color} group-hover:scale-110 transition-transform`}
                  >
                    {category.icon}
                  </div>
                  <Badge
                    className={`${
                      category.change.startsWith("+")
                        ? "bg-green-500/20 text-green-400"
                        : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {category.change.startsWith("+") ? (
                      <ArrowUpRight className="h-3 w-3 mr-1" />
                    ) : (
                      <ArrowDownRight className="h-3 w-3 mr-1" />
                    )}
                    {category.change}
                  </Badge>
                </div>
                <h3 className="text-white font-bold text-lg mb-2">
                  {category.name}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {category.description}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <div>
                    <div className="text-white font-semibold">
                      {category.count} Markets
                    </div>
                    <div className="text-gray-400">
                      {category.volume} Volume
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-400 hover:text-white"
                  >
                    <Eye className="h-4 w-4 mr-1" />
                    Explore
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Market Insights */}
        <Card className="mb-8 bg-gray-900/20 border-gray-800/20">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <LineChart className="h-5 w-5 mr-2" />
              Market Intelligence & Trends
            </CardTitle>
            <p className="text-gray-400">
              AI-powered insights and market analysis
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              {marketInsights.map((insight, index) => (
                <div key={index} className="bg-gray-800/30 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge
                      className={`${
                        insight.impact === "High"
                          ? "bg-red-500/20 text-red-400"
                          : insight.impact === "Medium"
                          ? "bg-yellow-500/20 text-yellow-400"
                          : "bg-green-500/20 text-green-400"
                      }`}
                    >
                      {insight.impact} Impact
                    </Badge>
                    <span className="text-gray-400 text-xs">
                      {insight.timeframe}
                    </span>
                  </div>
                  <h4 className="text-white font-semibold mb-2">
                    {insight.title}
                  </h4>
                  <p className="text-gray-400 text-sm mb-2">
                    {insight.description}
                  </p>
                  <Badge
                    variant="outline"
                    className="text-gray-400 border-gray-700"
                  >
                    {insight.category}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="showcase" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 bg-gray-900/30 border-gray-800/20">
            <TabsTrigger
              value="showcase"
              className="text-white data-[state=active]:bg-gray-800/50 data-[state=active]:text-white"
            >
              <Star className="h-4 w-4 mr-2" />
              Showcase
            </TabsTrigger>
            <TabsTrigger
              value="live"
              className="text-white data-[state=active]:bg-gray-800/50 data-[state=active]:text-white"
            >
              <Activity className="h-4 w-4 mr-2" />
              Live Demo
            </TabsTrigger>
            <TabsTrigger
              value="portfolio"
              className="text-white data-[state=active]:bg-gray-800/50 data-[state=active]:text-white"
            >
              <Briefcase className="h-4 w-4 mr-2" />
              Portfolio Demo
            </TabsTrigger>
            <TabsTrigger
              value="features"
              className="text-white data-[state=active]:bg-gray-800/50 data-[state=active]:text-white"
            >
              <Lightbulb className="h-4 w-4 mr-2" />
              Features
            </TabsTrigger>
          </TabsList>

          {/* Showcase Events */}
          <TabsContent value="showcase">
            <div className="space-y-8">
              <div className="text-center mb-8">
                <Badge className="mb-4 bg-blue-500/20 text-blue-400 border-blue-500/30">
                  <Info className="h-3 w-3 mr-1" />
                  Demo Content - Showcasing Platform Capabilities
                </Badge>
                <p className="text-gray-400">
                  These are sample prediction markets demonstrating our
                  platform's advanced features and user interface.
                </p>
              </div>

              {showcaseEvents.map((event) => (
                <Card
                  key={event.id}
                  className="bg-gray-900/20 border-gray-800/20"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-3">
                          <Badge className="bg-blue-500/20 text-blue-400">
                            {event.category}
                          </Badge>
                          <Badge className="bg-yellow-500/20 text-yellow-400">
                            Featured Demo
                          </Badge>
                          <Badge
                            className={`${
                              event.riskLevel === "Low"
                                ? "bg-green-500/20 text-green-400"
                                : event.riskLevel === "Medium"
                                ? "bg-yellow-500/20 text-yellow-400"
                                : "bg-red-500/20 text-red-400"
                            }`}
                          >
                            {event.riskLevel} Risk
                          </Badge>
                        </div>
                        <CardTitle className="text-white text-2xl mb-3">
                          {event.title}
                        </CardTitle>
                        <p className="text-gray-300 mb-4">
                          {event.description}
                        </p>

                        {/* Enhanced Event Details */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                          <div className="bg-gray-800/30 rounded-lg p-3">
                            <div className="text-gray-400 text-xs mb-1">
                              Sample Volume
                            </div>
                            <div className="text-white font-bold">
                              {event.totalVolume}
                            </div>
                          </div>
                          <div className="bg-gray-800/30 rounded-lg p-3">
                            <div className="text-gray-400 text-xs mb-1">
                              Demo Participants
                            </div>
                            <div className="text-white font-bold">
                              {event.participants.toLocaleString()}
                            </div>
                          </div>
                          <div className="bg-gray-800/30 rounded-lg p-3">
                            <div className="text-gray-400 text-xs mb-1">
                              Liquidity Pool
                            </div>
                            <div className="text-white font-bold">
                              {event.liquidity}
                            </div>
                          </div>
                          <div className="bg-gray-800/30 rounded-lg p-3">
                            <div className="text-gray-400 text-xs mb-1">
                              Market Type
                            </div>
                            <div className="text-white font-bold">
                              {event.marketMaker}
                            </div>
                          </div>
                        </div>

                        {/* Market Insights */}
                        <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 mb-4">
                          <div className="flex items-start space-x-2">
                            <Info className="h-4 w-4 text-blue-400 mt-0.5" />
                            <div>
                              <div className="text-blue-400 font-semibold text-sm mb-1">
                                AI Market Analysis
                              </div>
                              <div className="text-gray-300 text-sm">
                                {event.insights}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      {event.options.map((option, index) => (
                        <Card
                          key={index}
                          className="bg-gray-800/30 border-gray-700/30 hover:bg-gray-700/30 transition-all cursor-pointer"
                        >
                          <CardContent className="p-6">
                            <div className="text-center mb-4">
                              <div className="text-white font-bold text-lg mb-2">
                                {option.name}
                              </div>
                              <div className="flex items-center justify-center space-x-4 mb-3">
                                <div className="text-3xl font-bold text-green-400">
                                  {option.odds}
                                </div>
                                <Badge
                                  className={`${
                                    option.change.startsWith("+")
                                      ? "bg-green-500/20 text-green-400"
                                      : "bg-red-500/20 text-red-400"
                                  }`}
                                >
                                  {option.change}
                                </Badge>
                              </div>
                              <div className="text-gray-400 text-sm mb-2">
                                {option.probability} probability
                              </div>
                              <Progress
                                value={Number.parseFloat(option.probability)}
                                className="mb-3"
                              />
                            </div>

                            <div className="space-y-2 text-xs text-gray-400 mb-4">
                              <div className="flex justify-between">
                                <span>Demo Volume:</span>
                                <span>{option.volume}</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Last Price:</span>
                                <span>{option.lastTrade}</span>
                              </div>
                            </div>

                            <Button
                              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                              onClick={() => setSelectedEvent(event)}
                            >
                              <Eye className="h-4 w-4 mr-2" />
                              View Details
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                    </div>

                    {/* Platform Information */}
                    <div className="mt-6 p-4 bg-gray-800/20 rounded-lg border border-gray-700/30">
                      <div className="flex items-start space-x-2">
                        <FileText className="h-4 w-4 text-gray-400 mt-0.5" />
                        <div>
                          <div className="text-gray-400 font-semibold text-sm mb-1">
                            Platform Capabilities
                          </div>
                          <div className="text-gray-400 text-xs">
                            {event.compliance}
                          </div>
                          <div className="text-gray-400 text-xs mt-1">
                            Data Integration: {event.dataSource}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Live Demo Markets */}
          <TabsContent value="live">
            <div className="space-y-6">
              <div className="text-center mb-8">
                <Badge className="mb-4 bg-red-500/20 text-red-400 border-red-500/30">
                  <Activity className="h-3 w-3 mr-1" />
                  Live Demo - Real-Time Updates
                </Badge>
                <p className="text-gray-400">
                  Experience real-time market updates and live trading interface
                  demonstrations.
                </p>
              </div>

              {liveMarkets.map((event) => (
                <Card
                  key={event.id}
                  className="bg-gray-900/20 border-gray-800/20"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <Badge className="bg-gray-800/20 text-gray-400">
                            {event.category}
                          </Badge>
                          <Badge className="bg-red-500/20 text-red-400 animate-pulse">
                            <Activity className="h-3 w-3 mr-1" />
                            LIVE DEMO
                          </Badge>
                          <Badge
                            className={`${
                              event.urgency === "critical"
                                ? "bg-red-500/20 text-red-400"
                                : event.urgency === "high"
                                ? "bg-yellow-500/20 text-yellow-400"
                                : "bg-green-500/20 text-green-400"
                            }`}
                          >
                            <Clock className="h-3 w-3 mr-1" />
                            {event.timeLeft}
                          </Badge>
                        </div>
                        <CardTitle className="text-white text-xl mb-2">
                          {event.title}
                        </CardTitle>
                        <p className="text-gray-400 text-sm mb-4">
                          {event.description}
                        </p>
                        <div className="flex items-center space-x-6 text-sm">
                          <div className="flex items-center space-x-2">
                            <Users className="h-4 w-4 text-gray-400" />
                            <span className="text-gray-400">
                              {event.participants.toLocaleString()} demo users
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <TrendingUp className="h-4 w-4 text-gray-400" />
                            <span className="text-gray-400">
                              {event.totalVolume} sample volume
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <DollarSign className="h-4 w-4 text-gray-400" />
                            <span className="text-gray-400">
                              {event.liquidity} liquidity
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-4">
                      {event.options.map((option, index) => (
                        <Card
                          key={index}
                          className="bg-gray-800/30 border-gray-700/30 hover:bg-gray-700/30 transition-all cursor-pointer"
                        >
                          <CardContent className="p-4">
                            <div className="text-center">
                              <div className="text-white font-bold text-sm mb-2">
                                {option.name}
                              </div>
                              <div className="flex items-center justify-center space-x-2 mb-2">
                                <div className="text-2xl font-bold text-green-400">
                                  {option.odds}
                                </div>
                                <Badge
                                  className={`text-xs ${
                                    option.change.startsWith("+")
                                      ? "bg-green-500/20 text-green-400"
                                      : "bg-red-500/20 text-red-400"
                                  }`}
                                >
                                  {option.change}
                                </Badge>
                              </div>
                              <div className="text-gray-400 text-xs mb-3">
                                {option.probability} probability
                              </div>
                              <Button
                                size="sm"
                                className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700"
                              >
                                Demo Trade
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Portfolio Demo */}
          <TabsContent value="portfolio">
            <div className="space-y-8">
              <div className="text-center mb-8">
                <Badge className="mb-4 bg-purple-500/20 text-purple-400 border-purple-500/30">
                  <Briefcase className="h-3 w-3 mr-1" />
                  Portfolio Management Demo
                </Badge>
                <p className="text-gray-400">
                  Demonstration of advanced portfolio tracking and risk
                  management features.
                </p>
              </div>

              {/* Portfolio Overview */}
              <Card className="bg-gray-900/20 border-gray-800/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Briefcase className="h-5 w-5 mr-2" />
                    Demo Portfolio Dashboard
                  </CardTitle>
                  <p className="text-gray-400">
                    Sample portfolio showcasing platform capabilities
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-4 gap-6 mb-6">
                    <div className="bg-gray-800/30 rounded-xl p-4 text-center">
                      <div className="text-3xl font-bold text-white mb-2">
                        {demoPortfolio.totalValue}
                      </div>
                      <div className="text-gray-400 text-sm">
                        Demo Portfolio Value
                      </div>
                    </div>
                    <div className="bg-gray-800/30 rounded-xl p-4 text-center">
                      <div className="text-3xl font-bold text-green-400 mb-2">
                        {demoPortfolio.unrealizedPnL}
                      </div>
                      <div className="text-gray-400 text-sm">
                        Sample Unrealized P&L
                      </div>
                    </div>
                    <div className="bg-gray-800/30 rounded-xl p-4 text-center">
                      <div className="text-3xl font-bold text-blue-400 mb-2">
                        {demoPortfolio.successRate}
                      </div>
                      <div className="text-gray-400 text-sm">
                        Demo Success Rate
                      </div>
                    </div>
                    <div className="bg-gray-800/30 rounded-xl p-4 text-center">
                      <div className="text-3xl font-bold text-purple-400 mb-2">
                        {demoPortfolio.activePositions}
                      </div>
                      <div className="text-gray-400 text-sm">
                        Sample Positions
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-800/30 rounded-xl p-4">
                      <h4 className="text-white font-semibold mb-3">
                        Risk Analytics Demo
                      </h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Risk Score:</span>
                          <Badge className="bg-yellow-500/20 text-yellow-400">
                            {demoPortfolio.riskScore}
                          </Badge>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Avg Hold Time:</span>
                          <span className="text-white">
                            {demoPortfolio.avgHoldTime}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">
                            Total Allocated:
                          </span>
                          <span className="text-white">
                            {demoPortfolio.totalAllocated}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-800/30 rounded-xl p-4">
                      <h4 className="text-white font-semibold mb-3">
                        Performance Metrics
                      </h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Realized P&L:</span>
                          <span className="text-green-400">
                            {demoPortfolio.realizedPnL}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">
                            Completed Trades:
                          </span>
                          <span className="text-white">
                            {demoPortfolio.completedTrades}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Success Rate:</span>
                          <span className="text-green-400">
                            {demoPortfolio.successRate}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Sample Positions */}
              <Card className="bg-gray-900/20 border-gray-800/20">
                <CardHeader>
                  <CardTitle className="text-white">
                    Sample Active Positions
                  </CardTitle>
                  <p className="text-gray-400">
                    Demonstration of position tracking and management
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  {demoPositions
                    .filter((position) => position.status === "active")
                    .map((position, index) => (
                      <div
                        key={index}
                        className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/30"
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <div className="text-white font-bold text-lg mb-2">
                              {position.event}
                            </div>
                            <div className="flex items-center space-x-4 mb-3">
                              <Badge className="bg-blue-500/20 text-blue-400">
                                Position: {position.position}
                              </Badge>
                              <Badge
                                className={`${
                                  position.confidence === "High"
                                    ? "bg-green-500/20 text-green-400"
                                    : position.confidence === "Medium"
                                    ? "bg-yellow-500/20 text-yellow-400"
                                    : "bg-red-500/20 text-red-400"
                                }`}
                              >
                                {position.confidence} Confidence
                              </Badge>
                            </div>
                            <div className="grid md:grid-cols-4 gap-4 text-sm">
                              <div>
                                <div className="text-gray-400">Demo Amount</div>
                                <div className="text-white font-semibold">
                                  {position.amount}
                                </div>
                              </div>
                              <div>
                                <div className="text-gray-400">Entry Odds</div>
                                <div className="text-white font-semibold">
                                  {position.odds}
                                </div>
                              </div>
                              <div>
                                <div className="text-gray-400">
                                  Current Value
                                </div>
                                <div className="text-white font-semibold">
                                  {position.marketValue}
                                </div>
                              </div>
                              <div>
                                <div className="text-gray-400">Sample P&L</div>
                                <div className="text-green-400 font-semibold">
                                  {position.unrealizedPnL}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="text-gray-400 text-sm">
                            Entry Date: {position.entryDate} | Current Odds:{" "}
                            {position.currentOdds}
                          </div>
                          <div className="flex space-x-2">
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-gray-700/30 text-white bg-transparent hover:bg-gray-800/50"
                            >
                              Demo Exit
                            </Button>
                            <Button
                              size="sm"
                              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                            >
                              View Details
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Features Tab */}
          <TabsContent value="features">
            <div className="space-y-8">
              <div className="text-center mb-8">
                <Badge className="mb-4 bg-cyan-500/20 text-cyan-400 border-cyan-500/30">
                  <Lightbulb className="h-3 w-3 mr-1" />
                  Platform Features & Capabilities
                </Badge>
                <p className="text-gray-400">
                  Comprehensive overview of our advanced prediction market
                  technology stack.
                </p>
              </div>

              {/* Platform Features */}
              <Card className="bg-gray-900/20 border-gray-800/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Shield className="h-5 w-5 mr-2" />
                    Enterprise-Grade Platform Features
                  </CardTitle>
                  <p className="text-gray-400">
                    Advanced technology stack for professional prediction
                    markets
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    {platformFeatures.map((feature, index) => (
                      <div
                        key={index}
                        className="bg-gray-800/30 rounded-xl p-6"
                      >
                        <div
                          className={`w-16 h-16 rounded-2xl bg-gray-800/50 flex items-center justify-center mb-4 ${feature.color}`}
                        >
                          {feature.icon}
                        </div>
                        <h3 className="text-white font-bold text-lg mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-gray-400 text-sm">
                          {feature.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Technical Specifications */}
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-gray-900/20 border-gray-800/20">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <BarChart3 className="h-5 w-5 mr-2" />
                      Technical Capabilities
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-gray-800/30 rounded-lg p-4">
                      <h4 className="text-white font-semibold mb-2">
                        Real-Time Processing
                      </h4>
                      <p className="text-gray-400 text-sm">
                        High-frequency data processing with sub-second latency
                        for live market updates and price discovery.
                      </p>
                    </div>
                    <div className="bg-gray-800/30 rounded-lg p-4">
                      <h4 className="text-white font-semibold mb-2">
                        Scalable Architecture
                      </h4>
                      <p className="text-gray-400 text-sm">
                        Cloud-native infrastructure supporting millions of
                        concurrent users and thousands of simultaneous markets.
                      </p>
                    </div>
                    <div className="bg-gray-800/30 rounded-lg p-4">
                      <h4 className="text-white font-semibold mb-2">
                        Advanced Analytics
                      </h4>
                      <p className="text-gray-400 text-sm">
                        Machine learning algorithms for market sentiment
                        analysis, fraud detection, and predictive modeling.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900/20 border-gray-800/20">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <Shield className="h-5 w-5 mr-2" />
                      Security & Compliance
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                      <h4 className="text-green-400 font-semibold mb-2">
                        Enterprise Security
                      </h4>
                      <p className="text-gray-300 text-sm">
                        Bank-grade encryption, multi-factor authentication, and
                        comprehensive audit trails for all transactions.
                      </p>
                    </div>
                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                      <h4 className="text-blue-400 font-semibold mb-2">
                        Regulatory Framework
                      </h4>
                      <p className="text-gray-300 text-sm">
                        Built-in compliance tools for various jurisdictions with
                        automated reporting and KYC/AML integration.
                      </p>
                    </div>
                    <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                      <h4 className="text-purple-400 font-semibold mb-2">
                        Data Integrity
                      </h4>
                      <p className="text-gray-300 text-sm">
                        Blockchain-based settlement verification with multiple
                        data source validation for transparent outcomes.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
