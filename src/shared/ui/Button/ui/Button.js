import { getGeneratedAttrs } from "@shared/lib/utils/index.js";
import "../style.scss";
/**
 * Компонент кнопки
 *  Генерирует HTML-кнопку с текстом, дополнительными классами и атрибутами
 *
 *  @param {Object} props - Пропсы кнопки
 *  @param {string} props.text - Текст кнопки
 *  @param {string[]} [props.extraClasses=[]] - Дополнительные CSS-классы
 *  @param {Array<{name: string, value: string}>} [props.extraAttrs] - Дополнительные HTML-атрибуты
 *  @returns {string} HTML-разметка кнопки
 */
export const Button = ({
  text,
  extraClasses = [],
  extraAttrs,
}) =>
  `<button class="btn ${extraClasses.join(" ")}" ${getGeneratedAttrs(extraAttrs)}><span class="btn__label">${text}</span></button>`;