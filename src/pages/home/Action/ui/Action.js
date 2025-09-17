import "../style.scss";
import { Button } from "@shared/ui/Button/index.js";
import { Button } from "@shared/ui/Button";
import { Typography } from "@shared/ui/Typography";
import { TYPOGRAPHY_TYPES } from "@shared/ui/Typography/constants";

/**
 * Компонент Action для главной страницы
 * @returns {string} HTML-разметка секции Action
 */
export const Action = () => `
<section class="action">
    <div class="action__wrapper">
        <div class="action__text">
           ${Typography({
              type: TYPOGRAPHY_TYPES.H2,
              text: "Interested to work with our team?",
              extraClasses: [ "action__title" ], 
            })}
            ${Typography({
              type: TYPOGRAPHY_TYPES.BODY,
              text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
              extraClasses: [ "action__description" ],
            })}
        </div>
        ${Button({ text: "Let’s Talk", extraClassesButton: [ "btn--wide" ] })}
    </div>
</section>`;