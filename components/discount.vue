<template>
  <div class="discount__item" :style="{ 'backgroundImage': 'url(' + image + ')'}">
    <h3>{{ title }}</h3>
    <p v-html="text"></p>
    <span>{{ more }}</span>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default() {
        return "Default";
      },
    },
    text: {
      type: String,
      default() {
        return "Default";
      },
    },
    more: {
      type: String,
      default() {
        return "Default";
      },
    },
    image: {
        type: String,
        default() {
            return "~/assets/images/logo.svg"
        }
    }
  },
};
</script>

<style>
</style>