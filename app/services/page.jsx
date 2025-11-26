"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Building fast, responsive, and scalable websites that work flawlessly across all devices. Your vision, coded into a powerful digital presence.",
    href: "",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description:
      "Designing interfaces that users love to navigate. I blend research, strategy, and creativity to craft seamless, intuitive digital experiences.",
    href: "",
  },
  {
    num: "03",
    title: "Logo Design",
    description:
      "Your brand deserves a memorable first impression. I create distinctive logos that capture your identity and stand the test of time.",
    href: "",
  },
  {
    num: "04",
    title: "SEO",
    description:
      "Helping your website get found by the right audience. I optimise for search engines so your business climbs the rankings.",
    href: "",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-primary dark:bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-white dark:text-primary text-3xl" />
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                {/* description */}
                <p className="text-white/60">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
