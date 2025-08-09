// src/models/ResumeModel.ts
export interface ProjectModel {
  name: string;
  details: string;
  isRecent?: boolean;
}

export interface ExperienceItem {
  position: string;
  company: string;
  period: string;
  projects: ProjectModel[];
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  year: string;
}

export interface SkillsModel {
  core: string[];
  tools: string[];
  languages: string[];
}

export interface ResumeModel {
  header: {
    name: string;
    position: string;
    email: string;
    phone: string;
    location: string;
  };
  summary: { text: string };
  experience: ExperienceItem[];
  education: EducationItem[];
  skills: SkillsModel;
}
