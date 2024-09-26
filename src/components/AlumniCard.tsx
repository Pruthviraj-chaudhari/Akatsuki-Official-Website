// "use client"

// import { useState } from 'react'
// import { Card, CardContent, CardFooter } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
// import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

// interface Project {
//     name: string;
//     description: string;
//     features: string[];
//     technologies: string[];
//     }

// interface AlumniProfile {
//     name: string;
//     projects: Project[];
//     skills: string[];
//     focus: string[];
// }

// const defaultAlumni: AlumniProfile = {
//     name: "Vivek Patil",
//     projects: [],
//     skills: [],
//     focus: []
// }

// export default function AlumniCard({ alumni = defaultAlumni }: { alumni?: AlumniProfile }) {
//     const [isDialogOpen, setIsDialogOpen] = useState(false)

//     return (
//         <>
//             <Card className="w-[250px]">
//                 <CardContent className="pt-6 flex flex-col items-center">
//                 <Avatar className="w-24 h-24">
//                     <AvatarImage src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/https___res.cloudinary.com_dw3xlpgvg_image_upload_v1723974838_chat_files_y0upmhzgevcz6tdotig3-ff2XUoioXde1uFlbrlTq2dSM9H6EF3.png" alt={alumni.name} />
//                     <AvatarFallback>{alumni.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
//                 </Avatar>
//                 <h2 className="mt-4 text-xl font-semibold text-center">{alumni.name}</h2>
//                 </CardContent>
//                 <CardFooter className="flex justify-center">
//                     <Button onClick={() => setIsDialogOpen(true)}>More Details</Button>
//                 </CardFooter>
//             </Card>

//             <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
//                 <DialogContent className="max-w-[800px] max-h-[80vh] overflow-y-auto">
//                 <DialogHeader>
//                     <DialogTitle>{alumni.name}</DialogTitle>
//                     <DialogDescription>Developer Profile</DialogDescription>
//                 </DialogHeader>
//                 <div className="grid gap-4">
//                     <div className="flex items-center gap-4">
//                     <Avatar className="w-20 h-20">
//                         <AvatarImage src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/https___res.cloudinary.com_dw3xlpgvg_image_upload_v1723974838_chat_files_y0upmhzgevcz6tdotig3-ff2XUoioXde1uFlbrlTq2dSM9H6EF3.png" alt={alumni.name} />
//                         <AvatarFallback>{alumni.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
//                     </Avatar>
//                     </div>
//                     <div>
//                     <h3 className="text-lg font-semibold">Skills</h3>
//                     <p>{alumni.skills.length > 0 ? alumni.skills.join(', ') : 'No skills listed'}</p>
//                     </div>
//                     <div>
//                     <h3 className="text-lg font-semibold">Focus Areas</h3>
//                     <p>{alumni.focus.length > 0 ? alumni.focus.join(', ') : 'No focus areas listed'}</p>
//                     </div>
//                     <div>
//                     <h3 className="text-lg font-semibold">Projects</h3>
//                     {alumni.projects.length > 0 ? (
//                         alumni.projects.map((project, index) => (
//                         <div key={index} className="mb-4">
//                             <h4 className="font-semibold">{project.name}</h4>
//                             <p>{project.description}</p>
//                             <h5 className="font-semibold mt-2">Features:</h5>
//                             <ul className="list-disc pl-5">
//                             {project.features.map((feature, fIndex) => (
//                                 <li key={fIndex}>{feature}</li>
//                             ))}
//                             </ul>
//                             <h5 className="font-semibold mt-2">Technologies:</h5>
//                             <p>{project.technologies.join(', ')}</p>
//                         </div>
//                         ))
//                     ) : (
//                         <p>No projects listed</p>
//                     )}
//                     </div>
//                 </div>
//                 <DialogFooter>
//                     <Button onClick={() => setIsDialogOpen(false)}>Close</Button>
//                 </DialogFooter>
//                 </DialogContent>
//             </Dialog>
//         </>
//     )
// }
import React from 'react';

interface AlumniMember {
  name: string;
  role: string;
  company: string[];
  image: string;
  batch: number;
}

interface AlumniCardProps {
  alumni: AlumniMember;
}

const AlumniCard: React.FC<AlumniCardProps> = ({ alumni }) => {
  return (
    <div className="bg-black text-center p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      
      <div className="flex justify-center mb-4">
        <img
          src={alumni.image}
          alt={alumni.name}
           className="w-32 h-32 object-cover rounded-full border-2 border-gray-200"
        />
      </div>

     
      <h3 className="text-xl font-bold text-white">{alumni.name}</h3>

    
      <p className="text-red-600 font-bold">{alumni.role}</p>

   
      <div className="mt-2 text-md text-white space-y-1">
        {alumni.company.map((company, index) => (
          <p key={index}> {company}</p>
        ))}
      </div>
    </div>
  );
};

export default AlumniCard;
