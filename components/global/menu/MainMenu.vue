<template>
    <div class="main-menu-block" :class="{'minified': minified}" @scroll="handleScroll">
      <div class="ui container main-menu-container">
        <div class="ui grid">
          <div class="middle aligned five wide tablet five wide mobile six wide computer column">
            <transition name="fade">
              <left-menu :active.sync="active.menu" @toggle="toggleActive(active.menu)"></left-menu>
            </transition>
          </div>
          <div class="middle aligned center aligned six wide tablet six wide mobile four wide computer column">
            <div class="main-menu-logo-container">
              <div class="mini-logo-container">
                <img class="main-menu-mini-logo" src="~assets/img/logo_toh_mini.png">
              </div>
              <img class="main-menu-logo" src="~assets/img/logo_toh.png">
            </div>
          </div>
          <div class="middle aligned right aligned five wide tablet five wide mobile six wide computer column">
            <right-menu 
              :activeLogin.sync="active.login" 
              :activeReg.sync="active.reg" 
              @toggleLogin="toggleActive(active.login)"
              @toggleReg="toggleActive(active.reg)"
            >
            </right-menu>
          </div>
        </div>
      </div>
    </div>
</template>

<style lang="less">
    .main-menu-block{
        background-color: @tohDarkBg;
        width: 100%;
        margin-bottom: 20px;
        color: @tohDarkText;
        overflow-y: show;
        position: relative;
    }

    .main-menu-block .ui.grid>.column{
      position: inherit;
    }

    .main-menu-block .main-menu-container{
      padding: 20px 0px;
    }

    .main-menu-logo-container{
      margin: 0 auto;
      text-align: left;
      display: inline-block;
      position: relative;
      overflow: hidden;
    }

    .main-menu-logo-container .mini-logo-container{
      position: absolute;
      z-index: 0;
      left: 0px;
      height: 74px;
      top: 0px;
    }

    .main-menu-logo-container .mini-logo-container img.main-menu-mini-logo{
      height: 74px;
    }

    .main-menu-block img.main-menu-logo{
      max-width: 100%;
      max-height: 100%;
      z-index: 2;
      object-fit: none;
      object-position: left;
      position: relative;
    }

    .main-menu-wrapper{
      position: absolute;
      top: 100%;
      width: 100%;
      left: 0px;
      background: @tohDarkBg;
      display: none;
      z-index: 1001;
      color: @tohDarkText;
    }
    .main-menu-wrapper.active{
      display: block;
    }

    .main-menu-wrapper .form-wrapper{
      margin-top: 25px;
      margin-bottom: 25px;
    }

    @media only screen and (max-width : @largestMobileScreen) {
      .main-menu-wrapper{
        background-color: @tohLightBg;
        color: @tohLightText;
        position: fixed;
        bottom: 0px;
        top: 120px;
        overflow-y: auto;
      }
    }

    @media only screen and (min-width : @tabletBreakpoint) {
      .main-menu-block{
        position: fixed;
        top: 0px;
        z-index: 10;
      }

      .main-menu-block+*{
        margin-top: 142px;
      }

      .main-menu-logo-container{
        height: 74px;
      }

      .main-menu-block img.main-menu-logo{
        height: 100%;
      }

      .main-menu-block{
        *{
          transition: all 300ms cubic-bezier(1.000, 0.840,0.440, 0.165);
        }

        .main-menu-logo-container{
          min-width: 70px;
          max-width: 100%;
          transition-delay: 300ms;
        }

        img.main-menu-logo{
          //max-width: 0px;
          transition-delay: 300ms;
        }

        .main-menu-container{
          transition-delay: .00ms;
        }
      }

      .main-menu-block.minified{
        .main-menu-logo-container{
          //animation: logo-container-slide .3s linear forwards 0s;
          max-width: 75px;
          transition-delay: .00ms;
        }

        img.main-menu-logo{
          //animation: logo-slide .3s linear forwards 0s;
          max-width: 0px;
          transition-delay: .00ms;
        }

        .main-menu-container{
          //animation: container-slide .3s linear forwards .3s;
          padding: 0px;
          transition-delay: 300ms;
        }
      }

      // .main-menu-block:not(.minified){
      //   .main-menu-logo-container{
      //     animation: logo-container-slide-back .3s linear forwards .3s;
      //   }

      //   img.main-menu-logo{
      //     animation: logo-slide-back .3s linear forwards .3s;
      //   }

      //   .main-menu-container{
      //     animation: container-slide-back .3s linear forwards 0s;
      //   }
      // }


      @keyframes logo-container-slide {
        from {
          max-width: 100%;
        }
        to {
          max-width: 69px;
        }
      }

      @keyframes logo-slide {
        from {
          max-width: 100%;
        }
        to {
          max-width: 0px;
        }
      }

      @keyframes container-slide {
        from {
          padding: 20px 0px;
        }
        to {
          padding: 0px 0px;
        }
      }

      @keyframes logo-container-slide-back {
        from {
          max-width: 69px;
        }
        to {
          max-width: 100%;
        }
      }

      @keyframes logo-slide-back {
        from {
          max-width: 0px;
        }
        to {
          max-width: 100%;
        }
      }

      @keyframes container-slide-back {
        from {
          padding: 0px 0px;
        }
        to {
          padding: 20px 0px;
        }
      }
    }
</style>

<script>
import LeftMenu from '~/components/global/menu/LeftMenu.vue'
import RightMenu from '~/components/global/menu/RightMenu.vue'

export default {
  name: 'MainMenu',
  data() {
    return {
      active: {
        menu: false,
        login: false,
        reg: false
      },
      scrollPosition: 0,
      minified: false
    }
  },
  methods: {
    toggleActive: function(active){
      if(!active)
        document.body.classList.add("mobile-modal")
      else
        document.body.classList.remove("mobile-modal")

      this.active.menu = false;
      this.active.login = false;
      this.active.reg = false;
    },
    handleScroll: function(e){
      var currentScrollPosition = e.srcElement.scrollingElement.scrollTop;

      if (currentScrollPosition > this.scrollPosition) {
          this.minified = true;
      }
      else{
          this.minified = false;
      }

      this.scrollPosition = currentScrollPosition;
    }
  },
  created () {
    if (process.browser) {
      window.addEventListener('scroll', this.handleScroll);
    }
  },
  destroyed () {
    if (process.browser) {
      window.removeEventListener('scroll', this.handleScroll);
    }
  },
  components: {
    LeftMenu,
    RightMenu
  }
}
</script>
