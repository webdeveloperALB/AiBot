import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Star,
  TrendingUp,
  Shield,
  Award,
  Users,
  DollarSign,
  BarChart3,
} from "lucide-react";

export function TestimonialsSection() {
  const stats = [
    {
      icon: Users,
      value: "50K+",
      label: "Active Traders",
      description: "Professional traders trust our platform",
    },
    {
      icon: DollarSign,
      value: "$2.4B+",
      label: "Trading Volume",
      description: "Monthly trading volume processed",
    },
    {
      icon: TrendingUp,
      value: "94.7%",
      label: "Success Rate",
      description: "Average profitable trade ratio",
    },
    {
      icon: Shield,
      value: "99.9%",
      label: "Uptime",
      description: "Platform reliability guarantee",
    },
  ];

  const testimonials = [
    {
      name: "Alexandra Chen",
      role: "Senior Portfolio Manager",
      company: "Quantum Capital",
      avatar: "/placeholder.svg?height=60&width=60",
      content:
        "WhiteRock's AI arbitrage system has revolutionized our trading operations. The sophisticated algorithms consistently identify profitable opportunities across multiple exchanges, delivering exceptional returns with minimal risk exposure.",
      rating: 5,
      profit: "+$127,450",
      timeframe: "Q4 2024",
      feature: "AI Arbitrage Suite",
      verified: true,
    },
    {
      name: "Marcus Rodriguez",
      role: "Head of Digital Assets",
      company: "Sterling Investment Group",
      avatar: "/placeholder.svg?height=60&width=60",
      content:
        "The institutional-grade staking infrastructure provides unparalleled security and yield optimization. Our clients appreciate the transparent 12.5% APY with daily compounding and full regulatory compliance.",
      rating: 5,
      profit: "+$89,320",
      timeframe: "6 months",
      feature: "Enterprise Staking",
      verified: true,
    },
    {
      name: "Dr. Sarah Kim",
      role: "Quantitative Analyst",
      company: "Meridian Hedge Fund",
      avatar: "/placeholder.svg?height=60&width=60",
      content:
        "The futures trading platform offers institutional-level execution with sub-millisecond latency. Advanced risk management tools and deep liquidity pools make it ideal for high-frequency strategies.",
      rating: 5,
      profit: "+$234,680",
      timeframe: "8 months",
      feature: "Professional Futures",
      verified: true,
    },
    {
      name: "James Thompson",
      role: "Proprietary Trader",
      company: "Apex Trading LLC",
      avatar: "/placeholder.svg?height=60&width=60",
      content:
        "Successfully completed the $100K evaluation program with exceptional support. The platform's advanced analytics and risk controls enabled consistent performance above industry benchmarks.",
      rating: 5,
      profit: "+$156,240",
      timeframe: "4 months",
      feature: "Prop Trading Program",
      verified: true,
    },
    {
      name: "Emma Wilson",
      role: "Market Research Director",
      company: "Insight Analytics",
      avatar: "/placeholder.svg?height=60&width=60",
      content:
        "Prediction markets provide invaluable insights for institutional decision-making. The accuracy of sentiment analysis and event forecasting has significantly enhanced our investment strategies.",
      rating: 5,
      profit: "+$67,890",
      timeframe: "5 months",
      feature: "Prediction Analytics",
      verified: true,
    },
    {
      name: "David Park",
      role: "Trading Operations Manager",
      company: "Phoenix Capital",
      avatar: "/placeholder.svg?height=60&width=60",
      content:
        "Instant swap functionality with institutional pricing has streamlined our portfolio rebalancing operations. Zero slippage on large orders and transparent fee structure deliver exceptional value.",
      rating: 5,
      profit: "+$98,450",
      timeframe: "7 months",
      feature: "Institutional Swap",
      verified: true,
    },
  ];

  return (
    <section className="py-32 px-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.1),transparent_50%)]" />

      <div className="max-w-7xl mx-auto relative">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-6">
            <Award className="h-5 w-5 text-blue-400" />
            <Badge className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-300 border border-blue-500/30 text-sm px-4 py-2 rounded-full">
              Trusted by Professionals
            </Badge>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
            Industry Leaders Choose WhiteRock24
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Discover how institutional traders, hedge funds, and professional
            investors leverage our advanced trading infrastructure to achieve
            superior returns.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="bg-slate-900/50 border border-slate-800/50 backdrop-blur-sm"
            >
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl mb-4">
                  <stat.icon className="h-6 w-6 text-blue-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-slate-300 mb-2">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-500">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-slate-900/60 border border-slate-800/60 backdrop-blur-sm hover:bg-slate-900/80 transition-all duration-500 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10 group"
            >
              <CardContent className="p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 text-amber-400 fill-current"
                      />
                    ))}
                  </div>
                  {testimonial.verified && (
                    <Badge className="bg-emerald-600/20 text-emerald-300 text-xs px-3 py-1 rounded-full border border-emerald-500/30">
                      <Shield className="h-3 w-3 mr-1" />
                      Verified
                    </Badge>
                  )}
                </div>

                {/* Quote */}
                <blockquote className="text-slate-300 leading-relaxed mb-8 text-sm">
                  "{testimonial.content}"
                </blockquote>

                {/* Performance Metrics */}
                <div className="flex gap-3 mb-6">
                  <Badge className="bg-blue-600/20 text-blue-300 text-xs px-3 py-1.5 rounded-lg border border-blue-500/30 flex items-center gap-1">
                    <TrendingUp className="h-3 w-3" />
                    {testimonial.profit}
                  </Badge>
                  <Badge className="bg-purple-600/20 text-purple-300 text-xs px-3 py-1.5 rounded-lg border border-purple-500/30">
                    {testimonial.timeframe}
                  </Badge>
                </div>

                <Badge className="bg-slate-800/50 text-slate-300 text-xs px-3 py-1.5 rounded-lg border border-slate-700/50 mb-6 block w-fit">
                  {testimonial.feature}
                </Badge>

                {/* Author */}
                <div className="flex items-center space-x-4 pt-6 border-t border-slate-800/50">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-slate-700"
                  />
                  <div>
                    <div className="font-semibold text-white text-sm">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-slate-400">
                      {testimonial.role}
                    </div>
                    <div className="text-xs text-blue-400 font-medium">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="text-center">
          <div className="inline-flex items-center gap-8 p-6 bg-slate-900/30 rounded-2xl border border-slate-800/50 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <Shield className="h-4 w-4 text-emerald-400" />
              SOC 2 Compliant
            </div>
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <Award className="h-4 w-4 text-blue-400" />
              ISO 27001 Certified
            </div>
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <BarChart3 className="h-4 w-4 text-purple-400" />
              Regulated Entity
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
