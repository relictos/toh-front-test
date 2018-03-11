<template>
    <div class="main-menu-block">
      <div class="ui container main-menu-container">
        <div class="ui grid">
          <div class="middle aligned five wide tablet five wide mobile six wide computer column">
            <transition name="fade">
              <left-menu :active.sync="active.menu" @toggle="toggleActive(active.menu)"></left-menu>
            </transition>
          </div>
          <div class="middle aligned center aligned six wide tablet six wide mobile four wide computer column">
            <img class="main-menu-logo" src="~assets/img/logo_toh.png">
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

    .main-menu-block img.main-menu-logo{
      max-width: 100%;
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
      }
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
    }
  },
  components: {
    LeftMenu,
    RightMenu
  }
}
</script>
