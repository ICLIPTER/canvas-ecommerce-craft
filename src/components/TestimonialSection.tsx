import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Founder, Luna Cosmetics",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    content: "StoreForge gave us the freedom to create exactly what we envisioned. Our conversion rate increased 340% after switching from our template-based store.",
    rating: 5
  },
  {
    name: "Marcus Thompson",
    role: "Creator, 500K followers",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    content: "As a content creator, I needed something that matched my brand perfectly. StoreForge's drag-and-drop builder made it effortless to create a store that feels authentically me.",
    rating: 5
  },
  {
    name: "Emma Rodriguez",
    role: "CEO, Artisan Jewelry Co.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    content: "The AI product import saved us weeks of manual work. We migrated 2,000+ products in hours, not weeks. The customization options are incredible.",
    rating: 5
  },
  {
    name: "David Park",
    role: "CMO, TechGear Plus",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    content: "Finally, a platform that doesn't force us into a box. We built something our competitors can't replicate because it's truly custom.",
    rating: 5
  }
];

const TestimonialSection = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-secondary/20 via-background to-accent/5">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            💬 Customer Stories
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Loved by 
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Creators</span> & 
            <span className="bg-gradient-accent bg-clip-text text-transparent"> Brands</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how businesses transformed their online presence with complete design freedom.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-card hover:shadow-elegant transition-smooth bg-card/60 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                
                <div className="relative mb-6">
                  <Quote className="w-8 h-8 text-accent/20 absolute -top-2 -left-2" />
                  <p className="text-foreground leading-relaxed pl-6">
                    "{testimonial.content}"
                  </p>
                </div>
                
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;