import { IBlock } from "./IBlock";
import { ResumeModel } from "../models/ResumeModel";

export class HeaderBlock implements IBlock {
  constructor(private header: ResumeModel["header"]) {}

  render(): HTMLElement {
    const el = document.createElement("div");
    el.innerHTML = `
      <h1>${this.header.name}</h1>
      <h2>${this.header.position}</h2>
      <p>${this.header.email} ${this.header.phone} ${this.header.location}</p>
    `;
    return el;
  }
}
