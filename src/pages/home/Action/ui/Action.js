import "../style.scss";
import { Button } from "@shared/ui/Button/index.js";

/**
 * Компонент Action для главной страницы
 * @returns {string} HTML-разметка секции Action
 */
export const Action = () => `
<section class="action">
    <div class="action__wrapper">
        <div class="action__text">
            <h2 class="action__title">Intersted to work with our team?</h2>
            <p class="action__description">
             Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
        </div>
        ${Button({ text: "Let’s Talk", extraClasses: [ "btn--wide" ] })}
    </div>
</section>`;