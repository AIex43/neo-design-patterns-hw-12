import { IBlock } from "./IBlock";

interface Education {
  degree: string;
  field: string;
  institution: string;
  year: string;
}

export class EducationBlock implements IBlock {
  constructor(private education: Education[]) {}

  render(): HTMLElement {
    const el = document.createElement("div");
    el.innerHTML = "<h2>Education</h2>";
    this.education.forEach(edu => {
      const p = document.createElement("p");
      p.textContent = `${edu.degree}, ${edu.field}, ${edu.institution} (${edu.year})`;
      el.appendChild(p);
    });
    return el;
  }
}
