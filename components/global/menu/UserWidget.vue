<template>
    <div class="user-top-panel">
        <div class="user-top-panel-container">
            <div class="user-top-icons-container">
                <div class="user-top-action-icons">
                    <div class="user-top-icon">
                        <i class="icon-inline gamepad"></i>
                    </div>
                    <div class="user-top-icon">
                        <i class="icon-inline clan"></i>
                    </div>
                    <div class="user-top-icon">
                        <i class="icon-inline notif"></i>
                    </div>
                    <div class="user-top-icon">
                        <i class="icon-inline chat"></i>
                    </div>
                </div>
            </div>
            <div class="user-top-avatar" :class="{'active': active}" @click.prevent="toggleDropdown">
                <img src="https://overwatch.tavernofheroes.net/images/15.gif">
            </div>
        </div>

        <transition name="slide">
            <div v-if="active" class="user-top-dropdown">
                <div class="user-top-dropdown-content">

                </div>
            </div>
        </transition>
    </div>
</template>

<style lang="less">
    .user-top-panel{
        padding: 10px 20px;
        background: darken(@tohDarkBg, 5%);
        color: fade(@tohDarkText, 70%);
        border-radius: @tohButtonBorderRadius;
        position: relative;
    }

    .user-top-panel .user-top-panel-container{
        flex-direction: column;
        justify-content: center;

        display: flex;
        flex-flow: row nowrap;
    }

    .user-top-panel .user-top-panel-container .user-top-icons-container{
        flex-direction: column;
        vertical-align: top;
        align-self: top;
    }

    .user-top-panel .user-top-panel-container .user-top-action-icons{
        font-size: 30px;
    }

    .user-top-panel .user-top-panel-container .user-top-action-icons .user-top-icon{
        flex-direction: column;
        vertical-align: top;
        align-self: top;

        display: inline-flex;
        flex-flow: row nowrap;

        cursor: pointer;
        margin-right: 20px;

        transition: .3s;
    }

    .user-top-panel .user-top-panel-container .user-top-action-icons .user-top-icon .icon-inline{
        background-color: fade(@tohDarkText, 60%);
        transition: .3s;
        &:hover{
            background-color: @tohDarkText;
        }
    }

    .user-top-panel .user-top-panel-container .user-top-avatar{
        width: 57px;
        height: 57px;
        margin-top: -12px;
        margin-bottom: -12px;
        border-radius: 100%;
        position: relative;
        cursor: pointer;
        z-index: 1002;

        outline: none;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }

    .user-top-panel .user-top-panel-container .user-top-avatar:before{
        transition: .3s;
        background-color: transparent;
    }

    .user-top-panel .user-top-panel-container .user-top-avatar img{
        width: 57px;
        height: 57px;
        background: darken(@tohDarkBg, 5%);
        border: 2px solid darken(@tohDarkBg, 5%);
        border-radius: 100%;
    }

    .user-top-panel .user-top-panel-container .user-top-avatar:hover:before{
        content: '';
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        background-color: fade(@tohDarkText, 5%);
        border-radius: 100%;
    }

    .user-top-panel .user-top-dropdown{
        position: absolute;
        top: ~"calc(100% - 2px)";
        left: 0px;
        width: 100%;
        background: darken(@tohDarkBg, 5%);

        border-bottom-right-radius: @tohButtonBorderRadius;
        border-bottom-left-radius: @tohButtonBorderRadius;
        z-index: 1001;
    }

    .user-top-panel .user-top-dropdown .user-top-dropdown-content{
        padding: 20px;
    }

    @media only screen and (max-width : @largestMobileScreen) {

        .user-top-panel{
            background: none;
            padding: 0px;
            position: inherit;
        }

        .user-top-panel .user-top-panel-container .user-top-icons-container{
            position: fixed;
            bottom: 0px;
            left: 0px;
            right: 0px;
            background: @tohDarkText;
            padding: 5px 0px;
            z-index: 1000;
        }

        .user-top-panel .user-top-panel-container .user-top-action-icons{
            display: flex;
            flex-flow: row nowrap;
            align-items: baseline;
            justify-content: space-around;
        }

        .user-top-panel .user-top-panel-container .user-top-action-icons .user-top-icon .icon-inline{
            background-color: fade(@tohDarkBg, 60%);
            transition: .3s;
            &:hover{
                background-color: @tohDarkBg;
            }
        }

        .user-top-panel .user-top-panel-container .user-top-avatar{
            width: 77px;
            height: 77px;
            margin-top: -12px;
            margin-bottom: -1tpx;
            padding: 10px;
        }

        .user-top-panel .user-top-panel-container .user-top-avatar.active{
            background: @tohDarkText;
        }

        .user-top-panel .user-top-dropdown{
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
export default {
  name: 'UserWidget',
  props: ['active'],
  methods: {
      toggleDropdown() {
          this.$emit('dropdown')
      }
  }
}
</script>

