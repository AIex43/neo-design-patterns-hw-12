import { ResumeModel } from "../models/ResumeModel";

export abstract class AbstractImporter {
  protected data: any;

  constructor(protected jsonPath: string) {}

  abstract validate(): void;
  abstract map(): ResumeModel;
  abstract render(model: ResumeModel): void;

  async process(): Promise<void> {
    const response = await fetch(this.jsonPath);
    this.data = await response.json();
    this.validate();
    const model = this.map();
    this.render(model);
  }
}
