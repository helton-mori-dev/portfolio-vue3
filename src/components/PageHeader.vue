<template>
  <header class="row">
    <div class="col-6 col-md-4 text-left">
      <a href="/">Helton Mori</a>
    </div>
    <div class="col-4 d-none d-sm-none d-md-block text-center">
      <span>Disponível para novos projetos</span>
    </div>
  </header>
  <MenuHeader />
  <LateralContato />
</template>

<script>
import MenuHeader from "@/components/MenuHeader.vue";
import LateralContato from "@/components/LateralContato.vue";
export default {
  name: "PageHeader",
  components: {
    MenuHeader,
    LateralContato,
  },
};
</script>

<style scoped>
header {
  padding: 25px 35px 10px;
  max-width: 100%;
}

header .text-left {
  font-size: 30px;
  font-weight: 700;
  white-space: nowrap;
}

header .text-left a {
  color: #000;
  text-decoration: none;
}

header .text-center {
  font-size: 15px;
  color: #999;
}

header .text-center span {
  position: relative;
}

header .text-center span:before {
  content: "";
  background-color: var(--verde);
  position: absolute;
  left: -30px;
  top: 2px;
  height: 16px;
  width: 16px;
  border-radius: 100%;
}
</style>
