
import { IBlock } from "./IBlock";
import { ProjectModel } from "../models/ResumeModel";
import { HighlightDecorator } from "../decorators/HighlightDecorator";

export class ProjectBlock implements IBlock {
  constructor(private project: ProjectModel) {}

  render(): HTMLElement {
    const el = document.createElement("div");
    el.className = "project-item";
    el.innerHTML = `<strong>${this.project.name}</strong> – ${this.project.details}`;

    if (this.project.isRecent) {
      return HighlightDecorator.decorate(el);
    }
    return el;
  }
}
