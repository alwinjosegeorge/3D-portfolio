import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
  SiJava,
  SiSqlite,
  SiVercel,
  SiOpencv,
  SiTensorflow,
  SiPwa,
  SiAmazons3,
  SiLeaflet,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  java: {
    title: "Java",
    bg: "black",
    fg: "white",
    icon: <SiJava />,
  },
  sqlite: {
    title: "SQLite",
    bg: "black",
    fg: "white",
    icon: <SiSqlite />,
  },
  vercel: {
    title: "Vercel",
    bg: "black",
    fg: "white",
    icon: <SiVercel />,
  },
  opencv: {
    title: "OpenCV",
    bg: "black",
    fg: "white",
    icon: <SiOpencv />,
  },
  tensorflow: {
    title: "TensorFlow",
    bg: "black",
    fg: "white",
    icon: <SiTensorflow />,
  },
  pwa: {
    title: "PWA",
    bg: "black",
    fg: "white",
    icon: <SiPwa />,
  },
  aws: {
    title: "AWS S3",
    bg: "black",
    fg: "white",
    icon: <SiAmazons3 />,
  }
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "nammude-panchayat",
    category: "Civic Issue Reporting",
    title: "Nammude Panchayat 🏛️",
    src: "/assets/projects-screenshots/nammude-panchayat/landing.png",
    screenshots: ["landing.png"],
    live: "https://nammudepanchayat.vercel.app/",
    github: "https://github.com/alwinjosegeorge/nammude-panchayat",
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.pwa,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.vercel,
        PROJECT_SKILLS.supabase,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            A smart civic issue reporting platform that allows citizens to report local problems like road damage, garbage, water leaks, and streetlight issues. Includes admin and officer dashboards for tracking and resolution.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Smart Reporting</TypographyH3>
          <p className="font-mono mb-2">
            Citizens can easily report and track issues with automated geolocation tags.
          </p>
          <SlideShow images={[`${BASE_PATH}/nammude-panchayat/landing.png`]} />

          <TypographyH3 className="my-4 mt-8">Dashboard</TypographyH3>
          <p className="font-mono mb-2">
            Admins and officers communicate efficiently to resolve tickets faster.
          </p>
        </div>
      );
    },
  },
  {
    id: "book-my-vandi",
    category: "Car Rental System",
    title: "Book My Vandi 🚗",
    src: "https://raw.githubusercontent.com/alwinjosegeorge/Book_My_Vandi/main/bookmyvandi.png",
    screenshots: ["bookmyvandi.png"],
    live: "",
    github: "https://github.com/alwinjosegeorge/Book_My_Vandi",
    skills: {
      frontend: [
        PROJECT_SKILLS.java,
      ],
      backend: [
        PROJECT_SKILLS.sqlite,
        PROJECT_SKILLS.java,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Book My Vandi is a fully Java-based desktop application designed to manage car rental operations efficiently. Built using the MVC architecture with Java Swing as the frontend and SQLite for local persistent storage, the system supports customer management, car inventory, booking approval workflows, and rental tracking.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Features</TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">Vehicle Booking & Approvals</li>
            <li className="font-mono">Customer Records Management</li>
            <li className="font-mono">Rental Tracking</li>
            <li className="font-mono">Persistent Local Storage (SQLite)</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "true-shade",
    category: "Accessibility",
    title: "True Shade",
    src: "/assets/projects-screenshots/true-shade/landing.png",
    screenshots: [],
    live: "",
    github: "",
    skills: {
      frontend: [PROJECT_SKILLS.react],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.opencv, PROJECT_SKILLS.tensorflow]
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            A project designed to assist colour blind individuals by providing real-time image analysis to accurately identify, distinguish, and name colours.
          </TypographyP>
          <TypographyH3 className="my-4 mt-8">Real-Time Analysis</TypographyH3>
          <p className="font-mono mb-2">Uses OpenCV and TensorFlow to process camera feed.</p>
        </div>
      )
    }
  },
  {
    id: "eco-travel-mate",
    category: "Sustainable Travel",
    title: "Eco Travel Mate",
    src: "/assets/projects-screenshots/eco-travel-mate/landing.png",
    screenshots: [],
    live: "",
    github: "",
    skills: {
      frontend: [PROJECT_SKILLS.react],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.node]
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            AI-powered sustainable travel platform. Suggests eco-friendly routes and tracks carbon footprint.
          </TypographyP>
        </div>
      )
    }
  },
  {
    id: "love-capsule",
    category: "Time Capsule",
    title: "LoveCapsule 💌",
    src: "/assets/projects-screenshots/lovecapsule/landing.png",
    screenshots: [],
    live: "",
    github: "",
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind],
      backend: [PROJECT_SKILLS.node, PROJECT_SKILLS.mongo]
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            Secure digital time capsule to send wishes to future self or loved ones.
          </TypographyP>
        </div>
      )
    }
  }
];
export default projects;
