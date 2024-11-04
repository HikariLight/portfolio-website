export const info = {
  baseUrl: "https://www.dhia.dev",
  name: "Dhia Merzougui",
  jobDescription: "Software Engineer",
  about: `I'm a software engineer with a dual focus in Fullstack Development and AI R&D, currently developing patient-monitoring and analysis tools in the healthcare sector at GREYC Laboratory.
  My fascination with software development ignited at a young age, and that passion has only grown stronger over the years. I love building things end-to-end, ranging from web, mobile, and desktop apps, to machine learning/AI models.
  Beyond my professional interests, I'm a geek through and through, passionate about all things tech. Off-screen, I enjoy rock climbing, diving into a good fiction book, and exploring different cultures.
  I'm always open to new opportunities for growth, collaboration, and contribution. Don’t hesitate to reach out!
  `,

  experience: [
    {
      name: "Software Engineer - GREYC Laboratory",
      location: "Caen, Normandy, France",
      startDate: "Sep 2024",
      endDate: "Present",
      description: [
        "✓ End-to-end design, implementation, and testing of new feature for the patient-monitoring platform A2MIMO in: React/Javascript, Python/FastAPI, Unity/C#, PostgreSQL, Docker",
        "✓ Writing and updating technical documentation.",
        "✓ Refactoring old legacy code.",
        "✓ Helping with purchase decisions for hardware for psycho-analysis room currently being constructed.",
        "✓ Development of a web app for the automatic generation and correction of clinical notes using generative AI (LLMs) for healthcare professionals.",
      ],
    },

    {
      name: "Software Engineering Intenr - GREYC Laboratory",
      location: "Caen, Normandy, France",
      startDate: "Feb 2024",
      endDate: "Aug 2024",
      description: [
        "✓ Developed user interfaces for visualization of real-time patient analysis data.",
        "✓ Developed backend APIs for real-time collection, processing, analysis, and storage of multi-modal patient data (text, audio, images).",
        "✓ Developed neural classifiers for monitoring patient status (fatigue, emotions, sentiments) based on text, images, and audio data.",
        "✓ Developed an LLM-based conversation engine for the patient-facing virtual agent interface.",
        "✓ Developed the deployment strategy using Docker and Docker Compose.",
        "✓ Carried out research on automatic generation of clinical notes for psychiatry using LLMs.",
        "✓ Co-wrote research paper on fake news and hyperpartisanship detection using LLMs.",
        "✓ Supervised and mentored junior intern.",
      ],
    },

    {
      name: "Student Developer - GREYC Laboratory",
      location: "Caen, Normandy, France",
      startDate: "Oct 2022",
      endDate: "Jan 2024",
      description: [
        "Assisted a team of researchers and engineers in prototyping software to monitor and analyze mental health patients.",
        "✓ Developed user interfaces for data visualization.",
        "✓ Developed a prototype of a conversational agent using GPT-3.",
      ],
    },
  ],

  education: [
    {
      name: "University of Caen Normandy",
      location: "Caen, Normandy, France",
      startDate: "2022",
      endDate: "2024",
      description: [
        "Master's in Computer Science: Algorithms and Intelligent Systems",
        "Graduated with honors",
      ],
    },
    {
      name: "University of Caen Normandy",
      location: "Caen, Normandy, France",
      startDate: "2018",
      endDate: "2022",
      description: ["Bachelor's in Computer Science"],
    },
  ],

  socialMedia: {
    github: "https://github.com/HikariLight",
    email: "mailto:merzougui.dhia@gmail.com",
    linkedin: "https://www.linkedin.com/in/dhia-merzougui/",
  },

  projects: [
    {
      title: "A2MIMO: Artificial Agent for Mind Monitoring",
      isFeatured: true,
      thumbnail: "/assets/images/A2MIMO.svg",
      liveUrl: "https://www.youtube.com/watch?v=6rCiBtaXeb8",
    },
    {
      title: "KeyAuth",
      isFeatured: true,
      thumbnail: "/assets/images/KeyAuth.svg",
      githubUrl: "https://github.com/HikariLight/KeyboardAuth",
      liveUrl: "https://keyauth.dhia.dev",
    },
    {
      title: "Briefer",
      isFeatured: true,
      thumbnail: "/assets/images/briefer.png",
      githubUrl: "https://github.com/HikariLight/Briefer",
      liveUrl: "https://briefer.dhia.dev",
    },
    {
      title: "Meal Planner",
      isFeatured: true,
      thumbnail: "/assets/images/meal-planner.svg",
      githubUrl: "https://github.com/HikariLight/Meal-Planner",
      liveUrl: "https://meal-planner.dhia.dev",
    },
  ],
};
