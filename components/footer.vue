<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__wrapper">
        <div class="footer__header">
          <ul>
            <li v-for="(item, index) in menu" :key="index">
              <nuxt-link :to="item.href">
                {{ item.name }}
              </nuxt-link>
            </li>
          </ul>
          <ul>
            <li><a href="#!" class="icon-instagram"></a></li>
            <li><a href="#!" class="icon-facebook"></a></li>
            <li><a href="#!" class="icon-telegram"></a></li>
          </ul>
        </div>
        <div class="footer__main">
          <div class="row justify-content-between">
            <div class="col-lg-auto">
              <div class="footer__main__left">
                <a href="tel:+998787770008"> +998 78 777 000 8 </a>
                <p>
                  © 2006–2021, учебный сентре ProStudy Положение о защите
                  персональных данных Политика в отношении обработки и защиты
                  персональных данных Оферта 1С-Битрикс лицензия Оферта оказание
                  услуг
                </p>
              </div>
            </div>
            <div class="col-lg-auto">
              <div class="footer__main__center">
                <a href="mailto:info@prostudy.uz">info@prostudy.uz</a>
                <form
                  @submit.prevent="checkSubscribe"
                  class="footer__main__center__input"
                >
                  <input
                    type="text"
                    name="subscribe"
                    v-model="subscribe"
                    placeholder="Подписка на блог"
                  />
                  <button>
                    <i class="icon-right"></i>
                  </button>
                </form>
              </div>
            </div>
            <div class="col-lg-auto">
              <div class="footer__main__right">
                <span class="place">Ташкент</span>
                <a href="#!" class="prezintation"
                  >Презентация <span>7 mb</span></a
                >
                <span class="copy"
                  >Разработка сайта: <a href="#!">Online Service Group</a></span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      menu: [
        {
          id: 1,
          name: "Все курсы",
          href: "/courses",
        },
        {
          id: 2,
          name: "Блог",
          href: "/blog",
        },
        {
          id: 3,
          name: "Проекты",
          href: "/projects",
        },
        {
          id: 4,
          name: "Контакты",
          href: "/contacts",
        },
      ],

      subscribe: null,
    };
  },
  methods: {
    checkSubscribe(e) {
      e.preventDefault;
    },
  },
};
</script>

<style>
</style>