import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter, ShieldCheck } from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/buyers-publishers", label: "Buyers & Publishers" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

const socials = [
  { href: "https://www.linkedin.com/company/callaxtra-marketing", label: "LinkedIn", icon: Linkedin },
  { href: "https://www.facebook.com/callaxtra", label: "Facebook", icon: Facebook },
  { href: "https://twitter.com/callaxtra", label: "Twitter", icon: Twitter },
];

const emails = ["partners@callaxtra.com", "info@callaxtra.com"];

export function Footer() {
  return (
    // The footer is always dark (in both themes), so it uses the fixed "inverse" palette.
    <footer className="relative overflow-hidden border-t border-inverse-border bg-inverse text-inverse-foreground">
      <div className="pointer-events-none absolute inset-0 bg-grid-inverse mask-fade-b opacity-60" aria-hidden />

      <div className="container relative py-14 md:py-20">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12">
          {/* Company Info */}
          <div className="space-y-5 lg:col-span-5">
            <Link to="/" className="inline-block" aria-label="CallAxtra Home">
              <img
                src="/branding/logo-dark.png"
                alt="CallAxtra logo"
                className="h-14 w-auto md:h-16"
                loading="lazy"
              />
            </Link>
            <p className="max-w-md text-sm leading-relaxed text-inverse-muted">
              We connect healthcare, insurance, and financial service providers
              with verified, conversion-ready customers through compliant live
              transfers and targeted lead generation.
            </p>
            <div className="flex gap-2.5">
              {socials.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-inverse-foreground transition-all hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/10"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-wider text-inverse-foreground">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-inverse-muted transition-colors hover:text-inverse-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-4">
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-wider text-inverse-foreground">
              Contact Us
            </h4>
            <ul className="space-y-3">
              {emails.map((email) => (
                <li key={email}>
                  <a
                    href={`mailto:${email}`}
                    className="group flex items-center gap-3 text-sm text-inverse-muted transition-colors hover:text-inverse-foreground"
                  >
                    <Mail className="h-4 w-4 shrink-0 text-inverse-foreground/80" />
                    <span>{email}</span>
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="tel:+17602630555"
                  className="group flex items-center gap-3 text-sm text-inverse-muted transition-colors hover:text-inverse-foreground"
                >
                  <Phone className="h-4 w-4 shrink-0 text-inverse-foreground/80" />
                  <span>+1 (760) 263-0555</span>
                </a>
              </li>
              <li className="flex items-start gap-3 pt-1 text-sm text-inverse-muted">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-inverse-foreground/80" />
                <address className="not-italic leading-relaxed">
                  <p className="font-medium text-inverse-foreground">CallAxtra Marketing LLC</p>
                  <p>7901 4th St N, Office 28899</p>
                  <p>St. Petersburg, FL 33702, US</p>
                </address>
              </li>
            </ul>
          </div>
        </div>

        {/* Compliance Disclaimer */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-inverse-muted md:flex-row">
          <p>© {new Date().getFullYear()} CallAxtra. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-inverse-foreground/80" />
            We operate under strict compliance standards and quality assurance processes.
          </p>
        </div>
      </div>
    </footer>
  );
}
