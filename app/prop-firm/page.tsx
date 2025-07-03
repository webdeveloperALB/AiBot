"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Trophy, Target, Shield, TrendingUp, DollarSign, Clock, Award, CheckCircle } from "lucide-react"

export default function PropFirmPage() {
  const [selectedChallenge, setSelectedChallenge] = useState("standard")

  const challenges = [
    {
      id: "standard",
      name: "Standard Challenge",
      capital: "$25,000",
      fee: "$299",
      profitTarget: "8%",
      maxDrawdown: "5%",
      tradingDays: "30 minimum",
      profitSplit: "80%",
      popular: false,
      features: [
        "No time limit on Phase 1",
        "1:100 leverage available",
        "All major markets",
        "Weekend holding allowed",
        "Expert advisor allowed",
      ],
    },
    {
      id: "express",
      name: "Express Challenge",
      capital: "$50,000",
      fee: "$499",
      profitTarget: "10%",
      maxDrawdown: "6%",
      tradingDays: "15 minimum",
      profitSplit: "85%",
      popular: true,
      features: [
        "Fast-track evaluation",
        "Higher profit split",
        "1:100 leverage available",
        "All major markets",
        "Priority support",
      ],
    },
    {
      id: "professional",
      name: "Professional Challenge",
      capital: "$100,000",
      fee: "$899",
      profitTarget: "12%",
      maxDrawdown: "8%",
      tradingDays: "45 minimum",
      profitSplit: "90%",
      popular: false,
      features: [
        "Highest capital allocation",
        "Maximum profit split",
        "1:100 leverage available",
        "All markets + crypto",
        "Dedicated account manager",
      ],
    },
  ]

  const evaluationSteps = [
    {
      phase: "Phase 1",
      title: "Profit Target Challenge",
      description: "Achieve the profit target while staying within drawdown limits",
      requirements: [
        "Reach profit target (8-12% depending on challenge)",
        "Stay within maximum drawdown limit",
        "Trade for minimum required days",
        "No consistency rule violations",
      ],
      duration: "No time limit",
      status: "current",
    },
    {
      phase: "Phase 2",
      title: "Verification Phase",
      description: "Demonstrate consistent trading performance",
      requirements: [
        "Achieve 5% profit target",
        "Maintain risk management",
        "Trade for 30 days minimum",
        "Show consistent performance",
      ],
      duration: "No time limit",
      status: "locked",
    },
    {
      phase: "Funded",
      title: "Live Trading Account",
      description: "Trade with real capital and earn profit splits",
      requirements: [
        "Monthly profit targets",
        "Ongoing risk management",
        "Regular performance reviews",
        "Profit sharing payouts",
      ],
      duration: "Ongoing",
      status: "locked",
    },
  ]

  const tradingRules = [
    {
      category: "Risk Management",
      rules: [
        "Maximum daily loss: 3% of account balance",
        "Maximum total drawdown: 5-8% (varies by challenge)",
        "No overnight positions on high-impact news",
        "Position sizing limits apply",
      ],
      icon: <Shield className="h-5 w-5" />,
      color: "text-red-400",
    },
    {
      category: "Trading Requirements",
      rules: [
        "Minimum trading days: 15-45 (varies by challenge)",
        "Profit target must be achieved",
        "No gambling or revenge trading",
        "Consistent trading approach required",
      ],
      icon: <Target className="h-5 w-5" />,
      color: "text-blue-400",
    },
    {
      category: "Allowed Strategies",
      rules: [
        "All trading strategies permitted",
        "Expert advisors (EAs) allowed",
        "Scalping and swing trading",
        "News trading with restrictions",
      ],
      icon: <TrendingUp className="h-5 w-5" />,
      color: "text-green-400",
    },
    {
      category: "Profit Sharing",
      rules: [
        "80-90% profit split (varies by challenge)",
        "Monthly payout schedule",
        "No minimum payout amount",
        "Performance bonuses available",
      ],
      icon: <DollarSign className="h-5 w-5" />,
      color: "text-yellow-400",
    },
  ]

  const successStories = [
    {
      name: "Alex Chen",
      challenge: "Express Challenge",
      capital: "$50,000",
      timeToFunded: "23 days",
      totalEarned: "$12,450",
      strategy: "Scalping EUR/USD",
      quote:
        "The evaluation process was fair and transparent. Now I'm trading with real capital and earning consistent profits.",
    },
    {
      name: "Sarah Rodriguez",
      challenge: "Professional Challenge",
      capital: "$100,000",
      timeToFunded: "41 days",
      totalEarned: "$28,900",
      strategy: "Swing Trading Indices",
      quote: "Best prop firm I've worked with. The support team is excellent and payouts are always on time.",
    },
    {
      name: "Michael Thompson",
      challenge: "Standard Challenge",
      capital: "$25,000",
      timeToFunded: "35 days",
      totalEarned: "$8,750",
      strategy: "News Trading",
      quote: "Started small and proved myself. The profit sharing is generous and the rules are clear and fair.",
    },
  ]

  const benefits = [
    {
      icon: <Trophy className="h-6 w-6" />,
      title: "Up to $100K Capital",
      description: "Trade with substantial capital without risking your own money",
      color: "text-yellow-400",
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "90% Profit Split",
      description: "Keep up to 90% of the profits you generate",
      color: "text-green-400",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "No Time Pressure",
      description: "Take your time to meet targets without strict deadlines",
      color: "text-blue-400",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Risk Protection",
      description: "Your personal funds are never at risk during live trading",
      color: "text-purple-400",
    },
  ]

  const myProgress = {
    phase: "Phase 1",
    challenge: "Express Challenge",
    capital: "$50,000",
    currentBalance: "$52,450",
    profitTarget: "$5,000",
    currentProfit: "$2,450",
    maxDrawdown: "$3,000",
    currentDrawdown: "$450",
    tradingDays: 12,
    requiredDays: 15,
    status: "in_progress",
  }

  return (
    <div className="py-8 px-4 bg-black">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-gray-800/20 text-gray-300 border-gray-700/30">Funded Trading Program</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get Funded to
            <span className="bg-gradient-to-r from-gray-400 to-gray-300 bg-clip-text text-transparent">
              {" "}
              Trade Professionally
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Prove your trading skills through our evaluation process and get funded with up to $100,000 in trading
            capital. Keep up to 90% of the profits you generate.
          </p>
        </div>

        <Tabs defaultValue="challenges" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 bg-gray-900/30 border-gray-800/10">
            <TabsTrigger value="challenges" className="text-white data-[state=active]:bg-gray-800/50">
              Challenges
            </TabsTrigger>
            <TabsTrigger value="evaluation" className="text-white data-[state=active]:bg-gray-800/50">
              Evaluation Process
            </TabsTrigger>
            <TabsTrigger value="rules" className="text-white data-[state=active]:bg-gray-800/50">
              Trading Rules
            </TabsTrigger>
            <TabsTrigger value="progress" className="text-white data-[state=active]:bg-gray-800/50">
              My Progress
            </TabsTrigger>
          </TabsList>

          {/* Challenges */}
          <TabsContent value="challenges">
            <div className="space-y-8">
              {/* Challenge Options */}
              <div className="grid lg:grid-cols-3 gap-6">
                {challenges.map((challenge) => (
                  <Card
                    key={challenge.id}
                    className={`bg-black/5 border-gray-800/10 hover:bg-black/10 transition-all cursor-pointer ${
                      selectedChallenge === challenge.id ? "ring-2 ring-gray-600" : ""
                    } ${challenge.popular ? "relative" : ""}`}
                    onClick={() => setSelectedChallenge(challenge.id)}
                  >
                    {challenge.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <Badge className="bg-gradient-to-r from-gray-700 to-gray-900 text-white">Most Popular</Badge>
                      </div>
                    )}
                    <CardHeader>
                      <div className="text-center">
                        <CardTitle className="text-white text-2xl mb-2">{challenge.name}</CardTitle>
                        <div className="text-4xl font-bold text-green-400 mb-2">{challenge.capital}</div>
                        <div className="text-gray-400">Trading Capital</div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <div className="text-gray-400">Entry Fee</div>
                          <div className="text-white font-bold">{challenge.fee}</div>
                        </div>
                        <div>
                          <div className="text-gray-400">Profit Target</div>
                          <div className="text-white font-bold">{challenge.profitTarget}</div>
                        </div>
                        <div>
                          <div className="text-gray-400">Max Drawdown</div>
                          <div className="text-white font-bold">{challenge.maxDrawdown}</div>
                        </div>
                        <div>
                          <div className="text-gray-400">Profit Split</div>
                          <div className="text-white font-bold">{challenge.profitSplit}</div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="text-gray-400 text-sm font-medium">Features:</div>
                        {challenge.features.map((feature, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-400" />
                            <span className="text-gray-300 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <Button
                        className={`w-full ${
                          selectedChallenge === challenge.id
                            ? "bg-gradient-to-r from-gray-700 to-gray-900"
                            : "bg-gray-800/50 hover:bg-gray-700/50"
                        }`}
                      >
                        {selectedChallenge === challenge.id ? "Selected" : "Select Challenge"}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Benefits */}
              <Card className="bg-black/5 border-gray-800/10">
                <CardHeader>
                  <CardTitle className="text-white text-xl">Why Choose Our Prop Firm?</CardTitle>
                  <p className="text-gray-400">Industry-leading benefits for professional traders</p>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="text-center">
                        <div
                          className={`w-16 h-16 rounded-2xl bg-gray-800/50 flex items-center justify-center mx-auto mb-4 ${benefit.color}`}
                        >
                          {benefit.icon}
                        </div>
                        <h3 className="text-white font-bold text-lg mb-2">{benefit.title}</h3>
                        <p className="text-gray-400 text-sm">{benefit.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Success Stories */}
              <Card className="bg-black/5 border-gray-800/10">
                <CardHeader>
                  <CardTitle className="text-white text-xl">Success Stories</CardTitle>
                  <p className="text-gray-400">Real traders, real results</p>
                </CardHeader>
                <CardContent>
                  <div className="grid lg:grid-cols-3 gap-6">
                    {successStories.map((story, index) => (
                      <div key={index} className="bg-gray-900/30 rounded-xl p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <div className="text-white font-bold text-lg">{story.name}</div>
                            <div className="text-gray-400 text-sm">{story.challenge}</div>
                          </div>
                          <Badge className="bg-gray-800/20 text-gray-400">{story.timeToFunded}</Badge>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                          <div>
                            <div className="text-gray-400">Capital</div>
                            <div className="text-white font-bold">{story.capital}</div>
                          </div>
                          <div>
                            <div className="text-gray-400">Total Earned</div>
                            <div className="text-green-400 font-bold">{story.totalEarned}</div>
                          </div>
                        </div>

                        <div className="mb-4">
                          <div className="text-gray-400 text-sm">Strategy</div>
                          <div className="text-white text-sm">{story.strategy}</div>
                        </div>

                        <blockquote className="text-gray-300 text-sm italic">"{story.quote}"</blockquote>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Evaluation Process */}
          <TabsContent value="evaluation">
            <div className="space-y-6">
              {evaluationSteps.map((step, index) => (
                <Card
                  key={index}
                  className={`bg-black/5 border-gray-800/10 ${
                    step.status === "current" ? "ring-2 ring-gray-600" : step.status === "locked" ? "opacity-60" : ""
                  }`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0">
                        <div
                          className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg ${
                            step.status === "current"
                              ? "bg-gradient-to-r from-gray-700 to-gray-900"
                              : step.status === "completed"
                                ? "bg-green-500"
                                : "bg-gray-600"
                          }`}
                        >
                          {step.status === "completed" ? <CheckCircle className="h-8 w-8" /> : index + 1}
                        </div>
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <Badge className="mb-2 bg-gray-800/20 text-gray-400">{step.phase}</Badge>
                            <h3 className="text-white font-bold text-xl">{step.title}</h3>
                            <p className="text-gray-400">{step.description}</p>
                          </div>
                          <div className="text-right">
                            <div className="text-gray-400 text-sm">Duration</div>
                            <div className="text-white font-medium">{step.duration}</div>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="text-gray-400 text-sm font-medium">Requirements:</div>
                          {step.requirements.map((requirement, reqIndex) => (
                            <div key={reqIndex} className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-green-400" />
                              <span className="text-gray-300 text-sm">{requirement}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Trading Rules */}
          <TabsContent value="rules">
            <div className="grid lg:grid-cols-2 gap-6">
              {tradingRules.map((category, index) => (
                <Card key={index} className="bg-black/5 border-gray-800/10">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className={`${category.color}`}>{category.icon}</div>
                      <CardTitle className="text-white">{category.category}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {category.rules.map((rule, ruleIndex) => (
                      <div key={ruleIndex} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{rule}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* My Progress */}
          <TabsContent value="progress">
            <div className="space-y-6">
              {/* Progress Overview */}
              <Card className="bg-black/5 border-gray-800/10">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-white text-2xl">{myProgress.challenge}</CardTitle>
                      <p className="text-gray-400">Current Phase: {myProgress.phase}</p>
                    </div>
                    <Badge className="bg-gray-800/20 text-gray-400">{myProgress.status.replace("_", " ")}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white mb-2">{myProgress.capital}</div>
                      <div className="text-gray-400">Starting Capital</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-400 mb-2">{myProgress.currentBalance}</div>
                      <div className="text-gray-400">Current Balance</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-400 mb-2">
                        ${myProgress.currentProfit.toLocaleString()}
                      </div>
                      <div className="text-gray-400">Current Profit</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-400 mb-2">{myProgress.tradingDays}</div>
                      <div className="text-gray-400">Trading Days</div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {/* Profit Target Progress */}
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white font-medium">Profit Target Progress</span>
                        <span className="text-green-400 font-bold">
                          ${myProgress.currentProfit.toLocaleString()} / ${myProgress.profitTarget.toLocaleString()}
                        </span>
                      </div>
                      <Progress
                        value={
                          (myProgress.currentProfit / Number.parseInt(myProgress.profitTarget.replace(/[$,]/g, ""))) *
                          100
                        }
                        className="h-3"
                      />
                      <div className="text-gray-400 text-sm mt-1">
                        {(
                          (myProgress.currentProfit / Number.parseInt(myProgress.profitTarget.replace(/[$,]/g, ""))) *
                          100
                        ).toFixed(1)}
                        % completed
                      </div>
                    </div>

                    {/* Drawdown Status */}
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white font-medium">Drawdown Status</span>
                        <span className="text-red-400 font-bold">
                          ${myProgress.currentDrawdown.toLocaleString()} / ${myProgress.maxDrawdown.toLocaleString()}
                        </span>
                      </div>
                      <Progress
                        value={
                          (myProgress.currentDrawdown / Number.parseInt(myProgress.maxDrawdown.replace(/[$,]/g, ""))) *
                          100
                        }
                        className="h-3"
                      />
                      <div className="text-gray-400 text-sm mt-1">
                        {(
                          (myProgress.currentDrawdown / Number.parseInt(myProgress.maxDrawdown.replace(/[$,]/g, ""))) *
                          100
                        ).toFixed(1)}
                        % of maximum
                      </div>
                    </div>

                    {/* Trading Days Progress */}
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white font-medium">Trading Days</span>
                        <span className="text-blue-400 font-bold">
                          {myProgress.tradingDays} / {myProgress.requiredDays} days
                        </span>
                      </div>
                      <Progress value={(myProgress.tradingDays / myProgress.requiredDays) * 100} className="h-3" />
                      <div className="text-gray-400 text-sm mt-1">
                        {((myProgress.tradingDays / myProgress.requiredDays) * 100).toFixed(1)}% completed
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Next Steps */}
              <Card className="bg-gradient-to-r from-gray-800/20 to-gray-900/20 border-gray-700/30">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Award className="h-6 w-6 mr-2" />
                    Next Steps to Get Funded
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-white">Complete remaining trading days (3 more days needed)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-white">
                      Achieve profit target ($
                      {(
                        Number.parseInt(myProgress.profitTarget.replace(/[$,]/g, "")) - myProgress.currentProfit
                      ).toLocaleString()}{" "}
                      remaining)
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-gray-400" />
                    <span className="text-gray-400">Maintain risk management rules</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-gray-400" />
                    <span className="text-gray-400">Submit for evaluation review</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
