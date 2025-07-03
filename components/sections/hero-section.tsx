import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  TrendingUp,
  BarChart3,
  Zap,
  DollarSign,
  Target,
} from "lucide-react";

export function HeroSection() {
  return (
    <section id="home" className="relative px-4 py-20 lg:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/10 to-black/10" />
      <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />
      <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />

      <div className="container relative mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Badge className="bg-emerald-600 text-white text-lg px-4 py-2">
              🚀 Next-Generation DeFi Ecosystem
            </Badge>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
              Master Crypto
              <span className="text-emerald-400"> Trading</span>
            </h1>

            <p className="text-2xl text-gray-300 leading-relaxed max-w-2xl">
              The ultimate crypto ecosystem featuring professional trading with
              advanced leverage, AI-powered arbitrage systems, high-yield
              staking programs, funded prop trading challenges, and
              comprehensive prediction markets across multiple categories.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <Button
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-500 text-xl px-10 py-6 h-auto"
              >
                Start Trading Free
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-bg-emerald-600/10 text-white hover:bg-emerald-600/10 hover:text-white text-xl px-10 py-6 h-auto"
              >
                Explore Platform
              </Button>
            </div>

            {/* Platform Statistics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">Global</div>
                <div className="text-gray-400 text-sm">Market Access</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-gray-400 text-sm">Trading</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">Advanced</div>
                <div className="text-gray-400 text-sm">AI Tools</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">Secure</div>
                <div className="text-gray-400 text-sm">Platform</div>
              </div>
            </div>
          </div>

          {/* Platform Features Showcase */}
          <div className="relative space-y-6">
            {/* Trading Interface Preview */}
            <Card className="bg-slate-800 border border-indigo-500 backdrop-blur-xl">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-white">
                    Professional Trading Interface
                  </h3>
                  <Badge className="bg-indigo-500 text-white">
                    Live Markets
                  </Badge>
                </div>
                <div className="space-y-6">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-slate-700 rounded-xl p-4 text-center">
                      <div className="flex items-center justify-center mb-2">
                        <TrendingUp className="h-6 w-6 text-white" />
                      </div>
                      <div className="text-lg font-bold text-white">
                        Spot Trading
                      </div>
                      <div className="text-sm text-gray-300">Real-time</div>
                    </div>
                    <div className="bg-slate-700 rounded-xl p-4 text-center">
                      <div className="flex items-center justify-center mb-2">
                        <BarChart3 className="h-6 w-6 text-white" />
                      </div>
                      <div className="text-lg font-bold text-white">
                        Futures
                      </div>
                      <div className="text-sm text-gray-300">Leverage</div>
                    </div>
                    <div className="bg-slate-700 rounded-xl p-4 text-center">
                      <div className="flex items-center justify-center mb-2">
                        <Target className="h-6 w-6 text-white" />
                      </div>
                      <div className="text-lg font-bold text-white">CFDs</div>
                      <div className="text-sm text-gray-300">Advanced</div>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-white text-lg">
                      Comprehensive Trading Suite
                    </p>
                    <p className="text-gray-300">
                      Multiple Asset Classes Available
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* AI Features Card */}
            <Card className="bg-slate-800 border border-indigo-500 backdrop-blur-xl">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-indigo-500 rounded-xl flex items-center justify-center">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      AI-Powered Trading
                    </h3>
                    <p className="text-gray-300">
                      Automated Systems & Analysis
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-gray-300">
                      Arbitrage Engine
                    </div>
                    <div className="text-lg font-bold text-white">Active</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-300">Market Analysis</div>
                    <div className="text-lg font-bold text-white">
                      Real-time
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Earning Opportunities Card */}
            <Card className="bg-slate-800 border border-indigo-500 backdrop-blur-xl">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <DollarSign className="h-8 w-8 text-white" />
                    <div>
                      <h3 className="text-lg font-bold text-white">
                        Multiple Income Streams
                      </h3>
                      <p className="text-sm text-gray-300">
                        Diversified Earning Options
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div>
                    <div className="text-sm text-gray-300">Staking</div>
                    <div className="text-lg font-bold text-white">
                      Available
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-300">Prop Trading</div>
                    <div className="text-lg font-bold text-white">Funded</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-300">Predictions</div>
                    <div className="text-lg font-bold text-white">Active</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Floating elements */}
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-indigo-500 rounded-full opacity-20 blur-2xl animate-pulse"></div>
            <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-indigo-700 rounded-full opacity-10 blur-3xl animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
