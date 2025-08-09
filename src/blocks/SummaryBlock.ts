import { IBlock } from "./IBlock";

export class SummaryBlock implements IBlock {
  constructor(private summary: { text: string }) {}

  render(): HTMLElement {
    const el = document.createElement("div");
    el.className = "section summary";
    el.innerHTML = `<strong class="section-title">Summary</strong>
                    <p>${this.summary.text}</p>`;
    return el;
  }
}
