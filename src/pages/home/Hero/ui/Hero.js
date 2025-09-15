import { Button } from "@shared/ui/Button/index.js";
import { Navigation } from "@shared/ui/Navigation/index.js";
import "../style.scss";
import { HERO_TEXT, HERO_DESCRIPTION, HERO_BUTTON_TEXT } from "../constants.js";

/**
 * Компонент Hero для главной страницы.
 * Рендерит секцию с заголовком, описанием, кнопкой и иллюстрацией
 *
 * @param {Object} props - Пропсы компонента
 * @param {string} [props.title=HERO_TEXT] - Заголовок секции
 * @param {string} [props.description=HERO_DESCRIPTION] - Описание секции
 * @param {string} [props.button_text=HERO_BUTTON_TEXT] - Текст кнопки
 * @returns {string} HTML-разметка секции Hero
 */
export const Hero = ({ title = HERO_TEXT, description = HERO_DESCRIPTION, button_text = HERO_BUTTON_TEXT, image = "/assets/heroIllustration.png" }) => `
<section class="hero">${Navigation({})}
    <div class="hero__wrapper">
        <div class="hero__text">
             <h1 class="hero__title">
                 ${title}
            </h1>
            <p class="hero__description">
                 ${description}
            </p>
        </div>
        ${Button({ text: button_text })}
    </div>
    <img class="hero__image" src=${image} alt="Hero Illustration" />
</section>`;