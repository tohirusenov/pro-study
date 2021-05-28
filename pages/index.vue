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
    <section class="lifehacks">
      <div class="container">
        <div class="lifehacks__wrapper">
          <div class="lifehacks__left">
            <h2>Изучай лайфхаки и пользуйся будущим</h2>
            <div class="lifehacks__carousel">
              <client-only>
                <Lifehacks />
              </client-only>
            </div>
          </div>
          <div class="lifehacks__right"></div>
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
              <Teachers />
            </client-only>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
  
<script>
export default {
  data() {
    return {
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
    };
  },
  components: {
    course: () => import("~/components/course"),
    discount: () => import("~/components/discount"),
    // Carousels
    Lifehacks: () => import("~/components/carousels/lifehacks"),
    Teachers: () => import("~/components/carousels/teachers"),
  },
};
</script>

<style>
</style>
