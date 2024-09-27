// Define the Leader interface
interface Leader {
    name: string;
    role: string;
    image: string;
    linkedin: string;
    github: string;
  }
  
  // Create the leaders array with typed data
  const leaders: Leader[] = [
    {
      name: 'Pruthviraj Chaudhari',
      role: 'President',
      image: '../images/members/Pruthviraj.png',
      linkedin: '',
      github: ''
    },
    {
      name: 'Sanika Joshi',
      role: 'Vice President',
      image: '../images/members/sanika.jpg',
      linkedin: '',
      github: ''
    }
  ];
  
  export default leaders;
  