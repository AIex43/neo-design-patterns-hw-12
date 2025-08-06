import { IBlock } from "./IBlock";
import { Project } from "../models/ResumeModel";
import { HighlightDecorator } from "../decorators/HighlightDecorator";

export class ProjectBlock implements IBlock {
  constructor(private project: Project) {}

  render(): HTMLElement {
    const el = document.createElement("div");
    el.innerHTML = `<h4>${this.project.name}</h4><p>${this.project.description}</p>`;
    return this.project.isRecent ? HighlightDecorator.decorate(el) : el;
  }
}
