export interface IAlumni {
  name: string;
  role: string;
  company: string[];
  image: string;
  batch: number;
}

export interface ITeamMember {
  name: string;
  role: string;
  image: string;
  linkedin: string;
  github: string;
}

export interface IMission {
  iconClass: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface IEvent {
  id: string;
  name: string;
  photos: string[];
  text: string;
}