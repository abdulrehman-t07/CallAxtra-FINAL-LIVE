import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { Send, Loader2, CheckCircle2 } from "lucide-react";

interface ContactFormProps {
  formType: "general" | "buyer" | "publisher";
  onSuccess?: () => void;
  actionUrl?: string;
}

export function ContactForm({ formType, onSuccess, actionUrl }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    // General/Buyer fields
    campaignType: "",
    monthlyVolume: "",
    targetVertical: "",
    desiredStartDate: "",
    // Publisher fields
    website: "",
    geography: "",
    trafficType: "",
    payoutExpectations: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    let targetUrl = actionUrl;
    if (formType === "buyer") {
      targetUrl = "https://formspree.io/f/mbdlnpyk";
    } else if (formType === "publisher") {
      targetUrl = "https://formspree.io/f/xpqqzver";
    } else {
      targetUrl = "https://formspree.io/f/xkoondaz";
    }

    if (targetUrl) {
      try {
        const response = await fetch(targetUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            ...formData,
            formType,
            _subject: `New ${formType} inquiry from ${formData.name}`,
          }),
        });

        if (response.ok) {
          setIsSubmitted(true);
          toast({
            title: "Inquiry Sent Successfully!",
            description: "A specialist will be in touch within one business day.",
          });
          onSuccess?.();
        } else {
          throw new Error("Form submission failed");
        }
      } catch {
        toast({
          title: "Submission Failed",
          description: "Please try again or contact us directly at partners@callaxtra.com.",
          variant: "destructive",
        });
      }
    } else {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsSubmitted(true);
      toast({
        title: "Inquiry Sent Successfully!",
        description: "A specialist will be in touch within one business day.",
      });
      onSuccess?.();
    }

    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const formTitles = {
    general: "Let's Start Your Campaign",
    buyer: "Request a Quote",
    publisher: "Become a Publisher",
  };

  const formDescriptions = {
    general: "Tell us about your campaign goals and we'll propose a tailored, compliant solution.",
    buyer: "Specify your lead vertical, filters, and target volume to get customized pricing.",
    publisher: "Monetize your qualified calls and web traffic with transparent weekly payouts.",
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="icon-tile mb-5 h-16 w-16 rounded-2xl shadow-md">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h3 className="font-heading text-2xl font-bold text-foreground">
          Thank You!
        </h3>
        <p className="mt-2 max-w-sm text-sm text-muted-foreground leading-relaxed">
          Your request has been securely delivered. A dedicated specialist will contact you within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="mb-6">
        <h3 className="font-heading text-xl font-bold tracking-tight text-foreground sm:text-2xl">
          {formTitles[formType]}
        </h3>
        <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
          {formDescriptions[formType]}
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Full Name <span className="text-foreground">*</span>
          </Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Smith"
            required
            className="h-11 bg-background"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Work Email <span className="text-foreground">*</span>
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@company.com"
            required
            className="h-11 bg-background"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="company" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Company Name
          </Label>
          <Input
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Your Company"
            className="h-11 bg-background"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Phone Number
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="(555) 000-0000"
            className="h-11 bg-background"
          />
        </div>
      </div>

      {/* General and Buyer fields */}
      {(formType === "general" || formType === "buyer") && (
        <>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="campaignType" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Campaign Type
              </Label>
              <Select
                value={formData.campaignType}
                onValueChange={(value) => handleSelectChange("campaignType", value)}
              >
                <SelectTrigger id="campaignType" className="h-11 bg-background">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="live-transfers">Live Transfers</SelectItem>
                  <SelectItem value="leads">Lead Generation</SelectItem>
                  <SelectItem value="call-center">Call Center Staffing</SelectItem>
                  <SelectItem value="custom">Custom Campaign</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="targetVertical" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Target Vertical
              </Label>
              <Input
                id="targetVertical"
                name="targetVertical"
                value={formData.targetVertical}
                onChange={handleChange}
                placeholder="e.g., Medicare, Final Expense"
                className="h-11 bg-background"
              />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="monthlyVolume" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Estimated Volume
              </Label>
              <Input
                id="monthlyVolume"
                name="monthlyVolume"
                value={formData.monthlyVolume}
                onChange={handleChange}
                placeholder="e.g., 500+ calls/month"
                className="h-11 bg-background"
              />
            </div>
            {formType === "buyer" && (
              <div className="space-y-2">
                <Label htmlFor="desiredStartDate" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Desired Start Date
                </Label>
                <Input
                  id="desiredStartDate"
                  name="desiredStartDate"
                  value={formData.desiredStartDate}
                  onChange={handleChange}
                  placeholder="e.g., Immediately, Next week"
                  className="h-11 bg-background"
                />
              </div>
            )}
          </div>
        </>
      )}

      {/* Publisher specific fields */}
      {formType === "publisher" && (
        <>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="website" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Website / Traffic Source
              </Label>
              <Input
                id="website"
                name="website"
                value={formData.website}
                onChange={handleChange}
                placeholder="https://yoursite.com"
                className="h-11 bg-background"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="geography" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Geography
              </Label>
              <Input
                id="geography"
                name="geography"
                value={formData.geography}
                onChange={handleChange}
                placeholder="e.g., United States"
                className="h-11 bg-background"
              />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="trafficType" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Traffic Channel
              </Label>
              <Select
                value={formData.trafficType}
                onValueChange={(value) => handleSelectChange("trafficType", value)}
              >
                <SelectTrigger id="trafficType" className="h-11 bg-background">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="call">Inbound Calls</SelectItem>
                  <SelectItem value="web">Web Forms / Landing Pages</SelectItem>
                  <SelectItem value="mobile">Mobile Search / Click-to-Call</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="monthlyVolume" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Monthly Volume
              </Label>
              <Input
                id="monthlyVolume"
                name="monthlyVolume"
                value={formData.monthlyVolume}
                onChange={handleChange}
                placeholder="e.g., 1,000+ leads/month"
                className="h-11 bg-background"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="payoutExpectations" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Payout Expectations
            </Label>
            <Input
              id="payoutExpectations"
              name="payoutExpectations"
              value={formData.payoutExpectations}
              onChange={handleChange}
              placeholder="e.g., Target CPL or CPA"
              className="h-11 bg-background"
            />
          </div>
        </>
      )}

      <div className="space-y-2">
        <Label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Additional Details
        </Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder={
            formType === "buyer"
              ? "Describe target demographics, states, hours of operation, and qualification criteria..."
              : formType === "publisher"
              ? "Describe traffic sources, current volume, and primary verticals..."
              : "Tell us about your requirements, timeline, and questions..."
          }
          rows={4}
          className="bg-background resize-none"
        />
      </div>

      <Button
        type="submit"
        variant="cta"
        size="lg"
        className="w-full h-12"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Submitting Inquiry...
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            {formType === "buyer"
              ? "Request Buyer Quote"
              : formType === "publisher"
              ? "Submit Publisher Application"
              : "Submit Inquiry"}
          </>
        )}
      </Button>
    </form>
  );
}
