<template>
  <div class="wrapper">
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
export default {
  components: {
    Footer: () => import("~/components/footer"),
    Header: () => import("~/components/header"),
  },
};
</script>

<style>
</style>
