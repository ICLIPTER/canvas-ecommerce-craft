import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-r from-primary via-primary-light to-accent relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-white rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white rounded-full blur-lg"></div>
      </div>
      
      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            Start Your 14-Day Free Trial
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
            Ready to Build the 
            <br />
            <span className="text-accent-light">Store of Your Dreams?</span>
          </h2>
          
          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Join thousands of creators and brands who've ditched templates for complete design freedom. 
            Your perfect store is just minutes away.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              variant="secondary" 
              size="lg" 
              className="text-lg px-8 py-6 bg-white text-primary hover:bg-white/90 shadow-elegant"
              asChild
            >
              <Link to="/admin">
                Start Building Free <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
            >
              See Live Demo
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-8 pt-8 text-white/60 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent-light rounded-full"></div>
              No credit card required
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent-light rounded-full"></div>
              14-day free trial
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent-light rounded-full"></div>
              Cancel anytime
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;