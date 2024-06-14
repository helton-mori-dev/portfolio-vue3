<template>
  <PageHeader />
  <AboutMe />
  <MyProjects />
</template>

<script>
import PageHeader from "@/components/PageHeader.vue";
import AboutMe from "@/components/AboutMe.vue";
import MyProjects from "@/components/MyProjects.vue";

export default {
  name: "App",
  components: { PageHeader, AboutMe, MyProjects },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap");

body #app {
  font-family: "Montserrat", sans-serif;
}
:root {
  --verde: #3bff42;
  --azul: #0069e2;
}

#app a {
  text-decoration: none;
}

.main {
  display: flex;
  align-items: center;
  height: calc(100vh - 100px);
  width: 100%;
  flex-direction: column;
  justify-content: center;
  position: relative;
  margin-bottom: 150px;
}

.container-branco,
.container-preto {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-left: 0;
  margin-right: 0;
}

.container-branco {
  background: #fff;
}

.container-preto {
  background: #000;
  flex-direction: column;
}

.container-preto h2,
.container-preto h3 {
  color: #fff;
}

.container-preto h2 {
  margin-bottom: 40px;
}

.container-preto > .row {
  margin-left: auto;
  margin-right: auto;
}

.container-preto h3 {
  margin-bottom: 30px;
}

@media screen and (min-width: 768px) {
  .main {
    width: 700px;
  }

  .main h1 {
    font-size: 50px;
  }

  .foto {
    top: -192px;
  }

  h2.titulo {
    text-align: center;
  }
}

@media screen and (max-width: 767px) {
  header {
    width: 100%;
    margin: 0 !important;
  }

  h2 {
    font-size: 2rem;
  }

  .container-preto h3 {
    font-size: 1.5rem;
    margin-bottom: 15px;
  }

  .container-preto h2 {
    margin-top: 25px;
  }

  .saiba-mais {
    margin-left: 0;
  }

  .titulo-apresentacao {
    padding: 48px 0 48px;
    text-align: center;
  }

  .paragrafo-direita-mobile {
    padding: 40px 0 15px;
  }

  .trabalho {
    margin-bottom: 70px;
  }

  .link-trabalho {
    margin-bottom: 30px;
    display: block;
  }

  .no-padding-x {
    padding-left: 0;
    padding-right: 0;
  }

  .contato ul {
    padding-left: 0;
  }

  #form-contato {
    background: #fff;
  }

  .meme {
    margin-top: 15%;
    background: #000;
    padding: 15% 0;
  }

  .apresentacao {
    margin: 0 0 50px 0;
  }

  .foto-sobre {
    display: flex;
    justify-content: center;
  }

  .sobre .foto-sobre img {
    margin-bottom: 40px;
  }
}
</style>
