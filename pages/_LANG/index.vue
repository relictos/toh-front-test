<template>
  <section class="ui container">
    <div>
      <app-logo/>
      <h1 class="title">
        {{ $t('main.home.title') }}
        <br>
        {{ loc }}
      </h1>
      <h2 class="subtitle" v-for="i in 200" v-bind:key="i">
        123
      </h2>
      <div class="links">
        <nuxt-link class="button--green" to="players">Players</nuxt-link>
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
  transition: {
      name: 'fade',
  },
  components: {
    AppLogo
  }
}

</script>
