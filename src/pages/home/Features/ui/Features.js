import "../style.scss";
import { INFO_CARD_1, INFO_CARD_2, INFO_CARD_3 } from "@pages/home/Features/constants.js";
import { InfoCard } from "@shared/ui/InfoCard/index.js";
import { INFO_CARD_1, INFO_CARD_2, INFO_CARD_3 } from "@pages/home/Features/constants";
import { InfoCard } from "@shared/ui/InfoCard";
import { Typography } from "@shared/ui/Typography";
import { TYPOGRAPHY_TYPES } from "@shared/ui/Typography/constants";

/**
 * Компонент Features для главной страницы
 * @returns {string} HTML-разметка секции Features
 */
export const Features = () => `
<section class="features">
    <div class="features__col1">
        ${Typography({
          type: TYPOGRAPHY_TYPES.H2,
          text: "What we do to help our client grow in digital era",
          extraClasses: [ "features__label" ],
        })}
        <div class="features__card1">
            ${InfoCard({
              src: INFO_CARD_1.src, variantClass: INFO_CARD_1.variantClass, title: INFO_CARD_1.title, description: INFO_CARD_1.description, 
            })}
        </div>
    </div>
    <div class="features__col2"> 
        <div class="features__card2"> 
            ${InfoCard({
              src: INFO_CARD_2.src, variantClass: INFO_CARD_2.variantClass, title: INFO_CARD_2.title, description: INFO_CARD_2.description, 
            })}
        </div>
        <div class="features__card3"> 
            ${InfoCard({
              src: INFO_CARD_3.src, variantClass: INFO_CARD_3.variantClass, title: INFO_CARD_3.title, description: INFO_CARD_3.description, 
            })}
        </div>
    </div>
</section>`;