"use client";

import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Family Management System",
    title: "Family Management System",
    description:
      "A comprehensive family management system designed for managing clan members, interactive D3 family trees, events and media, featuring secure auth with role‑based admin tools, Stripe payments, Cloudinary media, and Vercel deployment.",
    stack: [{ name: "​Next.js" }, { name: "TypeScript" }, { name: "React" }, { name: "Tailwind.css" }, { name: "PostgreSQL" }],
    image: "/assets/work/SackeyWe.jpg",
    live: "https://sackeywe.com",
    github: "https://github.com/xkobxx/sackeywe-royal-family",
  },
  {
    num: "02",
    category: "VLE Classroom System",
    title: "VLE Classroom System",
    description:
      "A Virtual Learning Environment built with TypeScript and React for end-to-end online education management, featuring course enrollment, student and event management, certificate tracking, and a responsive UI with real-time notifications. Includes a robust admin dashboard for platform configuration, fees, email templates, and backups, powered by Supabase for secure authentication and live data sync.",
    stack: [{ name: "TypeScript" }, { name: "React" }, { name: "ShadCN UI" }, { name: "Supabase" }],
    image: "/assets/work/Ashcroft.jpg",
    live: "https://ashcrofteducation.com",
    github: "https://github.com/xkobxx/VLE-Classroom",
  },
  {
    num: "03",
    category: "Event Booking System",
    title: "Event Booking System",
    description:
      "EventEase is a full-stack event management and booking system that enables users to discover, manage, and book events",
    stack: [{ name: "React" }, { name: "Vite" }, { name: "TypeScript" }, { name: "Radix UI" }, { name: "React Router" }, { name: "Leaflet" }],
    image: "/assets/work/img.png",
    live: "https://eventease-web-api.vercel.app",
    github: "https://github.com/xkobxx/eventease-web-api",
  },
  {
    num: "04",
    category: "Online Pharmacy Marketplace",
    title: "Online Pharmacy Marketplace",
    description:
      "The project facilitates coordination and communication between independent pharmacy locations, allowing them to pool resources and provide a unified online ordering experience to customers across multiple pharmacy locations in a community.",
    stack: [{ name: "React " }, { name: "Tailwind.css" }, { name: "TypeScript .CSS" }, { name: "Leaflet" }, { name: "Firebase" }, { name: "NextAuth" }],
    image: "/assets/work/img.png",
    live: "",
    github: "https://github.com/xkobxx/community-pharmacies-online",
  },
  {
    num: "05",
    category: "Clothing Store DBMS",
    title: "Clothing Store DBMS",
    description:
      "Clothing Store Database Management System is a comprehensive solution for managing inventory, sales, customers, and employees in a clothing retail environment. Built with Python and Tkinter",
    stack: [{ name: "Python" }, { name: "Tkinter" }, { name: "SQLite" }],
    image: "/assets/work/img.png",
    live: "",
    github: "https://github.com/xkobxx/Clothing-Store-DB",
  },
  {
    num: "06",
    category: "Web Design - Tradesmith Ghana Ltd",
    title: "Web Design - Tradesmith Ghana Ltd",
    description:
      "Tradesmith Ghana Ltd provides freight forwarding and customs clearance services for import and export shipments via sea and air. The company manages inbound and outbound cargo, offering hands-on support with a personalized service approach while maintaining professional large-scale logistics standards.",
    stack: [{ name: "WordPress" }, { name: "PHP" }, { name: "Elementor" }, { name: "WooCommerce" }, { name: "MySQL" }],
    image: "/assets/work/Tradesmith.jpg",
    live: "https://tradesmithgh.com",
    github: "#",
  },
  {
    num: "07",
    category: "Web Design - Active Media Ghana",
    title: "Web Design - Active Media Ghana",
    description:
      "Active Media Ghana is a film and video production agency delivering high-end production and postproduction services. The company collaborates with creative professionals across all stages of production and provides research, directing, editing, scriptwriting, voice-over, distribution, and marketing services.",
    stack: [{ name: "WordPress" }, { name: "PHP" }, { name: "Elementor" }, { name: "WooCommerce" }, { name: "MySQL" }],
    image: "/assets/work/activemediagh.png",
    live: "https://activemediagh.com",
    github: "#",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex flex-wrap gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href={project.live}
                        className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group"
                      >
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Live project</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                {/* github project button */}
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href={project.github}
                        className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group"
                      >
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Github repository</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt={`${project.title} - ${project.category} project`}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
