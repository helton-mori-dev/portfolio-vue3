<template>
  <section id="footer">
    <div class="container rodape-contato">
      <div class="container-fluid">
        <h2>E aí, vamos trabalhar juntos?</h2>
        <a
          class="botao-azul botao-form"
          href="https://www.linkedin.com/in/engheltonmori/"
          title="Contato"
          target="_blank"
          >Entre em contato</a
        >
      </div>
      <div class="container row linha">
        <div class="col-12"></div>
      </div>
    </div>
    <div class="container creditos">
      <p>
        © <span class="year">{{ currentYear }}</span> - Desenvolvido por Helton
        Mori
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "PageFooter",
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped>
#footer {
  text-align: center;

  h2 {
    width: 100%;
    font-size: 50px;
  }

  .linha {
    > div {
      background: #ccc;
      display: block;
      height: 2px;
    }
  }
}

.rodape-contato {
  padding-top: 125px;
}

.linha {
  margin-top: 125px;
}

.creditos {
  padding-top: 15px;
  color: #999;
  font-weight: 300;
}
</style>
