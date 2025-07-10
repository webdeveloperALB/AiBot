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
      icon: <Activity className="h-8 w-8" />,
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
      icon: <Brain className="h-8 w-8" />,
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
      icon: <BarChart3 className="h-8 w-8" />,
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
      icon: <PieChart className="h-8 w-8" />,
      color: "from-orange-500 to-red-500",
      demo: "Managing $2.4B across 150+ assets",
    },
  ];

  const dashboardViews = [
    {
      name: "Executive Overview",
      description:
        "High-level KPIs and strategic metrics for C-level executives",
      icon: <Briefcase className="h-5 w-5" />,
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
      icon: <TrendingUp className="h-5 w-5" />,
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
      icon: <Shield className="h-5 w-5" />,
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
      icon: <Search className="h-5 w-5" />,
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
          icon: <Database className="h-4 w-4" />,
        },
        {
          label: "Response Time",
          value: "<50ms average",
          icon: <Zap className="h-4 w-4" />,
        },
        {
          label: "Concurrent Users",
          value: "50,000+",
          icon: <Users className="h-4 w-4" />,
        },
        {
          label: "Uptime SLA",
          value: "99.99%",
          icon: <Clock className="h-4 w-4" />,
        },
      ],
    },
    {
      category: "Security",
      specs: [
        {
          label: "Encryption",
          value: "AES-256",
          icon: <Lock className="h-4 w-4" />,
        },
        {
          label: "Compliance",
          value: "SOC2, ISO27001",
          icon: <Shield className="h-4 w-4" />,
        },
        {
          label: "Authentication",
          value: "Multi-Factor",
          icon: <CheckCircle className="h-4 w-4" />,
        },
        {
          label: "Data Centers",
          value: "Tier IV",
          icon: <Globe className="h-4 w-4" />,
        },
      ],
    },
    {
      category: "Customization",
      specs: [
        {
          label: "Themes",
          value: "Unlimited",
          icon: <Palette className="h-4 w-4" />,
        },
        {
          label: "Widgets",
          value: "200+",
          icon: <Layers className="h-4 w-4" />,
        },
        {
          label: "APIs",
          value: "RESTful + GraphQL",
          icon: <Settings className="h-4 w-4" />,
        },
        {
          label: "Integrations",
          value: "500+",
          icon: <Globe className="h-4 w-4" />,
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
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full px-6 py-3 mb-8">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-blue-300 font-medium">
                Live Dashboard Showcase
              </span>
            </div>

            <h1 className="text-7xl font-bold mb-8">
              <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                Professional-Grade
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Trading Dashboard
              </span>
            </h1>

            <p className="text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12">
              Experience institutional-quality analytics, real-time data
              processing, and AI-powered insights in a beautifully designed,
              fully customizable dashboard platform.
            </p>

            {/* Live Demo Controls */}
            <div className="flex justify-center items-center space-x-6 mb-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-10 py-4 text-lg"
              >
                <Play className="h-6 w-6 mr-3" />
                Watch Live Demo
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-800/50 px-10 py-4 text-lg bg-transparent hover:text-white"
              >
                <Calendar className="h-6 w-6 mr-3" />
                Schedule Presentation
              </Button>
            </div>

            {/* Live Status Indicators */}
            <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {liveFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-4 backdrop-blur-sm"
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
                  <div className="text-slate-400 text-xs">
                    {feature.description}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Tabs
            value={currentView}
            onValueChange={setCurrentView}
            className="space-y-12"
          >
            <TabsList className="grid w-full grid-cols-5 bg-slate-800/50 border-slate-700/50 backdrop-blur-sm p-2">
              <TabsTrigger
                value="overview"
                className="text-slate-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white"
              >
                Platform Overview
              </TabsTrigger>
              <TabsTrigger
                value="capabilities"
                className="text-slate-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white"
              >
                Core Capabilities
              </TabsTrigger>
              <TabsTrigger
                value="dashboards"
                className="text-slate-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white"
              >
                Dashboard Views
              </TabsTrigger>
              <TabsTrigger
                value="technical"
                className="text-slate-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white"
              >
                Technical Specs
              </TabsTrigger>
              <TabsTrigger
                value="clients"
                className="text-slate-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white"
              >
                Client Success
              </TabsTrigger>
            </TabsList>

            {/* Platform Overview */}
            <TabsContent value="overview">
              <div className="grid lg:grid-cols-2 gap-12 mb-16">
                {/* Live Dashboard Preview */}
                <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-slate-800/50 to-slate-700/50">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-white text-xl">
                        Live Dashboard Preview
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0">
                    {/* Dashboard Preview Image */}
                    <div className="relative">
                      <img
                        src="/placeholder.svg?height=400&width=600"
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
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-white mb-6">
                    Why Choose Our Dashboard?
                  </h2>

                  <div className="space-y-4">
                    {[
                      {
                        title: "Institutional-Grade Performance",
                        description:
                          "Built for high-frequency trading environments with microsecond precision",
                        icon: <Zap className="h-6 w-6" />,
                        color: "text-yellow-400",
                      },
                      {
                        title: "AI-Powered Analytics",
                        description:
                          "Machine learning algorithms providing predictive insights and pattern recognition",
                        icon: <Brain className="h-6 w-6" />,
                        color: "text-purple-400",
                      },
                      {
                        title: "Unlimited Customization",
                        description:
                          "Fully customizable interface with 200+ widgets and unlimited themes",
                        icon: <Palette className="h-6 w-6" />,
                        color: "text-pink-400",
                      },
                      {
                        title: "Enterprise Security",
                        description:
                          "Bank-grade security with SOC2 compliance and multi-factor authentication",
                        icon: <Shield className="h-6 w-6" />,
                        color: "text-green-400",
                      },
                      {
                        title: "Multi-Device Support",
                        description:
                          "Seamless experience across desktop, tablet, and mobile devices",
                        icon: <Monitor className="h-6 w-6" />,
                        color: "text-blue-400",
                      },
                    ].map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-4 bg-slate-800/30 rounded-lg p-4"
                      >
                        <div className={`${feature.color} mt-1`}>
                          {feature.icon}
                        </div>
                        <div>
                          <h3 className="text-white font-semibold mb-1">
                            {feature.title}
                          </h3>
                          <p className="text-slate-300 text-sm">
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
              <div className="grid lg:grid-cols-2 gap-8">
                {dashboardCapabilities.map((capability, index) => (
                  <Card
                    key={index}
                    className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/50 transition-all duration-500 overflow-hidden"
                  >
                    <CardContent className="p-8">
                      <div className="flex items-start justify-between mb-6">
                        <div
                          className={`w-20 h-20 rounded-3xl bg-gradient-to-r ${capability.color} flex items-center justify-center text-white shadow-2xl`}
                        >
                          {capability.icon}
                        </div>
                        <Badge className="bg-green-500/20 text-green-400 border-green-500/30 px-3 py-1">
                          {capability.performance}
                        </Badge>
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-4">
                        {capability.title}
                      </h3>
                      <p className="text-slate-300 mb-6 leading-relaxed">
                        {capability.description}
                      </p>

                      <div className="grid grid-cols-2 gap-3 mb-6">
                        {capability.features.map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-center space-x-2"
                          >
                            <CheckCircle className="h-4 w-4 text-green-400" />
                            <span className="text-slate-300 text-sm">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="bg-slate-800/50 rounded-lg p-4">
                        <div className="text-slate-400 text-sm mb-1">
                          Live Demo Status
                        </div>
                        <div className="text-white font-semibold">
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
              <div className="space-y-12">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-white mb-4">
                    Multiple Dashboard Views
                  </h2>
                  <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                    Tailored interfaces for different roles and use cases, each
                    optimized for specific workflows
                  </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                  {dashboardViews.map((view, index) => (
                    <Card
                      key={index}
                      className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm"
                    >
                      <CardHeader>
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white">
                            {view.icon}
                          </div>
                          <div>
                            <CardTitle className="text-white text-xl">
                              {view.name}
                            </CardTitle>
                            <div className="text-slate-400 text-sm">
                              {view.users}
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-slate-300 mb-6">
                          {view.description}
                        </p>
                        <div className="space-y-3">
                          <div className="text-slate-400 text-sm font-medium">
                            Key Features:
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                            {view.features.map((feature, idx) => (
                              <div
                                key={idx}
                                className="flex items-center space-x-2"
                              >
                                <Star className="h-4 w-4 text-yellow-400" />
                                <span className="text-slate-300 text-sm">
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
              <div className="space-y-12">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-white mb-4">
                    Technical Excellence
                  </h2>
                  <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                    Built on enterprise-grade infrastructure with
                    institutional-quality performance standards
                  </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                  {technicalSpecs.map((category, index) => (
                    <Card
                      key={index}
                      className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm"
                    >
                      <CardHeader>
                        <CardTitle className="text-white text-xl">
                          {category.category}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {category.specs.map((spec, idx) => (
                          <div
                            key={idx}
                            className="flex items-center justify-between bg-slate-800/30 rounded-lg p-3"
                          >
                            <div className="flex items-center space-x-3">
                              <div className="text-blue-400">{spec.icon}</div>
                              <span className="text-slate-300">
                                {spec.label}
                              </span>
                            </div>
                            <span className="text-white font-semibold">
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
                  <CardContent className="p-12">
                    <div className="text-center mb-8">
                      <h3 className="text-3xl font-bold text-white mb-4">
                        Real-Time Performance Metrics
                      </h3>
                      <p className="text-slate-300">
                        Live statistics from our production environment
                      </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
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
                            className={`text-4xl font-bold ${metric.color} mb-2`}
                          >
                            {metric.value}
                            <span className="text-2xl">{metric.unit}</span>
                          </div>
                          <div className="text-slate-400">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Client Success Stories */}
            <TabsContent value="clients">
              <div className="space-y-12">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-white mb-4">
                    Trusted by Industry Leaders
                  </h2>
                  <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                    See how leading financial institutions have transformed
                    their operations with our dashboard platform
                  </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 mb-12">
                  {clientShowcase.map((client, index) => (
                    <Card
                      key={index}
                      className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm"
                    >
                      <CardContent className="p-8">
                        <div className="flex items-center justify-between mb-6">
                          <div
                            className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${client.color} flex items-center justify-center text-white font-bold text-xl`}
                          >
                            {client.logo}
                          </div>
                          <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                            {client.type}
                          </Badge>
                        </div>

                        <h3 className="text-xl font-bold text-white mb-2">
                          {client.name}
                        </h3>
                        <div className="text-slate-400 mb-4">
                          {client.assets}
                        </div>

                        <div className="bg-slate-800/50 rounded-lg p-4 mb-6">
                          <div className="text-green-400 font-bold text-lg mb-1">
                            {client.improvement}
                          </div>
                          <div className="text-slate-300">
                            Performance Improvement
                          </div>
                        </div>

                        <blockquote className="text-slate-300 italic">
                          "{client.testimonial}"
                        </blockquote>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* ROI Calculator */}
                <Card className="bg-transparent border-none">
                  <CardContent className="p-12 text-center">
                    <h3 className="text-3xl font-bold text-white mb-6">
                      Calculate Your ROI
                    </h3>
                    <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                      See how much you could save and earn with our professional
                      dashboard platform
                    </p>

                    <div className="grid md:grid-cols-3 gap-8 mb-8">
                      <div className="bg-slate-800/50 rounded-xl p-6">
                        <div className="text-3xl font-bold text-green-400 mb-2">
                          127%
                        </div>
                        <div className="text-slate-300">
                          Average Efficiency Gain
                        </div>
                      </div>
                      <div className="bg-slate-800/50 rounded-xl p-6">
                        <div className="text-3xl font-bold text-blue-400 mb-2">
                          $2.4M
                        </div>
                        <div className="text-slate-300">
                          Average Annual Savings
                        </div>
                      </div>
                      <div className="bg-slate-800/50 rounded-xl p-6">
                        <div className="text-3xl font-bold text-purple-400 mb-2">
                          3.2x
                        </div>
                        <div className="text-slate-300">
                          ROI Within 12 Months
                        </div>
                      </div>
                    </div>

                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-12 py-4 text-lg"
                    >
                      Get Custom ROI Analysis
                      <ArrowUpRight className="h-6 w-6 ml-3" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>

          {/* Final CTA Section */}
          <Card className="mt-20 bg-transparent border-blue-500/30 overflow-hidden">
            <CardContent className="p-16 text-center relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
              <div className="relative z-10">
                <h2 className="text-5xl font-bold text-white mb-6">
                  Ready to Transform Your Trading?
                </h2>
                <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto">
                  Join the elite group of financial institutions using our
                  professional dashboard platform. Experience the difference
                  that institutional-grade technology can make.
                </p>

                <div className="flex justify-center space-x-6">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-12 py-4 text-xl"
                  >
                    Start Free Trial
                    <ArrowUpRight className="h-6 w-6 ml-3" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-slate-600 text-slate-300 hover:bg-slate-800/50 px-12 py-4 text-xl bg-transparent"
                  >
                    Schedule Demo
                    <Calendar className="h-6 w-6 ml-3" />
                  </Button>
                </div>

                <div className="mt-8 text-slate-400">
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
