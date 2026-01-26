"use client";

import { useState, useEffect } from "react";
import { useForm } from "@formspree/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaCheckCircle } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: process.env.NEXT_PUBLIC_CONTACT_PHONE || "(+44) 000 000 000",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "your.email@example.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: process.env.NEXT_PUBLIC_CONTACT_ADDRESS || "Code Corner, Tech Town 13579",
  },
];

const Contact = () => {
  const formId = "mjkdzogw";
  const [state, handleFormspreeSubmit] = useForm(formId);

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // Clear form and show success modal when submission succeeds
  useEffect(() => {
    if (state.succeeded) {
      setShowSuccessModal(true);
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    }
  }, [state.succeeded]);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstname.trim()) {
      newErrors.firstname = "First name is required";
    }

    if (!formData.lastname.trim()) {
      newErrors.lastname = "Last name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!formData.service) {
      newErrors.service = "Please select a service";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Submit to Formspree
    await handleFormspreeSubmit(e);

    // Clear form on success
    if (state.succeeded) {
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    }
  };

  return (
    <section className="py-6">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl" method="POST" action="https://formspree.io/f/mjkdzogw">

              <h3 className="text-4xl text-accent">Let&apos;s work together</h3>
              <p className="text-white/60">
                Fill out the form below and I&apos;ll get back to you as soon as possible.
              </p>

              {state.errors && state.errors.length > 0 && (
                <div className="p-4 bg-red-500/10 border border-red-500/50 rounded-lg text-red-500">
                  Sorry, something went wrong. Please try again later.
                </div>
              )}

              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Input
                    type="text"
                    name="firstname"
                    placeholder="Eg. John"
                    value={formData.firstname}
                    onChange={(e) => handleInputChange("firstname", e.target.value)}
                    className={errors.firstname ? "border-red-500" : ""}
                  />
                  {errors.firstname && (
                    <p className="text-red-500 text-sm mt-1">{errors.firstname}</p>
                  )}
                </div>
                <div>
                  <Input
                    type="text"
                    name="lastname"
                    placeholder="Eg. Doe"
                    value={formData.lastname}
                    onChange={(e) => handleInputChange("lastname", e.target.value)}
                    className={errors.lastname ? "border-red-500" : ""}
                  />
                  {errors.lastname && (
                    <p className="text-red-500 text-sm mt-1">{errors.lastname}</p>
                  )}
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="email@email.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className={errors.email ? "border-red-500" : ""}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
                <div>
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="+44 000 000 000"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className={errors.phone ? "border-red-500" : ""}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>
              {/* select */}
              <div>
                <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                  <SelectTrigger className={`w-full ${errors.service ? "border-red-500" : ""}`}>
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select a service</SelectLabel>
                      <SelectItem value="web-development">Web Development</SelectItem>
                      <SelectItem value="ui-ux-design">UI/UX Design</SelectItem>
                      <SelectItem value="logo-design">Logo Design</SelectItem>
                      <SelectItem value="seo">SEO</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {/* Hidden input for Formspree */}
                <input type="hidden" name="service" value={formData.service} />
                {errors.service && (
                  <p className="text-red-500 text-sm mt-1">{errors.service}</p>
                )}
              </div>
              {/* textarea */}
              <div>
                <Textarea
                  name="message"
                  className={`h-[200px] ${errors.message ? "border-red-500" : ""}`}
                  placeholder="Type your message here."
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>
              {/* btn */}
              <Button
                type="submit"
                size="md"
                className="max-w-40"
                disabled={state.submitting}
              >
                {state.submitting ? "Sending..." : "Send message"}
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccessModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            onClick={() => setShowSuccessModal(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-[#27272c] border border-accent/20 p-8 rounded-xl max-w-md w-full flex flex-col items-center text-center gap-4 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-2">
                <FaCheckCircle className="text-4xl text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
              <p className="text-white/60">
                Thank you for reaching out. I&apos;ll get back to you as soon as possible.
              </p>
              <Button
                onClick={() => setShowSuccessModal(false)}
                className="mt-4 w-full"
                size="md"
              >
                Close
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
