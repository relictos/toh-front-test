<template>
  <section class="ui container">

        <div v-if="!child_active">
            <div class="ui grid">
                <div class="top aligned sixteen wide tablet sixteen wide mobile twelve wide computer column">
                    <list-block v-for="i in 30" :key="i"></list-block>
                </div>
                <div class="top aligned sixteen wide tablet sixteen wide mobile four wide computer column">
                    <div class="toh-panel"></div>
                </div>
            </div>

            <nuxt-link :to="$i18n.path('players/1')" @click.native="getScrollPos">Player1</nuxt-link>
            <nuxt-link :to="$i18n.path('players/1')" @click.native="getScrollPos">Player1</nuxt-link>
            <nuxt-link :to="$i18n.path('players/2')">Player2</nuxt-link>
            <nuxt-link :to="$i18n.path('players/3')">Player3</nuxt-link>
        </div>
        <nuxt-child :key="$route.params.id"/>
  </section>
</template>

<script>
import ListBlock from '~/components/players/ListBlock.vue'

export default {
    data() {
        return {
            scrollTop: 0
        }
    },
    computed: {
        child_active() {
            var result = !!this.$route.params.id
            return result
        }
    },
    methods: {
        getScrollPos() {
            //if(this.child_active) return;
            this.scrollTop = this.$vuebar.getState(document.body).scrollTop
        }
    },
    scrollToTop: true,
    transition: {
        name: 'fade',
    },
    components: {
        ListBlock
    },
    created: function() {
        if(process.browser)
            document.getElementsByClassName('vb-content')[0].scrollTop = 0;
    },
    updated: function () {
        this.$nextTick(function () {
            if(!this.child_active)
            {
                document.getElementsByClassName('vb-content')[0].scrollTop = this.scrollTop
            }
        })
    }
}

</script>
