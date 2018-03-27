<template>
    <div class="user-top-panel">
        <div class="user-top-panel-container">
            <div class="user-top-icons-container" :class="{'minified': minified}">
                <div class="user-top-action-icons">
                    <div class="user-top-icon">
                        <i class="icon-inline gamepad"></i>
                    </div>
                    <div class="user-top-icon">
                        <i class="icon-inline clan"></i>
                        <div class="top-icon-badge">2</div>
                    </div>
                    <div class="user-top-icon active">
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
                    <div class="user-dropdown-info">
                        <div class="user-info-icons">
                            <a href="#">
                                <i class="icon-inline cog"></i>
                            </a>
                            <a href="#" @click.prevent="logout">
                                <i class="icon-inline logout"></i>
                            </a>
                        </div>
                        <a href="#">
                            <div class="user-dropdown-name">Relictos</div>
                            <div class="user-dropdown-subtitle">Перейти в профиль</div>
                        </a>
                    </div>
                    <div class="user-dropdown-menu">
                        <user-menu-item 
                            :text="$t('main.menu.players')" 
                            icon="gamepad" 
                            :active="true"
                        ></user-menu-item>
                        <user-menu-item 
                            :text="$t('main.menu.teams')" 
                            icon="clan"
                            :badge-count="12"
                        ></user-menu-item>
                        <user-menu-item 
                            :text="$t('main.menu.teams')" 
                            icon="clan"
                            :badge-count="2"
                            :badge-active="true"
                        ></user-menu-item>
                    </div>
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
        transition: .3s;

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

        display: inline-block;
        position: relative;

        cursor: pointer;
        margin-right: 20px;

        transition: .3s;

        .icon-inline{
            background-color: fade(@tohDarkText, 60%);
            transition: .3s;
        }

        .top-icon-badge{
            position: absolute;
            right: -5px;
            bottom: -2px;
            font-size: 11px;
            padding: 2px;
            border-radius: 100%;
            transition: .3s;
            color: @tohDarkText;
            background: @tohRedColor;
            line-height: 13px;
            min-width: 17px;
            text-align: center;
        }

        &:hover{
            .icon-inline{
                background-color: @tohDarkText;
            }

            .top-icon-badge{
                background: @tohRedHover;
            }
        }

        &.active{
            .icon-inline{
                background-color: @tohPrimaryColor;
                transition: .3s;
            }

            &:hover{
                .icon-inline{
                    background-color: @tohPrimaryHover;
                }
            }
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
        text-align: left;
    }

    .user-top-panel .user-top-dropdown .user-dropdown-info{
        margin-bottom: 10px;
        color: fade(@tohDarkText, 70%);

        &:after{
            content: " ";
            display: table;
            clear: both;
        }
    }

    .user-top-panel .user-top-dropdown .user-dropdown-info .user-info-icons{
        float: right;
        font-size: 20px;
        line-height: 25px;
        margin-top: 7px;
    }

    .user-top-panel .user-top-dropdown .user-dropdown-info .user-info-icons>*{
        margin-right: 15px;

        &:last-child{
            margin-right: 0px;
        }
    }

    .user-top-panel .user-top-dropdown .user-dropdown-info .user-info-icons .icon-inline{
        background-color: fade(@tohDarkText, 40%);
        transition: .3s;

        &:hover{
            background-color: @tohDarkText;
        }
    }

    .user-top-panel .user-top-dropdown .user-dropdown-info .user-dropdown-name{
        font-weight: 600;
        color: @tohDarkText;
        font-size: 15px;
        line-height: 18px;
    }
    .user-top-panel .user-top-dropdown .user-dropdown-info .user-dropdown-subtitle{
        font-size: 13px;
        line-height: 15px;
        color: fade(@tohDarkText, 70%);
        transition: .3s;
    }

    .user-top-panel .user-top-dropdown .user-dropdown-info a:hover .user-dropdown-subtitle{
         color: @tohDarkText;
    }

    .user-top-panel .user-top-dropdown .user-dropdown-menu{
        
        margin-left: -20px;
        margin-right: -20px;
        margin-bottom: -20px;

        .user-dropdown-menu-item{
            padding: 15px 20px;
            display: flex;
            flex-flow: row nowrap;
            cursor: pointer;
            align-items: center;
            transition: .3s;

            .item-icon-container{
                text-align: center;
                flex-direction: column;
                vertical-align: top;
                align-self: top!important;
                font-size: 30px;
                width: 35px;

                .icon-inline{
                    background-color: fade(@tohDarkText, 60%);
                    transition: all .3s;
                }
            }

            .item-text{
                text-align: left;
                flex-direction: column;
                vertical-align: top;
                align-self: top!important;
                color: fade(@tohDarkText, 80%);
                font-size: 15px;
                padding-left: 15px;
                transition: all .3s;
                flex: 1 100%;
            }

            .item-badge{
                font-size: 12px;
                padding: 4px;
                border-radius: 100%;
                transition: .3s;
                color: fade(@tohDarkText, 60%);
                line-height: 14px;
                min-width: 21px;
                text-align: center;

                &.active{
                    background: @tohRedColor !important;
                    color: @tohDarkText !important;
                }
            }

            &:hover{
                background: fade(@tohDarkText, 5%);

                .item-text{
                    color: @tohDarkText;
                }

                .item-icon-container .icon-inline{
                    background-color: fade(@tohDarkText, 80%);
                }

                .item-badge{
                    color: fade(@tohDarkText, 80%);
                }
            }

            &.active{
                .item-text{
                    color: @tohPrimaryColor;
                }

                .item-icon-container .icon-inline{
                    background-color: @tohPrimaryColor;
                }

                .item-badge{
                    color: @tohPrimaryColor;
                }

                &:hover{
                    .item-text{
                        color: @tohPrimaryHover;
                    }

                    .item-icon-container .icon-inline{
                        background-color: @tohPrimaryHover;
                    }

                    .item-badge{
                        color: @tohPrimaryHover;
                    }
                }
            }
        }
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
            border-top: 1px solid @tohDarkBg;
            padding: 5px 0px;
            z-index: 1000;

            &.minified{
                bottom: -50px;
            }
        }

        .user-top-panel .user-top-panel-container .user-top-action-icons{
            display: flex;
            flex-flow: row nowrap;
            align-items: baseline;
            justify-content: space-around;
        }

        .user-top-panel .user-top-panel-container .user-top-action-icons .user-top-icon .icon-inline{
            background-color: fade(@tohDarkBg, 40%);
            transition: .3s;
            &:hover{
                background-color: @tohDarkBg;
            }
        }

        .user-top-panel .user-top-panel-container .user-top-avatar{
            width: 66px;
            height: 66px;
            margin-top: -12px;
            margin-bottom: -1tpx;
            padding: 10px;
        }

        .user-top-panel .user-top-panel-container .user-top-avatar img{
            width: 45px;
            height: 45px;
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

        .user-top-panel .user-top-dropdown .user-dropdown-info .user-dropdown-name{
            color: @tohLightText;
        }
        .user-top-panel .user-top-dropdown .user-dropdown-info .user-dropdown-subtitle{
            color: fade(@tohLightText, 70%);
        }

        .user-top-panel .user-top-dropdown .user-dropdown-info a:hover .user-dropdown-subtitle{
            color: @tohLightText;
        }

        .user-top-panel .user-top-dropdown .user-dropdown-info .user-info-icons .icon-inline{
            background-color: fade(@tohLightText, 40%);
            transition: .3s;

            &:hover{
                background-color: @tohLightText;
            }
        }

        .user-top-panel .user-top-dropdown .user-dropdown-menu .user-dropdown-menu-item{
            
            .item-text{
                color: fade(@tohLightText, 80%);
            }

            .item-icon-container .icon-inline{
                background-color: fade(@tohLightText, 60%);
            }

            .item-badge{
                color: fade(@tohLightText, 60%);
            }

            &:hover{
                background: fade(@tohLightText, 5%);

                .item-text{
                    color: @tohLightText;
                }

                .item-icon-container .icon-inline{
                    background-color: fade(@tohLightText, 80%);
                }

                .item-badge{
                    color: fade(@tohLightText, 80%);
                }
            }
        }
    }
</style>

<script>
import UserMenuItem from '~/components/global/menu/UserMenuItem'

export default {
  name: 'UserWidget',
  props: ['active', 'minified'],
  methods: {
    toggleDropdown() {
        this.$emit('dropdown')
    },
    logout () {
        this.$emit('logout') // emit event to close form
        // Log out the user.
        this.$store.dispatch('auth/logout')
    }
  },
  components: {
      UserMenuItem
  }
}
</script>

