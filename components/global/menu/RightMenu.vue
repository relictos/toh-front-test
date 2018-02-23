<template>
    <div class="right-menu-container">
        <div class="mobile-hidden">
            <button class="ui inverted link basic big button">Sign in</button>
            <button class="ui primary basic big button">Get started</button>
        </div>
        <transition name="slide">
            <div v-if="active" class="main-menu-wrapper active">
                <div class="ui container">
                    <div class="main-menu-nav">
                        <main-menu-item text="Sign in"></main-menu-item>
                        <main-menu-item text="Register" :active="true"></main-menu-item>
                    </div>
                </div>
            
            </div>
        </transition>
        <div class="mobile-only left-menu-toggle-container" :class="{'active': active}">
            <div class="left-menu-toggle" @click="toggleMenu">
                <span class="toggle-icon-wrapper">
                    <i class="icon-inline login toggle-icon"></i> 
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

    export default {
        name: 'RightMenu',
        data() {
            return {
                'active': false
            }
        },
        methods: {
            toggleMenu: function(){
                if(document.body.classList.contains("mobile-modal") && !this.active)
                    return;

                this.active = !this.active;

                if(this.active)
                    document.body.classList.add("mobile-modal")
                else
                    document.body.classList.remove("mobile-modal")
            }
        },
        components: {
            MainMenuItem
        }
    }
</script>