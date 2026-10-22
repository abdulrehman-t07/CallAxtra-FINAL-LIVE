import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Home, ArrowRight, Search } from "lucide-react";

const NotFound = () => {
  return (
    <Layout>
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden py-20">
        <div className="pointer-events-none absolute inset-0 bg-grid mask-fade-y opacity-40" aria-hidden />

        <div className="container relative z-10 text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border border-border bg-card shadow-card">
            <Search className="h-9 w-9 text-muted-foreground" />
          </div>

          <span className="mb-2 inline-flex items-center gap-2 rounded-full border border-border bg-background px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground shadow-sm">
            Error 404
          </span>

          <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Page Not Found
          </h1>

          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
            The page you are looking for doesn't exist or has been relocated. Let's get you back to where you need to be.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild variant="cta" size="lg" className="w-full sm:w-auto">
              <Link to="/">
                <Home className="h-4 w-4" />
                Return Home
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
      </section>
    </Layout>
  );
};

export default NotFound;
