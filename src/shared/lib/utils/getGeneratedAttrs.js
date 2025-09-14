/**
 * Генерирует атрибуты для компонентов
 * @returns {string} Строка атрибутов вида 'name="value" name2="value2"'
 */
export const getGeneratedAttrs = (attrs = []) => {
  return attrs.map((attr) => `${attr.name}="${attr.value}"`).join(" ");
};