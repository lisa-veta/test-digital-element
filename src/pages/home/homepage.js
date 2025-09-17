import "./styles.scss";
import { Modal, ModalWindow } from "@features/ModalWindow";
import { Action } from "@pages/home/Action";
import { Clients } from "@pages/home/Clients";
import { FOOTER_DATA } from "@pages/home/constants";
import { Features } from "@pages/home/Features";
import { Hero } from "@pages/home/Hero";
import { Footer } from "@shared/ui/Footer";

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
    ${Footer({ 
      contactInfo: FOOTER_DATA.contactInfo, 
      aboutLinks: FOOTER_DATA.aboutLinks, 
      followLinks: FOOTER_DATA.followLinks, 
    })}
  </footer>
  `;
  app.innerHTML += ModalWindow();
  new Modal({});
}