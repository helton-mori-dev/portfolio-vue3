<template>
  <PageHeader />
</template>

<script>
import PageHeader from "@/components/PageHeader.vue";
export default {
  name: "App",
  components: { PageHeader },
};
</script>

<style lang="scss">
#app {
}

body {
  font-family: "Montserrat", sans-serif;
}
:root {
  --verde: #3bff42;
  --azul: #0069e2;
}
</style>
