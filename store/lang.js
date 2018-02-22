import Cookies from 'js-cookie'

// state
export const state = () => ({
  locale: 'ru',
  locales: ['en', 'ru']
})

// getters
export const getters = {
  locale: state => state.locale,
  locales: state => state.locales
}

// mutations
export const mutations = {
  SET_LOCALE (state, loc) {
    state.locale = loc
  }
}

// actions
export const actions = {
  setLoc ({ commit }, { locale }) {
    commit('SET_LOCALE', locale)

    if(!process.SERVER_BUILD)
    {
      Cookies.set('locale', locale, { expires: 365 })
    }
  }
}
