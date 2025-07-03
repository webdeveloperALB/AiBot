"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, TrendingUp, Trophy, Globe, Zap, Target, Clock, Users, Shield } from "lucide-react"

export default function EventsPage() {
  const [betAmount, setBetAmount] = useState("")
  const [selectedEvent, setSelectedEvent] = useState(null)

  const eventCategories = [
    {
      id: "politics",
      name: "Politics",
      icon: <Globe className="h-5 w-5" />,
      count: 45,
      volume: "$2.3M",
      color: "text-blue-400",
    },
    {
      id: "sports",
      name: "Sports",
      icon: <Trophy className="h-5 w-5" />,
      count: 128,
      volume: "$5.7M",
      color: "text-green-400",
    },
    {
      id: "crypto",
      name: "Crypto",
      icon: <TrendingUp className="h-5 w-5" />,
      count: 67,
      volume: "$3.1M",
      color: "text-yellow-400",
    },
    {
      id: "economy",
      name: "Economy",
      icon: <Target className="h-5 w-5" />,
      count: 34,
      volume: "$1.8M",
      color: "text-purple-400",
    },
    {
      id: "entertainment",
      name: "Entertainment",
      icon: <Zap className="h-5 w-5" />,
      count: 89,
      volume: "$2.9M",
      color: "text-pink-400",
    },
    {
      id: "technology",
      name: "Technology",
      icon: <Calendar className="h-5 w-5" />,
      count: 56,
      volume: "$2.2M",
      color: "text-cyan-400",
    },
  ]

  const featuredEvents = [
    {
      id: 1,
      title: "2024 US Presidential Election Winner",
      category: "Politics",
      description: "Who will win the 2024 United States Presidential Election?",
      endDate: "2024-11-05",
      totalVolume: "$1,234,567",
      participants: 15678,
      options: [
        { name: "Democratic Candidate", odds: "1.85", probability: "54%", volume: "$667,866" },
        { name: "Republican Candidate", odds: "2.10", probability: "48%", volume: "$566,701" },
      ],
      status: "active",
      featured: true,
    },
    {
      id: 2,
      title: "Bitcoin Price Above $120,000 by End of 2024",
      category: "Crypto",
      description: "Will Bitcoin (BTC) reach or exceed $120,000 USD by December 31, 2024?",
      endDate: "2024-12-31",
      totalVolume: "$892,345",
      participants: 8934,
      options: [
        { name: "Yes", odds: "2.45", probability: "41%", volume: "$365,781" },
        { name: "No", odds: "1.65", probability: "61%", volume: "$526,564" },
      ],
      status: "active",
      featured: true,
    },
    {
      id: 3,
      title: "Super Bowl 2025 Winner",
      category: "Sports",
      description: "Which team will win Super Bowl LIX in 2025?",
      endDate: "2025-02-09",
      totalVolume: "$2,156,789",
      participants: 23456,
      options: [
        { name: "Kansas City Chiefs", odds: "3.20", probability: "31%", volume: "$668,605" },
        { name: "Buffalo Bills", odds: "4.50", probability: "22%", volume: "$474,493" },
        { name: "San Francisco 49ers", odds: "5.00", probability: "20%", volume: "$431,358" },
        { name: "Other Teams", odds: "2.80", probability: "36%", volume: "$582,333" },
      ],
      status: "active",
      featured: true,
    },
  ]

  const liveEvents = [
    {
      id: 4,
      title: "Federal Reserve Interest Rate Decision",
      category: "Economy",
      description: "Will the Fed raise, lower, or maintain interest rates in the next meeting?",
      endDate: "2024-01-31",
      totalVolume: "$456,789",
      participants: 3456,
      options: [
        { name: "Raise 0.25%", odds: "3.50", probability: "29%" },
        { name: "Maintain Current", odds: "1.80", probability: "56%" },
        { name: "Lower 0.25%", odds: "6.00", probability: "17%" },
      ],
      status: "live",
      timeLeft: "2 days",
    },
    {
      id: 5,
      title: "Tesla Q4 2024 Earnings Beat Estimates",
      category: "Technology",
      description: "Will Tesla's Q4 2024 earnings per share exceed analyst estimates?",
      endDate: "2024-01-25",
      totalVolume: "$234,567",
      participants: 1876,
      options: [
        { name: "Yes", odds: "2.20", probability: "45%" },
        { name: "No", odds: "1.75", probability: "57%" },
      ],
      status: "live",
      timeLeft: "5 hours",
    },
    {
      id: 6,
      title: "Grammy Awards 2024 Album of the Year",
      category: "Entertainment",
      description: "Which album will win Grammy Award for Album of the Year 2024?",
      endDate: "2024-02-04",
      totalVolume: "$345,678",
      participants: 4567,
      options: [
        { name: "Taylor Swift - Midnights", odds: "2.10", probability: "48%" },
        { name: "Beyoncé - Renaissance", odds: "2.80", probability: "36%" },
        { name: "Harry Styles - Harry's House", odds: "4.50", probability: "22%" },
        { name: "Other Nominees", odds: "8.00", probability: "13%" },
      ],
      status: "live",
      timeLeft: "1 week",
    },
  ]

  const myBets = [
    {
      event: "Bitcoin Price Above $120,000 by End of 2024",
      position: "Yes",
      amount: "$500",
      odds: "2.45",
      potentialWin: "$1,225",
      status: "active",
      currentOdds: "2.30",
    },
    {
      event: "2024 US Presidential Election Winner",
      position: "Democratic Candidate",
      amount: "$250",
      odds: "1.85",
      potentialWin: "$462.50",
      status: "active",
      currentOdds: "1.90",
    },
    {
      event: "Federal Reserve Interest Rate Decision",
      position: "Maintain Current",
      amount: "$100",
      odds: "1.80",
      potentialWin: "$180",
      status: "settled",
      result: "won",
    },
  ]

  const eventFeatures = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Real-Time Odds",
      description: "Live odds updates based on market sentiment and volume",
      color: "text-blue-400",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Transparent Results",
      description: "Verifiable outcomes from trusted data sources",
      color: "text-green-400",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Community Insights",
      description: "See what other traders are betting on and why",
      color: "text-purple-400",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Instant Payouts",
      description: "Automatic settlement and instant withdrawals",
      color: "text-yellow-400",
    },
  ]

  return (
    <div className="py-8 px-4 bg-black">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-gray-800/20 text-gray-300 border-gray-700/30">Prediction Markets</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Trade on
            <span className="bg-gradient-to-r from-gray-400 to-gray-300 bg-clip-text text-transparent">
              {" "}
              Real Events
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Predict outcomes of real-world events across politics, sports, crypto, economy, entertainment, and
            technology. Trade on your knowledge and earn from accurate predictions.
          </p>
        </div>

        {/* Event Categories */}
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {eventCategories.map((category) => (
            <Card
              key={category.id}
              className="bg-black/5 border-gray-800/10 hover:bg-black/10 transition-all cursor-pointer"
            >
              <CardContent className="p-6 text-center">
                <div
                  className={`w-12 h-12 rounded-xl bg-gray-800/50 flex items-center justify-center mx-auto mb-3 ${category.color}`}
                >
                  {category.icon}
                </div>
                <div className="text-white font-bold text-sm mb-1">{category.name}</div>
                <div className="text-gray-400 text-xs mb-2">{category.count} Events</div>
                <div className="text-gray-400 text-xs">{category.volume} Volume</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="featured" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3 bg-gray-900/30 border-gray-800/10">
            <TabsTrigger value="featured" className="text-white data-[state=active]:bg-gray-800/50">
              Featured Events
            </TabsTrigger>
            <TabsTrigger value="live" className="text-white data-[state=active]:bg-gray-800/50">
              Live Events
            </TabsTrigger>
            <TabsTrigger value="portfolio" className="text-white data-[state=active]:bg-gray-800/50">
              My Bets
            </TabsTrigger>
          </TabsList>

          {/* Featured Events */}
          <TabsContent value="featured">
            <div className="space-y-6">
              {featuredEvents.map((event) => (
                <Card key={event.id} className="bg-black/5 border-gray-800/10">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <Badge className="bg-gray-800/20 text-gray-400">{event.category}</Badge>
                          {event.featured && <Badge className="bg-gray-800/20 text-gray-400">Featured</Badge>}
                        </div>
                        <CardTitle className="text-white text-xl mb-2">{event.title}</CardTitle>
                        <p className="text-gray-400 text-sm mb-4">{event.description}</p>
                        <div className="flex items-center space-x-6 text-sm">
                          <div className="flex items-center space-x-2">
                            <Calendar className="h-4 w-4 text-gray-400" />
                            <span className="text-gray-400">Ends: {event.endDate}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Users className="h-4 w-4 text-gray-400" />
                            <span className="text-gray-400">{event.participants.toLocaleString()} participants</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <TrendingUp className="h-4 w-4 text-gray-400" />
                            <span className="text-gray-400">{event.totalVolume} volume</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {event.options.map((option, index) => (
                        <Card
                          key={index}
                          className="bg-gray-900/30 border-gray-800/10 hover:bg-gray-800/30 transition-all cursor-pointer"
                        >
                          <CardContent className="p-4">
                            <div className="text-center">
                              <div className="text-white font-bold text-sm mb-2">{option.name}</div>
                              <div className="text-2xl font-bold text-green-400 mb-1">{option.odds}</div>
                              <div className="text-gray-400 text-xs mb-3">{option.probability} probability</div>
                              {option.volume && <div className="text-gray-400 text-xs">{option.volume} volume</div>}
                              <Button
                                size="sm"
                                className="w-full mt-3 bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800"
                                onClick={() => setSelectedEvent(event)}
                              >
                                Bet Now
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

          {/* Live Events */}
          <TabsContent value="live">
            <div className="space-y-6">
              {liveEvents.map((event) => (
                <Card key={event.id} className="bg-black/5 border-gray-800/10">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <Badge className="bg-gray-800/20 text-gray-400">{event.category}</Badge>
                          <Badge className="bg-red-500/20 text-red-400 animate-pulse">LIVE</Badge>
                          <Badge className="bg-gray-800/20 text-gray-400">Ends in {event.timeLeft}</Badge>
                        </div>
                        <CardTitle className="text-white text-xl mb-2">{event.title}</CardTitle>
                        <p className="text-gray-400 text-sm mb-4">{event.description}</p>
                        <div className="flex items-center space-x-6 text-sm">
                          <div className="flex items-center space-x-2">
                            <Users className="h-4 w-4 text-gray-400" />
                            <span className="text-gray-400">{event.participants.toLocaleString()} participants</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <TrendingUp className="h-4 w-4 text-gray-400" />
                            <span className="text-gray-400">{event.totalVolume} volume</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {event.options.map((option, index) => (
                        <Card
                          key={index}
                          className="bg-gray-900/30 border-gray-800/10 hover:bg-gray-800/30 transition-all cursor-pointer"
                        >
                          <CardContent className="p-4">
                            <div className="text-center">
                              <div className="text-white font-bold text-sm mb-2">{option.name}</div>
                              <div className="text-2xl font-bold text-green-400 mb-1">{option.odds}</div>
                              <div className="text-gray-400 text-xs mb-3">{option.probability} probability</div>
                              <Button
                                size="sm"
                                className="w-full bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800"
                              >
                                Quick Bet
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

          {/* My Bets Portfolio */}
          <TabsContent value="portfolio">
            <div className="space-y-6">
              {/* Portfolio Overview */}
              <div className="grid md:grid-cols-4 gap-6">
                <Card className="bg-black/5 border-gray-800/10">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-white mb-2">$850</div>
                    <div className="text-gray-400">Total Wagered</div>
                  </CardContent>
                </Card>
                <Card className="bg-black/5 border-gray-800/10">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-green-400 mb-2">$1,867.50</div>
                    <div className="text-gray-400">Potential Winnings</div>
                  </CardContent>
                </Card>
                <Card className="bg-black/5 border-gray-800/10">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">$180</div>
                    <div className="text-gray-400">Total Won</div>
                  </CardContent>
                </Card>
                <Card className="bg-black/5 border-gray-800/10">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-2">3</div>
                    <div className="text-gray-400">Active Bets</div>
                  </CardContent>
                </Card>
              </div>

              {/* Active Bets */}
              <Card className="bg-black/5 border-gray-800/10">
                <CardHeader>
                  <CardTitle className="text-white">My Active Bets</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {myBets.map((bet, index) => (
                    <div key={index} className="bg-gray-900/30 rounded-xl p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="text-white font-bold text-lg mb-1">{bet.event}</div>
                          <div className="text-gray-400 text-sm mb-2">Position: {bet.position}</div>
                          <div className="flex items-center space-x-4 text-sm">
                            <span className="text-gray-400">Bet: {bet.amount}</span>
                            <span className="text-gray-400">Odds: {bet.odds}</span>
                            <span className="text-green-400">Potential: {bet.potentialWin}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge
                            className={`${
                              bet.status === "active"
                                ? "bg-gray-800/20 text-gray-400"
                                : bet.result === "won"
                                  ? "bg-gray-800/20 text-gray-400"
                                  : "bg-gray-800/20 text-gray-400"
                            }`}
                          >
                            {bet.status === "active" ? "Active" : bet.result === "won" ? "Won" : "Lost"}
                          </Badge>
                        </div>
                      </div>

                      {bet.status === "active" && (
                        <div className="flex items-center justify-between">
                          <div className="text-gray-400 text-sm">Current Odds: {bet.currentOdds}</div>
                          <div className="flex space-x-2">
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-gray-700/20 text-white bg-transparent"
                            >
                              Cash Out
                            </Button>
                            <Button size="sm" className="bg-gradient-to-r from-gray-700 to-gray-900">
                              Add More
                            </Button>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Features Section */}
        <Card className="mt-12 bg-black/5 border-gray-800/10">
          <CardHeader>
            <CardTitle className="text-white text-xl">Why Trade Event Markets?</CardTitle>
            <p className="text-gray-400">Advanced features for professional event trading</p>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {eventFeatures.map((feature, index) => (
                <div key={index} className="text-center">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gray-800/50 flex items-center justify-center mx-auto mb-4 ${feature.color}`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
