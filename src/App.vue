<template>
  <PageHeader />
  <AboutMe />
  <MyProjects />
  <PageFooter />
</template>

<script>
import PageHeader from "@/components/PageHeader.vue";
import AboutMe from "@/components/AboutMe.vue";
import MyProjects from "@/components/MyProjects.vue";
import PageFooter from "@/components/PageFooter.vue";

export default {
  name: "App",
  components: { PageHeader, AboutMe, MyProjects, PageFooter },
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

  h2,
  h3 {
    color: #fff;
  }

  h2 {
    margin-bottom: 40px;
  }

  > .row {
    margin-left: auto;
    margin-right: auto;
  }

  h3 {
    margin-bottom: 30px;
  }

  @media screen and (max-width: 767px) {
    h3 {
      font-size: 1.5rem;
      margin-bottom: 15px;
    }

    h2 {
      margin-top: 25px;
    }
  }
}

.botao-azul {
  color: #fff;
  background: var(--azul);
  font-weight: 300;
  border-radius: 40px;
  margin: 30px auto 2rem;
  text-align: center;
  padding: 8px 22px;
  font-size: 14px;
  border: 2px solid var(--azul);
  transition: 0.3s all ease;
  display: table;

  &.botao-input {
    padding: 8px 22px;
    margin-top: -10px;
  }

  &:hover {
    color: var(--azul);
    text-decoration: none;
    background: #fff;
  }
}

@media screen and (max-width: 767px) {
  .contato.contato-footer {
    display: flex;
    ul {
      display: flex;
      flex-direction: row;
      justify-content: center;
      width: 100%;
      // margin-top: 2rem;
      li {
        font-size: 0;

        margin-bottom: 12px;

        a {
          font-size: 24px;
          transition: 0.3s all ease;
        }

        &.linkedin:hover a {
          color: #0e76a8;
        }

        &.email:hover a {
          color: #f00;
        }

        &.github:hover a {
          color: #333;
        }
      }
    }
  }

  header {
    width: 100%;
    margin: 0 !important;
  }

  h2 {
    font-size: 2rem;
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

    img {
      margin-bottom: 40px;
    }
  }
}
</style>
