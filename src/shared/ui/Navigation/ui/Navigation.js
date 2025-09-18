import { LogoIcon, MenuIcon } from "@shared/ui/Icons";
import "../style.scss";

/**
 * Рендерит компонент навигации с логотипом и иконкой меню
 *
 * @returns {string} HTML-разметка навигации
 */
export const Navigation = () => `
<div class="navigation">
    <div class="navigation__logo">
      ${LogoIcon({})}
    </div>
    <div class="navigation__menu">
        ${MenuIcon()}
    </div>
</div>`;