<template>
  <main class="inner-wrapper toxa">
    <section class="discount">
      <div class="container">
        <div class="discount__wrapper">
          <div class="row">
            <client-only>
              <div
                class="col-lg-6"
                v-for="(discount, index) in discounts"
                :key="index"
              >
                <nuxt-link :to="discount.href">
                  <discount
                    :title="discount.title"
                    :text="discount.text"
                    :more="discount.more"
                    :image="discount.image"
                  ></discount>
                </nuxt-link>
              </div>
            </client-only>
          </div>
        </div>
      </div>
    </section>
    <section class="courses">
      <div class="container">
        <div class="courses__wrapper">
          <div class="courses__header title">
            <h2>Наши курсы</h2>
          </div>
          <div class="courses__main">
            <div class="row">
              <client-only>
                <div
                  class="col-lg-3"
                  v-for="(course, index) in courses"
                  :key="index"
                >
                  <nuxt-link :to="course.href">
                    <course :title="course.title">
                      <template #gif>
                        <video
                          :src="course.video"
                          ref="videoRef"
                          autoplay
                          loop
                        ></video>
                      </template>
                      <template #image>
                        <img :src="course.image" alt="not found" />
                      </template>
                    </course>
                  </nuxt-link>
                </div>
              </client-only>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="about">
      <div class="container">
        <div class="about__wrapper">
          <client-only>
            <div
              class="about__item"
              v-for="(item, index) in about"
              :key="index"
            >
              <img :src="item.image" alt="not found" />
              <p v-html="item.text"></p>
            </div>
          </client-only>
        </div>
      </div>
    </section>
    <section class="lifehack">
      <div class="container">
        <div class="lifehack__wrapper">
          <div class="lifehack__left">
            <h2>Изучай лайфхаки и пользуйся будущим</h2>
          </div>
          <div class="lifehack__carousel">
            <client-only>
              <div
                v-swiper="lifehackSlider"
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
                        <h3>{{ lifehack.name }}</h3>
                        <h4>{{ lifehack.jobName }}</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </client-only>
          </div>
        </div>
      </div>
    </section>
    <section class="teachers">
      <div class="container">
        <div class="teachers__wrapper">
          <div class="teachers__header title">
            <h2>Все начинается с лучших учителей</h2>
          </div>
          <div class="teachers__main">
            <client-only>
              <div
                v-swiper="teacherSlider"
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
            </client-only>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
  
<script>
import { directive } from "vue-awesome-swiper";
export default {
  directives: {
    swiper: directive,
  },
  data() {
    return {
      // carousel

      teacherSlider: {
        slidesPerView: 3,
        loop: true,
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
      lifehackSlider: {
        slidesPerView: 2,
      },

      // arrays
      // discount
      discounts: [
        {
          title: "Графический дизайн",
          text: "Создай свой трендовый дизайн, обучаясь в наших курсах!",
          more: "Подробнее",
          href: "/joxa",
          image: require("~/assets/images/discount1.png"),
        },
        {
          title: "Бизнес курсы",
          text: "Регистрируйся до 31 мая и <span>30%</span> получи скидку",
          more: "Получить сейчас",
          href: "/toxa",
          image: require("~/assets/images/discount2.png"),
        },
      ],
      // ==
      // courses
      courses: [
        {
          title: "Graphic design",
          href: "/",
          image: require("~/assets/images/course1.jpg"),
          video: require("~/assets/images/course-gif1.gif.mp4"),
        },
        {
          title: "Frond-End",
          href: "/",
          image: require("~/assets/images/course2.jpg"),
          video: require("~/assets/images/course-gif2.gif.mp4"),
        },
        {
          title: "Back-End",
          href: "/",
          image: require("~/assets/images/course3.jpg"),
          video: require("~/assets/images/course-gif3.gif.mp4"),
        },
        {
          title: "Business Courses",
          href: "/",
          image: require("~/assets/images/course4.jpg"),
          video: require("~/assets/images/course-gif4.gif.mp4"),
        },
      ],
      // ==
      // about
      about: [
        {
          text: "2 место ‘21<br> в рейтинге за лутшый учители",
          image: require("~/assets/images/about1.svg"),
        },
        {
          text: "3 место ‘21<br> в рейтинге за лутшый учители",
          image: require("~/assets/images/about2.svg"),
        },
        {
          text: "2 место ‘21<br> в рейтинге за лутшый учители",
          image: require("~/assets/images/about3.svg"),
        },
      ],
      // ==
      // teachers
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
      // ====
      // lifehack
      lifehacks: [
        {
          image: require("~/assets/images/lifehack1.png"),
          name: "Tohir",
          jobName: "Front-end Developer",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur rem ex cum adipisci excepturi quasi, sit rerum aperiam hic nobis corporis consequuntur beatae impedit repellendus vero eius quibusdam, laboriosam nihil.",
        },
        {
          image: require("~/assets/images/lifehack2.png"),
          name: "Akmal",
          jobName: "Web Design",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur rem ex cum adipisci excepturi quasi, sit rerum aperiam hic nobis corporis consequuntur beatae impedit repellendus vero eius quibusdam, laboriosam nihil.",
        },
      ],

      // education
    };
  },
  components: {
    course: () => import("~/components/course"),
    discount: () => import("~/components/discount"),
    // VueSlickCarousel,
  },
};
</script>

<style>
</style>
