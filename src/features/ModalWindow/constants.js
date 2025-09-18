export const MODAL_CONFIG = {
  selectors: {
    overlay: "modal-overlay",
    form: "contact-form",
    openBtn: ".btn--open-modal",
    closeBtn: ".modal-window__close",
    nameInput: "#modal-window__name",
    emailInput: "#modal-window__email",
    messageInput: "#modal-window__message",
    nameError: "name-error",
    emailError: "email-error",
    messageError: "message-error",
  },
  classes: {
    hidden: "modal-overlay--hidden",
  },
  messages: {
    requiredField: "This field is required",
    invalidEmail: "Incorrect email address",
  },
  api: {
    url: "https://httpbin.org/post",
    headers: {
      Accept: "application/json",
    },
  },
};