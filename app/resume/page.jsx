"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaWordpress,
  FaPaintBrush,
  FaCreativeCommons,
  FaEnvelope,
  FaGithub,
  FaLinkedinIn
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs, SiFramer } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import Link from "next/link";

import { SiAffinitydesigner } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";

// about data
const about = {
  title: "About me",
  description:
    "With 4+ years of Figma expertise, I design intuitive web interfaces from dashboards and e-commerce landing pages to complex web applications grounded in user research and accessibility standards. My process transforms business goals into clean, mobile-responsive UIs that guide users toward confident decisions. Every deliverable includes production-ready mockups, thoughtful interactions, and developer-friendly handoff.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "David Mensah",
    },
    {
      fieldName: "Phone",
      fieldValue: process.env.NEXT_PUBLIC_CONTACT_PHONE,
    },
    {
      fieldName: "Experience",
      fieldValue: "6+ Years",
    },
    {
      fieldName: "Skype",
      fieldValue: "kobe",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Ghanaian",
    },
    {
      fieldName: "Email",
      fieldValue: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Twi",
    },
  ],
};

// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "A journey through code, design, and problem-solving. Here's where I've made my mark.",
  items: [
    {
      company: "Tech Solutions Inc.",
      position: "Full Stack Developer",
      duration: "2022 - Present",
    },
    {
      company: "Web Design Studio",
      position: "Front-End Developer Intern",
      duration: "Summer 2021",
    },
    {
      company: "E-commerce Startup",
      position: "Freelance Web Developer",
      duration: "2020 - 2021",
    },
    {
      company: "Tech Academy",
      position: "Teaching Assistant",
      duration: "2019 - 2020",
    },
    {
      company: "Digital Agency",
      position: "UI/UX Designer",
      duration: "2018 - 2019",
    },
    {
      company: "Software Development Firm",
      position: "Junior Developer",
      duration: "2017 - 2018",
    },
  ],
};

// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "Academic qualifications and certifications that underpin my technical expertise and continuous professional growth.",
  items: [
    {
      institution: "Solent University Southampton",
      degree: "BSc. Computer Science",
      duration: "2026",
    },
    {
      institution: "IPMC College of Technology",
      degree: "Diploma in Web & Graphic Designs",
      duration: "2017-2018",
    },
  ],
};

// skills data
const skills = {
  title: "My skills",
  description:
    "The tools in my arsenal. From frontend artistry to backend logic.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
    {
      icon: <FaWordpress />,
      name: "wordpress",
    },
    {
      icon: <SiFramer />,
      name: "framer",
    },
    {
      icon: <SiAffinitydesigner />,
      name: "affinity designer",
    },
    {
      icon: <SiAdobeillustrator />,
      name: "adobe illustrator",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <div className="w-full">
          <div className="mx-auto max-w-4xl">
            <Tabs
              defaultValue="experience"
              className="flex flex-col gap-[40px]"
            >
              {/* Horizontal Tabs */}
              <div className="flex flex-col items-center">
                <div className="flex flex-col gap-4 text-center mb-8">
                  <h3 className="text-4xl font-bold">{about.title}</h3>
                  <p className="text-white/60 text-base leading-relaxed max-w-2xl">
                    {about.description}
                  </p>
                </div>

                <TabsList className="flex w-full max-w-[600px] gap-2 bg-[#27272c] p-2 rounded-xl">
                  <TabsTrigger
                    value="experience"
                    className="flex-1 py-3 px-4 text-base font-medium data-[state=active]:bg-accent data-[state=active]:text-primary data-[state=active]:font-bold"
                  >
                    Experience
                  </TabsTrigger>
                  <TabsTrigger
                    value="education"
                    className="flex-1 py-3 px-4 text-base font-medium data-[state=active]:bg-accent data-[state=active]:text-primary data-[state=active]:font-bold"
                  >
                    Education
                  </TabsTrigger>
                  <TabsTrigger
                    value="skills"
                    className="flex-1 py-3 px-4 text-base font-medium data-[state=active]:bg-accent data-[state=active]:text-primary data-[state=active]:font-bold"
                  >
                    Skills
                  </TabsTrigger>
                </TabsList>
              </div>

              {/* Full Page Content */}
              <div className="w-full">
                {/* Experience */}
                <TabsContent value="experience" className="w-full">
                  <div className="flex flex-col gap-[30px] text-center">
                    <div className="mb-4">
                      <h3 className="text-3xl font-bold mb-2">{experience.title}</h3>
                      <p className="text-white/60 text-base">{experience.description}</p>
                    </div>
                    <ScrollArea className="h-[500px] xl:h-[60vh] pr-4">
                      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[20px]">
                        {experience.items.map((item, index) => {
                          return (
                            <li
                              key={index}
                              className="bg-[#232329] py-6 px-8 rounded-xl flex flex-col justify-between gap-4 border border-transparent hover:border-accent/50 transition-all duration-300 hover:scale-[1.01]"
                            >
                              <div>
                                <span className="text-accent text-sm font-bold tracking-widest uppercase mb-1 block">
                                  {item.duration}
                                </span>
                                <h3 className="text-xl font-bold min-h-[50px] flex items-center">
                                  {item.position}
                                </h3>
                              </div>
                              <div className="flex items-center gap-3 mt-auto">
                                <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                <p className="text-white/60 text-sm">{item.company}</p>
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </ScrollArea>
                  </div>
                </TabsContent>

                {/* Education */}
                <TabsContent value="education" className="w-full">
                  <div className="flex flex-col gap-[30px] text-center">
                    <div className="mb-4">
                      <h3 className="text-3xl font-bold mb-2">{education.title}</h3>
                      <p className="text-white/60 text-base">{education.description}</p>
                    </div>
                    <ScrollArea className="h-[500px] xl:h-[60vh] pr-4">
                      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[20px]">
                        {education.items.map((item, index) => {
                          return (
                            <li
                              key={index}
                              className="bg-[#232329] py-6 px-8 rounded-xl flex flex-col justify-between gap-4 border border-transparent hover:border-accent/50 transition-all duration-300 hover:scale-[1.01]"
                            >
                              <div>
                                <span className="text-accent text-sm font-bold tracking-widest uppercase mb-1 block">
                                  {item.duration}
                                </span>
                                <h3 className="text-xl font-bold min-h-[50px] flex items-center">
                                  {item.degree}
                                </h3>
                              </div>
                              <div className="flex items-center gap-3 mt-auto">
                                <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                <p className="text-white/60 text-sm">{item.institution}</p>
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </ScrollArea>
                  </div>
                </TabsContent>

                {/* Skills */}
                <TabsContent value="skills" className="w-full">
                  <div className="flex flex-col gap-[30px] pb-8">
                    <div className="flex flex-col gap-[30px] text-center">
                      <div>
                        <h3 className="text-3xl font-bold mb-2">{skills.title}</h3>
                        <p className="text-white/60 text-base">{skills.description}</p>
                      </div>
                      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                        {skills.skillList.map((skill, index) => {
                          return (
                            <li key={index}>
                              <TooltipProvider delayDuration={100}>
                                <Tooltip>
                                  <TooltipTrigger className="w-full h-[120px] bg-[#232329] rounded-xl flex justify-center items-center group border border-transparent hover:border-accent transition-all duration-300">
                                    <div className="text-5xl group-hover:text-accent transition-all duration-300">
                                      {skill.icon}
                                    </div>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p className="capitalize">{skill.name}</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </TabsContent>

              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </motion.div>
  );
};


export default Resume;
