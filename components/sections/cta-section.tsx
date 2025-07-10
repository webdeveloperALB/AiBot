import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Shield,
  Zap,
  Award,
  Users,
  TrendingUp,
  Lock,
  Globe,
  CheckCircle,
  Calendar,
  Phone,
  Mail,
  Star,
  BarChart3,
  Headphones,
} from "lucide-react";

export function CTASection() {
  const trustIndicators = [
    {
      icon: Shield,
      label: "SOC 2 Type II Certified",
      description: "Enterprise-grade security",
    },
    {
      icon: Lock,
      label: "256-bit SSL Encryption",
      description: "Bank-level protection",
    },
    {
      icon: Globe,
      label: "Global Regulatory Compliance",
      description: "Licensed in 15+ jurisdictions",
    },
    {
      icon: Award,
      label: "Best Trading Platform 2024",
      description: "Industry recognition",
    },
  ];



  const stats = [
    { value: "500K+", label: "Active Traders" },
    { value: "$2.4B+", label: "Monthly Volume" },
    { value: "99.9%", label: "Uptime SLA" },
    { value: "150+", label: "Trading Pairs" },
  ];

  return (
    <section className="py-32 px-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.15),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.15),transparent_70%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(59,130,246,0.05)_50%,transparent_52%)]" />

      <div className="max-w-7xl mx-auto relative">
        {/* Main CTA Card */}
        <Card className="bg-transparent border border-none backdrop-blur-xl shadow-2xl mb-20">
          <CardContent className="p-12 md:p-16 lg:p-20">
            <div className="text-center space-y-12">
              {/* Header */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 text-amber-400 fill-current"
                      />
                    ))}
                  </div>
                  <span className="text-slate-400 text-sm">
                    Rated 4.9/5 by 10,000+ traders
                  </span>
                </div>

                <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                    Transform Your Trading
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Experience Today
                  </span>
                </h2>

                <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                  Join the elite community of professional traders using
                  WhiteRock's institutional-grade platform. Advanced AI,
                  lightning-fast execution, and comprehensive risk management
                  tools.
                </p>
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 py-8 border-y border-slate-700/50">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* CTA Options */}
              <div className="space-y-8">
                {/* Primary CTA */}
                <div className="space-y-6">
                  <div className="flex flex-col lg:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
                    <Input
                      type="email"
                      placeholder="Enter your professional email"
                      className="flex-1 h-14 text-white bg-slate-800/50 border border-slate-600/50 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
                    />
                    <Button
                      size="lg"
                      className="h-14 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 px-8 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Start Free Trial
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>

                  <div className="flex items-center justify-center gap-2 text-sm text-slate-400">
                    <CheckCircle className="h-4 w-4 text-emerald-400" />
                    <span>
                      30-day free trial • No credit card required • Full
                      platform access
                    </span>
                  </div>
                </div>

                {/* Secondary CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white px-6 bg-transparent"
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    Schedule Demo
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white px-6 bg-transparent"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Contact Sales
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white px-6 bg-transparent"
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Get Pricing
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>



        {/* Bottom Section */}
        <div className="text-center space-y-8">
          {/* Support Badge */}
          <div className="inline-flex items-center gap-6 p-6 bg-slate-900/40 rounded-2xl border border-slate-800/50 backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <Headphones className="h-5 w-5 text-blue-400" />
              <span className="text-slate-300 font-medium">
                24/7 Expert Support
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-emerald-400" />
              <span className="text-slate-300 font-medium">
                Enterprise Security
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-purple-400" />
              <span className="text-slate-300 font-medium">
                Industry Leading
              </span>
            </div>
          </div>

          {/* Final Message */}
          <div className="max-w-2xl mx-auto">
            <p className="text-slate-400 text-sm leading-relaxed">
              Trusted by hedge funds, prop trading firms, and professional
              traders worldwide. Start your journey with institutional-grade
              trading infrastructure today.
            </p>
          </div>

          {/* Compliance Badges */}
          <div className="flex flex-wrap justify-center gap-4 pt-8 border-t border-slate-800/50">
            {[
              "SOC 2 Type II",
              "ISO 27001",
              "PCI DSS Level 1",
              "GDPR Compliant",
              "FINRA Member",
              "CFTC Regulated",
            ].map((badge, index) => (
              <Badge
                key={index}
                className="bg-slate-800/50 text-slate-400 border border-slate-700/50 text-xs px-3 py-1"
              >
                {badge}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
