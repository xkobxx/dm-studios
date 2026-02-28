"use client";

import { motion } from "framer-motion";
import { FiDownload, FiMail, FiLinkedin, FiExternalLink } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  experience,
  education,
  skills,
  stats,
  certifications,
  professionalSummary,
  personalInfo,
  projects,
} from "@/lib/resume-data";

// Components
import TimelineItem from "@/components/resume/TimelineItem";
import SkillCategory from "@/components/resume/SkillCategory";
import CertificationCard from "@/components/resume/CertificationCard";
import StatsRow from "@/components/resume/StatsRow";
import Divider from "@/components/resume/Divider";

const Resume = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-[80vh] py-16 xl:py-0"
    >
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-accent text-sm font-medium uppercase tracking-wider mb-3">
                Curriculum Vitae
              </p>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
                {personalInfo.name}
              </h1>
              <p className="text-xl text-white/60 mb-6">
                {personalInfo.title}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="max-w-2xl mx-auto"
            >
              <p className="text-white/60 leading-relaxed">
                {professionalSummary}
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mt-10"
            >
              <StatsRow stats={stats} />
            </motion.div>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-8 flex flex-wrap justify-center gap-4"
            >
              <Button
                variant="outline"
                size="lg"
                className="gap-2"
              >
                <FiDownload className="w-4 h-4" />
                <span>Download CV</span>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="gap-2"
                onClick={() => window.open(`mailto:${personalInfo.email}`)}
              >
                <FiMail className="w-4 h-4" />
                <span>Contact</span>
              </Button>
            </motion.div>
          </div>

          <Divider className="mb-12" />

          {/* Experience Section */}
          <section className="mb-16">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-2">
                Experience
              </h2>
              <p className="text-white/60 text-sm">
                Professional journey and key accomplishments
              </p>
            </div>

            <ScrollArea className="max-h-[500px] pr-2">
              <ul className="space-y-2">
                {experience.map((item, index) => (
                  <TimelineItem
                    key={item.id}
                    item={item}
                    index={index}
                    type="experience"
                  />
                ))}
              </ul>
            </ScrollArea>
          </section>

          <Divider className="mb-12" />

          {/* Education Section */}
          <section className="mb-16">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-2">
                Education
              </h2>
              <p className="text-white/60 text-sm">
                Academic background and professional certifications
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Education Timeline */}
              <div className="lg:col-span-2">
                <ScrollArea className="max-h-[400px] pr-2">
                  <ul className="space-y-2">
                    {education.map((item, index) => (
                      <TimelineItem
                        key={item.id}
                        item={item}
                        index={index}
                        type="education"
                      />
                    ))}
                  </ul>
                </ScrollArea>
              </div>

              {/* Certifications */}
              <div className="lg:col-span-1">
                <h3 className="text-sm font-medium text-white/80 uppercase tracking-wider mb-4">
                  Certifications
                </h3>
                <div>
                  {certifications.map((cert, index) => (
                    <CertificationCard
                      key={cert.id}
                      cert={cert}
                      index={index}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>

          <Divider className="mb-12" />

          {/* Skills Section */}
          <section className="mb-16">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-2">
                Skills
              </h2>
              <p className="text-white/60 text-sm">
                Technical competencies and tools
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              {Object.entries(skills).map(([key, data], index) => (
                <SkillCategory
                  key={key}
                  category={key}
                  data={data}
                  index={index}
                />
              ))}
            </div>
          </section>

          <Divider className="mb-12" />

          {/* Projects Section */}
          <section className="mb-16">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-2">
                Projects
              </h2>
              <p className="text-white/60 text-sm">
                Selected work and personal initiatives
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projects.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="p-5 rounded-lg bg-white/5 border border-white/10 hover:border-accent/30 transition-colors duration-200"
                >
                  <h3 className="text-base font-medium text-white mb-2">
                    {item.name}
                  </h3>
                  <p className="text-sm text-white/60 mb-3">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.stack?.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs text-accent/80 bg-accent/10 px-2 py-1 rounded"
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Footer CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-center py-12"
          >
            <h3 className="text-xl font-medium text-white mb-3">
              Let&apos;s work together
            </h3>
            <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
              Available for freelance projects and full-time opportunities
            </p>
            <div className="flex justify-center gap-4">
              <Button
                variant="ghost"
                size="lg"
                className="gap-2 text-white/80 hover:text-accent"
                onClick={() => window.open(`mailto:${personalInfo.email}`)}
              >
                <FiMail className="w-4 h-4" />
                <span>Email</span>
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="gap-2 text-white/80 hover:text-accent"
                onClick={() =>
                  window.open(`https://${personalInfo.linkedin}`, "_blank")
                }
              >
                <FiLinkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Resume;
