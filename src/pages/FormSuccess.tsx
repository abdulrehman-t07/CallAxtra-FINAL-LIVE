import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Home, Phone } from "lucide-react";

const steps = [
  {
    step: "1",
    title: "Review",
    desc: "Our campaign specialists will review your submission details and qualification requirements.",
  },
  {
    step: "2",
    title: "Consultation",
    desc: "A dedicated account representative will reach out within 24 business hours.",
  },
  {
    step: "3",
    title: "Campaign Setup",
    desc: "We configure delivery parameters, billing rules, and scripts to get you ready for launch.",
  },
];

const FormSuccess = () => {
  return (
    <Layout>
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0 bg-grid mask-fade-y opacity-50" aria-hidden />

        <div className="container relative z-10">
          <div className="mx-auto max-w-2xl text-center">
            {/* Success Icon */}
            <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-foreground text-background shadow-lg">
              <CheckCircle2 className="h-10 w-10" />
            </div>

            {/* Success Message */}
            <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-background px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Submission Received
            </span>
            <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Thank You!
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              Your inquiry has been routed to our campaign team. We will review your requirements and reach out within one business day.
            </p>

            {/* What Happens Next Card */}
            <div className="mt-12 rounded-2xl border border-border bg-card p-8 text-left shadow-card">
              <h2 className="font-heading text-lg font-bold text-foreground">
                What Happens Next?
              </h2>
              <ul className="mt-6 space-y-5">
                {steps.map((s) => (
                  <li key={s.step} className="flex items-start gap-4">
                    <div className="icon-tile h-8 w-8 shrink-0 rounded-full text-xs font-bold tabular-nums">
                      {s.step}
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-foreground">{s.title}</h3>
                      <p className="mt-0.5 text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4 text-foreground" />
              <span>Need immediate assistance? Call <a href="tel:+17602630555" className="font-semibold text-foreground underline-offset-4 hover:underline">(760) 263-0555</a></span>
            </div>

            {/* Actions */}
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild variant="cta" size="lg" className="w-full sm:w-auto">
                <Link to="/">
                  <Home className="h-4 w-4" />
                  Back to Home
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                <Link to="/services">
                  Explore Services
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FormSuccess;
