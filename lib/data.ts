// All portfolio content lives here. Edit freely.
export const profile = {
  name: "MD Rafi Al Islam",
  nickname: "Rafi",
  role: "Junior Full Stack Developer",
  location: "Dhaka, Bangladesh",
  email: "mdrafi118048@gmail.com",
  phone: "+880 1915 560721",
  whatsapp: "8801915560721", // digits only, used for wa.me link
  github: "https://github.com/rafibliss",
  linkedin: "https://www.linkedin.com/in/md-rafi-al-islam",
  facebook: "", // optional: paste your Facebook URL to show an icon
  twitter: "", // optional: paste your X/Twitter URL to show an icon
  tagline:
    "I build responsive, user-centered web apps with Next.js, TypeScript, Node.js and MongoDB.",
};

export const about = {
  paragraphs: [
    "I'm a Computer Science and Engineering student at North South University who fell for the web while building small interfaces and watching them respond to real people. That curiosity grew into a full stack habit: design the screen, wire the API, model the data.",
    "I started with C and Java, then moved to JavaScript and TypeScript, and now work mostly with React, Next.js, Express.js and MongoDB. I like work where a clear interface sits on top of dependable logic, such as authentication, booking flows, dashboards and live data.",
    "I also use AI-assisted and agentic coding tools in my daily workflow to move faster, while I review and understand the code I ship.",
  ],
  // TODO: replace with your real hobbies and interests
  interests: ["Exploring new web tools", "Agentic coding workflows", "Cricket and football", "Travel and photography"],
  languages: [
    { name: "Bengali", level: "Native, fully professional" },
    { name: "English", level: "Fully professional" },
    { name: "Hindi", level: "Casually fluent" },
  ],
};

export const skills = [
  { category: "Frontend", items: [["React.js", 85], ["Next.js", 85], ["TypeScript", 78], ["JavaScript", 85], ["Tailwind CSS", 90], ["HTML5 & CSS3", 90]] },
  { category: "Backend & Database", items: [["Node.js", 72], ["Express.js", 75], ["REST APIs", 78], ["MongoDB", 75], ["Better Auth / JWT", 70]] },
  { category: "Languages & Tools", items: [["Java", 60], ["C", 65], ["Git & GitHub", 82], ["shadcn/ui & DaisyUI", 80], ["AI-assisted coding", 85]] },
] as { category: string; items: [string, number][] }[];

export const education = {
  degree: "BSc in Computer Science and Engineering",
  school: "North South University",
  place: "Dhaka, Bangladesh",
  period: "2022 – Present",
};

export type Project = {
  slug: string; title: string; kind: string; image: string; summary: string; description: string;
  stack: string[]; live: string; github: string; challenges: string[]; improvements: string[];
};

export const projects: Project[] = [
  {
    slug: "studio-hive",
    title: "StudioHive",
    kind: "Full stack",
    image: "/Studio Hive .png",
    summary: "Cross-category studio booking and renting platform with real-time booking management.",
    description:
      "StudioHive lets people find, book and rent studios across categories. Users get dashboards to manage and edit the studios they have booked or rented. Authentication uses stateless, asymmetric JWTs issued through Better Auth and verified with JWKS endpoints.",
    stack: ["Next.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT", "Better Auth"],
    live: "https://studio-space-kohl.vercel.app/",
    github: "https://github.com/rafibliss/Studio-Hive",
    challenges: [
      "Sharing one login between the Next.js client and a separate Express server using asymmetric JWTs and JWKS.",
      "Keeping bookings consistent so two people cannot take the same slot.",
      "Designing separate dashboard views for booked and rented studios.",
    ],
    improvements: ["Online payments", "Reviews and ratings", "Calendar sync and email reminders", "Availability search with map view"],
  },
  {
    slug: "fitlog",
    title: "FitLog",
    kind: "Frontend",
    image: "/FitLog.png",
    summary: "Personal fitness tracker with an exercise library and a planning dashboard.",
    description:
      "FitLog is a real-time health and exercise tracking app for personal use. Visitors can explore many exercises with detailed instructions, then use a separate dashboard to build a plan and save exercises for later.",
    stack: ["React", "Next.js", "Tailwind CSS"],
    live: "https://fit-log-nextjs-app.netlify.app/",
    github: "https://github.com/rafibliss/FitLog",
    challenges: [
      "Structuring exercise data so each entry carries clear, step-by-step instructions.",
      "Keeping the saved-plan dashboard in sync with the exercise browser.",
      "Making dense exercise content readable on small screens.",
    ],
    improvements: ["Backend and user accounts", "Workout history and progress charts", "Weekly plan templates", "Rest timers and reminders"],
  },
  {
    slug: "bazar-dor",
    title: "Bazar Dor",
    kind: "Frontend",
    image: "/Bazar Dor.png",
    summary: "Daily commodity price tracker for local markets in Bangladesh.",
    description:
      "Bazar Dor (বাজার দর) tracks daily prices of essentials such as rice, pulse, oil, vegetables, meat and fish. It shows price increases and drops, supports search and filters, and offers sign-in with Google, GitHub or credentials. Middleware protects profile and product detail pages, and users can edit their profile.",
    stack: ["Next.js 15", "TypeScript", "Tailwind CSS", "DaisyUI", "Better Auth", "MongoDB"],
    live: "https://bazar-dor-zeta.vercel.app",
    github: "https://github.com/rafibliss/bazar-dor",
    challenges: [
      "Protecting routes such as /profile and /ProductDetail/:id with server-side middleware.",
      "Setting up Google and GitHub OAuth together with credential login.",
      "Showing price trends clearly without overwhelming the list view.",
    ],
    improvements: ["Price history charts per product", "Market-wise comparison", "Price alerts", "Bangla language toggle"],
  },
];
