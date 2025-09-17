/**
 * Модальное окно
 *
 */
export class Modal {
  static instance;

  constructor({ overlayId = "modal-overlay", formId = "contact-form", openBtnSelector = ".btn--open-modal" }) {
    if (Modal.instance) {
      return Modal.instance;
    }

    this.overlay = document.getElementById(overlayId);
    this.form = document.getElementById(formId);
    this.openBtn = document.querySelector(openBtnSelector);
    this.closeBtn = this.overlay.querySelector(".modal-window__close");

    this.bindEvents();

    Modal.instance = this;
  }

  open() {
    this.overlay.classList.remove("modal-overlay--hidden");
  }

  close() {
    this.overlay.classList.add("modal-overlay--hidden");
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

    const name = this.form.querySelector("#modal-window__name").value.trim();
    const email = this.form.querySelector("#modal-window__email").value.trim();
    const message = this.form.querySelector("#modal-window__message").value.trim();

    if (name === "") {
      document.getElementById("name-error").textContent = "This field is required";
      hasError = true;
    } else {
      document.getElementById("name-error").textContent = "";
    }

    const regexp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email === "") {
      document.getElementById("email-error").textContent = "This field is required";
      hasError = true;
    } else if (!regexp.test(email)) {
      document.getElementById("email-error").textContent = "Incorrect email address";
      hasError = true;
    } else {
      document.getElementById("email-error").textContent = "";
    }

    if (message === "") {
      document.getElementById("message-error").textContent = "This field is required";
      hasError = true;
    } else {
      document.getElementById("message-error").textContent = "";
    }

    return hasError;
  }

  async handleSubmit(e) {
    e.preventDefault();

    if (this.validate()) {
      return; 
    }

    try {
      const response = await fetch("https://httpbin.org/post", {
        method: "POST",
        headers: {
          "Accept": "application/json",
        },
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