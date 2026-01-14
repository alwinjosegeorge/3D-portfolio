// thoda zada ts ho gya idhar
export enum SkillNames {
  JS = "js",
  TS = "ts",
  HTML = "html",
  CSS = "css",
  REACT = "react",
  VUE = "vue",
  NEXTJS = "nextjs",
  TAILWIND = "tailwind",
  NODEJS = "nodejs",
  EXPRESS = "express",
  POSTGRES = "postgres",
  MONGODB = "mongodb",
  GIT = "git",
  GITHUB = "github",
  PRETTIER = "prettier",
  NPM = "npm",
  FIREBASE = "firebase",
  WORDPRESS = "wordpress",
  LINUX = "linux",
  DOCKER = "docker",
  NGINX = "nginx",
  AWS = "aws",
  VIM = "vim",
  VERCEL = "vercel",
  PYTHON = "python",
  CPP = "cpp",
  C = "c",
  JAVA = "java",
  OPENCV = "opencv",
  TENSORFLOW = "tensorflow",
  SQL = "sql",
  VSCODE = "vscode",
}
export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};
export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.JS]: {
    id: 1,
    name: "js",
    label: "JavaScript",
    shortDescription: "yeeting code into the DOM since '95, no cap! 💯🚀",
    color: "#f0db4f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  [SkillNames.TS]: {
    id: 2,
    name: "ts",
    label: "TypeScript",
    shortDescription:
      "JavaScript's overachieving cousin who's always flexing 💯🔒",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  [SkillNames.HTML]: {
    id: 3,
    name: "html",
    label: "HTML",
    shortDescription: "the internet's granddad,  still bussin' fr fr! 💀🔥",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  [SkillNames.CSS]: {
    id: 4,
    name: "css",
    label: "CSS",
    shortDescription: "styling with the ultimate drip, no cap 💁‍♂️🔥",
    color: "#563d7c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  [SkillNames.REACT]: {
    id: 5,
    name: "react",
    label: "React",
    shortDescription: `"use using" 
using use = useUsing("use")`,
    color: "#61dafb",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  [SkillNames.VUE]: {
    id: 6,
    name: "linkedin",
    label: "LinkedIn",
    shortDescription: "Connecting professionally! 🤝�",
    color: "#0077B5",
    icon: "/assets/logos/Linkedin Logo - Brandlogos_net.jpg",
  },
  [SkillNames.NEXTJS]: {
    id: 7,
    name: "nextjs",
    label: "Next.js",
    shortDescription:
      "the drama queen of front-end frameworks, and we stan! 👑📜",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  [SkillNames.TAILWIND]: {
    id: 8,
    name: "canva",
    label: "Canva",
    shortDescription: "Designing made easy, aesthetic AF! 🎨✨",
    color: "#00C4CC",
    icon: "/assets/logos/Canva_Logo_1080.png",
  },
  [SkillNames.NODEJS]: {
    id: 9,
    name: "nodejs",
    label: "Node.js",
    shortDescription: "JavaScript said 'sike, I'm backend now', deadass! 🔙🔚",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  [SkillNames.EXPRESS]: {
    id: 10,
    name: "mysql",
    label: "MySQL",
    shortDescription: "Organizing data like a boss! 🗄️🔥",
    color: "#4479A1",
    icon: "/assets/logos/mysql-logo-pure.png",
  },
  [SkillNames.POSTGRES]: {
    id: 11,
    name: "vscode",
    label: "VS Code",
    shortDescription: "Coding in style, dark mode on! 💻🌚",
    color: "#007ACC",
    icon: "/assets/logos/Visual_Studio_Code_1.35_icon.svg.png",
  },
  [SkillNames.MONGODB]: {
    id: 12,
    name: "x",
    label: "X",
    shortDescription: "Tweeting... I mean posting! �➡️❌",
    color: "#000000",
    icon: "/assets/logos/x-social-media-logo-icon.png",
  },
  [SkillNames.GIT]: {
    id: 13,
    name: "git",
    label: "Git",
    shortDescription: "the code's personal bodyguard, no cap! 🕵️‍♂️🔄",
    color: "#f1502f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  [SkillNames.GITHUB]: {
    id: 14,
    name: "github",
    label: "GitHub",
    shortDescription: "sliding into those pull requests, IYKYK! 🐙",
    color: "#000000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  [SkillNames.PRETTIER]: {
    id: 15,
    name: "python",
    label: "Python",
    shortDescription: "Indentation is my personality trait 🐍✨",
    color: "#3776AB",
    icon: "/assets/logos/python-logo.png",
  },
  [SkillNames.NPM]: {
    id: 16,
    name: "photoshop",
    label: "Adobe Photoshop",
    shortDescription: "Pixel perfect edits, no cap! 🖌️✨",
    color: "#31A8FF",
    icon: "/assets/logos/Adobe Photoshop Icon Png.png",
  },
  [SkillNames.FIREBASE]: {
    id: 17,
    name: "supabase",
    label: "Supabase",
    shortDescription: "The open source Firebase alternative! ⚡🔥",
    color: "#3ECF8E",
    icon: "/assets/logos/supabase-logo-icon.png",
  },
  [SkillNames.WORDPRESS]: {
    id: 18,
    name: "capcut",
    label: "CapCut",
    shortDescription: "Editing videos like a pro! 🎬✂️",
    color: "#000000",
    icon: "/assets/logos/capcut-logo-CC9606C71D-seeklogo.com.png",
  },
  [SkillNames.LINUX]: {
    id: 19,
    name: "linux",
    label: "Linux",
    shortDescription: "where 'chmod 777' is the ultimate flex 🔓🙌",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },
  [SkillNames.DOCKER]: {
    id: 20,
    name: "antigravity",
    label: "Antigravity",
    shortDescription: "Defying gravity, one pixel at a time! 🚀✨",
    color: "#ff3366",
    icon: "/assets/logos/Antigravity logo.png",
  },
  [SkillNames.NGINX]: {
    id: 21,
    name: "googleai",
    label: "Google AI Studio",
    shortDescription: "Building the future with AI! 🤖✨",
    color: "#4285F4",
    icon: "/assets/logos/google-ai-1.png",
  },
  [SkillNames.AWS]: {
    id: 22,
    name: "gemini",
    label: "Gemini",
    shortDescription: "The AI that sparkles! ✨🧠",
    color: "#8E75B2",
    icon: "/assets/logos/gemini.png",
  },
  [SkillNames.VIM]: {
    id: 23,
    name: "java",
    label: "Java",
    shortDescription: "Write once, run anywhere! ☕💻",
    color: "#007396",
    icon: "/assets/logos/java-logo-1.png",
  },
  [SkillNames.VERCEL]: {
    id: 24,
    name: "vercel",
    label: "Vercel",
    shortDescription:
      "The triangle compony, helps you deploy and go touch grass! 🚀🌿",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
  },
  [SkillNames.PYTHON]: {
    id: 25,
    name: "python",
    label: "Python",
    shortDescription: "indentation is my personality trait 🐍✨",
    color: "#3776ab",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  [SkillNames.CPP]: {
    id: 26,
    name: "cpp",
    label: "C++",
    shortDescription: "memory leaks? what memory leaks? 🧠💥",
    color: "#00599c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  },
  [SkillNames.C]: {
    id: 27,
    name: "c",
    label: "C",
    shortDescription: "the father of all languages, respect! 👴👑",
    color: "#a8b9cc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  },
  [SkillNames.JAVA]: {
    id: 28,
    name: "java",
    label: "Java",
    shortDescription: "write once, debug everywhere ☕🐛",
    color: "#007396",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  [SkillNames.OPENCV]: {
    id: 29,
    name: "opencv",
    label: "OpenCV",
    shortDescription: "seeing the world through computer eyes 👀🤖",
    color: "#5c3ee8",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",
  },
  [SkillNames.TENSORFLOW]: {
    id: 30,
    name: "tensorflow",
    label: "TensorFlow",
    shortDescription: "teaching machines to think... scary! 🧠🤖",
    color: "#ff6f00",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  },
  [SkillNames.SQL]: {
    id: 31,
    name: "sql",
    label: "SQL",
    shortDescription: "never forget to sanitize your inputs! 💉🛡️",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  [SkillNames.VSCODE]: {
    id: 32,
    name: "vscode",
    label: "VS Code",
    shortDescription: "the only editor that matters, fight me! 🥊💻",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
};

export type Experience = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  description: string[];
  skills: SkillNames[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    startDate: "5 Days",
    endDate: "Kochi",
    title: "AI & Data Science Internship",
    company: "SRAI Smart Solutions Pvt Ltd",
    description: [
      "Hands-on AI project experience covering artificial intelligence, data science, and Python programming.",
      "Participated in workshops, quizzes, and contributed to real-world AI/data science project tasks.",
      "Gained practical knowledge in problem solving and teamwork.",
    ],
    skills: [
      SkillNames.PYTHON,
      SkillNames.JS,
    ],
  },
  {
    id: 2,
    startDate: "3 Days",
    endDate: "NIT Calicut",
    title: "3D Gaming Development Workshop",
    company: "Tathva24",
    description: [
      "Participated in an intensive workshop focused on 3D game development.",
      "Learned advanced graphics programming, game engine architecture, and interactive design principles.",
      "Developed skills in Unity 3D, C# Programming, and Game Physics.",
    ],
    skills: [
      SkillNames.CPP, // Closest proxy if C# not added yet, but I'll add C# logic or ignore for now
      SkillNames.JS,
    ],
  },
  {
    id: 3,
    startDate: "2 Days",
    endDate: "SJCET Palai",
    title: "Cybersecurity Workshop",
    company: "Tesseract 8.0",
    description: [
      "Comprehensive cybersecurity training covering ethical hacking, network security, and vulnerability assessment.",
      "Learned digital forensics techniques and security analysis.",
    ],
    skills: [
      SkillNames.LINUX,
      SkillNames.PYTHON,
    ],
  },
  {
    id: 4,
    startDate: "24 Hours",
    endDate: "Kuttikkanam",
    title: "Hackathon Participant",
    company: "HashItUp – True Shade",
    description: [
      "Developed 'True Shade', a project to assist colour blind individuals.",
      "Used real-time image analysis to identify and distinguish colours.",
      "Built using Python, OpenCV, TensorFlow, and React Native.",
    ],
    skills: [
      SkillNames.PYTHON,
      SkillNames.OPENCV,
      SkillNames.TENSORFLOW,
      SkillNames.REACT,
    ],
  },
  {
    id: 5,
    startDate: "Event",
    endDate: "Hackathon",
    title: "Eco Travel Mate",
    company: "Regional Hackathon",
    description: [
      "Developed an AI-powered sustainable travel platform.",
      "Collaborated with team to implement carbon footprint tracking and eco-friendly suggestions.",
    ],
    skills: [
      SkillNames.PYTHON,
      SkillNames.REACT,
      SkillNames.NODEJS,
    ],
  },
];

export const themeDisclaimers = {
  light: [
    "Warning: Light mode emits a gazillion lumens of pure radiance!",
    "Caution: Light mode ahead! Please don't try this at home.",
    "Only trained professionals can handle this much brightness. Proceed with sunglasses!",
    "Brace yourself! Light mode is about to make everything shine brighter than your future.",
    "Flipping the switch to light mode... Are you sure your eyes are ready for this?",
  ],
  dark: [
    "Light mode? I thought you went insane... but welcome back to the dark side!",
    "Switching to dark mode... How was life on the bright side?",
    "Dark mode activated! Thanks you from the bottom of my heart, and my eyes too.",
    "Welcome back to the shadows. How was life out there in the light?",
    "Dark mode on! Finally, someone who understands true sophistication.",
  ],
};

