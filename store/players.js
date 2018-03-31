import axios from 'axios'

// state
export const state = () => ({
    providers: {
        'ow': {
            title: 'game_data.player_name',
            details: [
                {
                    value: 'game_data.region',
                },
                {
                    value: 'game_data.platform',
                },
                {
                    value: 'game_data.rating',
                    icon: {
                        class_prefix: 'ow-rank-',
                        class: 'game_data.league'
                    }
                },
                {
                    value: 'search_type',
                    trans: true,
                    trans_group: 'players.general.search_types',
                    primary: true
                }
            ],
            image: 'game_data.icon',
            mini_desc: 'mini_desc'
        },
        'default': {},
    },
    players: [],
    player_views: []
  })
  
  // getters
  export const getters = {
    providers: function(state){
        return state.providers
    },
    provider: (state) => (slug) => {
        return state.providers[slug];
    },
    profileData: (state) => (gameSlug, rawData) => {
        var provider = (state.providers[gameSlug] !== undefined) ? state.providers[gameSlug] : state.providers['default'];
        return provider;
    },
    players: function(state){
        return state.players
    },
    playersCount: function(state){
        return state.players.length
    },
    playerViews: function(state){
        return state.player_views
    },
    dataViewMask: (state) => (rec, mask) => {
        var output = {};
        
        output.id = rec.id
        output.mini_desc = eval('rec.' + mask.mini_desc)
        output.game = rec.game

        output.title = eval('rec.' + mask.title)
        output.image = eval('rec.' + mask.image)
        
        output.details = [];

        mask.details.forEach(function(element) {
            var out = {};
            
            out.value = eval('rec.' + element.value)
            out.primary = element.primary
            out.trans = element.trans
            out.trans_group = element.trans_group

            if(element.icon !== undefined)
            {
                out.icon = {}
                out.icon.class = element.icon.class_prefix + eval('rec.' + element.icon.class)
            }

            output.details.push(out)
        })
        
        return output;
    },
  }

  export const mutations = {
    FETCH_PLAYERS_SUCCESS (state, players) {
        state.players = players
    },
    SET_PLAYER_VIEWS (state, player_views) {
        state.player_views = player_views
    }
  }

  export const actions = {
    
    async fetchPlayers ({ commit, getters, dispatch }) {
        try {
            console.log('fetch started')
            const { data } = await axios.get('/players')
            commit('FETCH_PLAYERS_SUCCESS', data)

            var views = [];
            data.list.forEach(function(element) {
                var game_slug = element.game;
                var provider = getters['provider'](game_slug)
                var view_rec = getters['dataViewMask'](element, provider)
                if(view_rec != undefined)
                    views.push(view_rec)
            });

            commit('SET_PLAYER_VIEWS', views)
        } catch (e) {
            console.log(e)
        }
    }
  }