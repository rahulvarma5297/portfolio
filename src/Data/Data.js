import { BsAward } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { HiOutlineBriefcase } from "react-icons/hi";

// images
import packurbags from "../assets/packurbags.png";

export const statistics = [
  {
    id: 1,
    title: "Completed",
    desc: "― 10 + projects",
    icon: HiOutlineBriefcase,
  },
  {
    id: 2,
    title: "Experience",
    desc: "― 1+ Years",
    icon: BsAward,
  },
  {
    id: 3,
    title: "Support",
    desc: "― Online 24/7",
    icon: BiSupport,
  },
];

export const skills = [
  {
    id: 1,
    name: "C++",
    progress: "90",
  },
  {
    id: 2,
    name: "Java",
    progress: "85",
  },
  {
    id: 3,
    name: "Python",
    progress: "80",
  },
  {
    id: 4,
    name: "JavaScript",
    progress: "70",
  },
  {
    id: 5,
    name: "HTML",
    progress: "60",
  },
  {
    id: 6,
    name: "CSS",
    progress: "60",
  },
  {
    id: 7,
    name: "SQL",
    progress: "90",
  },
  {
    id: 8,
    name: "Git/Github",
    progress: "50",
  },
  {
    id: 9,
    name: "NodeJS",
    progress: "50",
  },
  {
    id: 10,
    name: "ExpressJS",
    progress: "80",
  },
  {
    id: 11,
    name: "ReactJS",
    progress: "80",
  },
  {
    id: 12,
    name: "MySQL",
    progress: "70",
  },
  {
    id: 13,
    name: "MongoDB",
    progress: "50",
  },
  {
    id: 14,
    name: "Redis",
    progress: "60",
  },
  {
    id: 15,
    name: "Firebase",
    progress: "50",
  },
];
// Category
// Web Application
// AIML
// Mini Projects
export const projects = [
  {
    id: 1,
    img: packurbags,
    category: "Web application",
    name: "Pack Ur Bags",
    languages: ["HTML", "CSS", "JavaScript", "React JS", "Redux", "MongoDB"],
    desc: "― Attractive website with eight types of tour packages for year-round family vacations.",
    preview: "https://frontend-packurbags.onrender.com/",
    code: "https://github.com/rahulvarma5297/PACK-UR-BAGS",
  },
];
