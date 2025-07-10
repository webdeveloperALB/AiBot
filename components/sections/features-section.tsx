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
  Shield,
  Zap,
  BarChart3,
  Users,
  Globe,
  Lock,
} from "lucide-react";

export function FeaturesSection() {
  const primaryFeatures = [
    {
      icon: TrendingUp,
      title: "Institutional Trading Engine",
      stats: "500+ Trading Pairs",
      badge: "100x Leverage",
      description:
        "Enterprise-grade trading infrastructure with sub-millisecond execution, deep liquidity pools, and advanced order types. Built for institutional traders and high-frequency strategies.",
      metrics: [
        { label: "Uptime", value: "99.99%" },
        { label: "Latency", value: "<0.5ms" },
        { label: "Daily Volume", value: "$2.8B+" },
      ],
      features: [
        "Advanced order types (Iceberg, TWAP, VWAP)",
        "Real-time risk management",
        "Multi-exchange connectivity",
        "Institutional-grade APIs",
      ],
    },
    {
      icon: Repeat,
      title: "Cross-Chain Liquidity Hub",
      stats: "Instant Settlement",
      badge: "0.05% Fee",
      description:
        "Seamless asset conversion across 15+ blockchains with guaranteed best execution. Our aggregated liquidity ensures minimal slippage and maximum efficiency.",
      metrics: [
        { label: "Networks", value: "15+" },
        { label: "Assets", value: "2,500+" },
        { label: "Avg Slippage", value: "0.02%" },
      ],
      features: [
        "Cross-chain bridge integration",
        "MEV protection",
        "Smart routing algorithms",
        "Gas optimization",
      ],
    },
    {
      icon: Bot,
      title: "Quantitative Alpha Engine",
      stats: "24/7 Automated Trading",
      badge: "65% Win Rate",
      description:
        "AI-powered trading strategies leveraging machine learning, statistical arbitrage, and market microstructure analysis. Consistently profitable across all market conditions.",
      metrics: [
        { label: "Strategies", value: "50+" },
        { label: "Sharpe Ratio", value: "2.4" },
        { label: "Max Drawdown", value: "3.2%" },
      ],
      features: [
        "Multi-strategy portfolio",
        "Risk-adjusted returns",
        "Market-neutral strategies",
        "Dynamic position sizing",
      ],
    },
  ];

  const secondaryFeatures = [
    {
      icon: Coins,
      title: "Yield Optimization Vaults",
      stats: "Auto-Compounding",
      badge: "Up to 18% APY",
      description:
        "Institutional-grade DeFi strategies with automated yield farming, liquidity provision, and risk management.",
      highlight: "Audited by top security firms",
    },
    {
      icon: Trophy,
      title: "Proprietary Capital Program",
      stats: "90% Profit Share",
      badge: "$500K Max",
      description:
        "Access substantial trading capital through our rigorous evaluation process. Keep the majority of profits while we provide the infrastructure.",
      highlight: "No time limits on evaluation",
    },
    {
      icon: Calendar,
      title: "Prediction Markets Platform",
      stats: "1,000+ Markets",
      badge: "Decentralized",
      description:
        "Trade on real-world events with our fully decentralized prediction markets. From macro economics to sports outcomes.",
      highlight: "Instant settlement via smart contracts",
    },
  ];

  const trustIndicators = [
    { icon: Shield, label: "SOC 2 Compliant", value: "Type II" },
    { icon: Lock, label: "Assets Secured", value: "$1.2B+" },
    { icon: Users, label: "Active Traders", value: "50K+" },
    { icon: Globe, label: "Global Reach", value: "180+ Countries" },
  ];

  return (
    <section
      id="features"
      className="py-32 px-6 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <Badge className="mb-6 bg-blue-500/10 text-blue-300 border border-blue-400/20 text-sm px-6 py-2 rounded-full font-medium">
            Enterprise Financial Infrastructure
          </Badge>
          <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight bg-gradient-to-r from-white via-blue-100 to-slate-300 bg-clip-text text-transparent">
            Built for Professional Traders
          </h2>
          <p className="text-xl text-slate-400 max-w-4xl mx-auto leading-relaxed mb-12">
            WhiteRock delivers institutional-grade trading infrastructure,
            quantitative strategies, and capital access to professional traders
            and financial institutions worldwide. Every feature is designed for
            scale, performance, and profitability.
          </p>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {trustIndicators.map(({ icon: Icon, label, value }, idx) => (
              <div key={idx} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-500/10 rounded-xl mb-3">
                  <Icon className="h-6 w-6 text-blue-400" />
                </div>
                <div className="text-2xl font-bold text-white">{value}</div>
                <div className="text-sm text-slate-400">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Primary Features */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {primaryFeatures.map((feature, idx) => (
            <Card
              key={idx}
              className="bg-slate-900/50 border border-slate-800/50 rounded-3xl backdrop-blur-sm hover:bg-slate-900/70 hover:border-blue-500/30 transition-all duration-500 group overflow-hidden"
            >
              <CardHeader className="pb-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="p-4 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-2xl group-hover:from-blue-500/30 group-hover:to-indigo-500/30 transition-all duration-300">
                    <feature.icon className="h-8 w-8 text-blue-400" />
                  </div>
                  <Badge className="bg-blue-500/20 text-blue-300 border border-blue-400/30 text-xs px-4 py-2 rounded-full font-medium">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-2xl font-bold text-white mb-2">
                  {feature.title}
                </CardTitle>
                <div className="text-blue-300 font-semibold text-lg">
                  {feature.stats}
                </div>
              </CardHeader>
              <CardContent className="pt-0 space-y-6">
                <p className="text-slate-300 leading-relaxed text-base">
                  {feature.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 py-4 border-t border-slate-800/50">
                  {feature.metrics.map((metric, metricIdx) => (
                    <div key={metricIdx} className="text-center">
                      <div className="text-lg font-bold text-white">
                        {metric.value}
                      </div>
                      <div className="text-xs text-slate-400">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Features List */}
                <div className="space-y-2">
                  {feature.features.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className="flex items-center text-sm text-slate-400"
                    >
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 flex-shrink-0"></div>
                      {item}
                    </div>
                  ))}
                </div>

                <Button
                  variant="ghost"
                  className="text-blue-300 hover:text-white hover:bg-blue-500/10 px-0 h-auto text-base font-medium group/btn w-full justify-start"
                >
                  Explore Features
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Secondary Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {secondaryFeatures.map((feature, idx) => (
            <Card
              key={idx}
              className="bg-transparent border border-slate-700/50 rounded-2xl backdrop-blur-sm hover:from-slate-900/60 hover:to-slate-800/60 hover:border-blue-500/30 transition-all duration-300 group"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-slate-800/50 rounded-xl group-hover:bg-blue-500/20 transition-colors">
                    <feature.icon className="h-6 w-6 text-blue-400" />
                  </div>
                  <Badge className="bg-blue-500/20 text-blue-300 border border-blue-400/30 text-xs px-3 py-1 rounded-full">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-white mb-1">
                  {feature.title}
                </CardTitle>
                <div className="text-blue-300 font-medium text-sm">
                  {feature.stats}
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-slate-300 leading-relaxed text-sm mb-4">
                  {feature.description}
                </p>
                <div className="flex items-center text-xs text-blue-300 mb-4">
                  <Zap className="h-3 w-3 mr-2" />
                  {feature.highlight}
                </div>
                <Button
                  variant="ghost"
                  className="text-blue-300 hover:text-white hover:bg-blue-500/10 px-0 h-auto text-sm font-medium"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-3 w-3" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Performance Metrics */}
        <div className="bg-gradient-to-r from-slate-900/50 to-slate-800/50 border border-slate-700/50 rounded-3xl p-12 mb-20 backdrop-blur-sm">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Platform Performance
            </h3>
            <p className="text-slate-400 text-lg">
              Real-time metrics from our trading infrastructure
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                label: "Total Volume Traded",
                value: "$847B+",
                period: "All Time",
              },
              {
                label: "Average Daily Volume",
                value: "$2.8B",
                period: "30-Day Avg",
              },
              {
                label: "System Uptime",
                value: "99.99%",
                period: "Last 12 Months",
              },
              {
                label: "Active Strategies",
                value: "1,247",
                period: "Currently Running",
              },
            ].map((metric, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl font-bold text-white mb-2">
                  {metric.value}
                </div>
                <div className="text-slate-300 font-medium mb-1">
                  {metric.label}
                </div>
                <div className="text-xs text-slate-500">{metric.period}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-900/20 via-indigo-900/20 to-purple-900/20 border border-blue-500/20 rounded-3xl px-12 py-20 max-w-5xl mx-auto backdrop-blur-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 rounded-3xl"></div>
            <div className="relative">
              <Badge className="mb-6 bg-blue-500/20 text-blue-300 border border-blue-400/30 text-sm px-6 py-2 rounded-full">
                Limited Access Program
              </Badge>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Join the Next Generation of Trading
              </h3>
              <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                Access institutional-grade tools, quantitative strategies, and
                proprietary capital. Built for professionals who demand
                excellence in every trade.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-lg px-12 py-6 font-semibold rounded-2xl shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                >
                  Request Access
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Button>
              </div>
              <p className="text-sm text-slate-500 mt-6">
                Institutional clients and qualified traders only. Subject to
                approval.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
