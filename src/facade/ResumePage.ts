import { ResumeImporter } from "../importer/ResumeImporter";

/**
 * Фасад: єдина точка входу.
 * Приховує логіку завантаження, валідації, мапінгу та рендерингу резюме.
 */
export class ResumePage {
  /**
   * Ініціалізує генерацію сторінки резюме.
   * @param jsonPath шлях до resume.json
   */
  async init(jsonPath: string): Promise<void> {
    const data = await this.fetchData(jsonPath);           // 1. Завантаження JSON
    const importer = new ResumeImporter(jsonPath);         // 2. Ініціалізація імпортера
    importer["data"] = data;                               // 3. Передача даних напряму (або через setData(), якщо зробиш метод)
    importer.validate();                                   // 4. Валідація
    const model = importer.map();                          // 5. Мапінг
    importer.render(model);                                // 6. Рендеринг
  }

  /**
   * Завантажує JSON-дані з вказаного шляху
   */
  private async fetchData(path: string): Promise<unknown> {
    const response = await fetch(path);
    if (!response.ok) throw new Error(`Помилка завантаження: ${response.status}`);
    return await response.json();
  }
}
