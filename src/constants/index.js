const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas into Innovation", imgPath: "/images/ideas.svg" },
  { text: "Models into Solutions", imgPath: "/images/concepts.svg" },
  { text: "Algorithms into Impact", imgPath: "/images/designs.svg" },
  { text: "Code into Breakthrough", imgPath: "/images/code.svg" },
  { text: "Research into Reality", imgPath: "/images/ideas.svg" },
  { text: "Data into Intelligence", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Intelligent Systems", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 6, suffix: "+", label: "Years of Experience" },
  { value: 20, suffix: "+", label: "Satisfied Clients" },
  { value: 10, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "JavaScript Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "Jeremiah has brought creativity and technical expertise to the institute, significantly improving our frontend performance and presence. His work has been invaluable in delivering curriculum development that aligns with industry standards and educational objectives.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Lecturer & Webmaster",
    date: "March 2022 - Present",
    responsibilities: [
      "Provided assessment and mentorship to support student learning and growth.",
      "Developed and maintained user-facing features for the institute website.",
      "Developed curriculum materials or course content.",
    ],
  },
  {
    review: "Jeremiah’s contributions to Nana College of Nursing have been outstanding. He approaches challenges with a problem-solving mindset.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Lecturer & IT Administrator",
    date: "January 2021 - Febuary 2022",
    responsibilities: [
      "Monitired network, software and hardware stability for JAMB examination.",
      "Worked with other IT staff to provide tier I technical support for 15-20 students per day.",
      "Created weekly lesson plans, annual budget reports, and homework packets, using Google workspace.",
    ],
  },
  {
    review: "Jeremiah’s work on BEDC’s Power mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "IT Support Specialist",
    date: "October 2019 - December 2020",
    responsibilities: [
      "Supported hardware, software, and networks to ensure smooth operations, often working with Windows, Linux, and various troubleshooting tools.",
      "Provided technical assistance and resolved IT issues for cross-functional teams.",
      "Coordinated with the product team to implement features on the power app based on feedback.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Joseph Igah",
    mentions: "@josephigah",
    review:
      "I can’t say enough good things about Jeremiah. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Adah August",
    mentions: "@adahaugust",
    review:
      "Jeremiah is knowledgable, reliable, highly competent, and trustworthy. Unlike some other developers I've worked with, I felt right away that he was up to date with modern technology and understood where they fit in the broader growth needs of a business. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Okolie Emmanuel Ikechukwu",
    mentions: "@okolieikechukwu",
    review:
    "Working with Jeremiah is seamless. He has a keen eye for details and a plethora of ideas. His work exudes passion and intricate intuitiveness.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Queen Ali Oyigene Adebiyi",
    mentions: "@queenadebiyi",
    review:
      "Jeremiah was a pleasure to work with. Apart from being an excellent developer he doubles as a product manager and executed both jobs amazingly well. He listens and takes feedback very seriously. I 100% recommend him!!. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Aman Chauhan",
    mentions: "@amanchauhan",
    review:
      "Collaborating with Jeremiah was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Jeremiah's enthusiasm for every facet of development truly stands out. Jeremiah is the ideal partner.",
    imgPath: "/images/client3.png",
  }, 
  {
    name: "Itumeleng Mofolo",
    mentions: "@itumelengmofolo",
    review:
      "I've worked with Jeremiah at the tetiary level and I must say his skill and professionalism are next to none. He’s an A-level developer, a maverick in the business and an excellent lecturer. I would recommend him any day anytime!.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
    link: "https://www.instagram.com/its_mr_jerry/",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
    link: "https://www.facebook.com/Ahiabajohnjerry",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
    link: "https://github.com/developedbyjerry",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    link: "https://www.linkedin.com/in/jeremiah-ahiaba-john/",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
