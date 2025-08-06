import { IBlock } from "./IBlock";
import { HeaderBlock } from "./HeaderBlock";
import { SummaryBlock } from "./SummaryBlock";
import { ExperienceBlock } from "./ExperienceBlock";
import { EducationBlock } from "./EducationBlock";
import { SkillsBlock } from "./SkillsBlock";
import { ResumeModel } from "../models/ResumeModel";

export class BlockFactory {
  constructor(private model: ResumeModel) {}

  createBlock(type: string): IBlock | null {
    switch (type) {
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
        return null;
    }
  }
}
