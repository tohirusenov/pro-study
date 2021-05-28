<template>
  <div
    v-swiper="swiperOptions"
    class="w-5/6 ml-auto relative"
    :loadtheme="false"
  >
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        :key="index"
        v-for="(teacher, index) in teachers"
      >
        <div class="teachers__item">
          <div class="teachers__item__image">
            <img :src="teacher.image" alt="not found" />
          </div>
          <h3>{{ teacher.name }}</h3>
          <h4>{{ teacher.jobName }}</h4>
        </div>
      </div>
    </div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
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
        slidesPerView: 4,
        loop: true,
        spaceBetween: 30,
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },

      teachers: [
        {
          image: require("~/assets/images/teacher1.jpg"),
          name: "Коул Александр",
          jobName: "Web design",
        },
        {
          image: require("~/assets/images/teacher2.jpg"),
          name: "Александр",
          jobName: "Back-End",
        },
        {
          image: require("~/assets/images/teacher3.jpg"),
          name: "Юрий Михайлов",
          jobName: "Front-End",
        },
        {
          image: require("~/assets/images/teacher4.jpg"),
          name: "Акмал",
          jobName: "Web design",
        },
        {
          image: require("~/assets/images/teacher3.jpg"),
          name: "Tohir Usenov",
          jobName: "Front-end",
        },
      ],
    };
  },
};
</script>

<style>
</style>