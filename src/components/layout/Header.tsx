import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Menu, X, Zap } from "lucide-react";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { useTheme } from "@/hooks/use-theme";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/buyers-publishers", label: "Buyers & Publishers" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logoOk, setLogoOk] = useState(true);
  const location = useLocation();
  const { isDark } = useTheme();

  const logoSrc = isDark ? "/branding/logo-dark.png" : "/branding/logo-light.png";

  // Elevate the header once the page is scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on navigation and with the Escape key
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMobileMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileMenuOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-[background-color,border-color,box-shadow] duration-300",
        scrolled || mobileMenuOpen
          ? "border-border bg-background/85 shadow-[0_1px_0_0_hsl(var(--border)),0_8px_24px_-12px_hsl(240_10%_4%/0.15)] backdrop-blur-xl supports-[backdrop-filter]:bg-background/70"
          : "border-transparent bg-background",
      )}
    >
      <div className="container flex h-16 items-center md:h-20">
        {/* Logo - Left */}
        <Link to="/" className="flex shrink-0 items-center gap-2" aria-label="CallAxtra Home">
          {logoOk ? (
            <img
              src={logoSrc}
              alt="CallAxtra logo"
              className="h-9 w-auto md:h-10"
              loading="eager"
              onError={() => setLogoOk(false)}
            />
          ) : (
            <>
              <div className="icon-tile h-10 w-10 rounded-xl">
                <Zap className="h-5 w-5" />
              </div>
              <span className="font-heading text-xl font-bold text-foreground">CallAxtra</span>
            </>
          )}
        </Link>

        {/* Desktop Navigation - Center */}
        <nav className="hidden flex-1 items-center justify-center lg:flex" aria-label="Main">
          <div className="flex items-center gap-1 rounded-full border border-border/70 bg-muted/50 p-1">
            {navLinks.map((link) => {
              const active = location.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200",
                    active
                      ? "bg-background text-foreground shadow-sm ring-1 ring-border"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Desktop CTA - Right */}
        <div className="hidden shrink-0 items-center gap-3 lg:flex">
          <ThemeToggle />
          <Button asChild variant="cta" size="default" className="h-10 rounded-full px-5">
            <Link to="/contact">
              Partner With Us
              <ArrowRight />
            </Link>
          </Button>
        </div>

        {/* Mobile: Spacer + Theme + Menu Button */}
        <div className="flex-1 lg:hidden" />
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:bg-muted"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div id="mobile-menu" className="animate-slide-down border-t border-border bg-background lg:hidden">
          <nav className="container flex flex-col gap-1 py-4" aria-label="Mobile">
            {navLinks.map((link) => {
              const active = location.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "flex items-center justify-between rounded-lg px-4 py-3 text-sm font-medium transition-colors",
                    active
                      ? "bg-muted text-foreground"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground",
                  )}
                >
                  {link.label}
                  {active && <span className="h-1.5 w-1.5 rounded-full bg-foreground" />}
                </Link>
              );
            })}
            <Button asChild variant="cta" size="lg" className="mt-3 w-full">
              <Link to="/contact">
                Partner With Us
                <ArrowRight />
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
