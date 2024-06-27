<template>
  <section id="trabalhos">
    <div class="container-preto">
      <div class="container row trabalho">
        <h2 class="col-12 titulo">{{ $t("recentWorksTitle") }}</h2>
        <div class="col-12 col-md-6">
          <h3>ONG Amaar</h3>
          <p class="texto-fundo-preto">
            {{ $t("workOng") }}
          </p>
          <a
            href="https://helton-mori-dev.github.io/ong-amaar-vue/"
            class="link-trabalho"
            target="blank"
            >{{ $t("goTo") }} ONG Amaar</a
          >
        </div>
        <div class="col-12 col-md-6">
          <img src="../assets/img/foto-amaar.png" alt="ONG amaar" />
        </div>
      </div>

      <div class="container row trabalho">
        <div class="col-12 col-md-6">
          <h3>Viso Store</h3>
          <p class="texto-fundo-preto">
            {{ $t("workViso") }}
          </p>
          <a
            href="https://www.visostore.com.br/"
            class="link-trabalho"
            target="blank"
            >{{ $t("goTo") }} Viso Store</a
          >
        </div>
        <div class="col-12 col-md-6">
          <img src="../assets/img/foto-aquario.png" alt="" />
        </div>
      </div>

      <div class="container row trabalho">
        <div class="col-12 col-md-6">
          <h3>Front end Mentor E-commerce page</h3>
          <p class="texto-fundo-preto">
            {{ $t("workMentor") }}
          </p>
          <a
            href="https://helton-mori-dev.github.io/front-end-mentor-e-commerce/"
            class="link-trabalho"
            >{{ $t("goTo") }} Front end Mentor</a
          >
        </div>
        <div class="col-12 col-md-6">
          <img src="../assets/img/foto-aquario.png" alt="" />
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
