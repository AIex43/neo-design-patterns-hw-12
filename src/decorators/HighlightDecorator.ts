// src/decorators/HighlightDecorator.ts
export class HighlightDecorator {
  // static, щоб можна було викликати без створення екземпляра
  static decorate(element: HTMLElement): HTMLElement {
    element.classList.add("highlight");
    return element;
  }
}
