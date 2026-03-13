"use client";

import { useState } from "react";
import { useToast } from "./ui/Toast";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { Mail, MapPin, Phone, Send, Loader2 } from "lucide-react";

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const { showToast } = useToast();
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case "name":
        if (!value.trim()) return "Name is required";
        if (value.trim().length < 2) return "Name must be at least 2 characters";
        return undefined;
      case "email":
        if (!value.trim()) return "Email is required";
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return "Please enter a valid email";
        return undefined;
      case "message":
        if (!value.trim()) return "Message is required";
        if (value.trim().length < 10) return "Message must be at least 10 characters";
        return undefined;
      default:
        return undefined;
    }
  };

  const handleBlur = (name: string) => {
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, formData[name as keyof typeof formData]);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {
      name: validateField("name", formData.name),
      email: validateField("email", formData.email),
      message: validateField("message", formData.message),
    };
    setErrors(newErrors);
    setTouched({ name: true, email: true, message: true });
    return !newErrors.name && !newErrors.email && !newErrors.message;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      showToast("Please fix the errors in the form", "error");
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      showToast("Thank you! We'll be in touch soon.", "success");
      setFormData({ name: "", email: "", message: "" });
      setTouched({});
      setErrors({});
    } catch {
      showToast("Something went wrong. Please try again.", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = (fieldName: string) =>
    `w-full px-5 py-4 rounded-xl bg-white border text-[#1A1A1A] text-base placeholder-gray-400 outline-none transition-all duration-300 focus:ring-2 focus:ring-[#D4A84B]/30 ${
      errors[fieldName as keyof FormErrors] && touched[fieldName]
        ? "border-red-500 focus:border-red-500"
        : "border-gray-200 focus:border-[#D4A84B]"
    }`;

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "info@sikomining.co.za",
      href: "mailto:info@sikomining.co.za",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+27 (0) 13 XXX XXXX",
      href: "tel:+27130000000",
    },
    {
      icon: MapPin,
      label: "Address",
      value: "210 Pilgrims Rest, Reedstream Park, Rietspruit, Mpumalanga, South Africa 2231",
      href: null,
    },
  ];

  return (
    <section ref={ref} id="contact" className="section-spacing bg-[#1A1A1A]">
      <div className="container-custom">
        <div
          className={`text-center mb-12 lg:mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Get in <span className="text-[#D4A84B]">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to discuss your mining project? Fill out the form below and our team will get back to you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <div
            className={`card-dark p-8 lg:p-10 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <h3 className="text-xl font-bold text-white mb-6">Send us a message</h3>
            <form onSubmit={handleSubmit} noValidate>
              <div className="mb-5">
                <label className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  onBlur={() => handleBlur("name")}
                  className={inputClasses("name")}
                  disabled={isSubmitting}
                />
                {errors.name && touched.name && (
                  <p className="mt-2 text-xs text-red-400">{errors.name}</p>
                )}
              </div>

              <div className="mb-5">
                <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  onBlur={() => handleBlur("email")}
                  className={inputClasses("email")}
                  disabled={isSubmitting}
                />
                {errors.email && touched.email && (
                  <p className="mt-2 text-xs text-red-400">{errors.email}</p>
                )}
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-300 mb-2">Your Message</label>
                <textarea
                  placeholder="Tell us about your project..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  onBlur={() => handleBlur("message")}
                  className={`${inputClasses("message")} resize-none`}
                  disabled={isSubmitting}
                />
                {errors.message && touched.message && (
                  <p className="mt-2 text-xs text-red-400">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
            <p className="text-gray-400 leading-relaxed mb-8">
              Schedule a free consultation to discuss a strategy forward for your mining operations.
            </p>

            <div className="space-y-6">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#D4A84B]/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-[#D4A84B]" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">{item.label}</h4>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-gray-400 hover:text-[#D4A84B] transition-colors duration-300"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-gray-400 leading-relaxed">{item.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Map placeholder or additional info */}
            <div className="mt-10 p-6 rounded-xl bg-[#2A2A2A] border border-white/10">
              <p className="text-sm text-gray-400 mb-2">Business Hours</p>
              <p className="text-white font-medium">Monday - Friday: 8:00 AM - 5:00 PM</p>
              <p className="text-gray-400 text-sm mt-1">Saturday & Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
