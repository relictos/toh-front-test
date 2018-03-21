<template>
    <div>
        <transition name="slide">
            <div v-if="active" class="main-menu-wrapper active">
                <div class="ui container">
                    <div class="main-menu-nav">
                        <main-menu-item :text="$t('main.menu.home')" icon="home"></main-menu-item>
                        <main-menu-item :text="$t('main.menu.players')" icon="gamepad" :active="true"></main-menu-item>
                        <main-menu-item :text="$t('main.menu.teams')" icon="clan"></main-menu-item>
                    </div>
                </div>
            </div>
        </transition>
        <div class="left-menu-toggle-container" :class="{'active': active}">
            <div class="left-menu-toggle" @click="toggleMenu">
                <span class="toggle-icon-wrapper">
                    <i class="icon-inline bars toggle-icon"></i> 
                </span>
                <span class="toggle-text">{{$t('main.menu.title')}}</span>
            </div>
            <div class="left-menu-lang-select">
                <lang-select></lang-select>
            </div>
        </div>
    </div>
</template>

<style lang="less">
    .left-menu-toggle-container{
        display: inline-flex;
        flex-flow: row nowrap;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
    }

    .left-menu-toggle-container .left-menu-toggle{
        color: fade(@tohDarkText, 80%);
        margin-right: 10px;
        display: flex;
        align-items: center;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
    }

    .left-menu-toggle-container .left-menu-toggle:hover{
        color: @tohDarkText;
    }

    .left-menu-toggle-container .left-menu-toggle .toggle-icon-wrapper{
        margin-right: 10px;
        border-radius: 100%;
        transition: .3s;
        cursor: pointer;
        padding: 10px;
        outline: none;
    }

    .left-menu-toggle-container .left-menu-toggle .toggle-icon-wrapper:hover{
        background-color: fade(@tohDarkText, 7%)
    }

    .left-menu-toggle-container .left-menu-toggle .toggle-icon{
        font-size: 55px;
        transition: .3s;
        background-color: fade(@tohDarkText, 80%);
    }

    .left-menu-toggle-container .left-menu-toggle:hover .toggle-icon{
        background-color: @tohDarkText;
    }

    .left-menu-toggle-container .left-menu-toggle .toggle-text{
        font-size: 25px;
        line-height: 35px;
        transition: .3s;
        cursor: pointer;
        max-height: 35px;
        overflow: hidden;
        max-width: 100%;
    }
    
    .left-menu-toggle-container.active .toggle-icon-wrapper{
        background-color: @tohDarkText;
    }

    .left-menu-toggle-container.active .toggle-icon-wrapper:hover{
        background-color: fade(@tohDarkText, 80%)
    }

    .left-menu-toggle-container.active .toggle-icon{
        background-color: fade(@tohDarkBg, 80%);
    }

    .left-menu-toggle-container.active .left-menu-toggle:hover .toggle-icon{
        background-color: @tohDarkBg;
    }

    .left-menu-toggle-container.active .toggle-text{
        opacity: 0;
        cursor: inherit;
        pointer-events: none;
    }

    .left-menu-toggle-container.mini{
        margin-right: 0px;
    }

    .left-menu-toggle-container.mini .left-menu-toggle{
        margin-right: 0px;
    }

    @media only screen and (max-width : @largestMobileScreen) {
        .left-menu-toggle-container.mini .left-menu-toggle .toggle-icon-wrapper{
            margin-right: 2px;
            padding: 8px;
        }
    }

    .left-menu-toggle-container.mini .left-menu-toggle .toggle-icon{
        font-size: 23px;
    }

    .left-menu-toggle-container .left-menu-lang-select{
        color: fade(@tohGreyColor,50%);
        font-size: 20px;
        align-self: center;
        margin-top: 4px;
        margin-left: 5px;
        transition: .3s;
    }

    .left-menu-toggle-container .left-menu-lang-select:hover{
        color: @tohGreyColor;
    }

    .left-menu-toggle-container .left-menu-lang-select .ui.dropdown{
        color: fade(@tohGreyColor,50%);
        transition: color .3s;
    }

    .left-menu-toggle-container .left-menu-lang-select .ui.dropdown.active,
    .left-menu-toggle-container .left-menu-lang-select .ui.dropdown:hover{
        color: @tohGreyColor;
    }

    .left-menu-toggle-container .left-menu-lang-select .ui.dropdown>.dropdown.icon{
        margin-left: .5em;
    }

    .left-menu-toggle-container .left-menu-lang-select .ui.dropdown>.text{
        text-transform: uppercase;
    }

    .left-menu-toggle-container .left-menu-lang-select .ui.dropdown .menu{
        margin-top: 10px;
    }

    .left-menu-toggle-container.active .left-menu-lang-select{
        opacity: 0;
        cursor: inherit;
        pointer-events: none;
    }

    .main-menu-nav{
      display: flex;
      flex-flow: row wrap;
      align-items: stretch;
      margin: -1rem;
      margin-bottom: 0px;
      padding-top: 40px;
      padding-left: 15px;
    }

    .main-menu-nav .nav-item{
      padding: 1rem;
      flex-direction: column;
      vertical-align: top;
      align-self: top!important;
      width: 33.3%;

      display: flex;
      flex-flow: row nowrap;
      margin-bottom: 35px;

      cursor: pointer;
    }

    .main-menu-nav .nav-item .nav-item-icon-container{
      text-align: center;
      flex-direction: column;
      vertical-align: top;
      align-self: top!important;
      font-size: 40px;
      width: 45px;
    }

    .main-menu-nav .nav-item .nav-item-icon-container .icon-inline{
      background-color: fade(@tohDarkText, 80%);
      transition: all .3s;
    }

    .main-menu-nav .nav-item:hover .nav-item-icon-container .icon-inline{
        background-color: @tohDarkText;
    }

    .main-menu-nav .nav-item .nav-item-text{
      text-align: left;
      flex-direction: column;
      vertical-align: top;
      align-self: top!important;
      color: fade(@tohDarkText, 80%);
      font-size: 30px;
      line-height: 42px;
      padding-left: 20px;
      transition: all .3s;
    }

    .main-menu-nav .nav-item:hover .nav-item-text{
        color: @tohDarkText;
    }

    .main-menu-nav .nav-item:nth-child(3n-1){
      padding-left: 5%;
    }
    .main-menu-nav .nav-item:nth-child(3n){
      padding-left: 15%;
    }

    .main-menu-nav .nav-item.active .nav-item-icon-container .icon-inline{
      background-color: @tohPrimaryColor;
    }

    .main-menu-nav .nav-item.active:hover .nav-item-icon-container .icon-inline{
        background-color: @tohPrimaryHover
    }

    .main-menu-nav .nav-item.active .nav-item-text{
      color: @tohPrimaryColor;
    }

    .main-menu-nav .nav-item.active:hover .nav-item-text{
      color: @tohPrimaryHover;
    }

    @media only screen and (max-width : @largestMobileScreen) {
        .left-menu-toggle-container .toggle-text{
            display: none;
        }

        .left-menu-toggle-container .left-menu-lang-select{
            margin: 0px;
        }

        .left-menu-toggle-container .left-menu-lang-select .ui.dropdown>.dropdown.icon{
            display: none;
        }

        .left-menu-toggle-container .left-menu-toggle .toggle-icon-wrapper{
            margin-right: 0px;
            padding: 5px;
        }
        
        .main-menu-nav{
            min-height: 100%;
            padding: 0px;
            margin: 0px -1rem;
        }

        .main-menu-nav .nav-item{
            width: 100%;
            padding: 20px !important;
            margin-bottom: 0px;
            border-bottom: 1px solid @tohLightGreyColor;
        }

        .main-menu-nav .nav-item.active{
            border-bottom-color: @tohLightPrimaryColor;
        }

        .main-menu-nav .nav-item:hover{
            background-color: fade(@tohLightText, 7%);
        }

        .main-menu-nav .nav-item .nav-item-text{
            color: fade(@tohLightText, 80%);
            font-size: 19px;
            line-height: 33px;
        }

        .main-menu-nav .nav-item:hover .nav-item-text{
            color: @tohLightText;
        }

        .main-menu-nav .nav-item .nav-item-icon-container{
            font-size: 33px;
            line-height: 33px;
            width: 35px;
        }

        .main-menu-nav .nav-item .nav-item-icon-container .icon-inline{
            background-color: @tohGreyColor;
        }

        .main-menu-nav .nav-item:hover .nav-item-icon-container .icon-inline{
            background-color: @tohGreyColor;
        }
    }
</style>

<script>
    import MainMenuItem from '~/components/global/menu/MainMenuItem'
    import LangSelect from '~/components/global/menu/LangSelect'

    export default {
        name: 'LeftMenu',
        props: ['active'],
        methods: {
            toggleMenu: function(){
                this.$emit('toggle');
                this.active = !this.active
                this.$emit('update:active', this.active)
            }
        },
        components: {
            MainMenuItem,
            LangSelect
        }
    }
</script>