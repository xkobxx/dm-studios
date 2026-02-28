"use client";

import ContactForm from "@/components/ContactForm";
import Social from "@/components/Social";
import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa";

export const dynamic = 'force-dynamic';

const Contact = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left content with "Let's work together" */}
          <div className="lg:w-2/5 w-full">
            <h2 className="h1 mb-6">Let{"'"}s work together</h2>

            <p className="text-white/70 mb-8 leading-relaxed">
              Have a project in mind? Reach out and I{"'"}ll get back to you as soon as possible.
            </p>
            {/*
            <div className="mb-10">
              <Social
                containerStyles="flex gap-3 mb-6"
                iconStyles="w-10 h-10 rounded-full flex items-center justify-center text-accent hover:bg-accent hover:text-primary transition-colors duration-300"
              />
            </div>
            */}
            <div className="mt-10 pt-6 border-t border-accent/20">
              <h4 className="text-xl font-bold mb-4">Connect with me</h4>
              <div className="flex gap-4">
                <Link
                  href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}
                  className="w-12 h-12 rounded-full flex items-center justify-center text-accent border border-accent/20 hover:bg-accent hover:text-primary transition-all duration-300"
                  aria-label="Email"
                >
                  <FaEnvelope />
                </Link>
                <Link
                  href={process.env.NEXT_PUBLIC_SOCIAL_GITHUB}
                  className="w-12 h-12 rounded-full flex items-center justify-center text-accent border border-accent/20 hover:bg-accent hover:text-primary transition-all duration-300"
                  aria-label="GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </Link>
                <Link
                  href={process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN}
                  className="w-12 h-12 rounded-full flex items-center justify-center text-accent border border-accent/20 hover:bg-accent hover:text-primary transition-all duration-300"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </Link>
              </div>
            </div>
          </div>

          {/* Form on the right */}
          <div className="lg:w-3/5 w-full">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
