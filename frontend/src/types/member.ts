export interface Member {
  id: string;
  name: string;
  role: string;
  teamRole?: string;
  team?: "backend" | "devops" | "qa";
  bio: string;
  initials: string;
  avatarColor: string;
  image?: string;
  linkedin?: string;
  twitter?: string;
  github?: string;
  isFounder?: boolean;
  skills?: string[];
  experience?: {
    company: string;
    role: string;
    highlights: string[];
  }[];
  projects?: {
    name: string;
    description: string;
    tech: string[];
  }[];
}
