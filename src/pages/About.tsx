import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, TrendingUp, ArrowRight } from "lucide-react";
import aboutHeroImg from "@/assets/about-hero.jpg";

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0">
          <img
            src={aboutHeroImg}
            alt="About CallAxtra"
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        </div>

        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-primary-foreground/10 px-4 py-2 text-sm font-medium text-primary-foreground backdrop-blur-sm">
              About Us
            </span>
            <h1 className="font-heading text-4xl font-bold text-primary-foreground md:text-5xl">
              Trusted Live Transfer and Lead Generation Agency
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/80  font-semibold">
              U.S.-registered marketing agency specializing in live transfers and lead generation with a focus on quality, compliance, and scalable delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <p className="text-lg text-muted-foreground leading-relaxed">
              We are a U.S.-registered marketing agency specializing in high-quality live transfers and lead generation. With a dedicated call center and a growing partner network, we deliver cost-effective, conversion-focused campaigns across healthcare, insurance, and financial services. Our mission is simple: connect you with the right customers, at scale, with trust and quality at the core.
            </p>

            <div className="mt-12 grid gap-8 md:grid-cols-2">
              <div className="rounded-xl border border-border bg-card p-6 shadow-card">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-light">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  Our Mission
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Connect clients with conversion-ready customers while protecting brand integrity.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-card p-6 shadow-card">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-light">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  Our Approach
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Data-driven targeting, agent training, and continuous optimization.
                </p>
              </div>
            </div>

            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link to="/services">
                <Button variant="hero" size="lg">
                  Explore Our Services
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
