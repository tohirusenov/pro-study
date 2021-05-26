<template>
  <header class="header">
    <div class="container">
      <div class="header__wrapper">
        <div class="header__logo">
          <nuxt-link to="/">
            <img src="~/assets/images/logo.svg" alt="not found" />
          </nuxt-link>
        </div>
        <div class="header__navbar">
          <i class="own-navbar">
            <span></span>
            <span></span>
            <span></span>
          </i>
        </div>
        <div class="header__menu">
          <ul>
            <li v-for="(item, index) in menu" :key="index">
              <nuxt-link :to="item.href">
                {{ item.name }}
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div class="header__links">
          <a href="#!">
            <i class="icon-pin"></i>
           <span> ул. Узбекистон Овози, 21</span>
          </a>
          <a href="tel:+998787770008">
            <i class="icon-tel"></i>
            <span>+998 78 777 00 08</span>
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      // arrays
      // main menu
      menu: [
        {
          name: "О нас",
          href: "/about",
        },
        {
          name: "Все курсы",
          href: "/courses",
        },
        {
          name: "Блог",
          href: "/blog",
        },
        {
          name: "Проекты",
          href: "/projects",
        },
        {
          name: "Контакты",
          href: "/contacts",
        },
      ],
      //   =====
    };
  },
  methods: {},
};
</script>

<style>
</style>