// src/types/Event.ts
export type EventData = {
  main: {
    title: string;
    text: String;
    date: string;
    time: string;
    location: string;
    coverImage: string;
    description: string;
  }[];
  photos: string[];
  schedule: {
    day: string;
    rounds: {
      title: string;
      description: string;
      tasks: { name: string; description: string }[];
    }[];
  }[];
  reels?: {
    id: number;
    url: string;
    thumbnail: string;
  }[];
  //   reviews: {
  //     name: string;
  //     username: string;
  //     body: string;
  //   }[];
  reviews: {
    quote: string;
    name: string;
    username: string;
    avatar: string;
    rating: number;
  }[];

  winners?: {
    rank: number;
    teamName: string;
    prize: string;
    members: string[];
  }[];
};
