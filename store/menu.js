// state
export const state = () => ({
    main: [
          { text: 'main.menu.home', icon: 'home', link: '', exact: true },
          { text: 'main.menu.players', icon: 'gamepad', link: 'players', exact: false },
          { text: 'main.menu.teams', icon: 'clan', link: 'teams', exact: false },
      ]
  })
  
  // getters
  export const getters = {
    main: function(state){
        return state.main
    }
  }