// Define the AlumniMember interface
export interface AlumniMember {
  name: string;
  role: string;
  company: string[];
  image: string;
  batch: number;
}

// Create the alumni2023 array with typed data
export const alumni2023: AlumniMember[] = [
  {
    name: 'Shivang Vora',
    role: 'Founder',
    company: ['General Aeronautics', 'Capgemini - 7.5 LPA', 'Hexaware - 4 LPA'],
    image: '../images/Alumni/shivang.jpg',
    batch: 2023
  },
  {
    name: 'Shubham Vora',
    role: 'Co-Founder',
    company: ['Infosys - 9.5 LPA', 'BetterCommerce - 9 LPA', 'Capgemini - 7.5 LPA', 'Hexaware - 6.5 LPA'],
    image: '../images/Alumni/shubham.jpg',
    batch: 2023
  },
  {
    name: 'Mangesh Sonawane',
    role: 'Core Team Member',
    company: ['TCS - 7 LPA', 'Reliance Jio - 6 LPA', 'Cybage Software - 4.5 LPA'],
    image: '../images/Alumni/mangesh.jpg',
    batch: 2023
  },
  {
    name: 'Tarun Kukreja',
    role: 'Core Team Member',
    company: ['Cybage Software - 4 LPA', 'TCS - 3.6 LPA'],
    image: '../images/Alumni/tarun.jpg',
    batch: 2023
  },
  {
    name: 'Shreya Shinde',
    role: 'Core Team Member',
    company: ['TCS (Ninja) - 3.36 LPA', 'Capgemini - 4.25 LPA', 'Cybage Software - 4.5 LPA'],
    image: '../images/Alumni/shreya.jpg',
    batch: 2023
  },
  {
    name: 'Rohan Badgujar',
    role: 'Core Team Member',
    company: ['Reliance Jio - 7 LPA'],
    image: '../images/Alumni/rohan.jpg',
    batch: 2023
  },
  {
    name: 'Ritisha Tare',
    role: 'Core Team Member',
    company: ['Infosys - 3.6 LPA', 'TCS - 3.36 LPA'],
    image: '../images/Alumni/ritisha.jpg',
    batch: 2023
  },
  {
    name: 'Hardik Poriya',
    role: 'Core Team Member',
    company: ['Digitalatto - 6 LPA', 'Clone Futura - 4.5 LPA'],
    image: '../images/Alumni/hardik.jpg',
    batch: 2023
  },
  {
    name: 'Rishika Sharma',
    role: 'Core Team Member',
    company: ['TCS - 7 LPA', 'Hexaware - 4 LPA'],
    image: '../images/Alumni/rishika.jpg',
    batch: 2023
  },
];

//2024 batch
export const alumni2024: AlumniMember[] = [
  {
    name: 'Mangesh Bide',
    role: 'Ex-President',
    company: ['Netwin - 4.5 LPA'],
    image: '../images/Alumni/mangeshbide.jpg',
    batch: 2024
  },
  {
    name: 'Sakshi Kukreja',
    role: 'Ex-Vice President',
    company: [''],
    image: '../images/Alumni/sakshi.jpg',
    batch: 2024
  },
];
  

//2025 batch
export const alumni2025: AlumniMember[] = [
  {
    name: 'Pruthviraj Chaudhari',
      role: 'President',
      image: '../images/members/Pruthviraj.png', 
      company: ['TSS - 4.6 LPA'],
      batch: 2025
  },
  
];
