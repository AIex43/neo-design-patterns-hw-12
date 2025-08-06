import { IBlock } from "./IBlock";
import { Education } from "../models/ResumeModel";

export class EducationBlock implements IBlock {
  constructor(private education: Education[]) {}

  render(): HTMLElement {
    const el = document.createElement("div");
    el.innerHTML = "<h2>Освіта</h2>";
    this.education.forEach(ed => {
      const edDiv = document.createElement("div");
      edDiv.innerHTML = `<p>${ed.institution}, ${ed.degree} (${ed.year})</p>`;
      el.appendChild(edDiv);
    });
    return el;
  }
}
