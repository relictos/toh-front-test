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
    
    //console.log(req)
    // Get locale from params
    const locale = params.LANG || process.env.appLocale
    const locales = store.getters['lang/locales']

    if(!process.SERVER_BUILD)
    {
      if(!params.LANG)
      {
        var fb_locale = cookieFromRequest(req, 'locale')
        if(!fb_locale)
          fb_locale = process.env.appLocale
        
        if(route.fullPath.split('/')[1] == 'dist')
          return;

        //Чтобы не было циклического редиректа
        if(locales[route.fullPath.split('/')[1]] !== undefined)
        {
          return error({ message: 'This pages could not be found.', statusCode: 404 })
        }

        return redirect('/' + fb_locale + route.fullPath)
      }
    }

    if (process.server) {
        const locale = store.getters['lang/locale']
        if (locale) {
          axios.defaults.headers.common['Accept-Language'] = locale
        }
      }
  }