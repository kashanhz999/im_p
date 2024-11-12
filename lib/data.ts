import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import ndiaImg from "@/public/ndia.png";
import miaImg from "@/public/mia.png";
import hmImg from "@/public/hm.png";
import yhImg from "@/public/yh.jpeg";
import eaImg from "@/public/ea.png";
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "New Doha International Airport",
    description:
      "I oversaw MEP system construction, design coordination, compliance, and electrical testing, ensuring quality and safety standards for the New Doha International Airport.",
    tags: ["MEP", "QA/QC", "Testing"],
    imageUrl: ndiaImg,
  },
  {
    title: "Muscat & Salalah International Airport, Adam Airbase",
    description:
      "Led design reviews, managed power systems, and oversaw system integration and testing.",
    tags: ["Design Coordination", "System Integration", "Project Management"],
    imageUrl: miaImg,
  },
  {
    title: "Hyderabad Metro Rail Project",
    description:
      "Managed tenders, contracts, schedules, and MEP installations for high-rise and metro rail projects.",
    tags: ["Project Management", "Cost Control", "MEP Installation"],
    imageUrl: hmImg,
  },
  {
    title: "Yashoda Hospitals",
    description:
      "Managed a hospital project with 200 staff, overseeing MEP design, procurement, cost control, approvals, and compliance with industry standards.",
    tags: ["Project Management", "Cost Control", "MEP Installation"],
    imageUrl: yhImg,
  },
  {
    title: "Ethopian Airports ",
    description:
      "Managing airport projects with CPG Airports and CCCC Ethiopia, overseeing terminal construction, MEP systems, feasibility studies, contract management, and ORAT compliance with international standards.",
    tags: ["Project Management", "Cost Control", "MEP Installation"],
    imageUrl: eaImg,
  },
] as const;

export const skillsData = [
  "Airports",
  "AutoCAD",
  "Baggage Handling Systems",
  "Civil Engineering",
  "Commissioning",
  "Construction Management",
  "Contract Management",
  "Electrical Engineering",
  "Engineering Design",
  "Engineering Management",
  "MEP Coordination",
  "MEP Engineering Design",
  "Microsoft Project",
  "Power Distribution",
  "Project Control",
  "Project Engineering",
  "Project Management",
  "Project Planning",
  "System Integration Testing",
  "User Acceptance Testing",
  "Airport Construction",
  "123KV GIS Installation and Testing",
  "Airport Hangers",
  "Electrical Power System - HV/LV",
  "Fire Suppression Systems",
  "Fire Risk Management"
] as const;

export const socialMedia = [
  {
    id: 1,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/mohammed-abdul-imran-%E2%9C%88%EF%B8%8F-miet-fie-fellow-intpe-7ba951119/",
  },
];
