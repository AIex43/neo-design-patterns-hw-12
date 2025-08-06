export interface HeaderModel {
  fullName: string;
  title: string;
  contacts: {
    email: string;
    phone: string;
    location: string;
  };
}

export interface Project {
  name: string;
  description: string;
  isRecent?: boolean;
}

export interface ExperienceItem {
  position: string;
  company: string;
  start: string;
  end: string;
  projects: Project[];
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  graduation: string;
}

export interface SkillsModel {
  core: string[];
  tools: string[];
  languages: string[];
}

export interface ResumeModel {
  header: HeaderModel;
  summary: { text: string };
  experience: ExperienceItem[];
  education: EducationItem[];
  skills: SkillsModel;
}
