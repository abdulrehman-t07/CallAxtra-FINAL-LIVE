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

    // If actionUrl is provided, submit to Formspree

    if(formType == "buyer"){
      actionUrl= "https://formspree.io/f/mbdlnpyk";
    }
    else if(formType == "publisher"){
      actionUrl = "https://formspree.io/f/xpqqzver";
    }
    else{
      actionUrl = "https://formspree.io/f/xkoondaz";
    }

    
    if (actionUrl) {
      try {
        const response = await fetch(actionUrl, {
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
            title: "Message Sent Successfully!",
            description: "We'll get back to you within one business day.",
          });
          onSuccess?.();
        } else {
          throw new Error("Form submission failed");
        }
      } catch {
        toast({
          title: "Submission Failed",
          description: "Please try again or contact us directly.",
          variant: "destructive",
        });
      }
    } else {
      // Simulate form submission for demo
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSubmitted(true);
      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within one business day.",
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
    general: "Ready to start your campaign? Tell us about your goals and we'll propose a tailored plan.",
    buyer: "Tell us about your lead needs and we'll create a custom solution.",
    publisher: "Partner with us to sell calls and maximize your revenue with transparent payouts and reliable delivery.",
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-light">
          <CheckCircle2 className="h-8 w-8 text-primary" />
        </div>
        <h3 className="font-heading text-xl font-semibold text-foreground">
          Thank You!
        </h3>
        <p className="mt-2 text-muted-foreground">
          Your request has been received. A campaign specialist will contact you within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="mb-6">
        <h3 className="font-heading text-xl font-semibold text-foreground">
          {formTitles[formType]}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">
          {formDescriptions[formType]}
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name *</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Smith"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@company.com"
            required
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="company">Company</Label>
          <Input
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Your Company"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="(555) 000-0000"
          />
        </div>
      </div>

      {/* General and Buyer fields */}
      {(formType === "general" || formType === "buyer") && (
        <>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="campaignType">Campaign Type</Label>
              <Select
                value={formData.campaignType}
                onValueChange={(value) => handleSelectChange("campaignType", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="live-transfers">Live Transfers</SelectItem>
                  <SelectItem value="leads">Leads</SelectItem>
                  <SelectItem value="call-center">Call Center</SelectItem>
                  <SelectItem value="custom">Custom</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="targetVertical">Target Vertical</Label>
              <Input
                id="targetVertical"
                name="targetVertical"
                value={formData.targetVertical}
                onChange={handleChange}
                placeholder="e.g., Medicare, Final Expense"
              />
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="monthlyVolume">Estimated Monthly Volume</Label>
              <Input
                id="monthlyVolume"
                name="monthlyVolume"
                value={formData.monthlyVolume}
                onChange={handleChange}
                placeholder="e.g., 500+ calls/month"
              />
            </div>
            {formType === "buyer" && (
              <div className="space-y-2">
                <Label htmlFor="desiredStartDate">Desired Start Date</Label>
                <Input
                  id="desiredStartDate"
                  name="desiredStartDate"
                  value={formData.desiredStartDate}
                  onChange={handleChange}
                  placeholder="e.g., ASAP, Next month"
                />
              </div>
            )}
          </div>
        </>
      )}

      {/* Publisher specific fields */}
      {formType === "publisher" && (
        <>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="website">Website / Traffic Source</Label>
              <Input
                id="website"
                name="website"
                value={formData.website}
                onChange={handleChange}
                placeholder="https://yoursite.com"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="geography">Geography</Label>
              <Input
                id="geography"
                name="geography"
                value={formData.geography}
                onChange={handleChange}
                placeholder="e.g., United States"
              />
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="trafficType">Traffic Type</Label>
              <Select
                value={formData.trafficType}
                onValueChange={(value) => handleSelectChange("trafficType", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="call">Call</SelectItem>
                  <SelectItem value="web">Web</SelectItem>
                  <SelectItem value="mobile">Mobile</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="monthlyVolume">Average Monthly Volume</Label>
              <Input
                id="monthlyVolume"
                name="monthlyVolume"
                value={formData.monthlyVolume}
                onChange={handleChange}
                placeholder="e.g., 1,000+ leads/month"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="payoutExpectations">Payout Expectations</Label>
            <Input
              id="payoutExpectations"
              name="payoutExpectations"
              value={formData.payoutExpectations}
              onChange={handleChange}
              placeholder="e.g., $XX per call"
            />
          </div>
        </>
      )}

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder={
            formType === "buyer"
              ? "Describe your target audience, preferred call hours, and any specific requirements..."
              : formType === "publisher"
              ? "Describe your traffic sources, lead quality, and current monetization methods..."
              : "Tell us about your goals and requirements..."
          }
          rows={4}
        />
      </div>

      <Button
        type="submit"
        variant="cta"
        size="lg"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            {formType === "buyer"
              ? "Request Quote"
              : formType === "publisher"
              ? "Become a Publisher"
              : "Let's Start Your Campaign"}
          </>
        )}
      </Button>
    </form>
  );
}
