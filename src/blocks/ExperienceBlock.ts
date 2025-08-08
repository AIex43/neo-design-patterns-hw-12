import { IBlock } from "./IBlock";

interface Project {
  name: string;
  details: string;
}

interface Experience {
  position: string;
  company: string;
  period: string;
  projects: Project[];
}

export class ExperienceBlock implements IBlock {
  constructor(private experience: Experience[]) {}

  render(): HTMLElement {
    const el = document.createElement("div");
    el.innerHTML = "<h2>Experience</h2>";

    this.experience.forEach((job, index) => {
      const jobDiv = document.createElement("div");
      jobDiv.innerHTML = `<strong>${job.position} at ${job.company} (${job.period})</strong>`;

      const ul = document.createElement("ul");
      ul.style.listStyleType = "disc";
      ul.style.paddingLeft = "20px";
      ul.style.color = index === 0 ? "red" : "black"; // 🔴 перший досвід — червоний, інші — чорні

      job.projects.forEach(proj => {
        const li = document.createElement("li");
        li.textContent = `${proj.name} – ${proj.details}`;
        ul.appendChild(li);
      });

      jobDiv.appendChild(ul);
      el.appendChild(jobDiv);
    });

    return el;
  }
}
