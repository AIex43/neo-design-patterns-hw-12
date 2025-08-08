export interface ResumeModel {
  header: {
    fullName: string;
    title: string;
    contacts: {
      email: string;
      phone: string;
      location: string;
    };
  };
  summary: string;
  experience: ExperienceModel[];
  education: EducationModel[];
  skills: SkillsModel;
}

export interface ExperienceModel {
  company: string;
  title: string;
  period: string;
  projects: {
    name: string;
    details: string;
  }[];
}

export interface EducationModel {
  university: string;
  degree: string;
  year: string;
}

export interface SkillsModel {
  core: string[];
  tools: string[];
  languages: string[];
}
