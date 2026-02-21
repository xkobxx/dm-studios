"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const UIDesign = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="flex flex-col justify-center"
        >
          <div className="flex flex-col md:flex-row gap-12">
            {/* Service info */}
            <div className="flex-1">
              <h1 className="h1 text-[42px] md:text-[64px] leading-[1.1] mb-6 group-title">
                <span className="text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">02</span> UI/UX Design
              </h1>
              <p className="text-white/60 max-w-lg mb-8">
                Designing interfaces that users love to navigate. I blend research, strategy, and creativity to craft seamless, intuitive digital experiences.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="bg-[#232329] px-6 py-3 rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-accent cursor-pointer">Figma</div>
                <div className="bg-[#232329] px-6 py-3 rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-accent cursor-pointer">Adobe XD</div>
                <div className="bg-[#232329] px-6 py-3 rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-accent cursor-pointer">Sketch</div>
                <div className="bg-[#232329] px-6 py-3 rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-accent cursor-pointer">User Testing</div>
                <div className="bg-[#232329] px-6 py-3 rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-accent cursor-pointer">Prototyping</div>
                <div className="bg-[#232329] px-6 py-3 rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-accent cursor-pointer">Design Systems</div>
              </div>
              
              <Button asChild>
                <Link href="/contact" className="group">
                  Let&apos;s work together
                  <BsArrowDownRight className="ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
            
            {/* Service image or graphic placeholder */}
            <div className="flex-1 flex items-center justify-center">
              <div className="bg-[#232329] w-full h-96 rounded-xl flex items-center justify-center transform transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,78,0,0.3)] hover:scale-[1.02]">
                <div className="text-center p-4">
                  <div className="text-5xl mb-4 transform transition-transform duration-300 hover:scale-110">🎨</div>
                  <h3 className="text-xl font-semibold">UI/UX Design Showcase</h3>
                  <p className="text-white/60 mt-2">Design concepts and user interface examples</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Additional details */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ y: -10 }} 
              className="bg-[#232329] p-6 rounded-xl transform transition-all duration-300 cursor-pointer"
            >
              <h3 className="text-xl font-semibold mb-3 text-accent">User-Centered Design</h3>
              <p className="text-white/60">Creating interfaces based on user needs, behaviors, and feedback to ensure optimal usability.</p>
            </motion.div>
            <motion.div 
              whileHover={{ y: -10 }} 
              className="bg-[#232329] p-6 rounded-xl transform transition-all duration-300 cursor-pointer"
            >
              <h3 className="text-xl font-semibold mb-3 text-accent">Visual Hierarchy</h3>
              <p className="text-white/60">Establishing clear visual relationships between elements to guide users through the interface.</p>
            </motion.div>
            <motion.div 
              whileHover={{ y: -10 }} 
              className="bg-[#232329] p-6 rounded-xl transform transition-all duration-300 cursor-pointer"
            >
              <h3 className="text-xl font-semibold mb-3 text-accent">Accessibility</h3>
              <p className="text-white/60">Designing inclusive interfaces that are usable by people with diverse abilities and needs.</p>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Back to Services Link */}
        <div className="mt-16 mb-8 flex justify-center">
          <Link 
            href="/services" 
            className="text-accent hover:underline text-base font-normal flex items-center gap-2"
          >
            ← Back to Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UIDesign;