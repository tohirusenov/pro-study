<template>
  <section class="signUp">
    <div class="container">
      <div class="signUp__wrapper">
        <div class="signUp__header title">
          <h2>Начни изучать современные профессии прямо сейчас</h2>
        </div>
        <client-only>
          <form @submit.prevent="checkSignUp" class="signUp__main">
            <div class="row">
              <div class="col-lg-4">
                <input
                  type="text"
                  name="name"
                  v-model="signUp.name"
                  placeholder="Ваше имя"
                />
              </div>
              <div class="col-lg-4">
                <input
                  type="email"
                  name="email"
                  v-model="signUp.email"
                  placeholder="E-mail"
                />
              </div>
              <div class="col-lg-4">
                <input
                  type="text"
                  name="tel"
                  v-model="signUp.tel"
                  placeholder="Телефон"
                />
              </div>
              <div class="col-lg-12">
                <input
                  type="text"
                  name="message"
                  v-model="signUp.message"
                  placeholder="Сообщение"
                />
              </div>
              <div class="col-lg-auto">
                <button>Отправить</button>
              </div>
            </div>
          </form>
        </client-only>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      signUp: {
        name: null,
        email: null,
        tel: null,
        message: null,
      },
    };
  },
  methods: {
    checkSignUp(e) {
      console.log("Sign In Button Pressed");

      this.signUp.name = "";
      this.signUp.email = "";
      this.signUp.tel = "";
      this.signUp.message = "";
      e.preventDefault;
    },
  },
};
</script>

<style>
</style>