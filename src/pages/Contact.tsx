import { Layout } from "@/components/layout/Layout";
import { ContactForm } from "@/components/shared/ContactForm";
import { Mail, MapPin } from "lucide-react";
import contactHeroImg from "@/assets/contact-hero.jpg";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "partners@callaxtra.com",
  },
];

const Contact = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0">
          <img
            src={contactHeroImg}
            alt="Contact CallAxtra"
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        </div>

        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-primary-foreground/10 px-4 py-2 text-sm font-medium text-primary-foreground backdrop-blur-sm">
              Contact Us
            </span>
            <h1 className="font-heading text-4xl font-bold text-primary-foreground md:text-5xl">
              Start Your Campaign
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/80 font-semibold">
              Contact us to start a campaign, request a quote, or discuss partnership opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Info */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                Get in Touch
              </h2>
              <p className="mt-4 text-muted-foreground">
                Ready to start your campaign? Tell us about your goals and we'll propose a tailored plan.
              </p>

              <div className="mt-8 space-y-4">
                {contactInfo.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 shadow-card"
                  >
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary-light">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        {item.label}
                      </p>
                      <p className="font-semibold text-foreground">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Location Tile with Map */}
              <div className="mt-8 overflow-hidden rounded-xl border border-border bg-card shadow-card">
                <div className="grid md:grid-cols-2">
                  {/* Address */}
                  <div className="flex items-start gap-4 p-6">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary-light">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Location</p>
                      <p className="font-semibold text-foreground">CALLAXTRA MARKETING LLC</p>
                      <p className="text-muted-foreground">7901 4TH ST N</p>
                      <p className="text-muted-foreground">OFFICE 28899</p>
                      <p className="text-muted-foreground">ST. PETERSBURG, FL 33702</p>
                    </div>
                  </div>
                  
                  {/* Map */}
                  <div className="h-64 md:h-auto min-h-[200px]">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3528.5024853774754!2d-82.6368863!3d27.8483143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2e1a4c7f5bfb7%3A0x1234567890abcdef!2s7901%204th%20St%20N%2C%20St.%20Petersburg%2C%20FL%2033702!5e0!3m2!1sen!2sus!4v1704900000000!5m2!1sen!2sus"
                      width="100%"
                      height="100%"
                      style={{ border: 0, minHeight: '200px' }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="CallAxtra Office Location - St. Petersburg, FL"
                      className="grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-lg md:p-8">
              <ContactForm formType="general" actionUrl="https://formspree.io/f/mojqbzwe" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
