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
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap");

body {
  font-family: "Montserrat", sans-serif;
}
:root {
  --verde: #3bff42;
  --azul: #0069e2;
}
</style>
