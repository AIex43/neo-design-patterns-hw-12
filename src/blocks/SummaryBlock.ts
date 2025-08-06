import { IBlock } from "./IBlock";

export class SummaryBlock implements IBlock {
  constructor(private summary: string) {}

  render(): HTMLElement {
    const el = document.createElement("div");
    el.innerHTML = `<h2>Про себе</h2><p>${this.summary}</p>`;
    return el;
  }
}
