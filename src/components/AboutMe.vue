<template>
  <section class="main container">
    <h1 class="title">
      {{ $t("aboutMe") }}
    </h1>

    <a class="botao-azul scroll" href="#sobre" title="Portfolio">{{
      $t("myWork")
    }}</a>
    <a href="#sobre" class="scroll arrow-down"> </a>
  </section>

  <section id="sobre" class="">
    <div class="container-branco">
      <div class="row container">
        <div class="col-12 col-md-5"></div>
        <div class="col-12 col-md-7">
          <h2 class="titulo-apresentacao titulo">
            {{ $t("myFunction") }}
          </h2>
        </div>
      </div>
    </div>
    <div class="container-preto">
      <div class="row container">
        <div class="col-md-5">
          <img src="../assets/img/foto.png" alt="Minha foto" class="foto" />
        </div>
        <div class="col-md-7">
          <p
            class="texto-fundo-preto paragrafo-direita mb-0 paragrafo-direita-mobile"
          >
            {{ $t("aboutMeExt") }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutMe",
};
</script>

<style scoped>
.arrow-down {
  position: absolute;
  bottom: 3%;
  left: 49%;

  &:before {
    content: url(../assets/img/seta.svg);
  }
}

.main {
  h1 {
    font-weight: bold;
    text-align: center;
    font-size: 2rem;
    max-width: 70%;

    span {
      color: var(--azul);
    }
  }
}

#sobre {
  h1 {
    font-weight: bold;
    text-align: center;
    font-size: 2rem;
    margin-bottom: 90px;
  }
  @media screen and (min-width: 768px) {
    .foto {
      top: -192px;
    }
  }
}

.foto {
  width: 100%;
  position: relative;
}

.titulo-apresentacao {
  padding: 48px 20px 48px 40px;
  margin-bottom: 0;
}

.texto-fundo-preto {
  color: #ccc;
  font-weight: 300;
  margin-bottom: 25px;
}

.paragrafo-direita {
  padding: 40px;
}

.container-preto {
  h3 {
    font-size: 30px;
    font-weight: 600;
  }

  &#trabalhos {
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
</style>
