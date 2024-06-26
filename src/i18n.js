import { createI18n } from "vue-i18n";

const messages = {
  en: {
    welcome: "Welcome",
  },
  pt: {
    welcome: "Bem vindo",
  },
};

const i18n = new createI18n({
  locale: "en",
  messages,
});

export default i18n;
