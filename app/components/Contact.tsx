"use client";

import { useState } from "react";
import { useToast } from "./ui/Toast";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { Mail, MapPin, Send, Loader2 } from "lucide-react";

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
      // Simulate API call
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
    `w-full px-4 py-3 rounded-lg bg-gray-900 border text-white text-sm placeholder-gray-500 outline-none transition-all duration-300 focus:ring-2 focus:ring-[#F47C20]/50 ${
      errors[fieldName as keyof FormErrors] && touched[fieldName]
        ? "border-red-500 focus:border-red-500"
        : "border-gray-700 focus:border-[#F47C20]"
    }`;

  return (
    <section ref={ref} id="contact" className="relative z-0 py-20">
      {/* Dark background layer */}
      <div
        className="absolute inset-0 z-[-2] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/footer-bg.png')" }}
      />
      <div className="absolute inset-0 z-[-1] bg-gray-900/92" />

      {/* Shape Divider Layer */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180 z-0">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-[60px] block"
        >
          <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z" fill="#FFFFFF" />
        </svg>
      </div>

      <div className="container-custom relative z-10">
        <h2
          className={`text-3xl md:text-4xl font-bold text-center mb-12 text-white transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Get in Touch <span className="text-[#F47C20]">With Us!</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-10">
          <div
            className={`bg-gray-800/80 rounded-xl p-8 backdrop-blur-sm transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <form onSubmit={handleSubmit} noValidate>
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  onBlur={() => handleBlur("name")}
                  className={inputClasses("name")}
                  disabled={isSubmitting}
                />
                {errors.name && touched.name && (
                  <p className="mt-1 text-xs text-red-400">{errors.name}</p>
                )}
              </div>

              <div className="mb-5">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  onBlur={() => handleBlur("email")}
                  className={inputClasses("email")}
                  disabled={isSubmitting}
                />
                {errors.email && touched.email && (
                  <p className="mt-1 text-xs text-red-400">{errors.email}</p>
                )}
              </div>

              <div className="mb-6">
                <textarea
                  placeholder="Message..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  onBlur={() => handleBlur("message")}
                  className={`${inputClasses("message")} resize-none`}
                  disabled={isSubmitting}
                />
                {errors.message && touched.message && (
                  <p className="mt-1 text-xs text-red-400">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Submit
                  </>
                )}
              </button>
            </form>
          </div>

          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <p className="text-gray-300 text-base leading-relaxed mb-8">
              Fill in your details below to schedule a free consultation to discuss a strategy forward.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#F47C20]/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-[#F47C20]" />
                </div>
                <div>
                  <h4 className="text-[#F47C20] font-semibold text-base mb-1">Mail Us</h4>
                  <a
                    href="mailto:info@sikomining.co.za"
                    className="text-gray-300 text-sm hover:text-[#F47C20] transition-colors duration-300"
                  >
                    info@sikomining.co.za
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#F47C20]/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#F47C20]" />
                </div>
                <div>
                  <h4 className="text-[#F47C20] font-semibold text-base mb-1">Location</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    210 Pilgrims Rest, Reedstream Park,
                    <br />
                    Rietspruit, Mpumalanga, South Africa 2231
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
