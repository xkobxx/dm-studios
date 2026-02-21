"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Building fast, responsive, and scalable websites that work flawlessly across all devices. Your vision, coded into a powerful digital presence.",
    href: "/services/web-development",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description:
      "Designing interfaces that users love to navigate. I blend research, strategy, and creativity to craft seamless, intuitive digital experiences.",
    href: "/services/ui-ux-design",
  },
  {
    num: "03",
    title: "Wireframing & Prototyping",
    description:
      "Create wireframes and interactive prototypes to visualize your ideas and test user flows. I help you move from concept to reality with ease.",
    href: "/services/wireframing-prototyping",
  },
  {
    num: "04",
    title: "UX & User Research",
    description:
      "Empower your product with data-driven insights. I conduct user research to understand your users' needs, behaviours, and pain points.",
    href: "/services/user-research",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <motion.div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group cursor-pointer"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45 relative overflow-hidden"
                  >
                    <BsArrowDownRight className="text-primary text-3xl relative z-10" />
                    <span className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                {/* description */}
                <p className="text-white/60 group-hover:text-white/80 transition-colors duration-300">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full group-hover:border-accent/50 transition-colors duration-300"></div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
