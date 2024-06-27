<template>
  <section id="trabalhos">
    <div class="container-preto">
      <div class="container row trabalho">
        <h2 class="col-12 titulo">{{ $t("companiesWorked") }}</h2>
        <div>
          <ul class="companies">
            <li v-for="logo in logos" :key="logo.name" class="company">
              <img :src="getImagePath(logo.path)" :alt="logo.name" />
            </li>
          </ul>
        </div>
      </div>
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
          <img src="../assets/img/foto-viso.png" alt="" />
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
          <img src="../assets/img/foto-mentor.png" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "MyProjects",
  data() {
    return {
      logos: [
        {
          path: "americanas.png",
          name: "Americanas",
        },
        {
          path: "amil.png",
          name: "amil",
        },
        {
          path: "ifood.png",
          name: "ifood",
        },
        {
          path: "natura.png",
          name: "natura",
        },
        {
          path: "prudential.png",
          name: "prudential",
        },
      ],
    };
  },
  methods: {
    getImagePath(imageName) {
      return require(`@/assets/img/${imageName}`);
    },
  },
};
</script>

<style scoped>
#trabalhos {
  .container-preto {
    padding-bottom: 170px;
  }
}

h2.titulo {
  text-align: center;
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

.companies {
  display: flex;
  margin-bottom: 7rem;
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
.apresentacao {
  margin-bottom: 50px;
}

.experiencia,
.formacao {
  h4 {
    color: var(--blue);
    font-size: 18px;
    font-weight: 700;
  }
}

@media screen and (max-width: 767px) {
  .companies {
    margin-bottom: 2rem;
    flex-wrap: wrap;
    list-style: none;
    justify-content: center;
    img {
      width: auto;
      max-width: 200px;
    }
  }
}
</style>
