import "../style.scss";
import { CLIENTS } from "@pages/home/Clients/constants";
import { Table } from "@shared/ui/Table";

/**
 * Компонент Clients для главной страницы
 * @returns {string} HTML-разметка секции Clients
 */
export const Clients = () => `
<section class="clients">
    <div class="clients__text">
        <h2 class="clients__title">Our Beloved Client</h2>
        <p class="clients__description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        </p>
    </div>
    ${Table({ items: CLIENTS, buttonText: "More Client" })}
</section>`;