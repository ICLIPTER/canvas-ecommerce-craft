import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-dashboard.jpg";

const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 px-4 min-h-screen flex items-center bg-gradient-to-br from-background via-background to-secondary/20">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium">
                ✨ No Templates. Pure Freedom.
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Build Your 
                <span className="bg-gradient-hero bg-clip-text text-transparent"> Dream Store</span> 
                <br />Without Limits
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                The first headless commerce platform that gives you complete design freedom. 
                Drag, drop, and customize everything. Import products with AI. Launch in minutes.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                Start Building Free <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                <Play className="w-5 h-5" /> Watch Demo
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">10k+</div>
                <div className="text-sm text-muted-foreground">Stores Built</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">$50M+</div>
                <div className="text-sm text-muted-foreground">Sales Generated</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src={heroImage} 
                alt="StoreForge Dashboard Interface"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent"></div>
            </div>
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-accent rounded-full shadow-glow animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-primary rounded-full shadow-elegant"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;