import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import FacebookIcon from '../components/Icon/FacebookIcon';
import heroImage from '../images/header-background.png';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import top3outStandingImage from '../images/portfolio/top3outStandingImage.jpg';
import productManagerImage from '../images/portfolio/productManagerImage.png';
import firstPrizeImage from '../images/portfolio/firstPrizeImage.jpg';
import scrumMasterImage from '../images/portfolio/scrumMasterImage.png';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';

import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Nguyen Hoang Dai Duong CV',
  description: "",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Nguyen Hoang Dai Duong.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a <strong className="text-stone-100">Front-end Developer</strong>, currently working at{' '}
        <strong className="text-stone-100">FPT software</strong> in <strong> Ha Noi, Viet Nam</strong> .
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/Nguyen_Hoang_Dai_Duong_CV.pdf',
      text: 'Download CV',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I'm currently working as a Front-end Developer. 
  I have experience with CMS, health and water pollution systems. 
  I desire a dynamic workplace, professional environment, 
  and opportunities to learn and grow.`,
  aboutItems: [
    {label: 'Location', text: 'Ha Noi', Icon: MapIcon},
    {label: 'Age', text: '23', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Vietnamese', Icon: FlagIcon},
    {label: 'Interests', text: 'Running, Gym, Chilling', Icon: SparklesIcon},
    {label: 'Study', text: 'Greenwich University of Vietnam', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'FPT software', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
// export const skills: SkillGroup[] = [
//   {
//     name: 'Spoken languages',
//     skills: [
//       {
//         name: 'English',
//         level: 10,
//       },
//       {
//         name: 'French',
//         level: 4,
//       },
//       {
//         name: 'Spanish',
//         level: 3,
//       },
//     ],
//   },
//   {
//     name: 'Frontend development',
//     skills: [
//       {
//         name: 'React',
//         level: 9,
//       },
//       {
//         name: 'Typescript',
//         level: 7,
//       },
//       {
//         name: 'GraphQL',
//         level: 6,
//       },
//     ],
//   },
//   {
//     name: 'Backend development',
//     skills: [
//       {
//         name: 'Node.js',
//         level: 8,
//       },
//       {
//         name: 'Rust',
//         level: 5,
//       },
//       {
//         name: 'Golang',
//         level: 4,
//       },
//     ],
//   },
//   {
//     name: 'Mobile development',
//     skills: [
//       {
//         name: 'React Native',
//         level: 9,
//       },
//       {
//         name: 'Flutter',
//         level: 4,
//       },
//       {
//         name: 'Swift',
//         level: 3,
//       },
//     ],
//   },
// ];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'graduated - may 2022',
    location: 'Viet Nam',
    title: 'Bachelor in Greenwich University',
    content: <p>Outstanding student - <strong> First Class Honors </strong> of Information and Technology</p>,    
  },
];

export const Award: TimelineItem[] = [
  {
    date: '2019',
    location: 'Viet Nam',
    title: 'Top 3 outstanding achievement  student semester in University of Greenwich Viet Nam',
    image: top3outStandingImage   
  },
  {
    date: '2020',
    location: 'Viet Nam',
    title: 'Ambassador of Facebook & Coderschool',   
  },
  {
    date: '2020',
    location: 'sponsor By Facebook & Coderschool ',
    title: '  First Prize Champion Challenge of Tripi in DevC Innovation Challenge Competition',
    image: firstPrizeImage    
  },
  {
    date: 'June 2020 - September 2020',
    location: 'Viet Nam',
    title: 'CoderSchool & Facebook certificates',
    content: <p>With Product Management role -
    Collaboration with other
    members to study, research,
    design and create an OTA app for <strong>TripI</strong>  company</p>,
    image: productManagerImage      
  },
  {
    date: '2023',
    location: 'Viet Nam',
    title: 'Professional Scrum Master I Certificate',   
    image: scrumMasterImage
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'March 2023 - August 2023',
    location: 'Digital Patient Care - FPT company',
    title: 'Front-End Developer',
    objective: 'Objective',
    content: (
      <p>
        Digital Patient Care - Hospitals and clinics need a comprehensive system to manage 
        all activities from the point of patient registration to discharging from the facility.
      </p>
    ),
    responsibility: 'Responsibility',
    response_content_1: 'Discuss with BA and PM to clarify requirements, find solutions and take part in designing the features.',
    response_content_2: 'Develop Front-End side for the application from scratch using ReactJS.',
    response_content_3: 'Collaboration with BE developer to integrate with back end through HTTP RESTful API using Golang and PostgreSQL.',
    response_content_4: 'Work with QC team to troubleshoot problems on client side and fix issue.',
    technology: "Technology",
    technology_content: "ReactJS, Golang, tailwind, postgreSQL, nextJS, etc.."
  },
  {
    date: 'April 2021 - March 2023',
    location: 'IWMS - FPT company',
    title: 'Front-End Developer',
    objective: 'Objective',
    content: (
      <p>
        WMS is leveraging digital solutions and smart technologies to strengthen 
        its operational resilience, productivity, safety and security. 
        The integration of Smart water technology will be a key pillar to 
        achieve greater efficiencies, and faster response time in planning, 
        operations and service delivery.
      </p>
    ),
    responsibility: 'Responsibility',
    response_content_1: 'Discuss with BA and PM to clarify requirements, find solutions and take part in designing the features.',
    response_content_2: 'Develop Front-End side for the application from scratch using AngularJS.',
    response_content_3: 'Integrate with back end through HTTP RESTful API using NodeJS, mySQL.',
    response_content_4: 'Work with QC team to troubleshoot problems on client side and fix issue.',
    response_content_5: 'Working with BA and PM to conduct documentation for SDD.',
    technology: "Technology",
    technology_content: "AngularJS, NodeJS, Html5, Css3, Bootstrap3, Kafka, mySQL, etc..."
  },
  {
    date: 'Feb 2020 - April 2020',
    location: 'BucaJSC company',
    title: 'Front-End Intern',
    response_content_1: 'Learn Web Basic.',
    response_content_2: 'Convert the complete website interface from .psd files.',
    response_content_3: 'Develop features according to the guidance of the mentor.',
  },
];

export const skills: TimelineItem[] = [
  {
    response_content_1: '3 years of experience with web development.',
    response_content_2: 'Highly skilled in JavaScript Programming.',
    response_content_3: 'Highly skilled in JavaScript ProgrammingStrong experience in AngularJS, ReactJS and NodeJS.',
    response_content_4: 'Proficient in analyzing, researching and documenting processes.',
    response_content_5: 'English for communication in working office.',  
    response_content_6: 'Experience in Source control (Github, GitLab, SourceTree).',  
    response_content_7: 'Hard-working and responsible to assigned tasks.',  
    response_content_8: 'Ability to work individually and a good teammate.',  
  },

];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'reachout@timbaker.me',
      href: 'mailto:reachout@timbaker.me',
    },
    {
      type: ContactType.Location,
      text: 'Victoria BC, Canada',
      href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    },
    {
      type: ContactType.Instagram,
      text: '@tbakerx',
      href: 'https://www.instagram.com/tbakerx/',
    },
    {
      type: ContactType.Github,
      text: 'tbakerx',
      href: 'https://github.com/tbakerx',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/daiduong0307'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/dai-duong-a187861b9/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/j_nhdd/'},
  {label: 'Facebook', Icon: FacebookIcon, href: 'https://www.facebook.com/bjergocean/'},
];
