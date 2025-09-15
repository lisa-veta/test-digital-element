import "../style.scss";
import { INFO_CARD_1, INFO_CARD_2, INFO_CARD_3 } from "@pages/home/Features/constants.js";
import { InfoCard } from "@shared/ui/InfoCard/index.js";

/**
 * Компонент Features для главной страницы
 * @returns {string} HTML-разметка секции Features
 */
export const Features = () => `
<section class="features">
    <div class="features__col1">
        <h1 class="features__label">
          What we do to help our client grow in digital era,
        </h1>
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