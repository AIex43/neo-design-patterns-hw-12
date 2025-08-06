import { ResumeImporter } from "../importer/ResumeImporter";

export class ResumePage {
  async init(jsonPath: string): Promise<void> {
    const importer = new ResumeImporter(jsonPath);
    await importer.process();
  }
}
