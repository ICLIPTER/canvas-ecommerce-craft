import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ArrowRight, Star } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$19",
    description: "Perfect for creators and small brands getting started",
    features: [
      "1 Store",
      "Unlimited Products",
      "Drag & Drop Builder",
      "AI Product Import (100/month)",
      "Mobile Responsive",
      "Basic Analytics",
      "Email Support"
    ],
    cta: "Start Free Trial",
    popular: false
  },
  {
    name: "Growth",
    price: "$59",
    description: "For growing businesses ready to scale",
    features: [
      "3 Stores",
      "Unlimited Products",
      "Advanced Builder",
      "AI Product Import (500/month)",
      "A/B Testing",
      "Advanced Analytics",
      "Priority Support",
      "Custom Domain",
      "Conversion Optimization"
    ],
    cta: "Start Free Trial",
    popular: true
  },
  {
    name: "Enterprise",
    price: "$199",
    description: "For high-volume brands and agencies",
    features: [
      "Unlimited Stores",
      "Unlimited Products",
      "White Label Solution",
      "AI Product Import (Unlimited)",
      "Advanced A/B Testing",
      "Enterprise Analytics",
      "24/7 Support",
      "Multiple Custom Domains",
      "API Access",
      "Dedicated Account Manager"
    ],
    cta: "Contact Sales",
    popular: false
  }
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-4">
            💰 Simple Pricing
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Choose Your 
            <span className="bg-gradient-accent bg-clip-text text-transparent"> Growth Plan</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Start free for 14 days. No credit card required. Cancel anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative border-2 transition-smooth ${
              plan.popular 
                ? 'border-accent shadow-glow bg-gradient-to-b from-accent/5 to-accent/10' 
                : 'border-border shadow-card hover:shadow-elegant'
            }`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Star className="w-4 h-4" /> Most Popular
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <CardDescription className="text-muted-foreground mt-2">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-accent/20 rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 text-accent" />
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={plan.popular ? "hero" : "cta"} 
                  className="w-full text-base py-6"
                >
                  {plan.cta} <ArrowRight className="w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            All plans include SSL, CDN, and 99.9% uptime guarantee. Need a custom solution? 
            <a href="#" className="text-accent hover:text-accent-light transition-smooth font-medium"> Contact us</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;