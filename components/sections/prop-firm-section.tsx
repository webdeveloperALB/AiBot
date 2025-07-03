import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Trophy, Target, Shield, DollarSign, ArrowRight, CheckCircle } from "lucide-react"

export function PropFirmSection() {
  const challenges = [
    {
      name: "Standard Challenge",
      capital: "$25,000",
      fee: "$299",
      profitTarget: "8%",
      maxDrawdown: "5%",
      profitSplit: "80%",
      features: ["No time limit", "All major markets", "Expert advisor allowed", "Weekend holding"],
    },
    {
      name: "Express Challenge",
      capital: "$50,000",
      fee: "$499",
      profitTarget: "10%",
      maxDrawdown: "6%",
      profitSplit: "85%",
      features: ["Fast-track evaluation", "Higher profit split", "Priority support", "Advanced tools"],
      popular: true,
    },
    {
      name: "Professional Challenge",
      capital: "$100,000",
      fee: "$899",
      profitTarget: "12%",
      maxDrawdown: "8%",
      profitSplit: "90%",
      features: ["Maximum capital", "Highest profit split", "Dedicated manager", "All markets + crypto"],
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
      icon: <Target className="h-6 w-6" />,
      title: "Fair Evaluation",
      description: "Transparent rules and professional assessment process",
      color: "text-blue-400",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Risk Protection",
      description: "Your personal funds are never at risk during live trading",
      color: "text-purple-400",
    },
  ]

  const successMetrics = [
    { label: "Funded Traders", value: "1,200+", description: "Active funded accounts" },
    { label: "Capital Deployed", value: "$2.5M+", description: "Total funding provided" },
    { label: "Success Rate", value: "73%", description: "Challenge pass rate" },
    { label: "Avg Payout", value: "$450K", description: "Monthly trader earnings" },
  ]

  return (
    <section id="prop-firm" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gray-800/30 text-gray-200 border-gray-600/30">Funded Trading</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Get Funded to
            <span className="bg-gradient-to-r from-gray-400 to-gray-300 bg-clip-text text-transparent">
              {" "}
              Trade Professionally
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Prove your trading skills and get funded with up to $100,000 in trading capital. Keep up to 90% of the
            profits you generate with our professional evaluation program.
          </p>
        </div>

        {/* Challenge Options */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {challenges.map((challenge, index) => (
            <Card
              key={index}
              className={`bg-gray-900/50 border-gray-700/30 backdrop-blur-sm hover:bg-gray-800/50 transition-all ${
                challenge.popular ? "ring-2 ring-gray-500/50 relative" : ""
              }`}
            >
              {challenge.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-gray-700 to-gray-900 text-white border-gray-600">
                    Most Popular
                  </Badge>
                </div>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-white text-xl mb-2">{challenge.name}</CardTitle>
                <div className="text-4xl font-bold text-green-400 mb-2">{challenge.capital}</div>
                <div className="text-gray-400">Trading Capital</div>
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
                  {challenge.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button className="w-full bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800">
                  Start Challenge
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div
                className={`w-16 h-16 rounded-2xl bg-gray-800/50 flex items-center justify-center mx-auto mb-4 border border-gray-600/30 ${benefit.color}`}
              >
                {benefit.icon}
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{benefit.title}</h3>
              <p className="text-gray-300 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Success Metrics */}
        <Card className="bg-gray-900/50 border-gray-700/30 backdrop-blur-sm mb-12">
          <CardHeader>
            <CardTitle className="text-white text-xl text-center">Platform Success Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-6">
              {successMetrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
                  <div className="text-gray-300 font-semibold mb-1">{metric.label}</div>
                  <div className="text-gray-400 text-sm">{metric.description}</div>
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
            Start Your Journey
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
