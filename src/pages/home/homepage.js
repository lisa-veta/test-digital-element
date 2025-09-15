import "./homepage.scss";
import { Features } from "@pages/home/Features";
import { Hero } from "@pages/home/Hero";

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