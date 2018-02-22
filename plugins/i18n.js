import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Cookies from 'js-cookie'
import { cookieFromRequest } from '~/utils'


Vue.use(VueI18n)

export default ({ app, store, params, redirect, req, route, error }) => {

  const locale = params.LANG || process.env.appLocale
  const locales = store.getters['lang/locales']
  
  if (locales.indexOf(locale) === -1) {
    return error({ message: 'This pages could not be found.', statusCode: 404 })
  }

  // Set locale
  store.dispatch('lang/setLoc', { locale })

  // Set i18n instance on app
  // This way we can use it in middleware and pages asyncData/fetch
  app.i18n = new VueI18n({
    locale: store.state.lang.locale,
    fallbackLocale: process.env.appLocale,
    messages: {
      'en': require('~/locales/en/index.js'),
      'ru': require('~/locales/ru.json')
    }
  })

  app.i18n.path = (link) => {
    // if (app.i18n.locale === app.i18n.fallbackLocale) {
    //   return `/${link}`
    // }

    return `/${app.i18n.locale}/${link}`
  }
}