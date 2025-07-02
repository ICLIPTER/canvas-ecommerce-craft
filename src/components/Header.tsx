import { Button } from "@/components/ui/button";
import { ArrowRight, Menu } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            StoreForge
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-smooth">
              Features
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-smooth">
              Pricing
            </a>
            <a href="#demo" className="text-muted-foreground hover:text-foreground transition-smooth">
              Demo
            </a>
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hidden md:flex">
            Sign In
          </Button>
          <Button variant="hero" className="hidden md:flex" asChild>
            <Link to="/admin">
              Start Building <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;