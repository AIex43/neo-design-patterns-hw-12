import { IBlock } from "./IBlock";

interface Skills {
  core: string[];
  tools: string[];
  languages: string[];
}

export class SkillsBlock implements IBlock {
  constructor(private skills: Skills) {}

  render(): HTMLElement {
    const el = document.createElement("div");
    el.innerHTML = "<h2>Skills</h2>";

    const ul = document.createElement("ul");
    ul.style.listStyleType = "square";


    const addSkillItem = (label: string, values: string[]) => {
      const li = document.createElement("li");


      const bold = document.createElement("strong");
      bold.textContent = `${label}: `;


      const span = document.createElement("span");
      span.textContent = values.join(", ");


      li.appendChild(bold);
      li.appendChild(span);
      ul.appendChild(li);
    };

    addSkillItem("core", this.skills.core);
    addSkillItem("tools", this.skills.tools);
    addSkillItem("languages", this.skills.languages);

    el.appendChild(ul);
    return el;
  }
}
