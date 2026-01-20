import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Zap } from "lucide-react";
import { ThemeToggle } from "@/components/shared/ThemeToggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/buyers-publishers", label: "Buyers & Publishers" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const [isDarkMode, setIsDarkMode] = useState(() =>
    document.documentElement.classList.contains("dark"),
  );
  const [logoOk, setLogoOk] = useState(true);

  useEffect(() => {
    const el = document.documentElement;
    const observer = new MutationObserver(() => {
      setIsDarkMode(el.classList.contains("dark"));
    });
    observer.observe(el, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

    var logoSrc ="light";
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        logoSrc = "/branding/logo-dark.png"
     
    } else {
      logoSrc = "/branding/logo-light.png"
    }
 

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 items-center md:h-20">
        {/* Logo - Left */}
        <Link to="/" className="flex items-center gap-2 shrink-0" aria-label="CallAxtra Home">
          {logoOk ? (
            <img
              src={logoSrc}
              alt="CallAxtra logo"
              className="w-auto"
              loading="eager"
              style={{ height: 40 }}
              onError={() => setLogoOk(false)}
            />
          ) : (
            <>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl gradient-hero shadow-lg">
                <Zap className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-heading text-xl font-bold text-foreground">
                Call<span className="text-primary">Axtra</span>
              </span>
            </>
          )}
        </Link>

        {/* Desktop Navigation - Center */}
        <nav className="hidden flex-1 items-center justify-center gap-1 lg:flex">
          {navLinks.map((link) => (
          <Link
  key={link.href}
  to={link.href}
  className={`px-4 py-2 text-sm font-medium transition-all duration-200 rounded-md ${
    location.pathname === link.href
      ? "bg-primary/10 text-primary" // Active: Subtle primary background
      : "text-muted-foreground hover:bg-muted hover:text-primary" // Inactive: Hover background
  }`}
>
  {link.label}
</Link>
          ))}
        </nav>

        {/* Desktop CTA - Right */}
        <div className="hidden items-center gap-3 shrink-0 lg:flex">
          <ThemeToggle />
          <Link to="/contact">
            <Button variant="cta" size="lg">
              Partner With Us
            </Button>
          </Link>
        </div>

        {/* Mobile: Spacer + Menu Button */}
        <div className="flex-1 lg:hidden" />
        <button
          className="flex h-10 w-10 items-center justify-center rounded-md border border-border lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5 text-foreground" />
          ) : (
            <Menu className="h-5 w-5 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="container flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`rounded-md px-4 py-3 text-sm font-medium transition-colors hover:bg-muted ${
                  location.pathname === link.href
                    ? "bg-primary-light text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 flex items-center justify-between border-t border-border pt-4">
              <span className="text-sm text-muted-foreground">Theme</span>
              <ThemeToggle />
            </div>
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-3"
            >
              <Button variant="cta" size="lg" className="w-full">
                Partner With Us
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
