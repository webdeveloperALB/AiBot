"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import {
  Trophy,
  Target,
  Shield,
  TrendingUp,
  DollarSign,
  Clock,
  CheckCircle,
  Star,
  Users,
  Lock,
  FileText,
  Phone,
  AlertTriangle,
  Verified,
} from "lucide-react";

export default function EnhancedPropFirmPage() {
  const [selectedChallenge, setSelectedChallenge] = useState("standard");

  const challenges = [
    {
      id: "standard",
      name: "Standard Evaluation",
      capital: "$25,000",
      fee: "$299",
      profitTarget: "8%",
      maxDrawdown: "5%",
      tradingDays: "30 minimum",
      profitSplit: "80%",
      popular: false,
      refundable: true,
      features: [
        "Refundable registration fee",
        "No time limit on Phase 1",
        "1:100 leverage available",
        "All major forex pairs",
        "Weekend holding allowed",
        "Expert advisor permitted",
        "24/7 customer support",
        "Real-time risk monitoring",
      ],
      restrictions: [
        "Maximum 2% daily loss",
        "No high-impact news trading",
        "Minimum 10 trading days",
      ],
    },
    {
      id: "express",
      name: "Express Evaluation",
      capital: "$50,000",
      fee: "$499",
      profitTarget: "10%",
      maxDrawdown: "6%",
      tradingDays: "15 minimum",
      profitSplit: "85%",
      popular: true,
      refundable: true,
      features: [
        "Refundable registration fee",
        "Fast-track evaluation process",
        "Higher profit split (85%)",
        "1:100 leverage available",
        "All major markets access",
        "Priority customer support",
        "Advanced analytics dashboard",
        "Dedicated account manager",
      ],
      restrictions: [
        "Maximum 3% daily loss",
        "Stricter consistency rules",
        "Minimum 15 trading days",
      ],
    },
    {
      id: "professional",
      name: "Professional Evaluation",
      capital: "$100,000",
      fee: "$899",
      profitTarget: "12%",
      maxDrawdown: "8%",
      tradingDays: "45 minimum",
      profitSplit: "90%",
      popular: false,
      refundable: true,
      features: [
        "Refundable registration fee",
        "Highest capital allocation",
        "Maximum profit split (90%)",
        "1:100 leverage available",
        "All markets including crypto",
        "VIP customer support",
        "Personal trading coach",
        "Advanced risk management tools",
      ],
      restrictions: [
        "Maximum 4% daily loss",
        "Advanced consistency requirements",
        "Minimum 45 trading days",
      ],
    },
  ];

  const companyStats = [
    {
      label: "Funded Traders",
      value: "12,500+",
      icon: <Users className="h-5 w-5" />,
    },
    {
      label: "Payouts Distributed",
      value: "$45M+",
      icon: <DollarSign className="h-5 w-5" />,
    },
    {
      label: "Success Rate",
      value: "78%",
      icon: <TrendingUp className="h-5 w-5" />,
    },
    {
      label: "Average Payout Time",
      value: "24hrs",
      icon: <Clock className="h-5 w-5" />,
    },
  ];

  const trustIndicators = [
    {
      title: "Regulated & Licensed",
      description: "Fully regulated by financial authorities",
      icon: <Shield className="h-6 w-6" />,
      verified: true,
    },
    {
      title: "Segregated Funds",
      description: "Client funds held in segregated accounts",
      icon: <Lock className="h-6 w-6" />,
      verified: true,
    },
    {
      title: "Transparent Operations",
      description: "Full transparency in all trading operations",
      icon: <FileText className="h-6 w-6" />,
      verified: true,
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock customer support",
      icon: <Phone className="h-6 w-6" />,
      verified: true,
    },
  ];

  const evaluationSteps = [
    {
      phase: "Phase 1",
      title: "Profit Target Challenge",
      description:
        "Demonstrate your trading skills by achieving the profit target while managing risk effectively",
      requirements: [
        "Achieve profit target (8-12% based on challenge)",
        "Maintain maximum drawdown limits",
        "Complete minimum trading days",
        "Follow all trading rules and guidelines",
        "Demonstrate consistent performance",
      ],
      duration: "No time limit",
      status: "current",
      successRate: "68%",
    },
    {
      phase: "Phase 2",
      title: "Consistency Verification",
      description:
        "Prove your trading consistency and risk management over an extended period",
      requirements: [
        "Achieve 5% profit target",
        "Maintain strict risk management",
        "Trade for minimum 30 days",
        "Show consistent daily performance",
        "No major drawdown violations",
      ],
      duration: "No time limit",
      status: "locked",
      successRate: "82%",
    },
    {
      phase: "Funded",
      title: "Live Trading Account",
      description:
        "Trade with real capital and receive regular profit share payments",
      requirements: [
        "Monthly profit targets (optional)",
        "Ongoing risk management compliance",
        "Regular performance monitoring",
        "Bi-weekly profit share payouts",
        "Account scaling opportunities",
      ],
      duration: "Ongoing",
      status: "locked",
      successRate: "94%",
    },
  ];

  const tradingRules = [
    {
      category: "Risk Management",
      rules: [
        "Maximum daily loss: 2-4% of account balance",
        "Maximum total drawdown: 5-8% (varies by challenge)",
        "Position sizing limits strictly enforced",
        "Real-time risk monitoring system",
        "Automatic position closure at limits",
      ],
      icon: <Shield className="h-5 w-5" />,
      color: "text-red-400",
      priority: "Critical",
    },
    {
      category: "Trading Requirements",
      rules: [
        "Minimum trading days: 15-45 (varies by challenge)",
        "Profit target must be achieved within rules",
        "Consistent trading approach required",
        "No gambling or revenge trading patterns",
        "Regular trading activity expected",
      ],
      icon: <Target className="h-5 w-5" />,
      color: "text-blue-400",
      priority: "Essential",
    },
    {
      category: "Permitted Strategies",
      rules: [
        "All legitimate trading strategies allowed",
        "Expert advisors (EAs) fully supported",
        "Scalping and swing trading permitted",
        "News trading with time restrictions",
        "Hedging strategies allowed",
      ],
      icon: <TrendingUp className="h-5 w-5" />,
      color: "text-green-400",
      priority: "Flexible",
    },
    {
      category: "Profit Distribution",
      rules: [
        "80-90% profit split (varies by challenge)",
        "Bi-weekly payout schedule",
        "No minimum payout threshold",
        "Performance bonuses available",
        "Account scaling based on performance",
      ],
      icon: <DollarSign className="h-5 w-5" />,
      color: "text-yellow-400",
      priority: "Rewarding",
    },
  ];

  const successStories = [
    {
      name: "Alexandra Chen",
      location: "Singapore",
      challenge: "Express Evaluation",
      capital: "$50,000",
      timeToFunded: "23 days",
      totalEarned: "$18,750",
      monthlyAvg: "$3,125",
      strategy: "Scalping EUR/USD & GBP/USD",
      rating: 5,
      verified: true,
      quote:
        "The evaluation process was transparent and fair. The support team guided me through every step. Now I'm consistently profitable with their capital.",
      joinDate: "March 2024",
    },
    {
      name: "Marcus Rodriguez",
      location: "Miami, FL",
      challenge: "Professional Evaluation",
      capital: "$100,000",
      timeToFunded: "41 days",
      totalEarned: "$34,200",
      monthlyAvg: "$5,700",
      strategy: "Swing Trading Indices & Commodities",
      rating: 5,
      verified: true,
      quote:
        "Best prop firm I've worked with. Payouts are always on time, rules are clear, and the profit split is generous. Highly recommended for serious traders.",
      joinDate: "January 2024",
    },
    {
      name: "Sarah Thompson",
      location: "London, UK",
      challenge: "Standard Evaluation",
      capital: "$25,000",
      timeToFunded: "35 days",
      totalEarned: "$12,450",
      monthlyAvg: "$2,075",
      strategy: "News Trading & Technical Analysis",
      rating: 5,
      verified: true,
      quote:
        "Started with the standard challenge to test the waters. The platform is professional, support is excellent, and I've been consistently profitable.",
      joinDate: "February 2024",
    },
  ];

  const benefits = [
    {
      icon: <Trophy className="h-8 w-8" />,
      title: "Up to $100K Capital",
      description:
        "Access substantial trading capital without risking your personal funds",
      color: "text-yellow-400",
      highlight: "No Personal Risk",
    },
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "90% Profit Split",
      description:
        "Keep up to 90% of profits with our industry-leading profit sharing",
      color: "text-green-400",
      highlight: "Industry Leading",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "No Time Pressure",
      description:
        "Take your time to meet targets without unrealistic deadlines",
      color: "text-blue-400",
      highlight: "Flexible Timeline",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Full Protection",
      description: "Your personal capital is never at risk during live trading",
      color: "text-purple-400",
      highlight: "100% Protected",
    },
  ];

  const myProgress = {
    phase: "Phase 1",
    challenge: "Express Evaluation",
    capital: "$50,000",
    currentBalance: "$52,450",
    profitTarget: 5000, // Changed to number
    currentProfit: 2450, // Changed to number
    maxDrawdown: 3000, // Changed to number
    currentDrawdown: 450, // Changed to number
    tradingDays: 12,
    requiredDays: 15,
    status: "in_progress",
    winRate: "68%",
    avgDailyReturn: "0.32%",
    sharpeRatio: "1.84",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="container mx-auto max-w-7xl px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-2 mb-6">
            <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 px-4 py-2">
              <Verified className="h-4 w-4 mr-2" />
              Regulated & Licensed
            </Badge>
            <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20 px-4 py-2">
              <Shield className="h-4 w-4 mr-2" />
              Funds Protected
            </Badge>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              Trade with
            </span>
            <br />
            <span className="bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Professional Capital
            </span>
          </h1>

          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Join thousands of successful traders who have proven their skills
            through our comprehensive evaluation process. Get funded with up to
            $100,000 and keep up to 90% of your profits.
          </p>

          {/* Company Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {companyStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-2 text-emerald-400">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid md:grid-cols-4 gap-4 mb-12">
          {trustIndicators.map((indicator, index) => (
            <Card
              key={index}
              className="bg-slate-900/50 border-slate-800/50 backdrop-blur-sm"
            >
              <CardContent className="p-4 text-center">
                <div className="flex justify-center mb-3 text-emerald-400">
                  {indicator.icon}
                </div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <h3 className="font-semibold text-white text-sm">
                    {indicator.title}
                  </h3>
                  {indicator.verified && (
                    <CheckCircle className="h-4 w-4 text-emerald-400" />
                  )}
                </div>
                <p className="text-xs text-slate-400">
                  {indicator.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="challenges" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 bg-slate-900/50 border-slate-800/50 backdrop-blur-sm">
            <TabsTrigger
              value="challenges"
              className="text-slate-300 data-[state=active]:bg-slate-800/50 data-[state=active]:text-white"
            >
              Evaluation Programs
            </TabsTrigger>
            <TabsTrigger
              value="evaluation"
              className="text-slate-300 data-[state=active]:bg-slate-800/50 data-[state=active]:text-white"
            >
              Process & Requirements
            </TabsTrigger>
            <TabsTrigger
              value="rules"
              className="text-slate-300 data-[state=active]:bg-slate-800/50 data-[state=active]:text-white"
            >
              Trading Guidelines
            </TabsTrigger>
            <TabsTrigger
              value="progress"
              className="text-slate-300 data-[state=active]:bg-slate-800/50 data-[state=active]:text-white"
            >
              My Dashboard
            </TabsTrigger>
          </TabsList>

          {/* Challenges Tab */}
          <TabsContent value="challenges">
            <div className="space-y-12">
              {/* Challenge Options */}
              <div className="grid lg:grid-cols-3 gap-8">
                {challenges.map((challenge) => (
                  <Card
                    key={challenge.id}
                    className={`bg-slate-900/50 border-slate-800/50 backdrop-blur-sm hover:bg-slate-900/70 transition-all duration-300 cursor-pointer ${
                      selectedChallenge === challenge.id
                        ? "ring-2 ring-emerald-500/50 shadow-lg shadow-emerald-500/10"
                        : ""
                    } ${challenge.popular ? "relative" : ""}`}
                    onClick={() => setSelectedChallenge(challenge.id)}
                  >
                    {challenge.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <Badge className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-4 py-1">
                          <Star className="h-3 w-3 mr-1" />
                          Most Popular
                        </Badge>
                      </div>
                    )}
                    <CardHeader className="pb-4">
                      <div className="text-center">
                        <CardTitle className="text-white text-2xl mb-3">
                          {challenge.name}
                        </CardTitle>
                        <div className="text-5xl font-bold bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent mb-2">
                          {challenge.capital}
                        </div>
                        <div className="text-slate-400 mb-4">
                          Trading Capital
                        </div>
                        {challenge.refundable && (
                          <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            Fee Refundable
                          </Badge>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-3 bg-slate-800/30 rounded-lg">
                          <div className="text-slate-400 text-sm">
                            Entry Fee
                          </div>
                          <div className="text-white font-bold text-lg">
                            {challenge.fee}
                          </div>
                        </div>
                        <div className="text-center p-3 bg-slate-800/30 rounded-lg">
                          <div className="text-slate-400 text-sm">
                            Profit Target
                          </div>
                          <div className="text-emerald-400 font-bold text-lg">
                            {challenge.profitTarget}
                          </div>
                        </div>
                        <div className="text-center p-3 bg-slate-800/30 rounded-lg">
                          <div className="text-slate-400 text-sm">
                            Max Drawdown
                          </div>
                          <div className="text-red-400 font-bold text-lg">
                            {challenge.maxDrawdown}
                          </div>
                        </div>
                        <div className="text-center p-3 bg-slate-800/30 rounded-lg">
                          <div className="text-slate-400 text-sm">
                            Profit Split
                          </div>
                          <div className="text-yellow-400 font-bold text-lg">
                            {challenge.profitSplit}
                          </div>
                        </div>
                      </div>

                      <Separator className="bg-slate-800/50" />

                      <div className="space-y-3">
                        <div className="text-slate-300 font-medium flex items-center">
                          <CheckCircle className="h-4 w-4 text-emerald-400 mr-2" />
                          Key Features:
                        </div>
                        {challenge.features
                          .slice(0, 4)
                          .map((feature, index) => (
                            <div
                              key={index}
                              className="flex items-center space-x-2"
                            >
                              <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                              <span className="text-slate-300 text-sm">
                                {feature}
                              </span>
                            </div>
                          ))}
                        {challenge.features.length > 4 && (
                          <div className="text-slate-400 text-sm">
                            +{challenge.features.length - 4} more features
                          </div>
                        )}
                      </div>

                      <Button
                        className={`w-full h-12 font-semibold ${
                          selectedChallenge === challenge.id
                            ? "bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600"
                            : "bg-slate-800/50 hover:bg-slate-700/50 text-slate-300"
                        }`}
                        asChild
                      >
                        <a href="https://dex.whiterock24.ai/sign-in">
                          {selectedChallenge === challenge.id
                            ? "Selected Challenge"
                            : "Select Challenge"}
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Benefits Section */}
              <Card className="bg-transparent border-none backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white text-2xl text-center mb-2">
                    Why Choose Our Platform?
                  </CardTitle>
                  <p className="text-slate-400 text-center">
                    Industry-leading benefits for professional traders
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="text-center group">
                        <div
                          className={`w-20 h-20 rounded-2xl bg-slate-800/50 flex items-center justify-center mx-auto mb-4 ${benefit.color} group-hover:scale-110 transition-transform duration-300`}
                        >
                          {benefit.icon}
                        </div>
                        <Badge className="mb-3 bg-slate-800/30 text-slate-300 border-slate-700/30">
                          {benefit.highlight}
                        </Badge>
                        <h3 className="text-white font-bold text-lg mb-2">
                          {benefit.title}
                        </h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Success Stories */}
              <Card className="bg-slate-900/50 border-slate-800/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white text-2xl flex items-center">
                    <Trophy className="h-6 w-6 mr-3 text-yellow-400" />
                    Verified Success Stories
                  </CardTitle>
                  <p className="text-slate-400">
                    Real traders achieving real results
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="grid lg:grid-cols-3 gap-8">
                    {successStories.map((story, index) => (
                      <div
                        key={index}
                        className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl p-6 border border-slate-700/30"
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <div className="text-white font-bold text-lg">
                                {story.name}
                              </div>
                              {story.verified && (
                                <Verified className="h-4 w-4 text-emerald-400" />
                              )}
                            </div>
                            <div className="text-slate-400 text-sm">
                              {story.location}
                            </div>
                            <div className="flex items-center mt-2">
                              {[...Array(story.rating)].map((_, i) => (
                                <Star
                                  key={i}
                                  className="h-4 w-4 text-yellow-400 fill-current"
                                />
                              ))}
                            </div>
                          </div>
                          <Badge className="bg-slate-800/30 text-slate-300 border-slate-700/30">
                            {story.timeToFunded}
                          </Badge>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div className="text-center p-2 bg-slate-800/30 rounded">
                            <div className="text-slate-400 text-xs">
                              Capital
                            </div>
                            <div className="text-white font-bold text-sm">
                              {story.capital}
                            </div>
                          </div>
                          <div className="text-center p-2 bg-slate-800/30 rounded">
                            <div className="text-slate-400 text-xs">
                              Total Earned
                            </div>
                            <div className="text-emerald-400 font-bold text-sm">
                              {story.totalEarned}
                            </div>
                          </div>
                        </div>

                        <div className="mb-4">
                          <div className="text-slate-400 text-xs mb-1">
                            Monthly Average
                          </div>
                          <div className="text-blue-400 font-semibold">
                            {story.monthlyAvg}
                          </div>
                        </div>

                        <div className="mb-4">
                          <div className="text-slate-400 text-xs mb-1">
                            Strategy
                          </div>
                          <div className="text-slate-300 text-sm">
                            {story.strategy}
                          </div>
                        </div>

                        <blockquote className="text-slate-300 text-sm italic leading-relaxed border-l-2 border-emerald-500/30 pl-3">
                          "{story.quote}"
                        </blockquote>

                        <div className="mt-4 pt-3 border-t border-slate-700/30">
                          <div className="text-slate-500 text-xs">
                            Trader since {story.joinDate}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Evaluation Process Tab */}
          <TabsContent value="evaluation">
            <div className="space-y-8">
              {evaluationSteps.map((step, index) => (
                <Card
                  key={index}
                  className={`bg-slate-900/50 border-slate-800/50 backdrop-blur-sm ${
                    step.status === "current"
                      ? "ring-2 ring-emerald-500/50 shadow-lg shadow-emerald-500/10"
                      : step.status === "locked"
                      ? "opacity-70"
                      : ""
                  }`}
                >
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-8">
                      <div className="flex-shrink-0">
                        <div
                          className={`w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-xl ${
                            step.status === "current"
                              ? "bg-gradient-to-r from-emerald-500 to-blue-500"
                              : step.status === "completed"
                              ? "bg-emerald-500"
                              : "bg-slate-600"
                          }`}
                        >
                          {step.status === "completed" ? (
                            <CheckCircle className="h-10 w-10" />
                          ) : (
                            index + 1
                          )}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-6">
                          <div>
                            <Badge className="mb-3 bg-slate-800/30 text-slate-300 border-slate-700/30">
                              {step.phase}
                            </Badge>
                            <h3 className="text-white font-bold text-2xl mb-2">
                              {step.title}
                            </h3>
                            <p className="text-slate-400 text-lg leading-relaxed">
                              {step.description}
                            </p>
                          </div>
                          <div className="text-right">
                            <div className="text-slate-400 text-sm mb-1">
                              Success Rate
                            </div>
                            <div className="text-emerald-400 font-bold text-xl">
                              {step.successRate}
                            </div>
                            <div className="text-slate-400 text-sm mt-2">
                              Duration
                            </div>
                            <div className="text-white font-medium">
                              {step.duration}
                            </div>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <div className="text-slate-300 font-medium mb-4">
                            Key Requirements:
                          </div>
                          <div className="grid md:grid-cols-2 gap-3">
                            {step.requirements.map((requirement, reqIndex) => (
                              <div
                                key={reqIndex}
                                className="flex items-start space-x-3 p-3 bg-slate-800/30 rounded-lg"
                              >
                                <CheckCircle className="h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                                <span className="text-slate-300 text-sm">
                                  {requirement}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Trading Rules Tab */}
          <TabsContent value="rules">
            <div className="grid lg:grid-cols-2 gap-8">
              {tradingRules.map((category, index) => (
                <Card
                  key={index}
                  className="bg-slate-900/50 border-slate-800/50 backdrop-blur-sm"
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div
                          className={`${category.color} p-2 bg-slate-800/30 rounded-lg`}
                        >
                          {category.icon}
                        </div>
                        <div>
                          <CardTitle className="text-white text-xl">
                            {category.category}
                          </CardTitle>
                          <Badge className="mt-1 bg-slate-800/30 text-slate-400 border-slate-700/30">
                            {category.priority}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {category.rules.map((rule, ruleIndex) => (
                      <div
                        key={ruleIndex}
                        className="flex items-start space-x-3 p-3 bg-slate-800/20 rounded-lg"
                      >
                        <CheckCircle className="h-4 w-4 text-emerald-400 mt-1 flex-shrink-0" />
                        <span className="text-slate-300 text-sm leading-relaxed">
                          {rule}
                        </span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Risk Disclosure */}
            <Card className="bg-gradient-to-r from-amber-900/20 to-red-900/20 border-amber-500/20 mt-8">
              <CardHeader>
                <CardTitle className="text-amber-400 flex items-center">
                  <AlertTriangle className="h-5 w-5 mr-2" />
                  Risk Disclosure
                </CardTitle>
              </CardHeader>
              <CardContent className="text-amber-200/80 text-sm leading-relaxed">
                <p>
                  Trading involves substantial risk and may not be suitable for
                  all investors. Past performance is not indicative of future
                  results. You should carefully consider whether trading is
                  suitable for you in light of your circumstances, knowledge,
                  and financial resources. You may lose all or more of your
                  initial investment. All trading rules must be followed to
                  maintain funded status.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Progress Dashboard Tab */}
          <TabsContent value="progress">
            <div className="space-y-8">
              {/* Progress Overview */}
              <Card className="bg-gradient-to-r from-slate-900/50 to-slate-800/50 border-slate-700/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-white text-3xl mb-2">
                        {myProgress.challenge}
                      </CardTitle>
                      <p className="text-slate-400 text-lg">
                        Current Phase:{" "}
                        <span className="text-emerald-400 font-semibold">
                          {myProgress.phase}
                        </span>
                      </p>
                    </div>
                    <div className="text-right">
                      <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 px-4 py-2">
                        Progress Overview
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-slate-800/30 rounded-lg">
                      <div className="text-slate-400 text-sm">
                        Current Balance
                      </div>
                      <div className="text-white font-bold text-lg">
                        {myProgress.currentBalance}
                      </div>
                    </div>
                    <div className="text-center p-3 bg-slate-800/30 rounded-lg">
                      <div className="text-slate-400 text-sm">
                        Profit Target
                      </div>
                      <div className="text-emerald-400 font-bold text-lg">
                        ${myProgress.profitTarget}
                      </div>
                    </div>
                    <div className="text-center p-3 bg-slate-800/30 rounded-lg">
                      <div className="text-slate-400 text-sm">
                        Current Profit
                      </div>
                      <div className="text-emerald-400 font-bold text-lg">
                        ${myProgress.currentProfit}
                      </div>
                    </div>
                    <div className="text-center p-3 bg-slate-800/30 rounded-lg">
                      <div className="text-slate-400 text-sm">Max Drawdown</div>
                      <div className="text-red-400 font-bold text-lg">
                        ${myProgress.maxDrawdown}
                      </div>
                    </div>
                    <div className="text-center p-3 bg-slate-800/30 rounded-lg">
                      <div className="text-slate-400 text-sm">
                        Current Drawdown
                      </div>
                      <div className="text-red-400 font-bold text-lg">
                        ${myProgress.currentDrawdown}
                      </div>
                    </div>
                    <div className="text-center p-3 bg-slate-800/30 rounded-lg">
                      <div className="text-slate-400 text-sm">Trading Days</div>
                      <div className="text-white font-bold text-lg">
                        {myProgress.tradingDays}
                      </div>
                    </div>
                    <div className="text-center p-3 bg-slate-800/30 rounded-lg">
                      <div className="text-slate-400 text-sm">
                        Required Days
                      </div>
                      <div className="text-white font-bold text-lg">
                        {myProgress.requiredDays}
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-slate-800/30 rounded-lg">
                      <div className="text-slate-400 text-sm">Win Rate</div>
                      <div className="text-emerald-400 font-bold text-lg">
                        {myProgress.winRate}
                      </div>
                    </div>
                    <div className="text-center p-3 bg-slate-800/30 rounded-lg">
                      <div className="text-slate-400 text-sm">
                        Average Daily Return
                      </div>
                      <div className="text-emerald-400 font-bold text-lg">
                        {myProgress.avgDailyReturn}
                      </div>
                    </div>
                    <div className="text-center p-3 bg-slate-800/30 rounded-lg">
                      <div className="text-slate-400 text-sm">Sharpe Ratio</div>
                      <div className="text-emerald-400 font-bold text-lg">
                        {myProgress.sharpeRatio}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
