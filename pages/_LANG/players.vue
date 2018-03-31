<template>
  <section class="ui container">

        <div v-if="!child_active">
            <div class="ui grid">
                <div class="top aligned sixteen wide tablet sixteen wide mobile twelve wide computer column">
                    <nuxt-link
                        v-for="(item, i)  in this.$store.getters['players/playerViews']" 
                        :to="$i18n.path('players/' + item.id)" 
                        @click.native="getScrollPos"
                        :key="i">
                            <list-block :rec="item"></list-block>
                    </nuxt-link>
                </div>
                <div class="top aligned sixteen wide tablet sixteen wide mobile four wide computer column">
                    <div class="toh-panel"></div>
                </div>
            </div>
        </div>
        <nuxt-child :key="$route.params.id"/>
  </section>
</template>

<script>
import ListBlock from '~/components/players/ListBlock.vue'

export default {
    data() {
        return {
            scrollTop: 0,
        }
    },
    async fetch({ store, params }) {
        if(store.getters['players/playersCount'] <= 0)
            await store.dispatch('players/fetchPlayers');
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
            this.scrollTop = document.getElementsByClassName('vb-content')[0].scrollTop
        }
    },
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
