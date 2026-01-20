import { Link } from "react-router-dom";
import { Zap, Mail, MapPin, Linkedin, Facebook, Twitter } from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/buyers-publishers", label: "Buyers & Publishers" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary  text-secondary-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4 lg:col-span-2">
              <Link to="/" className="" aria-label="CallAxtra Home">
             
                  <img
                    src="/branding/logo-dark.png"
                    alt="CallAxtra logo"
                    className="w-auto"
                    loading="eager"
                    style={{ height: 100 }}
                  />
            
              </Link>
            <p className="max-w-md text-sm text-secondary-foreground/70">
              We connect healthcare, insurance, and financial service providers
              with verified, conversion-ready customers through compliant live
              transfers and targeted lead generation.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/company/callaxtra-marketing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary-foreground/10 transition-colors hover:bg-secondary-foreground/20"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://www.facebook.com/callaxtra"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary-foreground/10 transition-colors hover:bg-secondary-foreground/20"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://twitter.com/callaxtra"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary-foreground/10 transition-colors hover:bg-secondary-foreground/20"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-heading text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-secondary-foreground/70 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 font-heading text-lg font-semibold">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-secondary-foreground/70">
                <Mail className="h-4 w-4 text-primary" />
                <span>partners@callaxtra.com</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-secondary-foreground/70">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@callaxtra.com</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-secondary-foreground/70">
                <MapPin className="h-4 w-4 mt-0.5 text-primary" />
                <div>
                  <p className="font-medium text-secondary-foreground">CALLAXTRA MARKETING LLC</p>
                  <p>7901 4TH ST N</p>
                  <p>OFFICE 28899</p>
                  <p>ST. PETERSBURG, FL. US 33702</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Compliance Disclaimer */}
        <div className="mt-12 border-t border-secondary-foreground/10 pt-8">
          <p className="text-center text-xs text-secondary-foreground/50">
            We operate under strict compliance standards and quality assurance processes.
          </p>
          <p className="mt-4 text-center text-xs text-secondary-foreground/50">
            © {new Date().getFullYear()} CallAxtra. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
