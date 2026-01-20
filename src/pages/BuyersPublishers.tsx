import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/shared/ContactForm";
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

const BuyersPublishers = () => {
  const [showBuyerForm, setShowBuyerForm] = useState(false);
  const [showPublisherForm, setShowPublisherForm] = useState(false);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0">
          <img
            src={buyersPublishersHeroImg}
            alt="Buyers and publishers partnerships"
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        </div>

        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-primary-foreground/10 px-4 py-2 text-sm font-medium text-primary-foreground backdrop-blur-sm">
              Buyers & Publishers
            </span>
            <h1 className="font-heading text-4xl font-bold text-primary-foreground md:text-5xl">
              Request Quotes and Partnerships
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/80 font-semibold">
              Buyers can request high-quality live transfers and leads. Publishers can partner to monetize traffic with transparent payouts and reliable delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Two Column Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Buyers Column - Primary Focus */}
            <div className="relative overflow-hidden rounded-2xl border-2 border-primary bg-card p-8 shadow-lg md:p-10 lg:scale-[1.02]">
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary-light opacity-50" />
              
              <div className="relative flex h-full flex-col">
                
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-muted">
                   <ShoppingCart className="h-8 w-8 text-primary-background" />
                </div>
                <span className="mb-2 inline-block rounded-full bg-primary-light px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary w-fit">
                  For Buyers
                </span>

                <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
                  Buy High-Quality Calls That Convert
                </h2>

                <p className="mt-4 text-lg text-muted-foreground">
                  We deliver compliant, conversion-ready live transfers tailored to your campaign needs.
                </p>

                <ul className="mt-8 flex-1 space-y-3">
                  {buyerBenefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-center gap-3 text-foreground"
                    >
                      <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-primary" />
                      {benefit}
                    </li>
                  ))}
                </ul>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <Button
                    variant="cta"
                    size="lg"
                    onClick={() => setShowBuyerForm(true)}
                  >
                    Request a Quote
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Phone className="h-4 w-4" />
                    <span>Or call: (855) 555-0123</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Publishers Column - Secondary */}
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-card md:p-10">
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary-light opacity-50" />
              
              <div className="relative flex h-full flex-col">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-muted">
                  <Megaphone className="h-8 w-8 text-foreground" />
                </div>

                <span className="mb-2 inline-block rounded-full bg-muted px-3 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground w-fit">
                  For Publishers
                </span>

                <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                  Monetize Your Traffic With Us
                </h2>

                <p className="mt-4 text-muted-foreground">
                  Partner with us to sell calls and maximize your revenue with transparent payouts and reliable delivery.
                </p>

                <ul className="mt-8 flex-1 space-y-3">
                  {publisherBenefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-center gap-3 text-foreground"
                    >
                      <TrendingUp className="h-5 w-5 flex-shrink-0 text-primary" />
                      {benefit}
                    </li>
                  ))}
                </ul>

                <div className="mt-10">
                  <Button
                    variant="secondary"
                    size="lg"
                    onClick={() => setShowPublisherForm(true)}
                  >
                    Become a Publisher
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
              How It Works
            </h2>
            <p className="mt-4 text-muted-foreground">
              Getting started is simple and straightforward.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                step: "1",
                title: "Connect",
                description:
                  "Fill out our form and tell us about your needs or traffic sources.",
              },
              {
                step: "2",
                title: "Customize",
                description:
                  "We'll work with you to create a tailored solution that fits your goals.",
              },
              {
                step: "3",
                title: "Convert",
                description:
                  "Start receiving quality leads or payouts as campaigns go live.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full gradient-hero text-xl font-bold text-white">
                  {item.step}
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
