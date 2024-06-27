import { createI18n } from "vue-i18n";

const messages = {
  en: {
    aboutMe: "Hello, my name is Helton, I'm a software developer :)",
    myWork: "My work",
    myFunction: "I'm a software developer",
    aboutMeExt:
      "My name is Helton, I have experience in software development, mainly front-end. I also have knowledge in back-end and embedded systems. I am passionate about technology and computers. I'm always looking for personal and technical improvement, taking courses and trying to contribute to open-source projects.",
  },
  pt: {
    aboutMe: "Olá, meu nome é Helton, sou desenvolvedor de sistemas :)",
    myWork: "Conheça meu trabalho",
    myFunction: "Sou desenvolvedor de sistemas",
    aboutMeExt:
      "Meu nome é Helton, tenho experiencia em desenvolvimento de software, principalmente front-end. Também tenho conhecimento em back-end e sistemas embarcados. Sou apaixonado por tecnologia e informáticaEstou sempre buscando meu aperfeiçoamento pessoal e técnico, fazendocursos e tentando contribuir com projetos open-source.",
  },
};

const i18n = new createI18n({
  locale: "en",
  messages,
});

export default i18n;
