import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/shared/ContactForm";
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
  CheckCircle2,
  X,
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
  children: React.ReactNode;
}

function ServiceModal({ isOpen, onClose, title, children }: ServiceModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-h-[90vh] max-w-2xl overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-heading text-2xl">{title}</DialogTitle>
        </DialogHeader>
        {children}
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
      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={serviceHeroImg} 
            alt="Services hero background"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        </div>
        
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-primary-foreground/10 px-4 py-2 text-sm font-medium text-primary-foreground backdrop-blur-sm">
              Our Services
            </span>
            <h1 className="font-heading text-4xl font-bold text-primary-foreground md:text-5xl">
              Live Transfers, Lead Generation, Call Center Solutions
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/80 font-semibold">
              We offer a suite of services designed to deliver conversion-ready prospects and reliable campaign execution across healthcare, insurance, and financial verticals. Click any service tile to view details and request a tailored solution.
            </p>
          </div>
        </div>
      </section>

      {/* Service Tiles */}
      <section className="py-16 md:py-24">
        <div className="container">
          <SectionHeading
            badge="What We Offer"
            title="Services Tailored to Your Needs"
            description="Explore our range of lead generation and call center services designed for healthcare, insurance, and financial verticals."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveModal(service.id)}
                className="group relative overflow-hidden rounded-xl border border-border bg-card text-left shadow-card transition-all duration-300 hover:shadow-card-hover hover:border-primary/50"
              >
                {/* Service Image */}
                <div className="relative h-40 w-full overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                  <div className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-lg gradient-hero">
                    <service.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                </div>
                
                <div className="p-5">
                  <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary">
                    View Details
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl rounded-2xl gradient-hero p-8 text-center md:p-12">
            <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mt-4 text-white">
              Let's discuss how our services can help you achieve your lead
              generation goals.
            </p>
            <div className="mt-8">
              <Link to="/contact">
                <Button variant="cta" size="lg">
                  Contact Our Team
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Modals */}
      {services.map((service) => (
        <ServiceModal
          key={service.id}
          isOpen={activeModal === service.id}
          onClose={() => setActiveModal(null)}
          title={service.modalTitle}
        >
          <div className="space-y-6 py-4">
            <div>
              <h4 className="mb-2 font-semibold text-foreground">Overview</h4>
              <p className="text-muted-foreground">{service.modalContent.overview}</p>
            </div>

            {"billingQuality" in service.modalContent && (
              <div>
                <h4 className="mb-2 font-semibold text-foreground">Billing and Quality</h4>
                <p className="text-muted-foreground">{service.modalContent.billingQuality}</p>
              </div>
            )}

            {"campaigns" in service.modalContent && (
              <div>
                <h4 className="mb-2 font-semibold text-foreground">Typical Campaigns</h4>
                <p className="text-muted-foreground">{service.modalContent.campaigns}</p>
              </div>
            )}

            {"features" in service.modalContent && (
              <div>
                <h4 className="mb-2 font-semibold text-foreground">What You Get</h4>
                <ul className="space-y-2">
                  {service.modalContent.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {"sections" in service.modalContent &&
              service.modalContent.sections.map((section, index) => (
                <div key={index}>
                  <h4 className="mb-2 font-semibold text-foreground">{section.title}</h4>
                  <ul className="space-y-2">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2 text-muted-foreground">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

            {"useCases" in service.modalContent && (
              <div>
                <h4 className="mb-2 font-semibold text-foreground">Use Cases</h4>
                <p className="text-muted-foreground">{service.modalContent.useCases}</p>
              </div>
            )}

            {"capabilities" in service.modalContent && (
              <div>
                <h4 className="mb-2 font-semibold text-foreground">Capabilities</h4>
                <ul className="space-y-2">
                  {service.modalContent.capabilities.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {"serviceDetails" in service.modalContent && (
              <div>
                <h4 className="mb-2 font-semibold text-foreground">Service Details</h4>
                <ul className="space-y-2">
                  {service.modalContent.serviceDetails.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {"pricingModel" in service.modalContent && (
              <div>
                <h4 className="mb-2 font-semibold text-foreground">Pricing Model</h4>
                <p className="text-muted-foreground">{service.modalContent.pricingModel}</p>
              </div>
            )}

            {"howItWorks" in service.modalContent && (
              <div>
                <h4 className="mb-2 font-semibold text-foreground">How It Works</h4>
                <ul className="space-y-2">
                  {service.modalContent.howItWorks.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="pt-4">
              <Button
                variant="cta"
                size="lg"
                className="w-full"
                onClick={() => handleCTAClick(service.modalContent.ctaType)}
              >
                {service.modalContent.ctaText}
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </ServiceModal>
      ))}

      {/* Form Dialog */}
      <Dialog open={showForm} onOpenChange={setShowForm}>
        <DialogContent className="max-w-lg">
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
