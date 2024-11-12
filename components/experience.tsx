"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import Image from "next/image";
import { Timeline } from "./ui/timeline";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();
  const data = [
    {
      title: "M.Tech. in Electrical Power System",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Completed M.Tech. in Electrical Power System from Jawaharlal Nehru Technological University (Aug 2012 - Nov 2015) with a grade of A+. The program equipped me with advanced knowledge in power systems, electrical machines, and power electronics, which laid a strong foundation for my subsequent career in electrical and mechanical engineering roles.
          </p>
        </div>
      ),
    },
    {
      title: "Electrical Engineer – Antelec Limited",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Worked as an Electrical Engineer at Antelec Limited (Apr 2005 - Mar 2007) on the Rajiv Gandhi International Project in Hyderabad. I was responsible for electrical system design and installation, ensuring seamless integration and functionality for the airport’s power infrastructure during its expansion.
          </p>
        </div>
      ),
    },
    {
      title: "Electrical Engineer-MEP – B K Gulf LLC",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            As an Electrical Engineer-MEP at B K Gulf LLC (Mar 2007 - Feb 2009), I contributed to the Dubai International Airport Expansion Phase 2 project in the UAE. My role included overseeing the electrical and mechanical systems integration for the terminal expansion, collaborating with cross-functional teams to ensure efficient operations and compliance with international standards.
          </p>
        </div>
      ),
    },
    {
      title: "MEP Engineer – Bechtel Corporation",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            I worked as an MEP Engineer at Bechtel Corporation (Aug 2009 - Jul 2012), focusing on the New Doha International Airport in Qatar. My responsibilities included designing and testing mechanical, electrical, and plumbing systems, ensuring proper integration with the overall airport infrastructure and optimizing energy efficiency while meeting the project’s high standards.
          </p>
        </div>
      ),
    },
    {
      title: "Lead Electrical Engineer - MEP – Hill International, Inc.",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            As the Lead Electrical Engineer - MEP at Hill International, Inc. (Apr 2013 - Jun 2016), I led electrical systems integration and testing for projects at Muscat & Salalah International Airports and Adam Airbase in Oman. I ensured the smooth operation of power distribution, lighting, HVAC, and fire alarm systems, contributing to the successful completion of these high-profile infrastructure projects.
          </p>
        </div>
      ),
    },
    {
      title: "MEP Manager – Excellent Electro Mechanical Solution Engg & Contractor",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            In my role as MEP Manager (Jul 2016 - Dec 2017) at Excellent Electro Mechanical Solution Engg & Contractor, I managed various high-rise building and metro rail projects in South India, including the Hyderabad Metro Rail Project. I was responsible for the design, procurement, and implementation of MEP systems, ensuring alignment with safety codes, budgets, and timelines for all engineering works.
          </p>
        </div>
      ),
    },
    {
      title: "General Manager Engineering – Yashoda Hospitals",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            As General Manager Engineering at Yashoda Hospitals (Dec 2017 - Jun 2018), I was responsible for overseeing the design, implementation, and maintenance of hospital infrastructure systems. I worked closely with cross-functional teams to ensure that the hospital’s electrical and mechanical systems were up to date, fully functional, and compliant with healthcare standards for patient safety and comfort.
          </p>
        </div>
      ),
    },
    {
      title: "MEP / Special System Manager – CPG Corporation",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            As MEP / Special System Manager at CPG Corporation (Jun 2018 - Sep 2023), I played a key role in managing the MEP systems across multiple airport projects in Ethiopia, including 14 airports and terminal projects. I ensured smooth integration of systems such as BMS, HVAC, security, and electrical setups, coordinating efforts with contractors, vendors, and local authorities to meet project specifications and timelines.
          </p>
        </div>
      ),
    },
    {
      title: "Sr. Project Manager – ICAD Airports-India",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Currently, I serve as a Senior Project Manager at ICAD Airports-India (Oct 2023 - Aug 2024), leading pan-India airport projects. I manage the integration and testing of MEP and special systems for new and existing airport terminals, ensuring seamless operations, adherence to timelines, and compliance with international standards, with a focus on improving airport infrastructure and passenger experience.
          </p>
        </div>
      ),
    },
  ];
  
  

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <div className="w-full">
      <Timeline data={data} />
    </div>
    </section>
  );
}
