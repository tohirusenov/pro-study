<template>
  <main class="inner-wrapper">
    <section class="banner">
      <div class="container">
        <div class="banner__wrapper">
          <h1>Графический дизайн</h1>
          <p>Ты будешь учиться по этим программам</p>
          <ul>
            <li v-for="course in arrays.courses" :key="course.id">
              <nuxt-link :to="course.link">
                <img :src="course.image" alt="not found" />
                <span v-html="course.name"></span>
              </nuxt-link>
            </li>
          </ul>
          <nuxt-link to="/"> Бесплатный открытый урок </nuxt-link>
        </div>
      </div>
    </section>
    <section class="future">
      <div class="container">
        <div class="future__wrapper">
          <div class="future__left">
            <div
              class="future__left__item"
              v-for="future in arrays.futures"
              :key="future.index"
            >
              <img :src="future.image" alt="" />
              <div class="future__left__item__info">
                <h3>{{ future.title }}</h3>
                <p>{{ future.text }}</p>
              </div>
            </div>
          </div>
          <div class="future__right">
            <h3>
              Современный дизайнер может заработать от <span>500$</span> в месяц
            </h3>
            <p>
              Оплата дизайнера по версии ведущего кадрового агентства hh.ru.
            </p>
            <p>
              Может зарабатывать как на фрилансе, так и работая в студии. Многие
              дизайнеры создают в дальнейшем свои start-up проекты.
            </p>
            <p>
              Работая на фрилансе, дизайнеры не привязываются географически
              только к Узбекистану. Вы вполне сможете брать заказы и в России,
              где заработок минимум в 2 раза выше.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="programma">
      <div class="container">
        <div class="programma__wrapper">
          <div class="programma__header title">
            <h2>Программа обучения</h2>
          </div>
          <div class="programma__main">
            <client-only>
              <div class="accordion" role="tablist">
                <b-card
                  no-body
                  v-for="(programma, index) in arrays.programms"
                  :key="programma.id"
                >
                  <b-card-header header-tag="header" role="tab">
                    <b-button
                      block
                      v-b-toggle="'accordion-productdetails' + index"
                      variant="info"
                    >
                      <div class="programma__main__header">
                        <div class="programma__main__header__course">
                          <span>{{ programma.month }}</span>
                        </div>
                        <div class="programma__main__header__text">
                          <p>{{ programma.course }}</p>
                        </div>
                      </div>
                    </b-button>
                  </b-card-header>
                  <b-collapse
                    :id="'accordion-productdetails' + index"
                    accordion="my-accordion"
                    role="tabpanel"
                  >
                    <b-card-body> </b-card-body>
                  </b-collapse>
                </b-card>
              </div>
            </client-only>
          </div>
        </div>
      </div>
    </section>

    <section class="results">
      <div class="container">
        <div class="results__wrapper">
          <div class="results__header title">
            <h2>100% результат</h2>
          </div>
          <div class="results__main">
            <div
              class="results__main__item"
              v-for="result in arrays.results"
              :key="result.id"
            >
              <h3>{{ result.title }}</h3>
              <p>{{ result.text }}</p>
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
      arrays: {
        courses: [
          {
            id: 1,
            link: "/",
            image: require("~/assets/images/courses1.png"),
            name: "Adobe <br> Photoshop",
          },
          {
            id: 2,
            link: "/",
            image: require("~/assets/images/courses2.png"),
            name: "Adobe <br> XD",
          },
          {
            id: 3,
            link: "/",
            image: require("~/assets/images/courses3.png"),
            name: "Adobe <br> Illustrator",
          },
          {
            id: 4,
            link: "/",
            image: require("~/assets/images/courses4.png"),
            name: "CorelDRAW <br> Graphics Suite",
          },
        ],
        futures: [
          {
            id: 1,
            image: require("~/assets/images/future1.svg"),
            title: "Создатель",
            text:
              "Проектирует и создает графику, используя лучшие инструменты.",
          },
          {
            id: 2,
            image: require("~/assets/images/future2.svg"),
            title: "Визуализатор",
            text: "Создает визуальный концепт, который привлекает внимание.",
          },
          {
            id: 3,
            image: require("~/assets/images/future3.svg"),
            title: "Аналитик",
            text: "Анализирует целевую аудиторию, учитывая цели заказчика.",
          },
        ],
        programms: [
          {
            id: 1,
            month: "1 месяц",
            course: "Изучение программы Figma",
          },
          {
            id: 2,
            month: "2 месяц",
            course: "Изучение основ веб-дизайна",
          },
          {
            id: 3,
            month: "3 месяц",
            course: "Изучение UI/UX",
          },
          {
            id: 4,
            month: "4 месяц",
            course: "Изучение Photoshop и полиграфии",
          },
          {
            id: 5,
            month: "5 месяц",
            course: "Изучение Adobe Illustrator и векторной графики",
          },
          {
            id: 6,
            month: "6 месяц",
            course: "Дипломные проекты. Soft Skills. Презентация работы",
          },
        ],
        results: [
          {
            id: 1,
            title: "72 часа",
            text:
              "Совместной работы с практикующим преподавателем. Вы перенимаете опыт практика.",
          },
          {
            id: 2,
            title: "32 задания",
            text:
              "Именно домашние задания дают практические навыки. Вы практикуетесь во время курса.",
          },
          {
            id: 3,
            title: "12 проверок",
            text:
              "Промежуточные проверки знаний учащихся, чтобы понимать, все ли усваивают материал.",
          },
          {
            id: 4,
            title: "6 часов советов",
            text:
              "Вы получите рекомендации по заработку на фрилансе или по прохождению собеседований в веб-студиях.",
          },
          {
            id: 5,
            title: "4 крутых проекта",
            text:
              "Во время обучения выполните 4 крутых проекта, которые дополнят ваше портфолио.",
          },
          {
            id: 6,
            title: "6 месяцев",
            text:
              "6 месяцев профессионального обучения современному дизайну в дружественной атмосфере таких же студентов.",
          },
        ],
      },
    };
  },
};
</script>

<style>
</style>