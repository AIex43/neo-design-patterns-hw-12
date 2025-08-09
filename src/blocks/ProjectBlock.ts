import { IBlock } from "./IBlock";
import { ProjectModel } from "../models/ResumeModel";

export class ProjectBlock implements IBlock {
  constructor(private project: ProjectModel) {}

  render(): HTMLElement {
    const li = document.createElement("li");
    li.className = "project-item";
    li.innerHTML = `<strong>${this.project.name}</strong> – ${this.project.details}`;

    if (this.project.isRecent) {
      li.classList.add("highlight");
    }
    return li;
  }
}
