/**
 * Патерн Decorator (Декоратор)
 *
 * Клас для додавання виділення до блоків резюме.
 * Декорує об'єкти типу IBlock, додаючи їм нову функціональність
 * без зміни їх внутрішньої структури.
 */

import { IBlock } from "./IBlock"; // 🛠 Виправлення шляху: BlockFactory не є інтерфейсом

export class HighlightDecorator implements IBlock {
  private wrapped: IBlock;

  /**
   * @param block Блок, який буде декоровано
   */
  constructor(block: IBlock) {
    this.wrapped = block;
  }

  /**
   * Викликає render() на обгорнутому блоці,
   * додає клас 'highlight' до елемента і повертає його
   */
  render(): HTMLElement {
    const element = this.wrapped.render();      // Викликаємо оригінальний render
    element.classList.add("highlight");         // Додаємо нову поведінку (виділення)
    return element;                             // Повертаємо декорований елемент
  }
}
