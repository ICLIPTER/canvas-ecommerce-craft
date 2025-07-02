import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Palette, Zap, Brain, Blocks, Smartphone, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Palette,
    title: "No Template Limits",
    description: "Start with a blank canvas. Design every pixel exactly how you want it. No rigid templates or themes holding you back.",
  },
  {
    icon: Blocks,
    title: "Drag & Drop Builder",
    description: "Intuitive visual editor that feels like Framer but built for commerce. Create complex layouts without touching code.",
  },
  {
    icon: Brain,
    title: "AI Product Import",
    description: "Import products from any store with AI. Automatically optimize descriptions, categorize, and enhance with smart suggestions.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Headless architecture means blazing fast load times. Your customers will love the smooth shopping experience.",
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    description: "Every design automatically adapts to any screen size. Your store looks perfect on mobile, tablet, and desktop.",
  },
  {
    icon: TrendingUp,
    title: "Conversion Focused",
    description: "Built-in analytics, A/B testing, and conversion optimization tools. Turn more visitors into customers.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            🚀 Powerful Features
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Everything You Need to 
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Succeed</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Built for modern DTC brands, creators, and influencers who demand more than cookie-cutter solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-card hover:shadow-elegant transition-smooth bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;