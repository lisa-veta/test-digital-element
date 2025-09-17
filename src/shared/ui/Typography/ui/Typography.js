import "../style.scss";
import {getStyleString} from "@shared/lib/utils";

/**
 * Компонент Typography
 *
 * @param {Object} props - Параметры компонента
 * @param {string} props.type - Тип текста ("h1", "h2", "subtitle", "body", "caption")
 * @param {string} props.text - Текст для отображения
 * @param {string} [props.spacing="default"] - Межбуквенное расстояние
 * @param {string[]} [props.extraClasses=[]] - Дополнительные CSS-классы
 * @returns {string} HTML-разметка элемента Typography
 */
export const Typography = ({ type, text, spacing = "default", extraClasses = [] }) => {
    const classList = [
        `typography--${type}`,
        `typography--spacing-${spacing}`,
        ...extraClasses,
    ];

    return `<div class="${classList.join(" ")}">${text}</div>`;
};