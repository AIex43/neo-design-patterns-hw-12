import { IBlock } from "./IBlock";
import { ExperienceItem } from "../models/ResumeModel";
import { ProjectBlock } from "./ProjectBlock";

export class ExperienceBlock implements IBlock {
  constructor(private experience: ExperienceItem[]) {}

  render(): HTMLElement {
    const wrapper = document.createElement("div");
    wrapper.className = "section experience";
    wrapper.innerHTML = `<strong class="section-title">Experience</strong>`;

    this.experience.forEach((job) => {
      const jobHeader = document.createElement("div");
      jobHeader.className = "job-header";
      jobHeader.innerHTML = `<span><strong>${job.position}</strong> at <em>${job.company}</em> (${job.period})</span>`;


      const ul = document.createElement("ul");
      job.projects.forEach((proj) => {
        const projectBlock = new ProjectBlock(proj);
        const node = projectBlock.render();
        ul.appendChild(node); // node вже <li class="project-item">
      });

      wrapper.appendChild(jobHeader);
      wrapper.appendChild(ul);
    });

    // Знаходимо перший .project-item та ставимо стиль кольору червоний
    const firstProjectItem = wrapper.querySelector(".project-item");
    if (firstProjectItem) {
      (firstProjectItem as HTMLElement).style.color = "red";
    }

    return wrapper;
  }
}
