import { IBlock } from "./IBlock";
import { SkillsModel } from "../models/ResumeModel";

export class SkillsBlock implements IBlock {
  constructor(private skills: SkillsModel) {}

  render(): HTMLElement {
    const el = document.createElement("div");
    el.className = "section skills";
    el.innerHTML = `<strong class="section-title">Skills</strong>`;

    const ul = document.createElement("ul");
    ul.className = "skills-list";

    const addLine = (label: string, values: string[]) => {
      const li = document.createElement("li");
      const strong = document.createElement("strong");
      strong.textContent = `${label}:`;
      li.appendChild(strong);
      li.appendChild(document.createTextNode(" " + values.join(", ")));
      ul.appendChild(li);
    };

    addLine("core", this.skills.core);
    addLine("tools", this.skills.tools);
    addLine("languages", this.skills.languages);

    el.appendChild(ul);
    return el;
  }
}
