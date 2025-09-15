import "../style.scss";
import { ArrowIcon } from "@shared/ui/Icons";
import { ILLUSTRATIONS } from "@shared/ui/InfoCard/constants.js";

/**
 * Компонент карточки
 *
 * @param {Object} props - Параметры компонента
 * @param {string} props.image - Ключ для выбора иллюстрации из ILLUSTRATIONS
 * @param {string} props.title - Заголовок карточки
 * @param {string} props.description - Описание карточки
 * @param {string} props.link - URL для перехода по ссылке
 * @returns {string} HTML-разметка компонента InfoCard
 */
export const InfoCard = ({
  image, title, description, link, 
}) => {
  const { src, variantClass } = ILLUSTRATIONS[image];

  return `
  <div class="infoCard">
    <div class="infoCard__wrapper">
        <img 
          class="infoCard__image ${variantClass}" 
          src="${src}" 
          alt="Illustration" 
        />
      <div class="infoCard__text">
        <div class="infoCard__title">${title}</div>
        <div class="infoCard__description">${description}</div>
      </div>
      <a class="infoCard__link" href="${link}">
        <span>learn more</span>
        ${ArrowIcon()}
      </a>
    </div>
  </div>`;
};