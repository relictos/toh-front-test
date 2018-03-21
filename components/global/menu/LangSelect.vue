<template>
    <sui-dropdown :text="current_lang" direction="downward">
        <sui-dropdown-menu>
            <nuxt-link v-for="(loc, slug) in $store.getters['lang/locales']" 
                :key="loc.name" 
                :to="$route.fullPath.replace(/^\/[^\/]+/, '/'+slug)" 
                role="option" 
                class="item">
                 <i :class="['flag',loc.flag]"></i>{{ loc.name }}
            </nuxt-link>
        </sui-dropdown-menu>
    </sui-dropdown>
</template>

<script>
export default {
  name: 'LangSelect',
  computed: {
      current_lang() {
         return (this.$store.getters['lang/locale']) ? this.$store.getters['lang/locale'] : '';
      }
  }
}
</script>

