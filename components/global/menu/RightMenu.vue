<template>
    <div class="right-menu-container">
        <div class="mobile-hidden">
            <button class="ui inverted link basic big button" :class="{'active': loginActive}" @click="toggleLogin">Sign in</button>
            <button class="ui primary basic big button" :class="{'active': regActive}" @click="toggleReg">Get started</button>
        </div>
        <transition name="slide">
            <div v-if="loginActive" class="main-menu-wrapper active">
                <div class="form-wrapper">
                    <div class="ui container">
                        <div class="ui grid">
                            <div class="left aligned ten wide tablet sixteen wide mobile six wide computer centered column">
                                <div class="ui inverted form mobile-hidden">
                                    <login-form></login-form>
                                </div>
                                <div class="ui form mobile-only">
                                    <login-form></login-form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="regActive" class="main-menu-wrapper active">
                <div class="ui container">
                    yyy
                </div>
            </div>
        </transition>
            
        <div class="mobile-only left-menu-toggle-container mini" :class="{'active': loginActive}">
            <div class="left-menu-toggle" @click="toggleLogin">
                <span class="toggle-icon-wrapper">
                    <i class="icon-inline login toggle-icon"></i> 
                </span>
            </div>
        </div>
        <div class="mobile-only left-menu-toggle-container mini" :class="{'active': regActive}">
            <div class="left-menu-toggle" @click="toggleReg">
                <span class="toggle-icon-wrapper">
                    <i class="icon-inline reg toggle-icon"></i> 
                </span>
            </div>
        </div>
    </div>
    
</template>

<style>
    .right-menu-container{
        float: right;
    }
</style>

<script>
    import MainMenuItem from '~/components/global/menu/MainMenuItem'
    import LoginForm from '~/components/global/forms/Login'

    export default {
        name: 'RightMenu',
        data() {
            return {
                'loginActive': false,
                'regActive': false
            }
        },
        methods: {
            toggleLogin: function(){
                if(document.body.classList.contains("mobile-modal") && !this.loginActive)
                    return;

                this.loginActive = !this.loginActive;

                if(this.loginActive)
                    document.body.classList.add("mobile-modal")
                else
                    document.body.classList.remove("mobile-modal")
            },
            toggleReg: function(){
                if(document.body.classList.contains("mobile-modal") && !this.regActive)
                    return;

                this.regActive = !this.regActive;

                if(this.regActive)
                    document.body.classList.add("mobile-modal")
                else
                    document.body.classList.remove("mobile-modal")
            }
        },
        components: {
            MainMenuItem,
            LoginForm
        }
    }
</script>