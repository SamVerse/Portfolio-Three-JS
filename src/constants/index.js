export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'More',
      href: '#work',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];
  
  // export const clientReviews = [
  //   {
  //     id: 1,
  //     name: 'Emily Johnson',
  //     position: 'Marketing Director at GreenLeaf',
  //     img: 'assets/review1.png',
  //     review:
  //       'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  //   },
  //   {
  //     id: 2,
  //     name: 'Mark Rogers',
  //     position: 'Founder of TechGear Shop',
  //     img: 'assets/review2.png',
  //     review:
  //       'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  //   },
  //   {
  //     id: 3,
  //     name: 'John Dohsas',
  //     position: 'Project Manager at UrbanTech ',
  //     img: 'assets/review3.png',
  //     review:
  //       'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  //   },
  //   {
  //     id: 4,
  //     name: 'Ether Smith',
  //     position: 'CEO of BrightStar Enterprises',
  //     img: 'assets/review4.png',
  //     review:
  //       'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  //   },
  // ];
  
  export const myProjects = [
    {
      title: 'Snapgram - A Social Media Platform',
      desc: 'It is a powerful social media app built with React, TypeScript, and Appwrite. Featuring advanced functionalities like infinite scrolling, role-based access, and a responsive design, Snapgram offers a seamless native-like experience across devices.',
      subdesc:
        'Created as a robust app with React, TypeScript, Appwrite, and other modern web technologies, Snapgram ensures optimal user engagement and performance across the platform.',
      href: 'https://snapgram-beryl-nine.vercel.app/',
      texture: '/textures/project/project1.mp4',
      logo: '/assets/sgfavicon.ico',
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
        {
          id: 3,
          name: 'Appwrite',
          path: '/assets/appwrite.png',
        },
      ],
    },
    {
      title: 'Craftr - A Blogging Website',
      desc: 'It is a React-based blogging platform that uses Redux and JavaScript, utilizing Appwrite as Backend-as-a-Service. It’s a role-based web app with a Twitter-like feel, designed for seamless user interactions.',
      subdesc:
        'Built with modern technologies like React, Redux, and Appwrite, Craftr offers a dynamic and responsive experience for bloggers and readers alike.',
      href: 'https://craftr-zeta.vercel.app/',  
      texture: '/textures/project/project2.mp4',
      logo: 'https://craftr-zeta.vercel.app/assets/craftr-high-resolution-logo-CFXG6qpH.jpg',
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/assets/spotlight2.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'JavaScript',
          path: '/assets/javascript.png',
        },
        {
          id: 4,
          name: 'Redux',
          path: '/assets/redux.png',
        },
      ],
    },
    {
      title: 'LocoJS-SITE - A Attractive Frontend UI',
      desc: 'LocoJS-SITE is a frontend UI clone of a award winning website featuring smooth animations powered by JavaScript, GSAP, and Locomotive Scroll, with custom styling done using pure CSS.',
      subdesc:
        'Utilizing GSAP for advanced animations and Locomotive Scroll for smooth, immersive scrolling effects, LocoJS-SITE offers a visually stunning and interactive user experience.',
      href: 'https://samverse.github.io/LocoJS-SITE/',
      texture: '/textures/project/project3.mp4',
      logo: 'https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/logo-white.svg',
      logoStyle: {
        backgroundColor: '#60f5a1',
        background:
          'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
        border: '0.2px solid rgba(208, 213, 221, 1)',
        boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
      },
      spotlight: '/assets/spotlight3.png',
      tags: [
        {
          id: 1,
          name: 'JavaScript',
          path: '/assets/javascript.png',
        },
        {
          id: 2,
          name: 'CSS',
          path: 'assets/css.png',
        },
        {
          id: 3,
          name: 'GSAP',
          path: '/assets/gsap.jpg',
        },
      ],
    },
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -6.2, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 7, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -11, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-16, -13, -10],
    };
  };
  
  export const workExperiences = [
    {
      id: 1,
      name: 'Tech Tools & Stack',
      pos: 'Building my toolkit as I grow',
      title: "Skilled in JavaScript, React.js, Appwrite, Tailwind CSS, and more. Have a good grasp of Git and Github while working with my projects. Constantly expanding my knowledge with modern frameworks (Clerk, Appwrite, and a few more) to stay updated with the latest trends in web development.",
      icon: '/assets/tech.avif',
      animation: 'victory',
    },
    {
      id: 2,
      name: 'My Resume',
      pos: '..Web Dev..',
      title: "Here's MY RESUME for more details.",
      icon: '/assets/resume.png',
      animation: 'clapping',
      link: 'https://link-to-your-resume.com', // Add your resume link here
    },
    {
      id: 3,
      name: 'My Hobbies',
      pos: 'Exploring beyond the code',
      title: "Football,Playing video games, music, and watching movies are my go-to escapes when I need a break. They help me unwind, recharge, and keep the balance between work and play (;",
      icon: '/assets/hobbies.png',
      animation: 'salute',
    },
  ];