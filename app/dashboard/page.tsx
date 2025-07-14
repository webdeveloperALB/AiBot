"use client";

import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BarChart3,
  ArrowUpRight,
  Settings,
  Zap,
  Shield,
  Globe,
  Users,
  PieChart,
  Activity,
  Star,
  CheckCircle,
  TrendingUp,
  Brain,
  Layers,
  Monitor,
  Palette,
  Lock,
  Clock,
  Database,
  Search,
  Play,
  Calendar,
  Briefcase,
} from "lucide-react";

export default function PremiumDashboardShowcase() {
  const [activeDemo, setActiveDemo] = useState(0);
  const [liveData, setLiveData] = useState(
    Array.from({ length: 20 }, () => Math.random() * 100)
  );
  const [currentView, setCurrentView] = useState("overview");

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveData((prev) => prev.map(() => Math.random() * 100));
      setActiveDemo((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const dashboardCapabilities = [
    {
      title: "Real-Time Analytics Engine",
      description:
        "Process millions of data points per second with sub-millisecond latency",
      features: [
        "Live Market Data",
        "Custom Indicators",
        "Alert System",
        "Historical Analysis",
      ],
      performance: "99.99% Uptime",
      icon: <Activity className="h-6 w-6 sm:h-8 sm:w-8" />,
      color: "from-emerald-500 to-teal-500",
      demo: "Live data streaming with 0.1ms latency",
    },
    {
      title: "AI-Powered Insights",
      description:
        "Machine learning algorithms providing predictive analytics and pattern recognition",
      features: [
        "Predictive Models",
        "Risk Assessment",
        "Sentiment Analysis",
        "Auto-Optimization",
      ],
      performance: "94.7% Accuracy",
      icon: <Brain className="h-6 w-6 sm:h-8 sm:w-8" />,
      color: "from-purple-500 to-indigo-500",
      demo: "AI detecting 847 patterns in real-time",
    },
    {
      title: "Advanced Visualization",
      description:
        "Interactive charts and graphs with 50+ chart types and unlimited customization",
      features: [
        "50+ Chart Types",
        "Custom Themes",
        "Interactive Elements",
        "Export Options",
      ],
      performance: "Unlimited Data Points",
      icon: <BarChart3 className="h-6 w-6 sm:h-8 sm:w-8" />,
      color: "from-blue-500 to-cyan-500",
      demo: "Rendering 1M+ data points smoothly",
    },
    {
      title: "Multi-Asset Portfolio",
      description:
        "Comprehensive portfolio management across all asset classes with risk analytics",
      features: [
        "Cross-Asset View",
        "Risk Metrics",
        "Performance Attribution",
        "Rebalancing",
      ],
      performance: "150+ Asset Classes",
      icon: <PieChart className="h-6 w-6 sm:h-8 sm:w-8" />,
      color: "from-orange-500 to-red-500",
      demo: "Managing $2.4B across 150+ assets",
    },
  ];

  const dashboardViews = [
    {
      name: "Executive Overview",
      description:
        "High-level KPIs and strategic metrics for C-level executives",
      icon: <Briefcase className="h-4 w-4 sm:h-5 sm:w-5" />,
      features: [
        "Revenue Tracking",
        "Growth Metrics",
        "Market Share",
        "Competitive Analysis",
      ],
      users: "C-Suite, Directors",
    },
    {
      name: "Trading Floor",
      description: "Real-time trading interface with advanced order management",
      icon: <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5" />,
      features: [
        "Order Book",
        "Price Ladders",
        "Risk Controls",
        "P&L Tracking",
      ],
      users: "Traders, Analysts",
    },
    {
      name: "Risk Management",
      description: "Comprehensive risk monitoring and compliance dashboard",
      icon: <Shield className="h-4 w-4 sm:h-5 sm:w-5" />,
      features: [
        "VaR Calculations",
        "Stress Testing",
        "Compliance Monitoring",
        "Alert System",
      ],
      users: "Risk Managers, Compliance",
    },
    {
      name: "Research & Analytics",
      description: "Deep market research tools with backtesting capabilities",
      icon: <Search className="h-4 w-4 sm:h-5 sm:w-5" />,
      features: [
        "Market Research",
        "Backtesting",
        "Strategy Development",
        "Performance Analysis",
      ],
      users: "Researchers, Quants",
    },
  ];

  const technicalSpecs = [
    {
      category: "Performance",
      specs: [
        {
          label: "Data Processing",
          value: "10M+ records/sec",
          icon: <Database className="h-3 w-3 sm:h-4 sm:w-4" />,
        },
        {
          label: "Response Time",
          value: "<50ms average",
          icon: <Zap className="h-3 w-3 sm:h-4 sm:w-4" />,
        },
        {
          label: "Concurrent Users",
          value: "50,000+",
          icon: <Users className="h-3 w-3 sm:h-4 sm:w-4" />,
        },
        {
          label: "Uptime SLA",
          value: "99.99%",
          icon: <Clock className="h-3 w-3 sm:h-4 sm:w-4" />,
        },
      ],
    },
    {
      category: "Security",
      specs: [
        {
          label: "Encryption",
          value: "AES-256",
          icon: <Lock className="h-3 w-3 sm:h-4 sm:w-4" />,
        },
        {
          label: "Compliance",
          value: "SOC2, ISO27001",
          icon: <Shield className="h-3 w-3 sm:h-4 sm:w-4" />,
        },
        {
          label: "Authentication",
          value: "Multi-Factor",
          icon: <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4" />,
        },
        {
          label: "Data Centers",
          value: "Tier IV",
          icon: <Globe className="h-3 w-3 sm:h-4 sm:w-4" />,
        },
      ],
    },
    {
      category: "Customization",
      specs: [
        {
          label: "Themes",
          value: "Unlimited",
          icon: <Palette className="h-3 w-3 sm:h-4 sm:w-4" />,
        },
        {
          label: "Widgets",
          value: "200+",
          icon: <Layers className="h-3 w-3 sm:h-4 sm:w-4" />,
        },
        {
          label: "APIs",
          value: "RESTful + GraphQL",
          icon: <Settings className="h-3 w-3 sm:h-4 sm:w-4" />,
        },
        {
          label: "Integrations",
          value: "500+",
          icon: <Globe className="h-3 w-3 sm:h-4 sm:w-4" />,
        },
      ],
    },
  ];

  const liveFeatures = [
    {
      title: "Real-Time Market Data",
      status: "LIVE",
      description: "Streaming data from 150+ exchanges worldwide",
      metrics: ["2.4M updates/sec", "0.1ms latency", "99.99% accuracy"],
      color: "text-green-400",
    },
    {
      title: "AI Pattern Recognition",
      status: "ACTIVE",
      description: "Machine learning models analyzing market patterns",
      metrics: ["847 patterns detected", "94.7% accuracy", "Real-time alerts"],
      color: "text-blue-400",
    },
    {
      title: "Risk Monitoring",
      status: "MONITORING",
      description: "Continuous portfolio risk assessment and alerts",
      metrics: ["24/7 monitoring", "Instant alerts", "Automated responses"],
      color: "text-yellow-400",
    },
    {
      title: "Performance Analytics",
      status: "CALCULATING",
      description: "Advanced performance attribution and analytics",
      metrics: [
        "Multi-factor analysis",
        "Benchmark comparison",
        "Custom reports",
      ],
      color: "text-purple-400",
    },
  ];

  const clientShowcase = [
    {
      type: "Hedge Fund",
      name: "Quantum Capital",
      assets: "$2.4B AUM",
      improvement: "+127% efficiency",
      testimonial:
        "Reduced our analysis time by 80% while improving accuracy significantly.",
      logo: "QC",
      color: "from-blue-500 to-purple-500",
    },
    {
      type: "Investment Bank",
      name: "Global Securities",
      assets: "$15B Trading Volume",
      improvement: "+89% ROI",
      testimonial:
        "The real-time analytics have transformed our trading operations completely.",
      logo: "GS",
      color: "from-green-500 to-emerald-500",
    },
    {
      type: "Asset Manager",
      name: "Premier Investments",
      assets: "$8.7B Under Management",
      improvement: "+156% client satisfaction",
      testimonial:
        "Our clients love the transparency and detailed reporting capabilities.",
      logo: "PI",
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 sm:-top-40 sm:-right-40 w-40 h-40 sm:w-80 sm:h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 sm:-bottom-40 sm:-left-40 w-40 h-40 sm:w-80 sm:h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative py-8 sm:py-12 lg:py-16 px-3 sm:px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Hero Section */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full px-3 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-blue-300 font-medium text-sm sm:text-base">
                Live Dashboard Showcase
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                Professional-Grade
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Trading Dashboard
              </span>
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-12 px-4">
              Experience institutional-quality analytics, real-time data
              processing, and AI-powered insights in a beautifully designed,
              fully customizable dashboard platform.
            </p>

            {/* Live Demo Controls */}
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8 sm:mb-12 px-4">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-6 sm:px-10 py-3 sm:py-4 text-base sm:text-lg"
                asChild
              >
                <a href="https://dex.whiterock24.ai/sign-in">
                  <Play className="h-5 w-5 sm:h-6 sm:w-6 mr-2 sm:mr-3" />
                  Watch Live Demo
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-slate-600 text-slate-300 hover:bg-slate-800/50 px-6 sm:px-10 py-3 sm:py-4 text-base sm:text-lg bg-transparent hover:text-white"
                asChild
              >
                <a href="https://dex.whiterock24.ai/sign-in">
                  <Calendar className="h-5 w-5 sm:h-6 sm:w-6 mr-2 sm:mr-3" />
                  Schedule Presentation
                </a>
              </Button>
            </div>

            {/* Live Status Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto px-4">
              {liveFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-3 sm:p-4 backdrop-blur-sm"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div
                      className={`text-xs font-bold ${feature.color} uppercase tracking-wider`}
                    >
                      {feature.status}
                    </div>
                    <div
                      className={`w-2 h-2 ${feature.color.replace(
                        "text-",
                        "bg-"
                      )} rounded-full animate-pulse`}
                    ></div>
                  </div>
                  <div className="text-white font-semibold text-sm mb-1">
                    {feature.title}
                  </div>
                  <div className="text-slate-400 text-xs leading-relaxed">
                    {feature.description}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Tabs
            value={currentView}
            onValueChange={setCurrentView}
            className="space-y-8 sm:space-y-12"
          >
            {/* Mobile-optimized TabsList */}
            <div className="w-full overflow-x-auto">
              <TabsList className="inline-flex w-max min-w-full bg-slate-800/50 border-slate-700/50 backdrop-blur-sm p-1 sm:p-2 gap-1">
                <TabsTrigger
                  value="overview"
                  className="text-slate-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white text-xs sm:text-sm px-2 sm:px-4 py-2 whitespace-nowrap"
                >
                  Platform Overview
                </TabsTrigger>
                <TabsTrigger
                  value="capabilities"
                  className="text-slate-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white text-xs sm:text-sm px-2 sm:px-4 py-2 whitespace-nowrap"
                >
                  Core Capabilities
                </TabsTrigger>
                <TabsTrigger
                  value="dashboards"
                  className="text-slate-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white text-xs sm:text-sm px-2 sm:px-4 py-2 whitespace-nowrap"
                >
                  Dashboard Views
                </TabsTrigger>
                <TabsTrigger
                  value="technical"
                  className="text-slate-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white text-xs sm:text-sm px-2 sm:px-4 py-2 whitespace-nowrap"
                >
                  Technical Specs
                </TabsTrigger>
                <TabsTrigger
                  value="clients"
                  className="text-slate-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white text-xs sm:text-sm px-2 sm:px-4 py-2 whitespace-nowrap"
                >
                  Client Success
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Platform Overview */}
            <TabsContent value="overview">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
                {/* Live Dashboard Preview */}
                <Card className="bg-slate-900/50 border-none backdrop-blur-sm overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 p-4 sm:p-6">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-white text-lg sm:text-xl">
                        Live Dashboard Preview
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0">
                    {/* Dashboard Preview Image */}
                    <div className="relative">
                      <img
                        src="/dashboard.png?height=600&width=400"
                        alt="Professional Trading Dashboard Preview"
                        className="w-full h-auto rounded-b-lg"
                      />
                      <div className="absolute top-4 right-4 flex items-center space-x-2 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-green-400 text-sm font-medium">
                          LIVE
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Key Features */}
                <div className="space-y-4 sm:space-y-6">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
                    Why Choose Our Dashboard?
                  </h2>
                  <div className="space-y-3 sm:space-y-4">
                    {[
                      {
                        title: "Institutional-Grade Performance",
                        description:
                          "Built for high-frequency trading environments with microsecond precision",
                        icon: <Zap className="h-5 w-5 sm:h-6 sm:w-6" />,
                        color: "text-yellow-400",
                      },
                      {
                        title: "AI-Powered Analytics",
                        description:
                          "Machine learning algorithms providing predictive insights and pattern recognition",
                        icon: <Brain className="h-5 w-5 sm:h-6 sm:w-6" />,
                        color: "text-purple-400",
                      },
                      {
                        title: "Unlimited Customization",
                        description:
                          "Fully customizable interface with 200+ widgets and unlimited themes",
                        icon: <Palette className="h-5 w-5 sm:h-6 sm:w-6" />,
                        color: "text-pink-400",
                      },
                      {
                        title: "Enterprise Security",
                        description:
                          "Bank-grade security with SOC2 compliance and multi-factor authentication",
                        icon: <Shield className="h-5 w-5 sm:h-6 sm:w-6" />,
                        color: "text-green-400",
                      },
                      {
                        title: "Multi-Device Support",
                        description:
                          "Seamless experience across desktop, tablet, and mobile devices",
                        icon: <Monitor className="h-5 w-5 sm:h-6 sm:w-6" />,
                        color: "text-blue-400",
                      },
                    ].map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-3 sm:space-x-4 bg-slate-800/30 rounded-lg p-3 sm:p-4"
                      >
                        <div className={`${feature.color} mt-1 flex-shrink-0`}>
                          {feature.icon}
                        </div>
                        <div className="min-w-0">
                          <h3 className="text-white font-semibold mb-1 text-sm sm:text-base">
                            {feature.title}
                          </h3>
                          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Core Capabilities */}
            <TabsContent value="capabilities">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                {dashboardCapabilities.map((capability, index) => (
                  <Card
                    key={index}
                    className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/50 transition-all duration-500 overflow-hidden"
                  >
                    <CardContent className="p-6 sm:p-8">
                      <div className="flex items-start justify-between mb-4 sm:mb-6">
                        <div
                          className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl bg-gradient-to-r ${capability.color} flex items-center justify-center text-white shadow-2xl flex-shrink-0`}
                        >
                          {capability.icon}
                        </div>
                        <Badge className="bg-green-500/20 text-green-400 border-green-500/30 px-2 sm:px-3 py-1 text-xs sm:text-sm">
                          {capability.performance}
                        </Badge>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                        {capability.title}
                      </h3>
                      <p className="text-slate-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                        {capability.description}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-6">
                        {capability.features.map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-center space-x-2"
                          >
                            <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-400 flex-shrink-0" />
                            <span className="text-slate-300 text-xs sm:text-sm">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                      <div className="bg-slate-800/50 rounded-lg p-3 sm:p-4">
                        <div className="text-slate-400 text-xs sm:text-sm mb-1">
                          Live Demo Status
                        </div>
                        <div className="text-white font-semibold text-sm sm:text-base">
                          {capability.demo}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Dashboard Views */}
            <TabsContent value="dashboards">
              <div className="space-y-8 sm:space-y-12">
                <div className="text-center mb-8 sm:mb-12">
                  <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 sm:mb-4">
                    Multiple Dashboard Views
                  </h2>
                  <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto px-4">
                    Tailored interfaces for different roles and use cases, each
                    optimized for specific workflows
                  </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                  {dashboardViews.map((view, index) => (
                    <Card
                      key={index}
                      className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm"
                    >
                      <CardHeader className="p-4 sm:p-6">
                        <div className="flex items-center space-x-3 sm:space-x-4">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg sm:rounded-xl flex items-center justify-center text-white flex-shrink-0">
                            {view.icon}
                          </div>
                          <div className="min-w-0">
                            <CardTitle className="text-white text-lg sm:text-xl">
                              {view.name}
                            </CardTitle>
                            <div className="text-slate-400 text-xs sm:text-sm">
                              {view.users}
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="p-4 sm:p-6 pt-0">
                        <p className="text-slate-300 mb-4 sm:mb-6 text-sm sm:text-base">
                          {view.description}
                        </p>
                        <div className="space-y-3">
                          <div className="text-slate-400 text-xs sm:text-sm font-medium">
                            Key Features:
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {view.features.map((feature, idx) => (
                              <div
                                key={idx}
                                className="flex items-center space-x-2"
                              >
                                <Star className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 flex-shrink-0" />
                                <span className="text-slate-300 text-xs sm:text-sm">
                                  {feature}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Technical Specifications */}
            <TabsContent value="technical">
              <div className="space-y-8 sm:space-y-12">
                <div className="text-center mb-8 sm:mb-12">
                  <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 sm:mb-4">
                    Technical Excellence
                  </h2>
                  <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto px-4">
                    Built on enterprise-grade infrastructure with
                    institutional-quality performance standards
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {technicalSpecs.map((category, index) => (
                    <Card
                      key={index}
                      className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm"
                    >
                      <CardHeader className="p-4 sm:p-6">
                        <CardTitle className="text-white text-lg sm:text-xl">
                          {category.category}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3 sm:space-y-4 p-4 sm:p-6 pt-0">
                        {category.specs.map((spec, idx) => (
                          <div
                            key={idx}
                            className="flex items-center justify-between bg-slate-800/30 rounded-lg p-2 sm:p-3"
                          >
                            <div className="flex items-center space-x-2 sm:space-x-3 min-w-0">
                              <div className="text-blue-400 flex-shrink-0">
                                {spec.icon}
                              </div>
                              <span className="text-slate-300 text-xs sm:text-sm truncate">
                                {spec.label}
                              </span>
                            </div>
                            <span className="text-white font-semibold text-xs sm:text-sm flex-shrink-0 ml-2">
                              {spec.value}
                            </span>
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Performance Metrics */}
                <Card className="bg-transparent border-none backdrop-blur-sm">
                  <CardContent className="p-6 sm:p-8 lg:p-12">
                    <div className="text-center mb-6 sm:mb-8">
                      <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
                        Real-Time Performance Metrics
                      </h3>
                      <p className="text-slate-300 text-sm sm:text-base">
                        Live statistics from our production environment
                      </p>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                      {[
                        {
                          label: "Data Points Processed",
                          value: "2.4M",
                          unit: "/second",
                          color: "text-green-400",
                        },
                        {
                          label: "Average Response Time",
                          value: "47",
                          unit: "milliseconds",
                          color: "text-blue-400",
                        },
                        {
                          label: "Active Connections",
                          value: "12,847",
                          unit: "concurrent",
                          color: "text-purple-400",
                        },
                        {
                          label: "System Uptime",
                          value: "99.99",
                          unit: "percent",
                          color: "text-yellow-400",
                        },
                      ].map((metric, index) => (
                        <div key={index} className="text-center">
                          <div
                            className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${metric.color} mb-1 sm:mb-2`}
                          >
                            {metric.value}
                            <span className="text-lg sm:text-xl lg:text-2xl">
                              {metric.unit}
                            </span>
                          </div>
                          <div className="text-slate-400 text-xs sm:text-sm leading-tight">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Client Success Stories */}
            <TabsContent value="clients">
              <div className="space-y-8 sm:space-y-12">
                <div className="text-center mb-8 sm:mb-12">
                  <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 sm:mb-4">
                    Trusted by Industry Leaders
                  </h2>
                  <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto px-4">
                    See how leading financial institutions have transformed
                    their operations with our dashboard platform
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
                  {clientShowcase.map((client, index) => (
                    <Card
                      key={index}
                      className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm"
                    >
                      <CardContent className="p-6 sm:p-8">
                        <div className="flex items-center justify-between mb-4 sm:mb-6">
                          <div
                            className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-r ${client.color} flex items-center justify-center text-white font-bold text-lg sm:text-xl flex-shrink-0`}
                          >
                            {client.logo}
                          </div>
                          <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 text-xs sm:text-sm">
                            {client.type}
                          </Badge>
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                          {client.name}
                        </h3>
                        <div className="text-slate-400 mb-4 text-sm sm:text-base">
                          {client.assets}
                        </div>
                        <div className="bg-slate-800/50 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6">
                          <div className="text-green-400 font-bold text-base sm:text-lg mb-1">
                            {client.improvement}
                          </div>
                          <div className="text-slate-300 text-xs sm:text-sm">
                            Performance Improvement
                          </div>
                        </div>
                        <blockquote className="text-slate-300 italic text-sm sm:text-base leading-relaxed">
                          "{client.testimonial}"
                        </blockquote>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* ROI Calculator */}
                <Card className="bg-transparent border-none">
                  <CardContent className="p-6 sm:p-8 lg:p-12 text-center">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
                      Calculate Your ROI
                    </h3>
                    <p className="text-slate-300 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                      See how much you could save and earn with our professional
                      dashboard platform
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
                      <div className="bg-slate-800/50 rounded-xl p-4 sm:p-6">
                        <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-2">
                          127%
                        </div>
                        <div className="text-slate-300 text-sm sm:text-base">
                          Average Efficiency Gain
                        </div>
                      </div>
                      <div className="bg-slate-800/50 rounded-xl p-4 sm:p-6">
                        <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-2">
                          $2.4M
                        </div>
                        <div className="text-slate-300 text-sm sm:text-base">
                          Average Annual Savings
                        </div>
                      </div>
                      <div className="bg-slate-800/50 rounded-xl p-4 sm:p-6">
                        <div className="text-2xl sm:text-3xl font-bold text-purple-400 mb-2">
                          3.2x
                        </div>
                        <div className="text-slate-300 text-sm sm:text-base">
                          ROI Within 12 Months
                        </div>
                      </div>
                    </div>
                    <Button
                      size="lg"
                      className="w-full sm:w-auto bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg"
                    >
                      Get Custom ROI Analysis
                      <ArrowUpRight className="h-5 w-5 sm:h-6 sm:w-6 ml-2 sm:ml-3" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>

          {/* Final CTA Section */}
          <Card className="mt-12 sm:mt-16 lg:mt-20 bg-transparent border-blue-500/30 overflow-hidden">
            <CardContent className="p-8 sm:p-12 lg:p-16 text-center relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
                  Ready to Transform Your Trading?
                </h2>
                <p className="text-lg sm:text-xl text-slate-300 mb-8 sm:mb-12 max-w-3xl mx-auto px-4">
                  Join the elite group of financial institutions using our
                  professional dashboard platform. Experience the difference
                  that institutional-grade technology can make.
                </p>
                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 sm:px-12 py-3 sm:py-4 text-lg sm:text-xl"
                    asChild
                  >
                    <a href="https://dex.whiterock24.ai/sign-up">
                      Start Free Trial
                      <ArrowUpRight className="h-5 w-5 sm:h-6 sm:w-6 ml-2 sm:ml-3" />
                    </a>
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto border-slate-600 text-slate-300 hover:bg-slate-800/50 px-8 sm:px-12 py-3 sm:py-4 text-lg sm:text-xl bg-transparent hover:text-white"
                    asChild
                  >
                    <a
                      href="https://dex.whiterock24.ai/sign-in"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Schedule Demo
                      <Calendar className="h-5 w-5 sm:h-6 sm:w-6 ml-2 sm:ml-3" />
                    </a>
                  </Button>
                </div>
                <div className="mt-6 sm:mt-8 text-slate-400 text-sm sm:text-base">
                  <p>
                    ✓ No credit card required ✓ Full feature access ✓ 30-day
                    free trial
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
