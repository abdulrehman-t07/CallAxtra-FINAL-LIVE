import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/shared/SEO";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FeatureCard } from "@/components/shared/FeatureCard";
import { StatCounter } from "@/components/shared/StatCounter";
import { ContactForm } from "@/components/shared/ContactForm";
import { CtaBand } from "@/components/shared/CtaBand";
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
  Activity,
  PhoneCall,
  Clock,
  Sparkles,
  Users,
} from "lucide-react";
import heroModernImg from "@/assets/hero-modern.jpg";

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

const trustBadges = ["TCPA Compliant", "CMS Approved", "U.S. Based"];

const verticals = ["Medicare Advantage", "Final Expense", "CGM (Glucose)", "Pharmacy & DME"];

const initials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);

const Index = () => {
  const [showAgentForm, setShowAgentForm] = useState(false);

  return (
    <Layout>
      <SEO
        title="CallAxtra | High-Quality Live Transfers & Compliant Lead Generation"
        description="Connect with verified, conversion-ready prospects in Medicare, Final Expense, CGM (Continuous Glucose Monitors), Pharmacy, and DME campaigns. TCPA and CMS compliant live transfers."
        keywords="live transfers, buy live transfers, Medicare live transfers, final expense live transfers, continuous glucose monitors CGM, pharmacy DME leads, insurance transfers"
        canonicalPath="/"
      />
      {/* Hero Section — Staged with ambient depth & clear contrast */}
      <section className="relative overflow-hidden bg-gradient-to-b from-muted/50 via-background to-background pt-12 pb-16 md:pt-16 md:pb-20 lg:pt-20 lg:pb-24 border-b border-border/80">
        {/* Ambient background glows */}
        <div className="pointer-events-none absolute inset-0 bg-grid mask-fade-y opacity-35" aria-hidden />
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-80 w-[42rem] rounded-full bg-foreground/[0.04] blur-3xl dark:bg-foreground/[0.06]" aria-hidden />

        <div className="container relative z-10">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
            {/* Left Column: Value Prop & CTAs */}
            <div className="space-y-6 lg:col-span-7">
              {/* Category Badge */}
              <div className="inline-flex items-center gap-2.5 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-foreground shadow-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                </span>
                <span>Live Transfers &amp; Qualified Lead Generation</span>
              </div>

              {/* Main Headline with High Contrast Accent */}
              <h1 className="text-balance font-heading text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-[3.5rem] lg:leading-[1.12]">
                High-Quality, Compliant{" "}
                <span className="relative inline-block text-foreground">
                  Live Transfers
                  <svg className="absolute -bottom-2 left-0 w-full text-foreground/25" viewBox="0 0 280 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 9C70 3 140 3 278 9" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                  </svg>
                </span>{" "}
                &amp; Lead Generation
              </h1>

              {/* Subtitle */}
              <p className="max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
                We connect healthcare, insurance, and financial service providers with verified, conversion-ready customers through strict compliance practices and real-time verification.
              </p>

              {/* CTA Group */}
              <div className="flex flex-col gap-3.5 pt-2 sm:flex-row sm:items-center">
                <Button asChild variant="cta" size="lg" className="h-12 rounded-xl px-8 shadow-md">
                  <Link to="/contact">
                    Partner With Us
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-12 rounded-xl px-8 bg-card shadow-sm hover:bg-muted">
                  <Link to="/services">
                    Explore Services
                  </Link>
                </Button>
              </div>

              {/* Trust Badges Bar */}
              <div className="pt-3 border-t border-border/80">
                <ul className="flex flex-wrap items-center gap-x-8 gap-y-2.5 text-xs font-semibold text-foreground/80 sm:text-sm">
                  {trustBadges.map((badge) => (
                    <li key={badge} className="flex items-center gap-2">
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                        <CheckCircle2 className="h-3.5 w-3.5" />
                      </div>
                      <span>{badge}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: High-Tech Operations Console Showcase */}
            {/* Using a sleek dark console container in BOTH light & dark modes anchors the visual hierarchy */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                {/* Glow backlight */}
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-foreground/15 via-foreground/5 to-transparent blur-2xl" aria-hidden />

                <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 p-4 shadow-2xl ring-1 ring-black/10 text-white">
                  {/* Console Top Bar */}
                  <div className="mb-3.5 flex items-center justify-between border-b border-zinc-800/80 pb-3 px-1">
                    <div className="flex items-center gap-2.5">
                      <div className="flex space-x-1.5">
                        <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                        <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                      </div>
                      <span className="text-[11px] font-mono font-medium text-zinc-400 ml-1">
                        callaxtra.routing.live
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 px-2.5 py-0.5 text-[10px] font-semibold tracking-wide text-emerald-400">
                      <Activity className="h-3 w-3 animate-pulse" />
                      SYSTEM ACTIVE
                    </span>
                  </div>

                  {/* Main Visual Image with Glass Overlay */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-zinc-800">
                    <img
                      src={heroModernImg}
                      alt="CallAxtra modern live transfer and analytics operations floor"
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                      loading="eager"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-zinc-950/20" />

                    {/* Floating Conversion Pill (Top Left) */}
                    <div className="absolute left-3 top-3 flex items-center gap-2 rounded-lg border border-white/20 bg-zinc-950/85 px-3 py-1.5 text-xs font-semibold text-white shadow-xl backdrop-blur-md">
                      <TrendingUp className="h-3.5 w-3.5 text-emerald-400" />
                      <span>52% Avg Conversion</span>
                    </div>

                    {/* Floating Transfer Status (Bottom) */}
                    <div className="absolute bottom-3 inset-x-3 flex items-center justify-between rounded-lg border border-white/20 bg-zinc-950/90 p-2.5 text-white shadow-xl backdrop-blur-md">
                      <div className="flex items-center gap-2.5">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400">
                          <PhoneCall className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="text-[10px] font-medium text-zinc-400 uppercase tracking-wider">Live Buffer Protected</p>
                          <p className="text-xs font-bold text-white">Verified Intent · 90s Buffer</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-[11px] font-mono text-zinc-400">
                        <Clock className="h-3 w-3 text-emerald-400" />
                        <span>Instant</span>
                      </div>
                    </div>
                  </div>

                  {/* Verticals Footer Pills */}
                  <div className="mt-3.5 flex flex-wrap items-center justify-between gap-1.5 px-1 pt-1 text-[11px]">
                    <span className="text-zinc-400 font-medium">Active Verticals:</span>
                    <div className="flex flex-wrap gap-1">
                      {verticals.map((vert) => (
                        <span
                          key={vert}
                          className="rounded-md border border-zinc-800 bg-zinc-900/90 px-2 py-0.5 font-medium text-zinc-300 text-[10px]"
                        >
                          {vert}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar Section — Positioned on a distinct contrasting band */}
      <section className="border-b border-border bg-card py-10 md:py-12 shadow-sm">
        <div className="container">
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border shadow-card lg:grid-cols-4 [&>*]:bg-card">
            <StatCounter value={50} suffix="+" label="Active Partners" />
            <StatCounter value={52} suffix="%" label="Average Conversion Rate" />
            <StatCounter value={100} suffix="K+" label="Leads Delivered" />
            <StatCounter value={98} suffix="%" label="Partner Retention" />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section — Soft contrasting background makes white cards pop */}
      <section className="bg-section-alt py-20 md:py-28 border-b border-border">
        <div className="container">
          <SectionHeading
            badge="Why Choose Us"
            title="Why Leading Brands Choose CallAxtra"
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

          <div className="mt-14 text-center">
            <Button asChild variant="cta" size="lg" className="rounded-xl px-8 shadow-md">
              <Link to="/contact">
                Get a Custom Quote
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Licensed Agents Section — Clean white canvas with dark numbered cards */}
      <section className="relative overflow-hidden bg-background py-20 md:py-28 border-b border-border">
        <div className="pointer-events-none absolute inset-0 bg-grid mask-fade-y opacity-30" aria-hidden />

        <div className="container relative z-10">
          <SectionHeading
            badge="For Independent Agents"
            title="Are You an Independent Licensed Agent?"
            description="CallAxtra provides flexible, compliant live transfers tailored to your specific criteria. Everything can be discussed in detail and customized to match your needs."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {agentFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className="group relative rounded-2xl border border-border bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-foreground/25 hover:shadow-card-hover"
              >
                <div className="mb-5 flex items-center justify-between">
                  <div className="icon-tile h-12 w-12 rounded-xl transition-transform duration-300 group-hover:scale-105">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <span className="font-heading text-sm font-bold text-muted-foreground/60 tabular-nums">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Button
              variant="cta"
              size="xl"
              onClick={() => setShowAgentForm(true)}
              className="rounded-xl px-9 shadow-lg"
            >
              Get Started as an Agent
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section — Soft contrasting canvas */}
      <section className="bg-section-alt py-20 md:py-28">
        <div className="container">
          <SectionHeading
            badge="Client Success"
            title="What Our Partners Say"
            description="Hear from healthcare and insurance leaders who have transformed their lead generation with CallAxtra."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <figure
                key={testimonial.name}
                className="relative flex flex-col rounded-2xl border border-border bg-card p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
              >
                <Quote className="absolute right-6 top-6 h-10 w-10 text-foreground/[0.08]" aria-hidden />
                <div className="mb-5 flex gap-1" aria-label={`${testimonial.rating} out of 5 stars`}>
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <blockquote className="flex-1 leading-relaxed text-foreground/85">
                  “{testimonial.content}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-foreground text-sm font-semibold text-background">
                    {initials(testimonial.name)}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Final High-Contrast CTA Band */}
      <CtaBand
        className="pt-0 md:pt-0"
        title="Ready to scale with conversion-ready customers?"
        description="Tell us about your campaign goals and we'll propose a tailored, compliant live transfer plan."
      >
        <Button asChild variant="inverse" size="lg" className="w-full sm:w-auto rounded-xl px-8">
          <Link to="/contact">
            Partner With Us
            <ArrowRight className="h-5 w-5" />
          </Link>
        </Button>
        <Button asChild variant="outline-inverse" size="lg" className="w-full sm:w-auto rounded-xl px-8">
          <Link to="/buyers-publishers">Buyers &amp; Publishers</Link>
        </Button>
      </CtaBand>

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
