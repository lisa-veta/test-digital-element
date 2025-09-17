import "../style.scss";
import "../media.scss";
import { LogoIcon } from "@shared/ui/Icons";
import { Typography } from "@shared/ui/Typography";
import { LETTER_SPACING, TYPOGRAPHY_TYPES } from "@shared/ui/Typography/constants";

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
          ${Typography({
            type: TYPOGRAPHY_TYPES.SUBTITLE,
            spacing: LETTER_SPACING.SMALL,
            text: "Afrianska",
            extraClasses: [ "footer__title" ],
          })}
        </div>

        ${contactInfo
          .map(
            (item) => `
          <div class="footer__commun">
            ${Typography({
              type: TYPOGRAPHY_TYPES.BODY,
              text: item.type,
              extraClasses: [ "footer__type" ],
            })}
            ${Typography({
              type: TYPOGRAPHY_TYPES.BODY,
              text: item.text,
              extraClasses: [ "footer__text" ],
            })}
          </div>
        `
          )
          .join("")}
      </div>

      <div class="footer__info-wrapper">
        <div class="footer__links-wrapper">
           ${Typography({
              type: TYPOGRAPHY_TYPES.SUBTITLE2,
              text: "About us",
              extraClasses: [ "footer__links-title" ],
            })}
          <div class="footer__links">
           ${aboutLinks
              .map(
                (link) => `
                          <a class="footer__link" href="${link.href}">
                            ${Typography({
                              type: TYPOGRAPHY_TYPES.BODY,
                              text: link.label,
                              extraClasses: [ "footer__link" ],
                            })}
                          </a>
                        `
              )
              .join("")}
          </div>
        </div>

        <div class="footer__links-wrapper">
          ${Typography({
            type: TYPOGRAPHY_TYPES.SUBTITLE2,
            text: "Follow us",
            extraClasses: [ "footer__links-title" ],
          })}
          <div class="footer__links">
           ${followLinks
              .map(
                (link) => `
                          <a class="footer__link" href="${link.href}">
                            ${Typography({
                              type: TYPOGRAPHY_TYPES.BODY,
                              text: link.label,
                              extraClasses: [ "footer__link" ],
                            })}
                          </a>
                        `
              )
              .join("")}
          </div>
        </div>
      </div>
    </div>
    ${Typography({
      type: TYPOGRAPHY_TYPES.BODY,
      spacing: LETTER_SPACING.TIGHT,
      text: "2019 © Afrianska. All rights reserved.",
      extraClasses: [ "footer__rights" ],
    })}
  </div>
</div>
`;