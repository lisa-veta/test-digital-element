import "../style.scss";
import { CLIENTS } from "@pages/home/Clients/constants";
import { Table } from "@shared/ui/Table";
import { Typography } from "@shared/ui/Typography";
import { TYPOGRAPHY_TYPES } from "@shared/ui/Typography/constants";

/**
 * Компонент Clients для главной страницы
 * @returns {string} HTML-разметка секции Clients
 */
export const Clients = () => `
<section class="clients">
    <div class="clients__text">
         ${Typography({
            type: TYPOGRAPHY_TYPES.H2,
            text: "Our Beloved Client",
            extraClasses: [ "clients__title" ],
          })}
         ${Typography({
            type: TYPOGRAPHY_TYPES.BODY,
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
            extraClasses: [ "clients__description" ],
          })}
    </div>
    ${Table({ items: CLIENTS, buttonText: "More Client" })}
</section>`;