import "../style.scss";
import { ArrowIcon } from "@shared/ui/Icons";
import { Typography } from "@shared/ui/Typography";
import { TYPOGRAPHY_TYPES } from "@shared/ui/Typography/constants";

/**
 * Компонент карточки
 *
 * @param {Object} props - Параметры компонента
 * @param {string} props.src - Путь к иллюстрации
 * @param {string} props.variantClass - Класс для стилей к иллюстрации
 * @param {string} props.title - Заголовок карточки
 * @param {string} props.description - Описание карточки
 * @param {string} props.link - URL для перехода по ссылке
 * @returns {string} HTML-разметка компонента InfoCard
 */
export const InfoCard = ({
  src, variantClass, title, description, link = "#", 
}) => `
  <div class="info-card">
    <div class="info-card__wrapper">
        <img 
          class="info-card__image ${variantClass}" 
          src="${src}" 
          alt="Illustration" 
        />
      <div class="info-card__text">
        <div class="info-card__title">${title}</div>
        <div class="info-card__description">${description}</div>
      </div>
      <a class="info-card__link" href="${link}">
        <span>learn more</span>
        ${ArrowIcon()}
      </a>
    </div>
  </div>`;