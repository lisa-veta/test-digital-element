import "../style.scss";
import "../media.scss";
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
          ${Typography({
            type: TYPOGRAPHY_TYPES.SUBTITLE2,
            text: title,
            extraClasses: [ "info-card__title" ],
          })}
        ${Typography({
          type: TYPOGRAPHY_TYPES.BODY,
          text: description,
          extraClasses: [ "info-card__description" ],
        })}
      </div>
      <a class="info-card__link" href="${link}">
         ${Typography({
            type: TYPOGRAPHY_TYPES.CAPTION,
            text: "learn more",
            extraClasses: [ "info-card__link" ],
          })}
          ${ArrowIcon()}
      </a>
    </div>
  </div>`;