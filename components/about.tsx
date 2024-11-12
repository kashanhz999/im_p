"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
  After spending over 15 years in aviation engineering, I've had the privilege of working on some of the most complex and high-profile projects across nine international and 23 domestic airports. My journey took me to regions like India, the UAE, Qatar, Oman, and Ethiopia, where I contributed to the development of commercial and VIP terminals, multi-bay MRO facilities, and cutting-edge e-commerce cargo centers. 
</p>

<p>
  <span className="italic">I began my career</span> with a deep interest in airport systems, which eventually led me to specialize in <span className="font-medium">MEP (Mechanical, Electrical, and Plumbing)</span> and Special Systems management. Along the way, I've had the opportunity to work with some of the biggest names in the industry, including <span className="font-medium">Bechtel, Hill International, and CPG Airports</span>, where I honed my skills in airport master planning, system integration, and feasibility studies. 
</p>

<p>
  The most rewarding part of my work is the challenge of bringing together diverse systems to create efficient, sustainable, and safe airport environments. Whether it’s designing advanced airport systems or leading teams to meet stringent standards, I’m driven by the desire to <span className="font-medium">optimize airport operations</span> and improve the overall passenger experience. 
</p>

<p>
  <span className="italic">When I’m not working</span> on airport projects, I enjoy keeping up with the latest developments in aviation technology and leadership strategies. I’m always eager to learn and grow, constantly looking for ways to bring innovative solutions to the industry.
</p>

    </motion.section>
  );
}
