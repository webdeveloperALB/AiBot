import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Trophy, Globe, Target, ArrowRight, Users, TrendingUp } from "lucide-react"

export function EventsSection() {
  const eventCategories = [
    { name: "Politics", icon: <Globe className="h-5 w-5" />, count: 45, volume: "$2.3M", color: "text-blue-400" },
    { name: "Sports", icon: <Trophy className="h-5 w-5" />, count: 128, volume: "$5.7M", color: "text-green-400" },
    { name: "Crypto", icon: <TrendingUp className="h-5 w-5" />, count: 67, volume: "$3.1M", color: "text-yellow-400" },
    { name: "Economy", icon: <Target className="h-5 w-5" />, count: 34, volume: "$1.8M", color: "text-purple-400" },
  ]

  const featuredEvents = [
    {
      title: "2024 US Presidential Election Winner",
      category: "Politics",
      description: "Who will win the 2024 United States Presidential Election?",
      totalVolume: "$1,234,567",
      participants: 15678,
      options: [
        { name: "Democratic Candidate", odds: "1.85", probability: "54%" },
        { name: "Republican Candidate", odds: "2.10", probability: "46%" },
      ],
      timeLeft: "45 days",
    },
    {
      title: "Bitcoin Price Above $120,000 by End of 2024",
      category: "Crypto",
      description: "Will Bitcoin (BTC) reach or exceed $120,000 USD by December 31, 2024?",
      totalVolume: "$892,345",
      participants: 8934,
      options: [
        { name: "Yes", odds: "2.45", probability: "41%" },
        { name: "No", odds: "1.65", probability: "59%" },
      ],
      timeLeft: "45 days",
    },
    {
      title: "Super Bowl 2025 Winner",
      category: "Sports",
      description: "Which team will win Super Bowl LIX in 2025?",
      totalVolume: "$2,156,789",
      participants: 23456,
      options: [
        { name: "Kansas City Chiefs", odds: "3.20", probability: "31%" },
        { name: "Buffalo Bills", odds: "4.50", probability: "22%" },
      ],
      timeLeft: "89 days",
    },
  ]

  const platformStats = [
    { label: "Total Volume", value: "$8.4M+", description: "All-time trading" },
    { label: "Active Users", value: "45K+", description: "Monthly participants" },
    { label: "Accuracy Rate", value: "78%", description: "Market predictions" },
    { label: "Live Events", value: "150+", description: "Active markets" },
  ]

  return (
    <section id="events" className="py-20 px-4 bg-black/20 backdrop-blur-sm">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gray-800/30 text-gray-200 border-gray-600/30">Prediction Markets</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Predict the Future,
            <span className="bg-gradient-to-r from-gray-400 to-gray-300 bg-clip-text text-transparent">
              {" "}
              Earn Rewards
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Trade on real-world events across politics, sports, crypto, and economy. Use your knowledge and intuition to
            earn rewards while contributing to collective market intelligence.
          </p>
        </div>

        {/* Event Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {eventCategories.map((category, index) => (
            <Card
              key={index}
              className="bg-gray-900/50 border-gray-700/30 backdrop-blur-sm hover:bg-gray-800/50 transition-all cursor-pointer"
            >
              <CardContent className="p-6 text-center">
                <div
                  className={`w-12 h-12 rounded-xl bg-gray-800/50 flex items-center justify-center mx-auto mb-3 border border-gray-600/30 ${category.color}`}
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

        {/* Featured Events */}
        <div className="space-y-8 mb-16">
          <h3 className="text-2xl font-bold text-white text-center">Featured Events</h3>
          {featuredEvents.map((event, index) => (
            <Card key={index} className="bg-gray-900/50 border-gray-700/30 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <Badge className="bg-gray-700/50 text-gray-300">{event.category}</Badge>
                      <Badge className="bg-blue-500/20 text-blue-400">Featured</Badge>
                    </div>
                    <CardTitle className="text-white text-xl mb-2">{event.title}</CardTitle>
                    <p className="text-gray-300 text-sm mb-4">{event.description}</p>
                    <div className="flex items-center space-x-6 text-sm">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-gray-400" />
                        <span className="text-gray-400">Ends in {event.timeLeft}</span>
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
                <div className="grid md:grid-cols-2 gap-4">
                  {event.options.map((option, optionIndex) => (
                    <Card
                      key={optionIndex}
                      className="bg-gray-800/50 border-gray-600/30 hover:bg-gray-700/50 transition-all cursor-pointer"
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

        {/* Platform Statistics */}
        <Card className="bg-gray-900/50 border-gray-700/30 backdrop-blur-sm mb-12">
          <CardHeader>
            <CardTitle className="text-white text-xl text-center">Platform Statistics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-6">
              {platformStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300 font-semibold mb-1">{stat.label}</div>
                  <div className="text-gray-400 text-sm">{stat.description}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 text-lg px-8 py-6 h-auto"
          >
            <Trophy className="mr-2 h-5 w-5" />
            Start Predicting Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
