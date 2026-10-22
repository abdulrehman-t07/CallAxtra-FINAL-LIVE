import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/shared/PageHero";
import { Link } from "react-router-dom";
import { Target, TrendingUp, ArrowRight, ShieldCheck, Building2, Users } from "lucide-react";
import aboutHeroImg from "@/assets/about-hero.jpg";

const pillars = [
  {
    icon: Target,
    title: "Our Mission",
    description: "Connect clients with conversion-ready customers while protecting brand integrity.",
  },
  {
    icon: TrendingUp,
    title: "Our Approach",
    description: "Data-driven targeting, agent training, and continuous optimization.",
  },
];

const facts = [
  { icon: Building2, label: "U.S.-registered agency" },
  { icon: Users, label: "Dedicated call center" },
  { icon: ShieldCheck, label: "Compliance-first" },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <PageHero
        image={aboutHeroImg}
        imageAlt="About CallAxtra"
        badge="About Us"
        title="Trusted Live Transfer and Lead Generation Agency"
        description="U.S.-registered marketing agency specializing in live transfers and lead generation with a focus on quality, compliance, and scalable delivery."
      />

      {/* Company Overview */}
      <section className="bg-section-alt py-20 md:py-28 border-b border-border">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <div className="grid items-start gap-10 lg:grid-cols-5 lg:gap-16">
              <div className="lg:col-span-2">
                <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-background px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground shadow-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
                  Who We Are
                </span>
                <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
                  Quality and trust at the core of every campaign.
                </h2>
                <ul className="mt-8 space-y-3">
                  {facts.map(({ icon: Icon, label }) => (
                    <li key={label} className="flex items-center gap-3 text-sm font-medium text-foreground">
                      <span className="icon-tile-soft h-9 w-9">
                        <Icon className="h-4 w-4" />
                      </span>
                      {label}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-3">
                <p className="text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl md:leading-relaxed">
                  We are a U.S.-registered marketing agency specializing in high-quality live transfers and lead generation. With a dedicated call center and a growing partner network, we deliver cost-effective, conversion-focused campaigns across healthcare, insurance, and financial services. Our mission is simple: connect you with the right customers, at scale, with trust and quality at the core.
                </p>

                <div className="mt-10 grid gap-5 sm:grid-cols-2">
                  {pillars.map(({ icon: Icon, title, description }) => (
                    <div
                      key={title}
                      className="group rounded-2xl border border-border bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-foreground/20 hover:shadow-card-hover"
                    >
                      <div className="icon-tile mb-5 h-12 w-12">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">{title}</h3>
                      <p className="mt-2 leading-relaxed text-muted-foreground">{description}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                  <Button asChild variant="hero" size="lg">
                    <Link to="/services">
                      Explore Our Services
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/contact">Get in Touch</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
