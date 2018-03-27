<template>
    <div>
        <transition name="fade" mode="out-in">
            <div class="right-menu-container" v-if="!logged_in" key="login">
                <div class="mobile-hidden">
                    <button class="ui inverted link basic big button" :class="{'active': activeLogin}" @click="toggleLogin">Sign in</button>
                    <button class="ui primary basic big button" :class="{'active': activeReg}" @click="toggleReg">Get started</button>
                </div>
                <transition name="slide">
                    <div v-if="activeLogin" class="main-menu-wrapper active">
                        <div class="form-wrapper">
                            <div class="ui container">
                                <div class="ui grid">
                                    <div class="left aligned ten wide tablet sixteen wide mobile six wide computer centered column">
                                        <div class="ui inverted form mobile-hidden">
                                            <login-form @logged="toggleLogin"></login-form>
                                        </div>
                                        <div class="ui form mobile-only">
                                            <login-form @logged="toggleLogin"></login-form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-if="activeReg" class="main-menu-wrapper active">
                        <div class="ui container form-wrapper">
                            <div class="ui grid">
                                <div class="left aligned ten wide tablet sixteen wide mobile six wide computer centered column">
                                    <div class="ui inverted form mobile-hidden">
                                        <reg-form></reg-form>
                                    </div>
                                    <div class="ui form mobile-only">
                                        <reg-form></reg-form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </transition>
                    
                <div class="mobile-only left-menu-toggle-container mini" :class="{'active': activeLogin}">
                    <div class="left-menu-toggle" @click="toggleLogin">
                        <span class="toggle-icon-wrapper">
                            <i class="icon-inline login toggle-icon"></i> 
                        </span>
                    </div>
                </div>
                <div class="mobile-only left-menu-toggle-container mini" :class="{'active': activeReg}">
                    <div class="left-menu-toggle" @click="toggleReg">
                        <span class="toggle-icon-wrapper">
                            <i class="icon-inline reg toggle-icon"></i> 
                        </span>
                    </div>
                </div>
            </div>
            <div v-else class="right-menu-container" key="authed">
                <user-widget :active="activeLogin" :minified="minified" @dropdown="toggleLogin" @logout="toggleLogin"></user-widget>
            </div>
        </transition>
    </div>
</template>

<style lang="less">
    .right-menu-container{
        float: right;
    }

    .right-menu-container .ui.loading.form:before{
        background: @tohDarkBg;
    }

    @media only screen and (max-width : @largestMobileScreen) {
        .right-menu-container .ui.loading.form:before{
            background: @tohDarkText;
        }
    }
</style>

<script>
    import MainMenuItem from '~/components/global/menu/MainMenuItem'
    import LoginForm from '~/components/global/forms/Login'
    import RegForm from '~/components/global/forms/Register'
    import UserWidget from '~/components/global/menu/UserWidget'
    
    export default {
        name: 'RightMenu',
        props: ['activeLogin','activeReg', 'minified'],
        computed: {
            logged_in() {
                return this.$store.getters['auth/check']
            }
        },
        methods: {
            toggleLogin: function(){
                this.$emit('toggleLogin')
                this.activeLogin = !this.activeLogin;
                this.$emit('update:activeLogin', this.activeLogin)
            },
            toggleReg: function(){
                this.$emit('toggleReg')
                this.activeReg = !this.activeReg;
                this.$emit('update:activeReg', this.activeReg)
            }
        },
        components: {
            MainMenuItem,
            LoginForm,
            RegForm,
            UserWidget
        }
    }
</script>