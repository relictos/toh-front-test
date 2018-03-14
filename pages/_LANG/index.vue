<template>
  <section class="ui container">
    <div>
      <app-logo/>
      <h1 class="title">
        {{ $t('main.home.title') }}
        <br>
        {{ loc }}
      </h1>
      <h2 class="subtitle" v-for="i in 500" v-bind:key="i">
        123
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green">Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey">GitHub</a>
      </div>
      <button class="ui primary button">Follow</button>

    </div>
  </section>
</template>

<script>
import Cookies from 'js-cookie'
import AppLogo from '~/components/AppLogo.vue'

export default {
  data() {
    return {loc: Cookies.get('locale')}
  },
  created() {
    if(!process.SERVER_BUILD)
    {
      // const loc = Cookies.get('locale')
      // if(loc)
      // {
      //   this.$store.commit('lang/SET_LOCALE', loc)
      // }
      //Cookies.set('locale', this.$store.state.lang.locale)
    }
  },
  components: {
    AppLogo
  }
}

</script>
