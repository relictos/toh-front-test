<template>
  <div>
    <main-menu></main-menu>
    <nuxt/>
  </div>
</template>

<script>
  import MainMenu from '~/components/global/menu/MainMenu.vue'

  export default {
    components: {
      MainMenu
    }
  }
</script>