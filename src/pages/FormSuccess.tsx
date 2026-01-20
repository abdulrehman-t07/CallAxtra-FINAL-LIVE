import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Home, Phone } from "lucide-react";

const FormSuccess = () => {
  return (
    <Layout>
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            {/* Success Icon */}
            <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-primary-light">
              <CheckCircle2 className="h-12 w-12 text-primary" />
            </div>

            {/* Success Message */}
            <h1 className="font-heading text-4xl font-bold text-foreground md:text-5xl">
              Thank You!
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Your request has been received successfully. A campaign specialist will contact you within one business day.
            </p>

            {/* What Happens Next */}
            <div className="mt-12 rounded-2xl border border-border bg-card p-8 text-left shadow-card">
              <h2 className="font-heading text-xl font-semibold text-foreground">
                What Happens Next?
              </h2>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full gradient-hero text-sm font-bold text-primary-foreground">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Review</h3>
                    <p className="text-sm text-muted-foreground">
                      Our team will review your submission and assess your requirements.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full gradient-hero text-sm font-bold text-primary-foreground">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Contact</h3>
                    <p className="text-sm text-muted-foreground">
                      A dedicated campaign specialist will reach out within 24 hours.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full gradient-hero text-sm font-bold text-primary-foreground">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Launch</h3>
                    <p className="text-sm text-muted-foreground">
                      We'll work together to create a tailored solution and get your campaign live.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="mt-8 flex flex-col items-center gap-2 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>Need immediate assistance? Call (855) 555-0123</span>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link to="/">
                <Button variant="cta" size="lg">
                  <Home className="h-4 w-4" />
                  Back to Home
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="lg">
                  Explore Services
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FormSuccess;