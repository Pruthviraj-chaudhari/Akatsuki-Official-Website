export interface Resource {
  title: string;
  description: string;
  fileUrl: string;
  imageUrl: string;
}

const resources: Resource[] = [
  {
    title: "Akatsuki's Easy50",
    description:
      "A curated set of 50 beginner-friendly DSA problems to boost your fundamentals. Perfect for students starting their coding journey.",
    fileUrl: "https://drive.google.com/uc?export=download&id=1nkzCXYCUExJE4G_-TdtwZs6cLR1Oadnz",
    imageUrl: "/images/Resources/Easy50.png",
  },
  {
    title: "Akatsuki's DSA Sheet",
    description:
      "An advanced collection of handpicked DSA problems for serious practice. Ideal for interview prep and competitive coding.",
    fileUrl: "https://drive.google.com/uc?export=download&id=1qu7mqZR_NzpIl1dmBMSApAOL-RDgN8kj",
    imageUrl: "/images/Resources/dsa_sheet.png",
  },
  {
    title: "Nodevember 2.0",
    description:
      "Nodevember 2.0 notes cover backend development fundamentals using Node.js, Express.js, and MongoDB. They explain server setup, API creation, database operations, and building a full-stack project.",
    fileUrl: "https://drive.google.com/uc?export=download&id=15pMrNnnt3-AT2pJHH_CyuCBD-vxi3Atx",
    imageUrl: "/images/Resources/Nodevember.png",
  },
  {
    title: "The React Cohort",
    description:
      "These are comprehensive notes from the React Cohort 2025, covering React fundamentals, JavaScript, TypeScript, and Tailwind CSS. They focus on building modern, responsive web applications.",
    fileUrl: "https://drive.google.com/uc?export=download&id=1-XN_jZfFRtIbYuFUSgyAzFvf4InynTxC",
    imageUrl: "/images/Resources/React_Cohort.jpg",
  },
];

export default resources;
