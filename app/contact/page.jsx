"use client";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import ContactForm from "@/components/ContactForm";

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
  return (
    <section className="py-6">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <ContactForm />
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
    </section>
  );
};

export default Contact;
