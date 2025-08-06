import { IBlock } from "./IBlock";
import { Experience } from "../models/ResumeModel";
import { ProjectBlock } from "./ProjectBlock";

export class ExperienceBlock implements IBlock {
  constructor(private experiences: Experience[]) {}

  render(): HTMLElement {
    const el = document.createElement("div");
    el.innerHTML = "<h2>Досвід роботи</h2>";

    this.experiences.forEach(exp => {
      const expDiv = document.createElement("div");
      expDiv.innerHTML = `<h3>${exp.company} — ${exp.role} (${exp.duration})</h3>`;
      exp.projects.forEach(project => {
        const block = new ProjectBlock(project);
        expDiv.appendChild(block.render());
      });
      el.appendChild(expDiv);
    });

    return el;
  }
}
