import "./styles.scss";
import { Action } from "@pages/home/Action";
import { Clients } from "@pages/home/Clients";
import { FOOTER_DATA } from "@pages/home/constants.js";
import { Features } from "@pages/home/Features";
import { Hero } from "@pages/home/Hero";
import { Footer } from "@shared/ui/Footer/index.js";

/**
 * Инициализирует главную страницу
 */
export function initHomepage() {
  const app = document.querySelector("#app");
  app.innerHTML = `
   <main>
    ${Hero({})}
    ${Features()}
    ${Clients()}
    ${Action()}
  </main>
  <footer>
    ${Footer({ contactInfo: FOOTER_DATA.contactInfo, aboutLinks: FOOTER_DATA.aboutLinks, followLinks: FOOTER_DATA.followLinks })}
  </footer>
  `;
}