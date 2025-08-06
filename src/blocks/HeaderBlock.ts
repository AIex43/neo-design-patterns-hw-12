import { IBlock } from "./IBlock";
import { ResumeModel } from "../models/ResumeModel";

export class HeaderBlock implements IBlock {
  constructor(private header: ResumeModel["header"]) {}

  render(): HTMLElement {
    const el = document.createElement("div");

    el.innerHTML = `
      <h1>${this.header.fullName}</h1>
      <h2 class="highlight">${this.header.title}</h2>
      <p>Email: ${this.header.contacts.email}</p>
      <p>Телефон: ${this.header.contacts.phone}</p>
      <p>Місто: ${this.header.contacts.location}</p>
    `;

    return el;
  }
}
