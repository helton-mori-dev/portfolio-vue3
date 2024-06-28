<template>
  <div class="col-6 col-md-4 text-right">
    <div
      class="botao"
      :class="{ active: menuActive }"
      @click="toggleMenu"
      title="Menu"
    >
      Menu
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
  <div class="nav-left" :class="{ active: menuActive }">
    <a class="inicio" href="/" title="Início" @click="closeMenuAndScroll">{{
      $t("linkHome")
    }}</a>
    <a
      class="sobre-menu"
      href="https://helton-mori-dev.github.io/portfolio-vue3/"
      title="Sobre"
      @click="closeMenuAndScroll"
      >{{ $t("linkAbout") }}</a
    >
    <a
      class="trabalhos scroll"
      href="#trabalhos"
      title="Trabalhos"
      @click="closeMenuAndScroll"
      >{{ $t("linkWork") }}</a
    >
    <a
      class="contato-menu scroll"
      href="#footer"
      title="Contato"
      @click="closeMenuAndScroll"
      >{{ $t("contact") }}</a
    >
  </div>
</template>

<script>
export default {
  name: "MenuHeader",
  data() {
    return {
      menuActive: false,
    };
  },
  methods: {
    toggleMenu(event) {
      event.preventDefault();
      this.menuActive = !this.menuActive;
    },
    closeMenuAndScroll(event) {
      this.menuActive = false;
      const targetId = event.target.getAttribute("href");
      if (targetId.startsWith("#")) {
        event.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    },
  },
};
</script>

<style scoped>
.botao {
  z-index: 4;
  display: block;
  margin-left: 14px;
  margin-top: 16px;
  height: 40px;
  width: 55px;
  position: absolute;
  top: 0%;
  right: 0;
  cursor: pointer;
  font-size: 0;
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;

  span {
    width: 40px;
    height: 4px;
    position: absolute;
    left: 0;
    display: block;
    background: #333;
    border-radius: 0;
    opacity: 1;
    transform: rotate(0deg);
    transition: all 0.25s ease-in-out;

    &:nth-child(1) {
      top: 3px;
    }

    &:nth-child(2) {
      top: 14px;
    }

    &:nth-child(3) {
      top: 25px;
    }
  }

  &:hover {
    span:nth-child(1) {
      top: 1px;
    }

    span:nth-child(3) {
      top: 27px;
    }
  }

  &.active {
    span:nth-child(1) {
      top: 11px;
      background: #fff;
      transform: rotate(45deg);
    }

    span:nth-child(2) {
      top: 11px;
      background: #fff;
      transform: rotate(-45deg);
    }

    span:nth-child(3),
    .open-nav.active span:nth-child(4) {
      top: 8px;
      width: 0%;
      left: 50%;
    }
  }
}

.nav-left {
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  background: #000;
  z-index: 3;
  transition: 0.3s all ease;
  left: -100%;
  transform: scaleX(0);
  transform-origin: left;
  width: 100%;
  height: 100vh;

  &.active {
    transform: scaleX(1);
    width: 100%;
    left: 0%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  a {
    display: table;
    margin: 2.5rem auto;
    width: 100%;
    text-align: center;
    padding: 18px 0;
    font-weight: 700;
    font-size: 50px;
    max-height: 46px;
    color: #fff;
    text-decoration: none;
    transition: 0.3s all ease;

    &:hover {
      color: var(--azul);
    }
  }
}

@media screen and (max-width: 767px) {
  .nav-left {
    a {
      margin: 0.5rem auto;
      font-size: 2rem;
    }
  }
}
</style>
