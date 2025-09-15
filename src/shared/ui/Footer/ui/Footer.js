import "../style.scss";
import { LogoIcon } from "@shared/ui/Icons/index.js";

/**
 * Footer страницы
 *
 * @param {Object} props - Пропсы для футера
 * @param {Array<{type: string, text: string}>} props.contactInfo - Контактные данные
 * @param {Array<{label: string, href: string}>} props.aboutLinks - Ссылки для блока "About us"
 *  @param {Array<{label: string, href: string}>} props.followLinks - Ссылки для блока "Follow us"
 *  @returns {string} HTML-разметка Footer
 */
export const Footer = ({ contactInfo, aboutLinks, followLinks }) => `
<div class="footer">
  <div class="footer__wrapper">
    <div class="footer__line"></div>
    <div class="footer__wrapper-info">
      <div class="footer__info">
        <div class="footer__logo">
          ${LogoIcon({ colorCircle: "#98C3E8" })}
          <div class="footer__title">Afrianska</div>
        </div>

        ${contactInfo
          .map(
            (item) => `
          <div class="footer__commun">
            <div class="footer__type">${item.type}</div>
            <div class="footer__text">${item.text}</div>
          </div>
        `
          )
          .join("")}
      </div>

      <div class="footer__info-wrapper">
        <div class="footer__links-wrapper">
          <div class="footer__links-title">About us</div>
          <div class="footer__links">
           ${aboutLinks
              .map(
                (link) => `
                          <a class="footer__link" href="${link.href}">
                            ${link.label}
                          </a>
                        `
              )
              .join("")}
          </div>
        </div>

        <div class="footer__links-wrapper">
          <div class="footer__links-title">Follow us</div>
          <div class="footer__links">
           ${followLinks
              .map(
                (link) => `
                          <a class="footer__link" href="${link.href}">
                            ${link.label}
                          </a>
                        `
              )
              .join("")}
          </div>
        </div>
      </div>
    </div>

    <div class="footer__rights">2019 © Afrianska. All rights reserved.</div>
  </div>
</div>
`;