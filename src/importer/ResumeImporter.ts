import { AbstractImporter } from "./AbstractImporter";
import { ResumeModel } from "../models/ResumeModel";
import { BlockFactory } from "../blocks/BlockFactory";

export class ResumeImporter extends AbstractImporter {
  validate(): void {
    const req: (keyof ResumeModel)[] = ["header","summary","experience","education","skills"];
    req.forEach(k => {
      if (!this.data[k]) throw new Error(`Відсутня секція: ${k}`);
    });
  }

  map(): ResumeModel {
    return this.data as ResumeModel;
  }

  render(model: ResumeModel): void {
    const container = document.getElementById("resume-content")!;
    const factory = new BlockFactory(model);
    (Object.keys(model) as (keyof ResumeModel)[])
      .forEach(section => {
        const block = factory.createBlock(section);
        container.appendChild(block.render());
      });
  }
}
