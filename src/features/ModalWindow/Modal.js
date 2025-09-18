import { MODAL_CONFIG } from "@features/ModalWindow/constants";

/**
 * Класс для управления модальным окном
 * @class Modal
 * @property {HTMLElement} overlay - Элемент оверлея модального окна
 * @property {HTMLFormElement} form - Форма модального окна
 * @property {HTMLElement} openBtn - Кнопка открытия модального окна
 * @property {HTMLElement} closeBtn - Кнопка закрытия модального окна
 */
export class Modal {

  static instance;

  /**
   * Создает экземпляр Modal
   * @param {Object} config - Конфигурация модального окна
   * @param {string} config.overlayId - ID элемента оверлея
   * @param {string} config.formId - ID формы
   * @param {string} config.openBtnSelector - Селектор кнопки открытия
   */
  constructor({
    overlayId = MODAL_CONFIG.selectors.overlay,
    formId = MODAL_CONFIG.selectors.form,
    openBtnSelector = MODAL_CONFIG.selectors.openBtn, 
  }) {
    if (Modal.instance) {
      return Modal.instance;
    }

    this.overlay = document.getElementById(overlayId);
    this.form = document.getElementById(formId);
    this.openBtn = document.querySelector(openBtnSelector);
    this.closeBtn = this.overlay.querySelector(MODAL_CONFIG.selectors.closeBtn);

    this.bindEvents();

    Modal.instance = this;
  }

  open() {
    this.overlay.classList.remove(MODAL_CONFIG.classes.hidden);
    document.body.style.overflow = "hidden";
  }

  close() {
    this.overlay.classList.add(MODAL_CONFIG.classes.hidden);
    document.body.style.overflow = "";
  }

  bindEvents() {
    this.openBtn?.addEventListener("click", () => this.open());
    this.closeBtn?.addEventListener("click", () => this.close());
    this.overlay?.addEventListener("click", (e) => {
      if (e.target === this.overlay) {
        this.close(); 
      }
    });
    this.form?.addEventListener("submit", async (e) => this.handleSubmit(e));
  }

  validate() {
    let hasError = false;

    const name = this.form.querySelector(MODAL_CONFIG.selectors.nameInput).value.trim();
    const email = this.form.querySelector(MODAL_CONFIG.selectors.emailInput).value.trim();
    const message = this.form.querySelector(MODAL_CONFIG.selectors.messageInput).value.trim();

    if (name === "") {
      document.getElementById(MODAL_CONFIG.selectors.nameError).textContent = MODAL_CONFIG.messages.requiredField;
      hasError = true;
    } else {
      document.getElementById(MODAL_CONFIG.selectors.nameError).textContent = "";
    }

    const regexp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email === "") {
      document.getElementById(MODAL_CONFIG.selectors.emailError).textContent = MODAL_CONFIG.messages.requiredField;
      hasError = true;
    } else if (!regexp.test(email)) {
      document.getElementById(MODAL_CONFIG.selectors.emailError).textContent = MODAL_CONFIG.messages.invalidEmail;
      hasError = true;
    } else {
      document.getElementById(MODAL_CONFIG.selectors.emailError).textContent = "";
    }

    if (message === "") {
      document.getElementById(MODAL_CONFIG.selectors.messageError).textContent = MODAL_CONFIG.messages.requiredField;
      hasError = true;
    } else {
      document.getElementById(MODAL_CONFIG.selectors.messageError).textContent = "";
    }

    return hasError;
  }

  async handleSubmit(e) {
    e.preventDefault();

    if (this.validate()) {
      return; 
    }

    try {
      const response = await fetch(MODAL_CONFIG.api.url, {
        method: "POST",
        headers: MODAL_CONFIG.api.headers,
        body: new FormData(this.form),
      });

      if (response.ok) {
        this.form.reset();
        this.close();
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  }

}