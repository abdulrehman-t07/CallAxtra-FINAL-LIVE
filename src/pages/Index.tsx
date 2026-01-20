import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FeatureCard } from "@/components/shared/FeatureCard";
import { StatCounter } from "@/components/shared/StatCounter";
import { ContactForm } from "@/components/shared/ContactForm";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  DollarSign,
  Target,
  TrendingUp,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Star,
  Quote,
  Settings,
  Zap,
  Sliders,
  Headphones,
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const highlights = [
  {
    icon: DollarSign,
    title: "Cost-Effective Solutions",
    description:
      "We design campaigns that maximize ROI through efficient sourcing, optimized agent workflows, and transparent pricing.",
    variant: "primary" as const,
  },
  {
    icon: Target,
    title: "Quality & Conversion Focus",
    description:
      "Trained agents, real-time verification, and conversion-first processes ensure higher close rates and lower waste.",
    variant: "primary" as const,
  },
  {
    icon: TrendingUp,
    title: "Scalable Operations",
    description:
      "A flexible delivery model and vetted partner network let you scale quickly without sacrificing quality.",
    variant: "primary" as const,
  },
  {
    icon: ShieldCheck,
    title: "Compliance Mindset",
    description:
      "We follow strict compliance and quality assurance processes to protect your brand and your customers.",
    variant: "primary" as const,
  },
];

const testimonials = [
  {
    name: "Michael Rodriguez",
    role: "VP of Sales, HealthFirst Insurance",
    content: "CallAxtra transformed our lead generation process. We saw a 40% increase in conversion rates within the first quarter. Their compliant live transfers are exactly what we needed.",
    rating: 5,
  },
  {
    name: "Sarah Thompson",
    role: "Director of Marketing, SecureLife Financial",
    content: "The quality of leads from CallAxtra is unmatched. Every transfer is verified and ready to convert. Our sales team loves working with their pre-qualified prospects.",
    rating: 5,
  },
  {
    name: "David Chen",
    role: "CEO, Medicare Solutions Group",
    content: "We've partnered with many lead providers, but CallAxtra stands out for their compliance standards and customer service. They truly understand the healthcare space.",
    rating: 5,
  },
];

const agentFeatures = [
  {
    icon: Settings,
    title: "Flexible Campaign Criteria",
    description:
      "Transfers adapted to your compliance requirements and qualification rules.",
  },
  {
    icon: Zap,
    title: "Real-Time Connections",
    description:
      "Direct calls with prospects at peak interest for maximum conversion.",
  },
  {
    icon: Sliders,
    title: "Tailored Solutions",
    description:
      "Warm/cold transfers, configurable buffers, and vertical-specific targeting.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description:
      "Our team is available to ensure you get the best possible service.",
  },
];

const Index = () => {
  const [showAgentForm, setShowAgentForm] = useState(false);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-28 lg:py-36">


   <div className="absolute inset-0">
          <img 
            src={heroBg} 
            alt="Home hero background"
            className="h-full w-full object-cover"
          />
       <div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-primary/50" />
        </div>

 
    
        
        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="font-heading text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
              High-Quality, Compliant{" "}
              <span className="relative">
                Live Transfers
                <span className="absolute -bottom-2 left-0 h-1 w-full bg-accent opacity-80" />
              </span>{" "}
              & Lead Generation
            </h1>
            
            <p className="mx-auto font-semibold mt-6 max-w-2xl text-lg text-primary-foreground/80 md:text-xl">
              We connect healthcare, insurance, and financial service providers
              with verified, conversion-ready customers.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link to="/contact">
                <Button variant="cta" size="xl">
                  Partner With Us
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-primary-foreground/70">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary-foreground" />
                TCPA Compliant
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary-foreground" />
                CMS Approved
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary-foreground" />
                U.S. Based
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-muted py-16 md:py-20">
        <div className="container">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <StatCounter value={50} suffix="+" label="Active Partners" />
            <StatCounter value={52} suffix="%" label="Average Conversion Rate" />
            <StatCounter value={100} suffix="K+" label="Leads Delivered" />
            <StatCounter value={98} suffix="%" label="Partner Retention" />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <SectionHeading
            badge="Why Choose Us"
            title="Why Clients Choose Us"
            description="We combine trained agents, strict compliance practices, and a scalable delivery model to deliver cost-effective, conversion-focused campaigns."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {highlights.map((highlight) => (
              <FeatureCard
                key={highlight.title}
                icon={highlight.icon}
                title={highlight.title}
                description={highlight.description}
                variant={highlight.variant}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/contact">
              <Button variant="hero" size="lg">
                Get a Quote
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Licensed Agents Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
       <div className="absolute inset-0 overflow-hidden pointer-events-none">
  {/* Primary Glow - Increased opacity and more saturated color */}
  <div 
    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
               w-[600px] h-[400px] rounded-full 
               bg-primary/40 dark:bg-primary/20 
               blur-[60px] opacity-100" 
  />

  {/* Secondary Accent - Adds a second color to create depth (e.g., Indigo or Blue) */}
  <div 
    className="absolute top-[40%] left-[60%] -translate-x-1/2 -translate-y-1/2 
               w-[400px] h-[300px] rounded-full 
               bg-indigo-400/30 dark:bg-indigo-500/10 
               blur-[50px]" 
  />

  {/* Surface Tint - This is the secret for light mode visibility */}
  <div className="absolute inset-0 bg-primary/[0.03] dark:bg-transparent" />
</div>
        <div className="container relative z-10">
          <SectionHeading
            badge="For Agents"
            title="Are You an Independent Licensed Agent?"
            description="CallAxtra provides flexible, compliant live transfers tailored to your specific criteria. Everything can be discussed in detail and customized to match your needs."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {agentFeatures.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-xl border border-border/60 bg-card/80 backdrop-blur-sm p-6 shadow-card transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-primary/30"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 dark:bg-primary/20 transition-transform duration-300 group-hover:scale-110">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              variant="cta"
              size="xl"
              onClick={() => setShowAgentForm(true)}
              className="shadow-lg hover:shadow-xl transition-shadow"
            >
              Get Started
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <SectionHeading
            badge="Testimonials"
            title="What Our Partners Say"
            description="Hear from businesses that have transformed their lead generation with CallAxtra."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="relative rounded-2xl border border-border bg-card p-6 shadow-sm"
              >
                <Quote className="absolute right-6 top-6 h-8 w-8 text-primary/20" />
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="mb-6 text-muted-foreground">{testimonial.content}</p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agent Form Dialog */}
      <Dialog open={showAgentForm} onOpenChange={setShowAgentForm}>
        <DialogContent className="max-h-[90vh] max-w-xl overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="sr-only">Get Started as an Agent</DialogTitle>
          </DialogHeader>
          <ContactForm
            formType="buyer"
            actionUrl="https://formspree.io/f/mbdlnpyk"
            onSuccess={() => setShowAgentForm(false)}
          />
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default Index;
