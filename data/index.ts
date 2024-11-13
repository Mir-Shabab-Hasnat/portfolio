export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
  { name: "Blog", link: "#about"}
];

export const gridItems = [
  {
    id: 1,
    title: "Creativity and learning are my strenghts",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I love exploring cool features just like this globe!",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for learning.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently working on a sidescrolling infinite runner game in Godot!",
    description: "My Current Project",
    className: "md:col-span-3 md:row-span-1",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to get in touch?",
    description: "",
    className: "lg:col-span-5 md:col-span-5",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [{
    id: 1,
    title: "Health Bridge - Making healthcare more efficient!",
    des: "An AI powered appointment management system which allows patients with more priosity to get their apointments first",
    img: "/healthbridge.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/PostgresSQL.svg"],
    link: "https://health-brigde-v2-hxb68950i-mir-shabab-hasnats-projects.vercel.app",
  },
  
  {
    id: 2,
    title: "ScreenDraw - Draw on your screen just using your fingers!",
    des: "Lets you effortlessly draw on your screen using just your fingers, replacing traditional tools with a more intuitive approach",
    img: "/p2.png",
    iconLists: ["/Python.svg", "/NumPy.svg", "/OpenCV.svg"],
    link: "https://github.com/Mir-Shabab-Hasnat/ScreenDrawing",
  },{
    id: 3,
    title: "NASA Seismic Detection ML Model",
    des: "A ML model which detects useful seismic data, identifies 2% of the 4 million data points and sends it back",
    img: "/nasaSeismic.jpg",
    iconLists: ["/Python.svg"],
    link: "https://github.com/Mir-Shabab-Hasnat/NASA-Seismic-Detection-Model",
  },
  {
    id: 4,
    title: "Issue Tracker - Track your project issues",
    des: "Enhance your group projects by listing down issues and assiging them to each individual through our efficient and simple app.",
    img: "/p1.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/PostgresSQL.svg", "/Google.svg"],
    link: "https://issue-tracker-alpha-three.vercel.app/",
  },
  {
    id: 5,
    title: "Flappy Bird - Made in Python!",
    des: "Recreated the classic Flappy Bird game, and is still as enjoyable as ever",
    img: "/p4.png",
    iconLists: ["/Python.svg"],
    link: "https://github.com/Mir-Shabab-Hasnat/Flappy-Bird",
  },
  
  {
    id: 6,
    title: "Pawdopt - Making adoption easier",
    des: "Made using Nextjs and Resend for aplication confirmation.",
    img: "/pawdopt.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", ],
    link: "https://pawdopt.vercel.app/",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend UI/UX Intern",
    desc: " Designed and developed eye-catching graphics and intuitive UI designs for multiple small businesses, enhancing overall visual appeal and user experience",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Math and Science Instructor",
    desc: "Instructed over 50+ students through grades 1 to University level, displaying exceptional ability to communicate with a wide array of different individuals",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/teaching.png",
  },
  {
    id: 1,
    title: "Multiple Hackathon Participant",
    desc: "Hackathons are my jam and I love spending an entire night with complete strangers in the process!",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/Mir-Shabab-Hasnat"
  },
  {
    id: 2,
    img: "/instagram (1).png",
    link: "https://www.instagram.com/shabab.hasnat/"
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/mir-shabab-hasnat-222266216/"
  },
];

export const WINNING_COMBINATIONS = [
  [
    { row: 0, column: 0 },
    { row: 0, column: 1 },
    { row: 0, column: 2 },
  ],
  [
    { row: 1, column: 0 },
    { row: 1, column: 1 },
    { row: 1, column: 2 },
  ],
  [
    { row: 2, column: 0 },
    { row: 2, column: 1 },
    { row: 2, column: 2 },
  ],
  [
    { row: 0, column: 0 },
    { row: 1, column: 0 },
    { row: 2, column: 0 },
  ],
  [
    { row: 0, column: 1 },
    { row: 1, column: 1 },
    { row: 2, column: 1 },
  ],
  [
    { row: 0, column: 2 },
    { row: 1, column: 2 },
    { row: 2, column: 2 },
  ],
  [
    { row: 0, column: 0 },
    { row: 1, column: 1 },
    { row: 2, column: 2 },
  ],
  [
    { row: 0, column: 2 },
    { row: 1, column: 1 },
    { row: 2, column: 0 },
  ],
];