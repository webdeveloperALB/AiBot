import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Alex Chen",
      role: "Professional Trader",
      content:
        "VINANCE's AI arbitrage bot has been a game-changer for my trading strategy. The automated execution and profit consistency are impressive. Earning $50+ daily passively.",
      rating: 5,
      profit: "+$45,230",
      feature: "AI Arbitrage",
    },
    {
      name: "Sarah Rodriguez",
      role: "Crypto Investor",
      content:
        "The staking rewards are excellent, and the platform is incredibly user-friendly. I'm earning 12% APY on my USDT holdings with daily payouts.",
      rating: 5,
      profit: "+$12,450",
      feature: "Staking",
    },
    {
      name: "Michael Thompson",
      role: "Day Trader",
      content:
        "Best futures trading platform I've used. The leverage options and order execution speed are perfect for scalping strategies. Charts are professional-grade.",
      rating: 5,
      profit: "+$78,920",
      feature: "Futures",
    },
    {
      name: "Emma Wilson",
      role: "Prop Trader",
      content:
        "Passed the prop firm challenge and now trading with $50K capital. The risk management tools are professional-grade and the evaluation process is fair.",
      rating: 5,
      profit: "+$25,680",
      feature: "Prop Firm",
    },
    {
      name: "David Kim",
      role: "Event Trader",
      content:
        "Event markets are fascinating! Made great profits predicting election outcomes and sports events. The platform makes it easy to research and place bets.",
      rating: 5,
      profit: "+$8,340",
      feature: "Events",
    },
    {
      name: "Lisa Zhang",
      role: "Swing Trader",
      content:
        "The instant swap feature saves me so much time. No more waiting for order fills - just instant exchanges at great rates with minimal fees.",
      rating: 5,
      profit: "+$15,670",
      feature: "Swap",
    },
  ];

  return (
    <section className="py-20 px-4 bg-black/20 backdrop-blur-sm">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-cyan-600 to-pink-600 text-white border-transparent text-lg">
            Success Stories
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our Traders Say
          </h2>
          <p className="text-2xl text-gray-300">
            Real results from real traders using VINANCE's advanced features
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-black/5 border border-cyan-600/20 backdrop-blur-sm hover:bg-black/10 transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-300 fill-current"
                      />
                    ))}
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge className="bg-gradient-to-r from-cyan-600 to-pink-600 text-white text-sm">
                      {testimonial.profit}
                    </Badge>
                    <Badge className="bg-gradient-to-r from-cyan-600 to-pink-600 text-white text-sm">
                      {testimonial.feature}
                    </Badge>
                  </div>
                </div>

                <p className="text-gray-200 text-lg mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                <div>
                  <div className="font-semibold text-white text-base">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-300 text-sm">
                    {testimonial.role}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
