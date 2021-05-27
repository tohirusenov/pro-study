<template>
  <div class="course__item">
    <div class="course__item__image">
      <slot name="gif"></slot>
      <slot name="image"></slot>
    </div>
    <div class="course__item__info">
      <h3>{{ title }}</h3>
      <span>Подробнее</span>
    </div>
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
  },
  data() {
    return {};
  },
};
</script>

<style>
</style>