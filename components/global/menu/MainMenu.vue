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
      display: none;
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

    .main-menu-block{
      position: fixed;
      top: 0px;
      z-index: 10;
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

      .main-menu-block{
        background: fade(@tohDarkBg, 50%);
        transition: all 300ms cubic-bezier(0.165, 0.840,0.440, 1.000);
        *{
          transition: all 300ms cubic-bezier(0.165, 0.840,0.440, 1.000);
        }

        +*{
          margin-top: 142px;
        }

        &.minified{
          top: -120px;
        }
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

      .main-menu-logo-container .mini-logo-container{
        display: block;
      }

      .main-menu-block img.main-menu-logo{
        height: 100%;
      }

      .main-menu-block{
        *{
          transition: all 300ms cubic-bezier(0.165, 0.840,0.440, 1.000);
        }

        .main-menu-logo-container{
          min-width: 70px;
          max-width: 500px;
          transition-delay: 7000ms;
        }

        img.main-menu-logo{
          //max-width: 0px;
          transition-delay: 300ms;
          object-fit: none;
          object-position: left;
          position: relative;
        }

        .main-menu-container{
          transition-delay: .00ms;
        }

        .main-menu-logo-container, .main-menu-logo-container .mini-logo-container, .main-menu-logo-container .mini-logo-container img.main-menu-mini-logo{
          transition: all 300ms cubic-bezier(0.165, 0.840,0.440, 1.000) 300ms, height 300ms cubic-bezier(0.165, 0.840,0.440, 1.000) .00ms;
        }

        .left-menu-toggle-container .left-menu-toggle{
          transition-delay: .00ms;
        }

        .left-menu-toggle-container .left-menu-toggle .toggle-icon-wrapper{
          transition-delay: .00ms;
        }

        .left-menu-toggle-container .left-menu-toggle .toggle-text{
          transition-delay: 300ms;
        }

        .left-menu-toggle-container .left-menu-lang-select{
          transition-delay: 300ms;
        }

        .user-top-panel, .user-top-panel .user-top-dropdown{
          transition-delay: 300ms;
        }

        .user-top-panel .user-top-panel-container .user-top-icons-container{
          transition-delay: 300ms;
        }

        .user-top-panel .user-top-panel-container .user-top-avatar{
          transition-delay: .00ms;

          img{
            transition-delay: .00ms;
          }
        }
      }

      .main-menu-block.minified{
        .main-menu-logo-container{
          max-width: 75px;
          transition-delay: .00ms;
        }

        img.main-menu-logo{
          max-width: 0px;
          transition-delay: .00ms;
        }

        .main-menu-logo-container, .main-menu-logo-container .mini-logo-container, .main-menu-logo-container .mini-logo-container img.main-menu-mini-logo{
          height: 60px;
          transition: all 300ms cubic-bezier(0.165, 0.840,0.440, 1.000) .00ms, height 300ms cubic-bezier(0.165, 0.840,0.440, 1.000) 300ms;
        }

        .left-menu-toggle-container .left-menu-toggle{
          margin-right: 0px;
          transition-delay: .00ms;
        }

        .left-menu-toggle-container .left-menu-toggle .toggle-icon-wrapper{
          margin-right: 0px;
          padding: 0px;
          margin: 5px;
          transition-delay: .00ms;
        }

        .left-menu-toggle-container .left-menu-toggle .toggle-text{
          transition-delay: .00ms;
          opacity: 0;
        }

        .left-menu-toggle-container .left-menu-lang-select{
          opacity: 0;
          transition-delay: .00ms;
        }

        .main-menu-container{
          padding: 0px;
          transition-delay: 300ms;
        }

        .user-top-panel{
          background: none;
          transition-delay: .00ms;
        }

        .user-top-panel .user-top-dropdown{
          transition-delay: .00ms;
          background: @tohDarkBg;
        }

        .user-top-panel .user-top-panel-container .user-top-icons-container{
          opacity: 0;
          transition-delay: .00ms;
        }

        .user-top-panel .user-top-panel-container .user-top-avatar{
          transition-delay: 300ms;
          margin-top: -7px;
          height: 45px;
          width: 45px;

          img{
            transition-delay: 300ms;
            height: 45px;
            width: 45px;
          }
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
      console.log(e);
      var currentScrollPosition = (e.srcElement.scrollingElement !== undefined) ? e.srcElement.scrollingElement.scrollTop : e.srcElement.scrollTop;
      var scrollCup = 10;

      if ((currentScrollPosition > this.scrollPosition) && ((currentScrollPosition - this.scrollPosition) > scrollCup)) {
          this.minified = true;
      }
      if ((currentScrollPosition < this.scrollPosition) && ((this.scrollPosition - currentScrollPosition) > scrollCup)) {
          this.minified = false;
      }

      this.scrollPosition = currentScrollPosition;
    }
  },
  created () {
    if (process.browser) {
      //for desctops with enabled custom scroll
      var scrolldiv = document.getElementsByClassName("vb-content")[0];
      scrolldiv.addEventListener('scroll', this.handleScroll);

      //for mobile devices with disabled custom scroll
      window.addEventListener('scroll', this.handleScroll);
    }
  },
  destroyed () {
    if (process.browser) {
      var scrolldiv = document.getElementsByClassName("vb-content")[0];
      scrolldiv.removeEventListener('scroll', this.handleScroll);
      window.removeEventListener('scroll', this.handleScroll);
    }
  },
  components: {
    LeftMenu,
    RightMenu
  }
}
</script>
