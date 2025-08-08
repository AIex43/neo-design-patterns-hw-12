import { ResumeModel } from "../models/ResumeModel";
import { IBlock } from "./IBlock";
import { HeaderBlock } from "./HeaderBlock";
import { SummaryBlock } from "./SummaryBlock";
import { ExperienceBlock } from "./ExperienceBlock";
import { EducationBlock } from "./EducationBlock";
import { SkillsBlock } from "./SkillsBlock";

export class BlockFactory {
  constructor(private model: ResumeModel) {}

  createBlock(section: keyof ResumeModel): IBlock {
    switch (section) {
      case "header":
        return new HeaderBlock(this.model.header);
      case "summary":
        return new SummaryBlock(this.model.summary);
      case "experience":
        return new ExperienceBlock(this.model.experience);
      case "education":
        return new EducationBlock(this.model.education);
      case "skills":
        return new SkillsBlock(this.model.skills);
      default:
        throw new Error(`Unknown section: ${section}`);
    }
  }
}

