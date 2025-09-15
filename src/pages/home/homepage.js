import "./homepage.scss";
import { Hero } from "@pages/home/Hero";
import {Features} from "@pages/home/Features";

/**
 * Инициализирует главную страницу
 */
export function initHomepage() {
  const app = document.querySelector("#app");
  app.innerHTML = `
   <main>
    ${Hero({})}
    ${Features()}
  </main>
  <footer>
  </footer>
  `;
}