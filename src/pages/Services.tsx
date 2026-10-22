import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/shared/SEO";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/shared/ContactForm";
import { PageHero } from "@/components/shared/PageHero";
import { CtaBand } from "@/components/shared/CtaBand";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Link } from "react-router-dom";
import {
  Phone,
  Users as UsersIcon,
  HeartPulse,
  Headphones,
  Network,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

// Import service images
import liveTransfersImg from "@/assets/service-live-transfers.jpg";
import leadGenerationImg from "@/assets/service-lead-generation.jpg";
import healthcareImg from "@/assets/service-healthcare.jpg";
import callCenterImg from "@/assets/service-call-center.jpg";
import partnerNetworkImg from "@/assets/service-partner-network.jpg";
import serviceHeroImg from "@/assets/service-hero.jpg";

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  image?: string;
  children: React.ReactNode;
}

function ServiceModal({ isOpen, onClose, title, image, children }: ServiceModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-h-[90vh] max-w-2xl gap-0 overflow-y-auto p-0">
        {image && (
          <div className="relative h-40 w-full overflow-hidden sm:rounded-t-lg">
            <img src={image} alt="" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          </div>
        )}
        <div className="px-6 pb-6 sm:px-8 sm:pb-8">
          <DialogHeader className={image ? "-mt-6 relative" : "pt-6"}>
            <DialogTitle className="font-heading text-2xl">{title}</DialogTitle>
          </DialogHeader>
          {children}
        </div>
      </DialogContent>
    </Dialog>
  );
}

const services = [
  {
    id: "live-transfers",
    icon: Phone,
    title: "Live Transfers",
    description: "Real-time connections to prospects actively interested in your offer.",
    image: liveTransfersImg,
    modalTitle: "Real-Time Live Transfers",
    modalContent: {
      overview: "Our live transfers connect you directly with prospects who are actively interested in your offer. Transfers are delivered in real time to your team or dialer so you can engage while interest is highest.",
      billingQuality: "Transfers are billed only when they meet your campaign criteria and pass the agreed time buffer. We support both warm transfers and cold transfers and will configure the handoff to match your closing process.",
      campaigns: "Medicare Advantage & Supplement; Final Expense Insurance; Continuous Glucose Monitors (insurance covered). If you need customers in these verticals, live transfers are the most effective option.",
      features: [
        "Real-time delivery to your line or dialer",
        "Pre-qualification and intent verification",
        "Configurable time buffer and billing rules",
        "Warm and cold transfer options",
      ],
      ctaText: "Request Buyer Form",
      ctaType: "buyer" as const,
    },
  },
  {
    id: "lead-generation",
    icon: UsersIcon,
    title: "Lead Generation",
    description: "Verified leads across multiple channels with rigorous verification.",
    image: leadGenerationImg,
    modalTitle: "Targeted Lead Generation",
    modalContent: {
      overview: "We generate verified leads across multiple channels including inbound calls, digital opt-ins, and partner traffic. Our process focuses on delivering leads that meet your targeting and compliance requirements.",
      sections: [
        {
          title: "Lead Verification",
          items: [
            "Opt-in confirmation where applicable",
            "Data validation for contact details and eligibility criteria",
            "Intent scoring to prioritize higher-propensity prospects",
          ],
        },
        {
          title: "Channels and Methods",
          items: [
            "Call-based lead capture with trained agents",
            "Digital lead capture via landing pages and forms",
            "Publisher-sourced leads from vetted partners",
          ],
        },
        {
          title: "Quality Controls",
          items: [
            "Custom qualification scripts aligned to your offer",
            "Fraud and duplicate detection",
            "Reporting on conversion metrics and lead quality",
          ],
        },
      ],
      useCases: "Healthcare enrollment, pharmacy programs, insurance quotes, financial services outreach",
      ctaText: "Request a Quote",
      ctaType: "buyer" as const,
    },
  },
  {
    id: "healthcare-insurance",
    icon: HeartPulse,
    title: "Healthcare & Insurance Campaigns",
    description: "Specialized campaigns for Medicare, health insurance, and pharmaceutical verticals.",
    image: healthcareImg,
    modalTitle: "Specialized Healthcare and Insurance Campaigns",
    modalContent: {
      overview: "Campaigns tailored for Medicare, health insurance, and pharmaceutical verticals with strict compliance protocols and vertical-specific targeting.",
      capabilities: [
        "Vertical-specific scripts and agent training",
        "Compliance checks and documentation workflows",
        "Performance reporting and optimization",
      ],
      ctaText: "Learn More",
      ctaType: "general" as const,
    },
  },
  {
    id: "call-center",
    icon: Headphones,
    title: "Call Center Solutions",
    description: "Full-service inbound and outbound call center capabilities.",
    image: callCenterImg,
    modalTitle: "Outbound and Inbound Call Center Services",
    modalContent: {
      overview: "Full-service call center capabilities with trained agents who represent your brand professionally. We provide inbound customer support, outbound sales, appointment setting, and follow-up services.",
      serviceDetails: [
        "Custom training to match your brand voice and compliance needs",
        "Flexible staffing with per-hour resource pricing",
        "Inbound support for customer service, claims, and help desks",
        "Outbound campaigns for lead nurturing and sales",
      ],
      pricingModel: "Hourly rates per resource with scalable staffing options. Pricing and SLAs are defined per engagement.",
      ctaText: "Hire a Team",
      ctaType: "general" as const,
    },
  },
  {
    id: "partner-network",
    icon: Network,
    title: "Scalable Partner Network",
    description: "Access our vetted network of publishers and traffic sources.",
    image: partnerNetworkImg,
    modalTitle: "Custom Campaigns and Partner Network",
    modalContent: {
      overview: "Access our vetted network of publishers and traffic sources to scale campaigns efficiently. If your campaign needs are unique, submit a custom request and our team will evaluate feasibility and propose a solution.",
      howItWorks: [
        "Submit campaign details and target KPIs",
        "We assess available inventory and compliance fit",
        "We propose a pilot or scale plan with transparent terms",
      ],
      ctaText: "Submit Custom Request",
      ctaType: "general" as const,
    },
  },
];

/** Reusable block for a titled checklist inside the service modal */
function CheckList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="mb-3 font-semibold text-foreground">{title}</h4>
      <ul className="space-y-2.5">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-2.5 text-muted-foreground">
            <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-foreground" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function TextBlock({ title, text }: { title: string; text: string }) {
  return (
    <div>
      <h4 className="mb-2 font-semibold text-foreground">{title}</h4>
      <p className="leading-relaxed text-muted-foreground">{text}</p>
    </div>
  );
}

const Services = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [formType, setFormType] = useState<"general" | "buyer">("general");

  const handleCTAClick = (ctaType: "general" | "buyer") => {
    setFormType(ctaType);
    setShowForm(true);
    setActiveModal(null);
  };

  return (
    <Layout>
      <SEO
        title="Live Transfers & Lead Generation Services | Medicare, CGM, Insurance"
        description="Explore CallAxtra's specialized live transfers, compliant lead generation, and dedicated call center solutions across Medicare, Final Expense, CGM, Pharmacy & DME."
        keywords="Medicare live transfers, final expense transfers, continuous glucose monitors CGM leads, pharmacy DME leads, insurance lead generation services"
        canonicalPath="/services"
      />
      {/* Hero */}
      <PageHero
        image={serviceHeroImg}
        imageAlt="Services hero background"
        badge="Our Services"
        title="Live Transfers, Lead Generation, Call Center Solutions"
        description="We offer a suite of services designed to deliver conversion-ready prospects and reliable campaign execution across healthcare, insurance, and financial verticals. Click any service tile to view details and request a tailored solution."
      />

      {/* Service Tiles */}
      <section className="bg-section-alt py-20 md:py-28 border-b border-border">
        <div className="container">
          <SectionHeading
            badge="What We Offer"
            title="Services Tailored to Your Needs"
            description="Explore our range of lead generation and call center services designed for healthcare, insurance, and financial verticals."
          />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <button
                type="button"
                key={service.id}
                onClick={() => setActiveModal(service.id)}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card text-left shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-foreground/20 hover:shadow-card-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                {/* Service Image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-zinc-950/10 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white text-zinc-950 shadow-lg">
                    <service.icon className="h-5 w-5" />
                  </div>
                  <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-zinc-950 opacity-0 shadow-md transition-all duration-300 group-hover:opacity-100">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">
                    {service.title}
                  </h3>

                  <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>

                  <div className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-foreground">
                    View Details
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaBand
        className="pt-0 md:pt-0"
        title="Ready to Get Started?"
        description="Let's discuss how our services can help you achieve your lead generation goals."
      >
        <Button asChild variant="inverse" size="lg">
          <Link to="/contact">
            Contact Our Team
            <ArrowRight className="h-5 w-5" />
          </Link>
        </Button>
      </CtaBand>

      {/* Service Modals */}
      {services.map((service) => {
        const content = service.modalContent;
        return (
          <ServiceModal
            key={service.id}
            isOpen={activeModal === service.id}
            onClose={() => setActiveModal(null)}
            title={service.modalTitle}
            image={service.image}
          >
            <div className="space-y-6 pt-4">
              <TextBlock title="Overview" text={content.overview} />

              {"billingQuality" in content && (
                <TextBlock title="Billing and Quality" text={content.billingQuality} />
              )}

              {"campaigns" in content && <TextBlock title="Typical Campaigns" text={content.campaigns} />}

              {"features" in content && <CheckList title="What You Get" items={content.features} />}

              {"sections" in content &&
                content.sections.map((section, index) => (
                  <CheckList key={index} title={section.title} items={section.items} />
                ))}

              {"useCases" in content && <TextBlock title="Use Cases" text={content.useCases} />}

              {"capabilities" in content && <CheckList title="Capabilities" items={content.capabilities} />}

              {"serviceDetails" in content && (
                <CheckList title="Service Details" items={content.serviceDetails} />
              )}

              {"pricingModel" in content && <TextBlock title="Pricing Model" text={content.pricingModel} />}

              {"howItWorks" in content && <CheckList title="How It Works" items={content.howItWorks} />}

              <div className="pt-2">
                <Button
                  variant="cta"
                  size="lg"
                  className="w-full"
                  onClick={() => handleCTAClick(content.ctaType)}
                >
                  {content.ctaText}
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </ServiceModal>
        );
      })}

      {/* Form Dialog */}
      <Dialog open={showForm} onOpenChange={setShowForm}>
        <DialogContent className="max-h-[90vh] max-w-lg overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="sr-only">
              {formType === "buyer" ? "Request a Quote" : "Contact Us"}
            </DialogTitle>
          </DialogHeader>
          <ContactForm formType={formType} onSuccess={() => setShowForm(false)} />
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default Services;
