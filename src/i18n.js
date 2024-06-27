import { createI18n } from "vue-i18n";

const messages = {
  en: {
    aboutMe: "Hello, my name is Helton, I'm a software developer :)",
    myWork: "My work",
    myFunction: "I'm a software developer",
    aboutMeExt:
      "My name is Helton, I have experience in software development, mainly front-end. I also have knowledge in back-end and embedded systems. I am passionate about technology and computers. I'm always looking for personal and technical improvement, taking courses and trying to contribute to open-source projects.",
    recentWorksTitle: "Recent works",
    workOng:
      "Volunteer work carried out for the NGO Amaar. Technologies used: Vue.js, Vuetify, Vue Router and CSS",
    goTo: "Go to",
    workViso:
      "E-commerce developed on the Magento platform, using PHP, HTML, CSS, SAAS, Jquery and Javascript",
    workMentor: "Test project carried out with Vue.js 3 and Vuex 4",
    letsWork: "Let's work together?",
    contact: "Contact",
    developedBy: "Developed by",
    linkHome: "Home",
    linkAbout: "About",
    linkWork: "Work",
  },
  pt: {
    aboutMe: "Olá, meu nome é Helton, sou desenvolvedor de sistemas :)",
    myWork: "Conheça meu trabalho",
    myFunction: "Sou desenvolvedor de sistemas",
    aboutMeExt:
      "Meu nome é Helton, tenho experiencia em desenvolvimento de software, principalmente front-end. Também tenho conhecimento em back-end e sistemas embarcados. Sou apaixonado por tecnologia e informáticaEstou sempre buscando meu aperfeiçoamento pessoal e técnico, fazendocursos e tentando contribuir com projetos open-source.",
    recentWorksTitle: "Trabalhos recentes",
    workOng:
      "Trabalho voluntário realizado para a ONG Amaar. Tecnologias utilizadas: Vue.js, Vuetify, Vue Router e CSS",
    goTo: "Ir para",
    workViso:
      "Loja virtual desenvolvida na plataforma Magento, utilizando PHP, HTML, CSS, SAAS, Jquery e Javascript",
    workMentor: "Projeto teste realizado com Vue.js 3 e Vuex 4",
    letsWork: "E aí, vamos trabalhar juntos?",
    contact: "Entre em contato",
    developedBy: "Desenvolvido por",
    linkHome: "Início",
    linkAbout: "Sobre",
    linkWork: "Trabalhos",
  },
};

const i18n = new createI18n({
  locale: "en",
  messages,
});

export default i18n;
