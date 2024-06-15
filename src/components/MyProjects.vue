<template>
  <section id="trabalhos">
    <div class="container-preto">
      <div class="container row trabalho">
        <h2 class="col-12 titulo">Trabalhos recentes</h2>
        <div class="col-12 col-md-6">
          <h3>ONG Amaar</h3>
          <p class="texto-fundo-preto">
            Trabalho voluntário realizado para a ONG Amaar. Tecnologias
            utilizadas: Vue.js, Vuetify, Vue Router e CSS
          </p>
          <a
            href="http://ong-amaar-maringa.esy.es/"
            class="link-trabalho"
            target="blank"
            >Ir para ONG Amaar</a
          >
        </div>
        <div class="col-12 col-md-6">
          <img src="img/foto-amaar.png" alt="ONG amaar" />
        </div>
      </div>

      <div class="container row trabalho">
        <div class="col-12 col-md-6">
          <h3>Bianch</h3>
          <p class="texto-fundo-preto">
            Loja virtual desenvolvida na plataforma Magento, utilizando PHP,
            HTML, CSS, SAAS, Jquery e Javascript
          </p>
          <a
            href="https://www.bianch.com.br/"
            class="link-trabalho"
            target="blank"
            >Ir para Bianch Pilot Shop</a
          >
        </div>
        <div class="col-12 col-md-6">
          <img src="img/foto-bianch.png" alt="" />
        </div>
      </div>

      <div class="container row trabalho">
        <div class="col-12 col-md-6">
          <h3>Aquário</h3>
          <p class="texto-fundo-preto">
            Loja virtual desenvolvida na plataforma Magento, utilizando PHP,
            HTML, CSS, SAAS, Jquery e Javascript
          </p>
          <a href="https://loja.aquario.com.br/" class="link-trabalho"
            >Ir para Loja Aquário</a
          >
        </div>
        <div class="col-12 col-md-6">
          <img src="img/foto-aquario.png" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "MyProjects",
};
</script>

<style scoped>
#trabalhos {
  .container-preto {
    padding-bottom: 170px;
  }
}

.link-trabalho {
  color: #fff;
  transition: 0.3s all ease;

  &:hover {
    color: #fff;
    text-decoration: none;
  }

  &:after {
    content: url(../assets/img/arrow-right.svg);
    margin-left: 15px;
    position: relative;
    left: 0;
    transition: 0.3s all ease;
  }

  &:hover:after {
    left: 15px;
  }
}

.saiba-mais {
  margin-left: 40px;
}

.trabalho {
  margin-bottom: 30px;
  width: 100%;

  img {
    width: 100%;
  }
}

.container-contato {
  max-width: 1300px;
  margin: auto;
}

.sobre {
  &.container {
    margin-top: 100px;
  }

  .foto-sobre {
    img {
      float: left;
      width: 80%;
    }
  }
}

.texto-fundo-branco {
  font-weight: 300;
  display: block;
  margin: 0 0 30px;
}

.texto-fundo-preto {
  color: #ccc;
  font-weight: 300;
  margin-bottom: 15px;
}

.formacao,
.experiencia,
.conhecimentos,
.apresentacao {
  margin-bottom: 50px;
}

.experiencia,
.formacao,
.conhecimentos {
  h4 {
    color: var(--blue);
    font-size: 18px;
    font-weight: 700;
  }
}

.conhecimentos {
  .techs {
    display: flex;
    flex-wrap: wrap;

    p {
      width: 170px;
    }
  }
}
</style>
