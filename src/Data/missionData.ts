// Define the Mission interface
interface Mission {
  iconClass: string;
  title: string;
  description: string;
  imageUrl: string;
}

const missionData: Mission[] = [
  {
    iconClass: 'bx bx-coding',
    title: '1.',
    description: 'To build a coding culture and instill the habits needed for success in product-based companies.',
    imageUrl: './altumcode-mCj7UinqOYQ-unsplash.jpg',
  },
  {
    iconClass: 'bx bx-lightbulb',
    title: '2.',
    description: 'To ignite innovation and equip students with tools for transformation and a bright future.',
    imageUrl: './altumcode-P2SkP_PXhlU-unsplash.jpg',
  },
  {
    iconClass: 'bx bx-brain',
    title: '3.',
    description: ' To foster curiosity and experimentation in a collaborative, transdisciplinary learning environment',
    imageUrl: './altumcode-PNbDkQ2DDgM-unsplash.jpg',
  },
  {
    iconClass: 'bx bx-heart',
    title: '4.',
    description: 'To inspire confidence and curiosity by eliminating coding phobia and fostering a passion for coding.',
    imageUrl: './oskar-yildiz-cOkpTiJMGzA-unsplash.jpg',
  }
];

export default missionData;
