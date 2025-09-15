/**
 * Генерирует SVG-изображение
 * @returns {string} HTML-разметка SVG изображения
 */
export const MenuIcon = (iconColor = "#356EAD", width = 32, height = 32) => {
  return `<svg width=${width} height=${height} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 24H28V21.3333H4V24ZM4 17.3333H28V14.6667H4V17.3333ZM4 8V10.6667H28V8H4Z" fill="${iconColor}"/>
</svg>
`;
};