import { IBlock } from "./IBlock";

export class SkillsBlock implements IBlock {
  constructor(private skills: string[]) {}

  render(): HTMLElement {
    const el = document.createElement("div");
    el.innerHTML = `<h2>Навички</h2><p>${this.skills.join(", ")}</p>`;
    return el;
  }
}
