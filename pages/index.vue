<template>
  <main class="inner-wrapper">
    <section class="discount">
      <div class="container">
        <div class="discount__wrapper">
          <div class="row">
            <client-only>
              <div
                class="col-lg-6"
                v-for="discount in arrays.discounts"
                :key="discount.id"
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
                  v-for="course in arrays.courses"
                  :key="course.id"
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
              v-for="item in arrays.about"
              :key="item.id"
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
          <div class="lifehacks__right">
            <div class="lifehacks__right__logo">
              <img src="~/assets/images/logo.svg" alt="not found" />
            </div>
            <ul>
              <li v-for="lifehack in arrays.lifehacks" :key="lifehack.id">
                <div class="lifehacks__image">
                  <img :src="lifehack.image" alt="not found" />
                </div>
              </li>
            </ul>
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
              <Teachers />
            </client-only>
          </div>
        </div>
      </div>
    </section>
    <SignUp />
    <section class="works">
      <div class="container">
        <div class="works__wrapper">
          <div class="works__header title">
            <h2>Наши студенты работают в ведущих компаниях</h2>
          </div>
          <div class="works__main">
            <div
              class="works__main__image"
              v-for="(work, index) in arrays.works"
              :key="index"
            >
              <img :src="work.image" alt="not found" />
            </div>
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
      arrays: {
        // discount
        discounts: [
          {
            id: 1,
            title: "Графический дизайн",
            text: "Создай свой трендовый дизайн, обучаясь в наших курсах!",
            more: "Подробнее",
            href: "/joxa",
            image: require("~/assets/images/discount1.png"),
          },
          {
            id: 2,
            title: "Бизнес курсы",
            text: "Регистрируйся до 31 мая и <span>30%</span> получи скидку",
            more: "Получить сейчас",
            href: "/toxa",
            image: require("~/assets/images/discount2.png"),
          },
        ],
        // discount
        // courses
        courses: [
          {
            id: 1,
            title: "Graphic design",
            href: "/",
            image: require("~/assets/images/course1.jpg"),
            video: require("~/assets/images/course-gif1.gif.mp4"),
          },
          {
            id: 2,
            title: "Frond-End",
            href: "/",
            image: require("~/assets/images/course2.jpg"),
            video: require("~/assets/images/course-gif2.gif.mp4"),
          },
          {
            id: 3,
            title: "Back-End",
            href: "/",
            image: require("~/assets/images/course3.jpg"),
            video: require("~/assets/images/course-gif3.gif.mp4"),
          },
          {
            id: 4,
            title: "Business Courses",
            href: "/",
            image: require("~/assets/images/course4.jpg"),
            video: require("~/assets/images/course-gif4.gif.mp4"),
          },
        ],
        // courses
        // about
        about: [
          {
            id: 1,
            text: "2 место ‘21<br> в рейтинге за лутшый учители",
            image: require("~/assets/images/about1.svg"),
          },
          {
            id: 2,
            text: "3 место ‘21<br> в рейтинге за лутшый учители",
            image: require("~/assets/images/about2.svg"),
          },
          {
            id: 3,
            text: "2 место ‘21<br> в рейтинге за лутшый учители",
            image: require("~/assets/images/about3.svg"),
          },
        ],
        // about
        // lifehacks
        lifehacks: [
          {
            id: 1,
            image: require("~/assets/images/lifehacks1.png"),
          },
          {
            id: 2,
            image: require("~/assets/images/lifehacks2.png"),
          },
          {
            id: 3,
            image: require("~/assets/images/lifehacks3.png"),
          },
          {
            id: 4,
            image: require("~/assets/images/lifehacks4.png"),
          },
          {
            id: 5,
            image: require("~/assets/images/lifehacks5.png"),
          },
          {
            id: 6,
            image: require("~/assets/images/lifehacks6.png"),
          },
          {
            id: 7,
            image: require("~/assets/images/lifehacks7.png"),
          },
          {
            id: 8,
            image: require("~/assets/images/lifehacks8.png"),
          },
        ],
        // lifehacks
        // works
        works: [
          {
            id: 1,
            image: require("~/assets/images/works1.png"),
          },
          {
            id: 2,
            image: require("~/assets/images/works2.png"),
          },
          {
            id: 3,
            image: require("~/assets/images/works3.png"),
          },
          {
            id: 4,
            image: require("~/assets/images/works4.png"),
          },
          {
            id: 5,
            image: require("~/assets/images/works5.png"),
          },
          {
            id: 6,
            image: require("~/assets/images/works6.png"),
          },
          {
            id: 7,
            image: require("~/assets/images/works7.png"),
          },
          {
            id: 8,
            image: require("~/assets/images/works8.png"),
          },
          {
            id: 9,
            image: require("~/assets/images/works9.png"),
          },
          {
            id: 10,
            image: require("~/assets/images/works10.png"),
          },
        ],
        // works
      },
    };
  },
  components: {
    course: () => import("~/components/course"),
    discount: () => import("~/components/discount"),
    // Carousels
    Lifehacks: () => import("~/components/carousels/lifehacks"),
    Teachers: () => import("~/components/carousels/teachers"),
  },

  methods: {},
};
</script>

<style>
</style>
