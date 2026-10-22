import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/shared/SEO";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/shared/ContactForm";
import { PageHero } from "@/components/shared/PageHero";
import { CtaBand } from "@/components/shared/CtaBand";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  ShoppingCart,
  Megaphone,
  CheckCircle2,
  ArrowRight,
  Phone,
  TrendingUp,
} from "lucide-react";
import buyersPublishersHeroImg from "@/assets/buyers-publishers-hero.jpg";

const buyerBenefits = [
  "Verified, intent-driven live transfers",
  "TCPA and CMS compliant processes",
  "Custom screening criteria",
  "Real-time quality monitoring",
  "Flexible pricing models",
  "Dedicated account management",
];

const publisherBenefits = [
  "Competitive payouts per lead",
  "Transparent payout terms",
  "Reliable delivery tracking",
  "Multiple vertical options",
  "Dedicated publisher support",
  "Weekly payment schedule",
];

const steps = [
  {
    step: "01",
    title: "Connect",
    description: "Fill out our form and tell us about your campaign goals or traffic inventory.",
  },
  {
    step: "02",
    title: "Customize",
    description: "We work directly with your team to configure targeting criteria, filters, and buffers.",
  },
  {
    step: "03",
    title: "Convert",
    description: "Start receiving high-converting calls or transparent weekly payouts as campaigns go live.",
  },
];

const BuyersPublishers = () => {
  const [showBuyerForm, setShowBuyerForm] = useState(false);
  const [showPublisherForm, setShowPublisherForm] = useState(false);

  return (
    <Layout>
      <SEO
        title="Buy Live Transfers or Monetize Traffic | Buyers & Publishers"
        description="Buy verified, intent-driven Medicare, final expense, and healthcare live transfers or monetize your web and call traffic with weekly payouts and transparent reporting."
        keywords="buy live transfers, publisher traffic monetization, pay per call, buy Medicare calls, insurance buyer network, call traffic affiliate"
        canonicalPath="/buyers-publishers"
      />
      {/* Hero */}
      <PageHero
        image={buyersPublishersHeroImg}
        imageAlt="Buyers and publishers partnerships"
        badge="Buyers &amp; Publishers"
        title="Request Quotes &amp; High-Impact Partnerships"
        description="Buyers can request high-quality live transfers and leads. Publishers can partner to monetize traffic with transparent payouts and reliable delivery."
      />

      {/* Two Column Section */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Buyers Column */}
            <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border-2 border-foreground/80 bg-card p-8 shadow-card transition-all duration-300 hover:shadow-card-hover md:p-10">
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-foreground/[0.04] transition-transform duration-500 group-hover:scale-150" aria-hidden />

              <div className="relative">
                <div className="mb-6 flex items-center justify-between">
                  <div className="icon-tile h-14 w-14 rounded-xl">
                    <ShoppingCart className="h-7 w-7" />
                  </div>
                  <span className="inline-flex items-center rounded-full bg-foreground px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-background shadow-sm">
                    For Buyers
                  </span>
                </div>

                <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                  Buy High-Quality Calls That Convert
                </h2>

                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  We deliver compliant, conversion-ready live transfers and leads tailored to your strict campaign requirements.
                </p>

                <ul className="mt-8 space-y-3.5">
                  {buyerBenefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-3 text-sm font-medium text-foreground">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-foreground/10 text-foreground">
                        <CheckCircle2 className="h-4 w-4" />
                      </div>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative mt-10 border-t border-border pt-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <Button
                    variant="cta"
                    size="lg"
                    onClick={() => setShowBuyerForm(true)}
                    className="w-full sm:w-auto"
                  >
                    Request a Quote
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                  <a
                    href="tel:+17602630555"
                    className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Phone className="h-4 w-4" />
                    <span>(760) 263-0555</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Publishers Column */}
            <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-card transition-all duration-300 hover:border-foreground/20 hover:shadow-card-hover md:p-10">
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-muted transition-transform duration-500 group-hover:scale-150" aria-hidden />

              <div className="relative">
                <div className="mb-6 flex items-center justify-between">
                  <div className="icon-tile-soft h-14 w-14 rounded-xl">
                    <Megaphone className="h-7 w-7 text-foreground" />
                  </div>
                  <span className="inline-flex items-center rounded-full border border-border bg-muted px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    For Publishers
                  </span>
                </div>

                <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                  Monetize Your Traffic With Us
                </h2>

                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  Partner with CallAxtra to monetize calls and leads with transparent payout schedules, real-time tracking, and high caps.
                </p>

                <ul className="mt-8 space-y-3.5">
                  {publisherBenefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-3 text-sm font-medium text-foreground">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-muted text-foreground">
                        <TrendingUp className="h-4 w-4" />
                      </div>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative mt-10 border-t border-border pt-6">
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() => setShowPublisherForm(true)}
                  className="w-full sm:w-auto"
                >
                  Become a Publisher
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative overflow-hidden border-y border-border bg-section-alt py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-grid mask-fade-y" aria-hidden />
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-background px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
              Streamlined Process
            </span>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              How It Works
            </h2>
            <p className="mt-3 text-base text-muted-foreground md:text-lg">
              Getting started with CallAxtra is clear, rapid, and transparent from day one.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {steps.map((item) => (
              <div
                key={item.step}
                className="group relative rounded-2xl border border-border bg-card p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-foreground/20 hover:shadow-card-hover"
              >
                <div className="mb-6 flex items-center justify-between">
                  <div className="icon-tile h-12 w-12 rounded-xl text-base font-bold tabular-nums">
                    {item.step}
                  </div>
                  <span className="h-px flex-1 bg-border/60 mx-4" aria-hidden />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CtaBand
        title="Ready to discuss your campaign or traffic inventory?"
        description="Our partnership team is ready to analyze your specs and provide customized options."
      >
        <Button
          variant="inverse"
          size="lg"
          onClick={() => setShowBuyerForm(true)}
        >
          Request Buyer Quote
          <ArrowRight className="h-5 w-5" />
        </Button>
        <Button
          variant="outline-inverse"
          size="lg"
          onClick={() => setShowPublisherForm(true)}
        >
          Join as Publisher
        </Button>
      </CtaBand>

      {/* Buyer Form Dialog */}
      <Dialog open={showBuyerForm} onOpenChange={setShowBuyerForm}>
        <DialogContent className="max-h-[90vh] max-w-xl overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="sr-only">Request a Quote</DialogTitle>
          </DialogHeader>
          <ContactForm
            formType="buyer"
            actionUrl="https://formspree.io/f/mbdlnpyk"
            onSuccess={() => setShowBuyerForm(false)}
          />
        </DialogContent>
      </Dialog>

      {/* Publisher Form Dialog */}
      <Dialog open={showPublisherForm} onOpenChange={setShowPublisherForm}>
        <DialogContent className="max-h-[90vh] max-w-xl overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="sr-only">Become a Publisher</DialogTitle>
          </DialogHeader>
          <ContactForm
            formType="publisher"
            actionUrl="https://formspree.io/f/mojqbzwe"
            onSuccess={() => setShowPublisherForm(false)}
          />
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default BuyersPublishers;
