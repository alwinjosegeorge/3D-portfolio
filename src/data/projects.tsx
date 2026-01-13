import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import { FaJava, FaMobileAlt } from "react-icons/fa";
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
  SiShadcnui,
  SiSanity,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
  SiSqlite,
  SiVercel,
  SiOpencv,
  SiTensorflow,
  SiAmazon,
  SiLeaflet,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {live && (
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
      )}
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
  next: { title: "Next.js", bg: "black", fg: "white", icon: <RiNextjsFill /> },
  chakra: { title: "Chakra UI", bg: "black", fg: "white", icon: <SiChakraui /> },
  node: { title: "Node.js", bg: "black", fg: "white", icon: <RiNodejsFill /> },
  python: { title: "Python", bg: "black", fg: "white", icon: <SiPython /> },
  prisma: { title: "prisma", bg: "black", fg: "white", icon: <SiPrisma /> },
  postgres: { title: "PostgreSQL", bg: "black", fg: "white", icon: <SiPostgresql /> },
  mongo: { title: "MongoDB", bg: "black", fg: "white", icon: <SiMongodb /> },
  express: { title: "Express", bg: "black", fg: "white", icon: <SiExpress /> },
  reactQuery: { title: "React Query", bg: "black", fg: "white", icon: <SiReactquery /> },
  shadcn: { title: "Shadcn UI", bg: "black", fg: "white", icon: <SiShadcnui /> },
  aceternity: { title: "Aceternity", bg: "black", fg: "white", icon: <AceTernityLogo /> },
  tailwind: { title: "Tailwind", bg: "black", fg: "white", icon: <SiTailwindcss /> },
  docker: { title: "Docker", bg: "black", fg: "white", icon: <SiDocker /> },
  firebase: { title: "Firebase", bg: "black", fg: "white", icon: <SiFirebase /> },
  socketio: { title: "Socket.io", bg: "black", fg: "white", icon: <SiSocketdotio /> },
  js: { title: "JavaScript", bg: "black", fg: "white", icon: <SiJavascript /> },
  ts: { title: "TypeScript", bg: "black", fg: "white", icon: <SiTypescript /> },
  vue: { title: "Vue.js", bg: "black", fg: "white", icon: <SiVuedotjs /> },
  react: { title: "React.js", bg: "black", fg: "white", icon: <RiReactjsFill /> },
  sanity: { title: "Sanity", bg: "black", fg: "white", icon: <SiSanity /> },
  spline: { title: "Spline", bg: "black", fg: "white", icon: <SiThreedotjs /> },
  framerMotion: { title: "Framer Motion", bg: "black", fg: "white", icon: <TbBrandFramerMotion /> },
  supabase: { title: "Supabase", bg: "black", fg: "white", icon: <SiSupabase /> },
  java: { title: "Java", bg: "black", fg: "white", icon: <FaJava /> },
  sqlite: { title: "SQLite", bg: "black", fg: "white", icon: <SiSqlite /> },
  vercel: { title: "Vercel", bg: "black", fg: "white", icon: <SiVercel /> },
  opencv: { title: "OpenCV", bg: "black", fg: "white", icon: <SiOpencv /> },
  tensorflow: { title: "TensorFlow", bg: "black", fg: "white", icon: <SiTensorflow /> },
  pwa: { title: "PWA", bg: "black", fg: "white", icon: <FaMobileAlt /> },
  aws: { title: "AWS S3", bg: "black", fg: "white", icon: <SiAmazon /> },
  leaflet: { title: "Leaflet", bg: "black", fg: "white", icon: <SiLeaflet /> },
  html: { title: "HTML5", bg: "black", fg: "white", icon: <SiHtml5 /> },
  css: { title: "CSS3", bg: "black", fg: "white", icon: <SiCss3 /> },
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
          <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
            <Link
              className="font-mono underline flex gap-2"
              rel="noopener"
              target="_new"
              href="https://github.com/alwinjosegeorge/Book_My_Vandi/blob/main/User_Manual.pdf"
            >
              <Button variant={"default"} size={"sm"}>
                Visit User Manual
                <ArrowUpRight className="ml-3 w-5 h-5" />
              </Button>
            </Link>
            <Link
              className="font-mono underline flex gap-2"
              rel="noopener"
              target="_new"
              href={this.github!}
            >
              <Button variant={"default"} size={"sm"}>
                Github
                <ArrowUpRight className="ml-3 w-5 h-5" />
              </Button>
            </Link>
          </div>

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
    id: "eco-travel-mate",
    category: "Sustainable Travel",
    title: "Eco Travel Mate",
    src: "/assets/projects-screenshots/eco-travel-mate/landing.png",
    screenshots: [],
    live: "https://eco-travel-mate.vercel.app/",
    github: "https://github.com/alwinjosegeorge/Eco-Travel-Mate",
    skills: {
      frontend: [PROJECT_SKILLS.html, PROJECT_SKILLS.css, PROJECT_SKILLS.js],
      backend: [PROJECT_SKILLS.node, PROJECT_SKILLS.leaflet]
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            Eco Travel Mate is a smart mobility and eco-awareness web app designed to help users make greener travel choices. It tracks trips, monitors air quality, calculates carbon footprints, and provides AI-driven environmental insights.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Features</TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">📍 Share Your Location – Auto-detect location and fetch real-time environmental data.</li>
            <li className="font-mono">🏠 Home Page – Simple and intuitive landing experience.</li>
            <li className="font-mono">🌫️ Air Quality Monitor – Live AQI, PM2.5, PM10, humidity, and temperature data.</li>
            <li className="font-mono">♻️ Carbon Footprint Calculator – Calculate your trip emissions.</li>
            <li className="font-mono">🚗 Trip Calculator – Compare travel modes and their carbon impact.</li>
            <li className="font-mono">🗺️ Environmental Map – Explore eco-data on an interactive map.</li>
            <li className="font-mono">🤖 AI Environmental Assistant – Get personalized eco-tips using AI.</li>
          </ul>
        </div>
      )
    }
  },
  {
    id: "modern-gallery",
    category: "Photo Gallery",
    title: "Alwin’s Modern Gallery 📸",
    src: "/assets/projects-screenshots/modern-gallery/landing.png",
    screenshots: [],
    live: "https://alwins-modern-gallery.vercel.app/",
    github: "https://github.com/alwinjosegeorge/Alwins-modern-gallery",
    skills: {
      frontend: [PROJECT_SKILLS.html, PROJECT_SKILLS.css, PROJECT_SKILLS.js],
      backend: [PROJECT_SKILLS.vercel]
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            A modern, full-screen photo gallery that showcases moments, moods, and memories through a clean, elegant digital experience. Every frame tells a personal story through light, emotion, and creativity.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Features</TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">Full-Screen Visual Experience: Images are displayed in immersive full-screen layouts.</li>
            <li className="font-mono">Clean & Modern Design: Minimal UI with custom backgrounds.</li>
            <li className="font-mono">Mobile-First & Responsive: Optimized for all devices.</li>
            <li className="font-mono">Story-Driven Gallery: Each photo reflects a memory, mood, or moment.</li>
          </ul>
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
    live: "https://lovecapsule.vercel.app/",
    github: "https://github.com/alwinjosegeorge/LoveCapsule",
    skills: {
      frontend: [PROJECT_SKILLS.html, PROJECT_SKILLS.css, PROJECT_SKILLS.js],
      backend: [PROJECT_SKILLS.supabase]
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            LoveCapsule is a digital time-capsule web app that allows users to store and schedule delivery of text, voice, and video wishes for birthdays, anniversaries, and special moments. It ensures your emotions are preserved securely and delivered to the right person at the perfect time.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Features</TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">Create wishes in Text, Audio & Video</li>
            <li className="font-mono">Schedule future delivery</li>
            <li className="font-mono">Secure Supabase backend</li>
            <li className="font-mono">User authentication & Private encrypted storage</li>
          </ul>
        </div>
      )
    }
  },
  {
    id: "true-shade",
    category: "Accessibility",
    title: "True Shade",
    src: "/assets/projects-screenshots/true-shade/landing.png",
    screenshots: [],
    live: "",
    github: "https://github.com/alwinjosegeorge/True_shade",
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
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Real-Time Analysis</TypographyH3>
          <p className="font-mono mb-2">Uses OpenCV and TensorFlow to process camera feed.</p>
        </div>
      )
    }
  },
];
export default projects;
