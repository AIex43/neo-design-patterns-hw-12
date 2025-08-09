import { IBlock } from "./IBlock";
import { ResumeModel } from "../models/ResumeModel";

export class HeaderBlock implements IBlock {
  constructor(private header: ResumeModel["header"]) {}

  render(): HTMLElement {
    const el = document.createElement("div");
    el.className = "section header";

    el.innerHTML = `
      <h1>${this.header.name}</h1>
      <div class="title">${this.header.position}</div>
      <div class="contacts">${this.header.email} ${this.header.phone} ${this.header.location}</div>
    `;
    return el;
  }
}
