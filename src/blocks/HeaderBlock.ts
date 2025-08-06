import { IBlock } from "./IBlock";
import { ResumeModel } from "../models/ResumeModel";

export class HeaderBlock implements IBlock {
  constructor(private header: ResumeModel["header"]) {}

  render(): HTMLElement {
    const el = document.createElement("div");
    el.innerHTML = `<h1>${this.header.name}</h1>
      <p>Email: ${this.header.email}</p>
      <p>Телефон: ${this.header.phone}</p>`;
    return el;
  }
}

