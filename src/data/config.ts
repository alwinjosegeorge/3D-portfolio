const config = {
  title: "Alwin Jose George | Computer Science Engineer",
  description: {
    long: "I am a Computer Science Engineering student with a passion for building innovative and interactive websites. While I have explored areas like AI and image processing, my primary focus is on web development, creating user-friendly and responsive digital experiences.",
    short:
      "Discover the portfolio of Alwin Jose George, a Computer Science Engineer passionate about web development and innovation.",
  },
  keywords: [
    "Alwin Jose George",
    "portfolio",
    "Computer Science Engineer",
    "web development",
    "full-stack developer",
    "AI",
    "image processing",
    "interactive websites",
    "React",
    "Next.js",
    "Tailwind",
  ],
  author: "Alwin Jose George",
  email: "alwinjosegeorge2028@cs.sjcetpalai.ac.in",
  site: "https://alwinjosegeorge.github.io", // Placeholder or verified link

  // for github stars button
  githubUsername: "alwinjosegeorge",
  githubRepo: "3D-portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "",
    linkedin: "https://www.linkedin.com/in/alwin-jose-george-5b204032b",
    instagram: "https://www.instagram.com/alwin_jose_george",
    facebook: "",
    github: "https://github.com/alwinjosegeorge",
  },
};
export { config };
