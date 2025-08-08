import { IBlock } from "./IBlock";

export class SummaryBlock implements IBlock {
  constructor(private summary: { text: string }) {}

  render(): HTMLElement {
    const el = document.createElement("div");
    el.innerHTML = `<h2>Summary</h2><p>${this.summary.text}</p>`;
    return el;
  }
}
