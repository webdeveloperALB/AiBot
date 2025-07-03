import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Shield, Zap, Award, Users } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="bg-gradient-to-r from-cyan-500/20 to-pink-500/20 rounded-3xl p-12 backdrop-blur-sm border border-cyan-400/30">
          <div className="text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Ready to Start Your Trading Journey?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of successful traders who trust VINANCE for spot
              trading, futures, staking, AI arbitrage, prop firm challenges, and
              event markets. Start with a free account today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <Input
                placeholder="Enter your email address"
                className="bg-black/10 border-cyan-700/20 text-white placeholder:text-gray-400 focus:border-cyan-600"
              />
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-600 to-pink-600 hover:from-cyan-500 hover:to-pink-500 whitespace-nowrap"
              >
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-cyan-300" />
                <span>Bank-Level Security</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-cyan-300" />
                <span>Instant Setup</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 text-cyan-300" />
                <span>Award Winning Platform</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-cyan-300" />
                <span>500K+ Traders</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
