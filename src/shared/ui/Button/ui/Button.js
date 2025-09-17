import { getGeneratedAttrs } from "@shared/lib/utils/index.js";
import "../style.scss";
import "../media.scss";
import { Typography } from "@shared/ui/Typography";
/**
 * Компонент кнопки
 *  Генерирует HTML-кнопку с текстом, дополнительными классами и атрибутами
 *
 *  @param {Object} props - Пропсы кнопки
 *  @param {string} props.text - Текст кнопки
 *  @param {string[]} [props.extraClassesButton=[]] - Дополнительные CSS-классы для кнопки
 *  @param {string[]} [props.extraClassesText=[]] - Дополнительные CSS-классы для текста
 *  @param {Array<{name: string, value: string}>} [props.extraAttrs] - Дополнительные HTML-атрибуты
 *  @returns {string} HTML-разметка кнопки
 */
export const Button = ({
  text,
  extraClassesButton = [],
  extraClassesText = [],
  extraAttrs,
}) =>
  `<button class="btn ${extraClassesButton.join(" ")}" ${getGeneratedAttrs(extraAttrs)}> 
  ${Typography({
    type: "body",
    spacing: "default",
    text: text,
    extraClasses: extraClassesText,
  })}</button>`;