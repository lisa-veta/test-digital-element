/**
 * Генерирует SVG-картинку
 * @returns {string} HTML-разметка SVG картинки
 */
export const LogoIcon = (iconColor = "#316099", width = 48, height = 32) => {
  return `<svg width="${width}" height="${height}" viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="16" cy="16" r="16" fill="${iconColor}"/>
<circle cx="32" cy="16" r="15" fill="white" stroke="${iconColor}" stroke-width="2"/>
<path d="M39.3 22L34.38 8H30.96L26.06 22H29.04L29.88 19.48H35.46L36.3 22H39.3ZM32.68 11.18L34.6 16.9H30.76L32.68 11.18Z" fill="${iconColor}"/>
</svg>
`;
};