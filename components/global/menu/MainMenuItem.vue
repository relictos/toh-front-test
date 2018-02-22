<template>
    <div class="nav-item" v-bind:class="{'active': active}">
        <div class="nav-item-icon-container">
            <i v-if="icon" class="icon-inline" :class="[icon]"></i>
        </div>
        <div class="nav-item-text">{{text}}</div>
    </div>
</template>

<script>
export default {
    props: ['text', 'icon', 'active']
}
</script>
