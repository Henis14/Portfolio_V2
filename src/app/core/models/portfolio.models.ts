export interface Profile {
  name: string;
  role: string;
  stack: string;
  email: string;
  phone: string;
  phoneHref: string;
  github: string;
  linkedin: string;
  resumePdf: string;
  photo: string;
  summary: string;
  freelance: string;
  availability: string;
  availabilityDetail: string;
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface Job {
  company: string;
  role: string;
  period: string;
  intro?: string;
  points: string[];
}

export interface Degree {
  title: string;
  short: string;
  school: string;
  period: string;
  score: string;
}

export interface Screenshot {
  src: string;
  caption: string;
}

export interface Project {
  slug: string;
  no: string;
  title: string;
  kind: string;
  domain: string;
  stack: string[];
  blurb: string;
  details: string[];
  logo?: string;
  coverBg?: string;
  screens?: Screenshot[];
  url?: string;
  onResume?: boolean;
}
