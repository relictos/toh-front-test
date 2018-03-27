import axios from 'axios'
import Cookies from 'js-cookie'
import { cookieFromRequest } from '~/utils'

// export default async ({ store }) => {
//   if (process.server) {
//     const locale = store.getters['lang/locale']
//     if (locale) {
//       axios.defaults.headers.common['Accept-Language'] = locale
//     }
//   }

//   //await loadMessages(store.getters['lang/locale'])
// }

export default async function ({ isHMR, app, store, route, params, error, redirect, req }) {
    // If middleware is called from hot module replacement, ignore it
    if (isHMR) return

    // Get locale from params
    const locale = params.LANG //|| process.env.appLocale
    const locales = store.getters['lang/locales']
    //console.log(route.fullPath)
     //if(!process.server)
     //{
      if(params.LANG == undefined || locales[params.LANG] == undefined)
      {
        
        var fb_locale = cookieFromRequest(req, 'locale')
        if(!fb_locale || locales[fb_locale] == undefined)
          fb_locale = process.env.appLocale
        
        if(route.fullPath.split('/')[1] == 'dist')
          return;

        if(route.fullPath.split('/')[1] == '')
        {
          return redirect('/' + fb_locale + route.fullPath)
        }

        //Чтобы не было циклического редиректа
        if(locales[route.fullPath.split('/')[1]] == undefined)
        {
          return error({ message: 'This pages could not be found.', statusCode: 404 })
        }

        return redirect('/' + fb_locale + route.fullPath)
      }
      else{
        //for switching lang
        if(params.LANG != store.getters['lang/locale'])
        {
          app.i18n.locale = locale;
          store.dispatch('lang/setLoc', { locale })
        }
      }
    //}

    if (process.server) {
        const locale = store.getters['lang/locale']
        if (locale) {
          axios.defaults.headers.common['Accept-Language'] = locale
        }
      }
  }