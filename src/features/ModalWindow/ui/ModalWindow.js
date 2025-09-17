import "../style.scss";
import "../media.scss";
import { Button } from "@shared/ui/Button";
import { Typography } from "@shared/ui/Typography";
import { LETTER_SPACING, TYPOGRAPHY_TYPES } from "@shared/ui/Typography/constants";
/**
 * Модальное окно
 *
 *  @returns {string} HTML-разметка кнопки
 */
export const ModalWindow = () =>
  `
 <div class="modal-overlay modal-overlay--hidden" id="modal-overlay">
 <div class="modal-window">
        <button class="modal-window__close">×</button>
        <div class="modal-window__header">
        ${Typography({
          type: TYPOGRAPHY_TYPES.SUBTITLE2,
          text: "send message",
          spacing: LETTER_SPACING.TIGHT,
          extraClasses: [ "modal-window__header" ],
        })}
        </div>
        <form class="modal-window__form" id="contact-form" >
          <label class="modal-window__label">
            ${Typography({
              type: TYPOGRAPHY_TYPES.BODY,
              text: "Full Name",
              spacing: LETTER_SPACING.TIGHT,
              extraClasses: [ "modal-window__header" ],
            })}
            <input class="modal-window__input" name="modal-window__name" id="modal-window__name" placeholder="Your Name">
            <span class="modal-window__error-message" id="name-error"></span>
          </label>
          <label class="modal-window__label">
            ${Typography({
              type: TYPOGRAPHY_TYPES.BODY,
              text: "Email",
              spacing: LETTER_SPACING.TIGHT,
              extraClasses: [ "modal-window__header" ],
            })}
            <input class="modal-window__input" name="modal-window__email" id="modal-window__email" placeholder="Your Email">
            <span class="modal-window__error-message" id="email-error"></span>
          </label>
          <label class="modal-window__label">
             ${Typography({
                type: TYPOGRAPHY_TYPES.BODY,
                text: "Message",
                spacing: LETTER_SPACING.TIGHT,
                extraClasses: [ "modal-window__header" ],
              })}
            <textarea class="modal-window__message" name="Your Message" id="modal-window__message" placeholder="Your Message"></textarea>
            <span class="modal-window__error-message" id="message-error"></span>
          </label>
              <div class="modal-window__submit" >
              ${Button({
                text: "submit",
                extraClassesText: [ "modal-window__text" ],
                extraClassesButton: [ "modal-window__btn" ],
              })}
           
                </div>
           </form>
    </div>
</div>`;
