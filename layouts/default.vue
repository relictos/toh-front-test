<template>
  <div>
    <div>
      <main-menu></main-menu>
      <nuxt/>
    </div>
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