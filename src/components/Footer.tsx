import { Twitter, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-bold">StoreForge</div>
            <p className="text-primary-foreground/80 max-w-sm">
              The headless commerce platform that gives you complete design freedom to build extraordinary online stores.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-smooth">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-smooth">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-smooth">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-smooth">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Product</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">Features</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">Pricing</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">Templates</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">Integrations</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">API</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">Documentation</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">Help Center</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">Blog</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">Community</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">Changelog</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">About</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">Careers</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">Press</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">Partners</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 StoreForge. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-smooth">Privacy Policy</a>
            <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-smooth">Terms of Service</a>
            <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-smooth">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;