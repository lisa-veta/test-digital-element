/**
 * Генерирует SVG-изображение
 * @returns {string} HTML-разметка SVG изображения
 */
export const ArrowIcon = (iconColor = "#5A98D0", width = 16, height = 16) => {
  return `<svg width=${width} height=${height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" fill="${iconColor}"/>
</svg>
`;
};