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

    const renderSkillList = (title: string, items: string[]) => {
      const container = document.createElement("div");

      const label = document.createElement("strong");
      label.textContent = `${title}: `;
      container.appendChild(label);

      const ul = document.createElement("ul");
      ul.style.listStyleType = "square"; // 🟦 квадратні позначення
      ul.style.paddingLeft = "20px";
      items.forEach(skill => {
        const li = document.createElement("li");
        li.textContent = skill;
        ul.appendChild(li);
      });

      container.appendChild(ul);
      return container;
    };

    el.appendChild(renderSkillList("core", this.skills.core));
    el.appendChild(renderSkillList("tools", this.skills.tools));
    el.appendChild(renderSkillList("languages", this.skills.languages));

    return el;
  }
}
