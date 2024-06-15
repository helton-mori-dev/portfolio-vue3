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
  <LateralContact />
</template>

<script>
import MenuHeader from "@/components/MenuHeader.vue";
import LateralContact from "@/components/LateralContact.vue";
export default {
  name: "PageHeader",
  components: {
    MenuHeader,
    LateralContact,
  },
};
</script>

<style scoped>
header {
  padding: 25px 35px 10px;
  max-width: 100%;

  .text-left {
    font-size: 30px;
    font-weight: 700;
    white-space: nowrap;

    a {
      color: #000;
      text-decoration: none;
    }
  }

  .text-center {
    font-size: 15px;
    color: #999;

    span {
      position: relative;

      &:before {
        content: "";
        background-color: var(--verde);
        position: absolute;
        left: -30px;
        top: 2px;
        height: 16px;
        width: 16px;
        border-radius: 100%;
      }
    }
  }
}
</style>
