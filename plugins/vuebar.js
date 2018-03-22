import Vue from 'vue'
import Vuebar from 'vuebar'

Vue.use(Vuebar);

if (process.browser) {
    Vue.vuebar.initScrollbar(document.body, {});
}