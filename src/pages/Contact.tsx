import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/shared/SEO";
import { ContactForm } from "@/components/shared/ContactForm";
import { PageHero } from "@/components/shared/PageHero";
import { Mail, MapPin, Phone, ShieldCheck, Clock } from "lucide-react";
import contactHeroImg from "@/assets/contact-hero.jpg";

const contactInfo = [
  {
    icon: Mail,
    label: "Partnership Inquiries",
    value: "partners@callaxtra.com",
    href: "mailto:partners@callaxtra.com",
  },
  {
    icon: Mail,
    label: "General Support",
    value: "info@callaxtra.com",
    href: "mailto:info@callaxtra.com",
  },
  {
    icon: Phone,
    label: "Phone Line",
    value: "(760) 263-0555",
    href: "tel:+17602630555",
  },
];

const highlights = [
  {
    icon: Clock,
    title: "Fast Response",
    text: "We respond to all verified inquiries within 24 hours.",
  },
  {
    icon: ShieldCheck,
    title: "Strict Compliance",
    text: "TCPA, CMS, and HIPAA compliant communications.",
  },
];

const Contact = () => {
  return (
    <Layout>
      <SEO
        title="Contact CallAxtra | Request Live Transfers Quote & Campaign Consultation"
        description="Contact our campaign specialists to start a Medicare, Final Expense, CGM, Pharmacy, or insurance live transfer campaign. Fast 24-hour turnaround."
        keywords="contact CallAxtra, request live transfers quote, buy Medicare leads contact, insurance call center consultation"
        canonicalPath="/contact"
      />
      {/* Hero */}
      <PageHero
        image={contactHeroImg}
        imageAlt="Contact CallAxtra"
        badge="Get in Touch"
        title="Start Your Compliant Campaign Today"
        description="Contact our specialists to discuss custom live transfers, lead volume requirements, or publisher partnership terms."
      />

      {/* Main Contact Section */}
      <section className="bg-section-alt py-20 md:py-28 border-b border-border">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            {/* Left: Contact Info & Map */}
            <div className="space-y-8 lg:col-span-5">
              <div>
                <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-background px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground shadow-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
                  Direct Channels
                </span>
                <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                  Let's Connect
                </h2>
                <p className="mt-3 text-base text-muted-foreground leading-relaxed">
                  Tell us about your target vertical, volume goals, or traffic capabilities and we will configure an optimal solution.
                </p>
              </div>

              {/* Direct Channels Cards */}
              <div className="space-y-3">
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:border-foreground/20 hover:shadow-card-hover"
                  >
                    <div className="icon-tile-soft h-11 w-11 shrink-0 rounded-lg transition-transform duration-200 group-hover:scale-105">
                      <item.icon className="h-5 w-5 text-foreground" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-muted-foreground">
                        {item.label}
                      </p>
                      <p className="text-sm font-semibold text-foreground group-hover:underline">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Trust highlights */}
              <div className="grid gap-4 sm:grid-cols-2">
                {highlights.map((h) => (
                  <div key={h.title} className="rounded-xl border border-border bg-section-alt p-4">
                    <div className="flex items-center gap-2 font-semibold text-foreground text-sm">
                      <h.icon className="h-4 w-4 text-foreground" />
                      {h.title}
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                      {h.text}
                    </p>
                  </div>
                ))}
              </div>

              {/* Location Tile with Map */}
              <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-card">
                <div className="flex items-start gap-4 p-6 border-b border-border">
                  <div className="icon-tile-soft h-10 w-10 shrink-0 rounded-lg">
                    <MapPin className="h-5 w-5 text-foreground" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Headquarters
                    </p>
                    <p className="font-heading text-base font-bold text-foreground">
                      CALLAXTRA MARKETING LLC
                    </p>
                    <p className="text-sm text-muted-foreground mt-0.5">
                      7901 4TH ST N, OFFICE 28899<br />
                      ST. PETERSBURG, FL 33702, US
                    </p>
                  </div>
                </div>

                <div className="relative h-56 w-full bg-muted">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3528.5024853774754!2d-82.6368863!3d27.8483143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2e1a4c7f5bfb7%3A0x1234567890abcdef!2s7901%204th%20St%20N%2C%20St.%20Petersburg%2C%20FL%2033702!5e0!3m2!1sen!2sus!4v1704900000000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="CallAxtra Office Location - St. Petersburg, FL"
                    className="h-full w-full opacity-90 transition-opacity hover:opacity-100 dark:invert-[0.88] dark:hue-rotate-180"
                  />
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-xl sm:p-10">
                <ContactForm formType="general" actionUrl="https://formspree.io/f/mojqbzwe" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
