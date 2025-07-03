import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  TrendingUp,
  Repeat,
  Bot,
  Coins,
  Trophy,
  Calendar,
  ArrowRight,
} from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: <TrendingUp className="h-10 w-10 text-gray-900" />,
      title: "Professional Trading",
      description:
        "Advanced spot, futures & CFDs with up to 50x leverage, professional order book, and institutional-grade charting tools.",
      highlight: "50x Leverage",
      color: "from-cyan-600 to-pink-600",
      stats: "150+ Trading Pairs",
    },
    {
      icon: <Repeat className="h-10 w-10 text-gray-900" />,
      title: "Instant Crypto Swap",
      description:
        "Exchange cryptocurrencies instantly with 0.1% fees, no order book waiting, and 1-2 minute execution.",
      highlight: "0.1% Fees",
      color: "from-cyan-600 to-pink-600",
      stats: "<2 Min Execution",
    },
    {
      icon: <Bot className="h-10 w-10 text-gray-900" />,
      title: "AI Arbitrage Engine",
      description:
        "Automated cross-exchange arbitrage earning $45+ daily with AI-powered opportunity detection across 15+ exchanges.",
      highlight: "$45+ Daily",
      color: "from-cyan-600 to-pink-600",
      stats: "20+ Exchanges",
    },
    {
      icon: <Coins className="h-10 w-10 text-gray-900" />,
      title: "High-Yield Staking",
      description:
        "Earn up to 12% APY on major cryptocurrencies with flexible lock periods and daily reward distribution.",
      highlight: "12% APY",
      color: "from-cyan-600 to-pink-600",
      stats: "Daily Payouts",
    },
    {
      icon: <Trophy className="h-10 w-10 text-gray-900" />,
      title: "Funded Trading",
      description:
        "Prop firm challenges up to $100K capital with professional evaluation, profit sharing, and no time limits.",
      highlight: "$100K Capital",
      color: "from-cyan-600 to-pink-600",
      stats: "80% Profit Share",
    },
    {
      icon: <Calendar className="h-10 w-10 text-gray-900" />,
      title: "Prediction Markets",
      description:
        "Trade on real-world events across politics, sports, crypto, and economy with transparent odds and instant payouts.",
      highlight: "6 Categories",
      color: "from-cyan-600 to-pink-600",
      stats: "200+ Active Markets",
    },
  ];

  return (
    <section id="features" className="py-24 px-4 bg-black/30 backdrop-blur-sm">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <Badge className="mb-6 bg-cyan-500/20 text-white border-cyan-400/30 text-lg px-4 py-2">
            Platform Features
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Everything You Need to
            <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
              {" "}
              Dominate Crypto
            </span>
          </h2>
          <p className="text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            From basic spot trading to advanced AI strategies, VINANCE provides
            the complete toolkit for professional crypto trading and passive
            income generation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <Card
              key={idx}
              className="bg-black/5 border-gray-800/10 backdrop-blur-sm hover:bg-black/10 transition-all duration-500 group hover:scale-105"
            >
              <CardHeader className="pb-6">
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}
                  >
                    {feature.icon}
                  </div>
                  <Badge className="bg-cyan-800/20 text-white text-sm px-3 py-1">
                    {feature.highlight}
                  </Badge>
                </div>
                <CardTitle className="text-white text-2xl mb-3">
                  {feature.title}
                </CardTitle>
                <div className="text-white text-sm font-medium">
                  {feature.stats}
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-200 text-base leading-relaxed mb-6">
                  {feature.description}
                </p>
                <Button
                  variant="ghost"
                  className="text-cyan-300 hover:text-white hover:bg-cyan-600/10 p-0 h-auto font-semibold"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-cyan-500/20 to-pink-500/20 rounded-3xl p-12 backdrop-blur-sm border border-cyan-400/30">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Experience the Future of Trading?
            </h3>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Join 250,000+ traders who trust VINANCE for professional crypto
              trading and passive income generation.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-600 to-pink-600 hover:from-cyan-500 hover:to-pink-500 text-xl px-10 py-6 h-auto"
            >
              Start Trading Now
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
