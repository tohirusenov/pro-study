<template>
  <div
    v-swiper="swiperOptions"
    class="w-5/6 ml-auto relative"
    :loadtheme="false"
  >
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        v-for="(lifehack, index) in lifehacks"
        :key="index"
      >
        <div class="lifehack__carousel__item">
          <p>{{ lifehack.text }}</p>
          <div class="lifehack__carousel__item__bottom">
            <div class="lifehack__carousel__item__bottom__image">
              <img :src="lifehack.image" alt="not found" />
            </div>
            <div class="lifehack__carousel__item__bottom__info">
              <h3>{{ lifehack.name }}</h3>
              <h4>{{ lifehack.jobName }}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { directive } from "vue-awesome-swiper";
export default {
  directives: {
    swiper: directive,
  },
  data() {
    return {
      swiperOptions: {
        slidesPerView: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },

      lifehacks: [
        {
          image: require("~/assets/images/lifehack1.png"),
          name: "Tohir",
          jobName: "Front-end Developer",
          text:
            "Хороший курс, много интересных вещей, понятно. что без за 8 занятий многого не рассказать, стилей в css огромное множество. Но на то он и базовый курс. Теперь и курс по JS пересмотреть можно",
        },
        {
          image: require("~/assets/images/lifehack2.png"),
          name: "Akmal",
          jobName: "Web Design",
          text:
            "Хороший курс, много интересных вещей, понятно. что без за 8 занятий многого не рассказать, стилей в css огромное множество. Но на то он и базовый курс. Теперь и курс по JS пересмотреть можно.",
        },
      ],
    };
  },
};
</script>

<style>
</style>