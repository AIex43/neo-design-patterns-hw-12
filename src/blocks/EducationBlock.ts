import { IBlock } from "./IBlock";
import { EducationItem } from "../models/ResumeModel";

export class EducationBlock implements IBlock {
  constructor(private education: EducationItem[]) {}

  render(): HTMLElement {
    const el = document.createElement("div");
    el.className = "section education";
    el.innerHTML = `<strong class="section-title">Education</strong>`;

    this.education.forEach((edu) => {
      const p = document.createElement("p");
      p.className = "education-item";
      p.textContent = `${edu.degree} ${edu.field}, ${edu.institution} (${edu.year})`;
      el.appendChild(p);
    });

    return el;
  }
}
