
export class HighlightDecorator {

  static decorate(element: HTMLElement): HTMLElement {
    element.classList.add("highlight");
    return element;
  }
}
