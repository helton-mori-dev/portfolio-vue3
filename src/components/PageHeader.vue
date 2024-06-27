<template>
  <header class="row">
    <div class="col-6 col-md-4">
      <button
        class="i18nbutton btn"
        :class="{ selected: currentLanguage === 'en' }"
        @click="changeLanguage('en')"
      >
        En
      </button>
      <button
        class="i18nbutton btn"
        :class="{ selected: currentLanguage === 'pt' }"
        @click="changeLanguage('pt')"
      >
        Pt
      </button>
    </div>
    <div class="col-4 d-none d-sm-none d-md-block text-center">
      <a href="/" class="title">Helton Mori</a>
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
  data() {
    return {
      currentLanguage: this.$i18n.locale,
    };
  },
  watch: {
    "$i18n.locale"(newLocale) {
      this.currentLanguage = newLocale;
    },
  },
  methods: {
    changeLanguage(language) {
      this.$i18n.locale = language;
    },
  },
};
</script>

<style scoped>
header {
  padding: 25px 35px 10px;
  max-width: 100%;
  align-items: center;

  .text-center {
    font-size: 15px;
    color: #999;

    .title {
      font-size: 30px;
      font-weight: 700;
      white-space: nowrap;
      color: #000;
      text-decoration: none;
    }

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
  .i18nbutton {
    color: #999;
    font-weight: 700;
    border: none;
    &:hover {
      color: var(--azul);
    }
    &.selected {
      color: #000;
    }
  }
}
</style>
