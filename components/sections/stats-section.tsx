import {
  TrendingUp,
  Users,
  DollarSign,
  Shield,
  Zap,
  Award,
  Globe,
  BarChart3,
  Clock,
  CheckCircle,
  Building2,
  Smartphone,
} from "lucide-react";

export function StatsSection() {
  const primaryStats = [
    {
      icon: DollarSign,
      value: "$2.8B+",
      label: "Assets Under Management",
      description:
        "Institutional-grade portfolio management across global markets",
      trend: "+127% YoY",
      color: "emerald",
    },
    {
      icon: Users,
      value: "500K+",
      label: "Verified Traders",
      description:
        "Professional traders and institutions across 120+ countries",
      trend: "+89% YoY",
      color: "cyan",
    },
    {
      icon: TrendingUp,
      value: "$15.2B+",
      label: "Monthly Volume",
      description:
        "Cross-asset trading volume including derivatives and spot markets",
      trend: "+156% YoY",
      color: "purple",
    },
    {
      icon: BarChart3,
      value: "99.97%",
      label: "Execution Rate",
      description: "Order fill rate with institutional-grade matching engine",
      trend: "Industry Leading",
      color: "amber",
    },
  ];

  const operationalStats = [
    {
      icon: Shield,
      value: "99.99%",
      label: "Platform Uptime",
      description: "Enterprise SLA with multi-region redundancy",
    },
    {
      icon: Zap,
      value: "<50ms",
      label: "Latency",
      description: "Average order execution time",
    },
    {
      icon: Globe,
      value: "120+",
      label: "Countries",
      description: "Global regulatory compliance",
    },
    {
      icon: Award,
      value: "24/7/365",
      label: "Support",
      description: "Dedicated institutional support",
    },
    {
      icon: Building2,
      value: "500+",
      label: "Institutions",
      description: "Banks, funds, and enterprises",
    },
    {
      icon: Smartphone,
      value: "15+",
      label: "Platforms",
      description: "Trading interfaces and APIs",
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      emerald:
        "from-emerald-500/10 to-emerald-600/5 border-emerald-500/20 hover:border-emerald-400/40",
      cyan: "from-cyan-500/10 to-cyan-600/5 border-cyan-500/20 hover:border-cyan-400/40",
      purple:
        "from-purple-500/10 to-purple-600/5 border-purple-500/20 hover:border-purple-400/40",
      amber:
        "from-amber-500/10 to-amber-600/5 border-amber-500/20 hover:border-amber-400/40",
    };
    return colors[color as keyof typeof colors] || colors.cyan;
  };

  const getIconColorClasses = (color: string) => {
    const colors = {
      emerald: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
      cyan: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
      purple: "bg-purple-500/20 text-purple-400 border-purple-500/30",
      amber: "bg-amber-500/20 text-amber-400 border-amber-500/30",
    };
    return colors[color as keyof typeof colors] || colors.cyan;
  };

  return (
    <section className="py-24 px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900/80 border border-gray-800 text-gray-300 text-sm font-medium mb-6">
            <CheckCircle className="h-4 w-4 text-emerald-400" />
            Trusted by Leading Financial Institutions
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Built for Scale.
            <br />
            <span className="bg-gradient-to-r from-gray-400 to-gray-500 bg-clip-text text-transparent">
              Engineered for Performance.
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Our institutional-grade infrastructure powers the next generation of
            digital asset trading, delivering unmatched reliability, security,
            and performance at global scale.
          </p>
        </div>

        {/* Primary Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {primaryStats.map(
            (
              { icon: Icon, value, label, description, trend, color },
              index
            ) => (
              <div
                key={index}
                className={`relative p-8 rounded-2xl bg-gradient-to-br ${getColorClasses(
                  color
                )} border backdrop-blur-sm hover:shadow-2xl hover:shadow-white/5 transition-all duration-300 group hover:-translate-y-1`}
              >
                <div className="flex items-start justify-between mb-6">
                  <div
                    className={`p-3 rounded-xl border ${getIconColorClasses(
                      color
                    )} group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-1 rounded-full">
                    {trend}
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-3xl font-bold text-white group-hover:text-white transition-colors">
                    {value}
                  </div>
                  <div className="text-lg font-semibold text-gray-200">
                    {label}
                  </div>
                  <div className="text-sm text-gray-400 leading-relaxed">
                    {description}
                  </div>
                </div>

                {/* Subtle glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            )
          )}
        </div>

        {/* Operational Excellence Section */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-3xl p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Operational Excellence
            </h3>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Industry-leading infrastructure metrics that power seamless
              trading experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {operationalStats.map(
              ({ icon: Icon, value, label, description }, index) => (
                <div
                  key={index}
                  className="text-center group hover:bg-gray-800/50 p-6 rounded-xl transition-all duration-300 border border-transparent hover:border-gray-700"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gray-800 border border-gray-700 text-gray-400 mb-4 group-hover:bg-gray-700 group-hover:text-white group-hover:border-gray-600 transition-all">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">
                    {value}
                  </div>
                  <div className="text-gray-300 font-semibold mb-2">
                    {label}
                  </div>
                  <div className="text-sm text-gray-500">{description}</div>
                </div>
              )
            )}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 px-8 py-4 bg-gray-900/80 border border-gray-800 rounded-2xl backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-emerald-400" />
              <span className="text-sm font-semibold text-gray-300">
                SOC 2 Type II Certified
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-cyan-400" />
              <span className="text-sm font-semibold text-gray-300">
                ISO 27001 Compliant
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-purple-400" />
              <span className="text-sm font-semibold text-gray-300">
                99.99% SLA Guarantee
              </span>
            </div>
          </div>
        </div>

        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02),transparent_50%)] pointer-events-none" />
      </div>
    </section>
  );
}
