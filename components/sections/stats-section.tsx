import {
  TrendingUp,
  Users,
  DollarSign,
  Shield,
  Zap,
  Award,
} from "lucide-react";

export function StatsSection() {
  const stats = [
    {
      icon: <DollarSign className="h-8 w-8 text-white" />,
      value: "$125M+",
      label: "Total Portfolio Value",
      description: "Assets under management across all users",
      color: "from-cyan-600 to-pink-600",
    },
    {
      icon: <Users className="h-8 w-8 text-white" />,
      value: "250K+",
      label: "Active Traders",
      description: "Registered users trading daily",
      color: "from-cyan-600 to-pink-600",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-white" />,
      value: "$1.2B+",
      label: "Monthly Volume",
      description: "Trading volume across all markets",
      color: "from-cyan-600 to-pink-600",
    },
    {
      icon: <Shield className="h-8 w-8 text-white" />,
      value: "99.9%",
      label: "Platform Uptime",
      description: "Reliable trading infrastructure",
      color: "from-cyan-600 to-pink-600",
    },
    {
      icon: <Zap className="h-8 w-8 text-white" />,
      value: "<100ms",
      label: "Execution Speed",
      description: "Ultra-low latency order execution",
      color: "from-cyan-600 to-pink-600",
    },
    {
      icon: <Award className="h-8 w-8 text-white" />,
      value: "24/7",
      label: "Customer Support",
      description: "Round-the-clock assistance",
      color: "from-cyan-600 to-pink-600",
    },
  ];

  return (
    <section
      id="stats"
      className="py-20 px-4 bg-gradient-to-r from-gray-900/10 to-black/10"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Trusted by Traders Worldwide
          </h2>
          <p className="text-xl text-gray-300">
            Join the growing community of successful crypto traders
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-2xl bg-black/5 border border-gray-800/10 backdrop-blur-sm hover:bg-black/10 transition-all duration-300 group"
            >
              <div
                className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}
              >
                {stat.icon}
              </div>
              <div className="text-4xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-xl font-semibold text-gray-300 mb-2">
                {stat.label}
              </div>
              <div className="text-gray-400 text-sm">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
